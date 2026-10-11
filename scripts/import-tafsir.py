#!/usr/bin/env python3
"""Import downloaded EN/JA/ZH Al-Mukhtasar editions; no network access."""
import argparse
from contextlib import closing
from datetime import datetime, timezone
import hashlib
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import runpy
import sqlite3

ROOT = Path(__file__).resolve().parent.parent
REVISION = 'dbbfa77518a724a10e72d8d7fd48d2d36a50fa9e'
CENTER_HASH = '10e61f615ab5e6a3440e8ecc8ba1dc2273d12cd9048752760fe53a44d191cc27'
TERMS = runpy.run_path(str(ROOT / 'scripts/import-translations.py'))['TERMS']


class EditionIndex(HTMLParser):
    """Read version, title, issuer and URL from the publisher's edition cards."""
    def __init__(self):
        super().__init__()
        self.depth = 0
        self.card = None
        self.cards = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'div':
            if 'tab_card' in attrs.get('class', '').split() and not self.depth:
                self.card = {'text': [], 'urls': []}
                self.depth = 1
            elif self.depth:
                self.depth += 1
        if self.card is not None and tag == 'a' and attrs.get('href', '').startswith('https://quranenc.com/en/browse/'):
            self.card['urls'].append(attrs['href'])

    def handle_endtag(self, tag):
        if tag == 'div' and self.depth:
            self.depth -= 1
            if not self.depth:
                self.cards.append(self.card)
                self.card = None

    def handle_data(self, data):
        if self.card is not None and data.strip():
            self.card['text'].append(data.strip())


def read_json(path):
    return json.loads(path.read_text(encoding='utf-8'))


def sha256(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def prepare(source_dir, listing):
    counts = {s['nomor']: s['jumlahAyat'] for s in listing}
    if sorted(counts) != list(range(1, 115)) or len(listing) != 114 or sum(counts.values()) != 6236:
        raise ValueError('Invalid canonical surat directory')
    expected = [f'{s}:{a}' for s in range(1, 115) for a in range(1, counts[s] + 1)]
    documents = {}
    imported_at = datetime.now(timezone.utc).isoformat()

    def add_edition(locale, rows, source, text_format='text'):
        if list(rows) != expected:
            raise ValueError(f'Incomplete, duplicate or unordered tafsir identities: {locale}')
        for text in rows.values():
            if not isinstance(text, str) or not text.strip():
                raise ValueError(f'Empty tafsir text: {locale}')
            if text_format == 'paragraph-html' and ('<' in re.sub(r'</?p>', '', text) or '>' in re.sub(r'</?p>', '', text)):
                raise ValueError('Unexpected English tafsir markup')
        for s, count in counts.items():
            documents[f'locales/{locale}/tafsir/{s}.json'] = {
                'nomor': s, 'format': text_format,
                'tafsir': [{'ayat': a, 'teks': rows[f'{s}:{a}']} for a in range(1, count + 1)],
            }
        documents[f'locales/{locale}/tafsir-source.json'] = {**source, 'importedAt': imported_at}

    index_path = source_dir / 'tafsir-official-index.html'
    terms_path = source_dir / 'tafsir-terms.html'
    # The terms are ordinary text outside the cards; strip only HTML presentation.
    terms_text = re.sub(r'<[^>]*>', '', terms_path.read_text(encoding='utf-8'))
    if any(term not in terms_text for term in TERMS):
        raise ValueError('QuranEnc republication terms missing from retained source')
    index = EditionIndex()
    index.feed(index_path.read_text(encoding='utf-8'))
    for locale, key in (('ja', 'japanese_mokhtasar'), ('zh-Hans', 'chinese_mokhtasar')):
        url = f'https://quranenc.com/en/browse/{key}'
        cards = [card for card in index.cards if url in card['urls']]
        if len(cards) != 1:
            raise ValueError(f'Official tafsir edition metadata missing: {key}')
        transcript = cards[0]['text']
        release = re.fullmatch(r'(\d{2}/\d{2}/\d{4}) - V([\d.]+)', transcript[0])
        if not release or len(transcript) < 3 or transcript[2] != 'Issued by Tafsir Center for Quranic Studies':
            raise ValueError(f'Invalid official tafsir transcript: {key}')
        rows, hashes = {}, {}
        for s in range(1, 115):
            path = source_dir / key / f'{s}.json'
            records = read_json(path)['result']
            if [(int(r['sura']), int(r['aya'])) for r in records] != [(s, a) for a in range(1, counts[s] + 1)]:
                raise ValueError(f'Invalid official verse identities: {key}/{s}')
            if any(r.get('footnotes') not in ('', None) for r in records):
                raise ValueError(f'Unrepresented tafsir footnotes: {key}/{s}')
            for r in records:
                rows[f"{s}:{int(r['aya'])}"] = r['translation']
            hashes[str(s)] = sha256(path)
        add_edition(locale, rows, {
            'publisher': 'Tafsir Center for Quranic Studies · QuranEnc.com',
            'title': transcript[1], 'description': transcript[2], 'version': release[2],
            'url': url, 'termsUrl': 'https://quranenc.com/en/home/api/',
            'sourceUpdatedAt': release[1], 'transcript': transcript, 'terms': TERMS,
            'sha256': {'index': sha256(index_path), 'terms': sha256(terms_path), 'surahs': hashes},
        })

    center_path = source_dir / 'tafsir-center.db'
    license_path = source_dir / 'tafsir-center-license.md'
    if sha256(center_path) != CENTER_HASH or 'license: cc-by-4.0' not in license_path.read_text(encoding='utf-8'):
        raise ValueError('Unverified licensed Tafsir Center source')
    with closing(sqlite3.connect(center_path.resolve().as_uri() + '?mode=ro', uri=True)) as center:
        licensed = center.execute('SELECT surahNo, ayahNo, Mukhtasaren FROM QuranTafseer ORDER BY surahNo, ayahNo').fetchall()
    if [f'{s}:{a}' for s, a, _ in licensed] != expected:
        raise ValueError('Invalid licensed English tafsir identities')
    response_path = source_dir / 'english-tafsir.json'
    metadata_path = source_dir / 'qul-tafsir-index.json'
    edition = next(r for r in read_json(metadata_path)['tafsirs'] if r['id'] == 171)
    if edition['slug'] != 'en-mukhtasar' or edition['language_name'] != 'english':
        raise ValueError('Wrong English tafsir edition')
    rows = {}
    for record in read_json(response_path)['tafsirs']:
        if record['resource_id'] != 171 or record['language_name'] != 'english' or not record['verses']:
            raise ValueError('Wrong English tafsir response identity')
        for key in record['verses']:
            if key in rows:
                raise ValueError(f'Duplicate English tafsir verse: {key}')
            rows[key] = record['text']
    if set(rows) != set(expected):
        raise ValueError('Incomplete English tafsir coverage')
    # QUL groups may list later keys before the next record; order canonical keys explicitly.
    rows = {key: rows[key] for key in expected}
    differences = [f'{s}:{a}' for s, a, text in licensed if text != re.sub(r'</?p>', '', rows[f'{s}:{a}'])]
    add_edition('en', rows, {
        'publisher': 'Tafsir Center for Quranic Studies · Quranic Universal Library',
        'title': edition['name'],
        'description': 'Al-Mukhtasar, English edition. © Tafsir Center for Quranic Studies (https://tafsir.net), CC BY 4.0. Current QUL text preserves source corrections and declared verse groups; only paragraph markup is converted to line breaks for display. No translation or commentary is generated.',
        'version': f"QUL-171-{sha256(response_path)[:16]}",
        'url': 'https://qul.tarteel.ai/resources/tafsir/266',
        'termsUrl': 'https://creativecommons.org/licenses/by/4.0/',
        'sourceUpdatedAt': datetime.fromtimestamp(edition['updated_at'], timezone.utc).isoformat(),
        'catalogue': edition, 'licensedSourceRevision': REVISION,
        'licensedSourceUrl': f'https://huggingface.co/datasets/tafsircenter/tafsir-mcp-data/tree/{REVISION}',
        'licensedSourceDifferences': differences,
        'sha256': {'response': sha256(response_path), 'catalogue': sha256(metadata_path), 'licensedSQLite': CENTER_HASH, 'license': sha256(license_path)},
    }, 'paragraph-html')
    return documents


def import_editions(source_dir, output):
    if not output.is_file():
        raise ValueError('Existing app SQLite required')
    with closing(sqlite3.connect(output.resolve().as_uri() + '?mode=ro', uri=True)) as current:
        listing = json.loads(current.execute("SELECT content FROM json_files WHERE path = 'surat.json'").fetchone()[0])
    documents = prepare(source_dir, listing)
    # All editions are checked before any write; SQLite commits all three together.
    with closing(sqlite3.connect(output)) as target, target:
        for path, content in documents.items():
            target.execute('INSERT INTO json_files(path, content) VALUES (?, ?) ON CONFLICT(path) DO UPDATE SET content = excluded.content', (path, json.dumps(content, ensure_ascii=False)))
    return len(documents)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source-dir', type=Path, required=True)
    parser.add_argument('--output', type=Path, default=ROOT / 'data/quran.sqlite')
    args = parser.parse_args()
    try:
        count = import_editions(args.source_dir, args.output)
    except (OSError, sqlite3.Error, ValueError, KeyError, TypeError, StopIteration) as error:
        parser.exit(1, f'Tafsir import rejected; no content published: {error}\n')
    print(f'Imported {count} documents: 3 × 114 tafsir, 3 × 6,236 verse keys, source text and edition credits preserved.')


if __name__ == '__main__':
    main()
