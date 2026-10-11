#!/usr/bin/env python3
"""Import already-downloaded publisher editions into SQLite. No network access."""
import argparse
from contextlib import closing
from datetime import datetime, timezone
import hashlib
import json
from pathlib import Path
import sqlite3
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
EDITIONS = (
    ('ja', 'Japanese', 'japanese', 'japanese_saeedsato'),
    ('zh-Hans', 'Chinese', 'chinese', 'chinese_suliman'),
)
TERMS = [
    'No modification, addition, or deletion of the content.',
    'Clearly referring to the publisher and the source (QuranEnc.com).',
    'Mentioning the version number when re-publishing the translation.',
    'Keeping the transcript information inside the document.',
    'Notifying the source (QuranEnc.com) of any note on the translation.',
    'Updating the translation according to the latest version issued from the source (QuranEnc.com).',
    'Inappropriate advertisements must not be included when displaying translations of the meanings of the Noble Quran.',
]


def prepare(source_dir, listing):
    counts = {entry['nomor']: entry['jumlahAyat'] for entry in listing}
    if sorted(counts) != list(range(1, 115)) or len(listing) != 114 or sum(counts.values()) != 6236:
        raise ValueError('Invalid canonical surat directory')
    documents = {}
    for locale, language, prefix, key in EDITIONS:
        database_file = source_dir / f'{key}.sqlite'
        xml_file = source_dir / f'{prefix}-source.xml'
        catalogue_file = source_dir / f'{prefix}-source.json'
        xml_bytes = xml_file.read_bytes()
        catalogue = json.loads(catalogue_file.read_text(encoding='utf-8'))
        edition = next((entry for entry in catalogue['translations'] if entry['key'] == key), None)
        if not edition or not all(isinstance(edition.get(field), str) and edition[field].strip() for field in ('version', 'title', 'description')):
            raise ValueError(f'Missing edition metadata: {key}')
        root = ET.fromstring(xml_bytes)
        meta_element = root.find('meta')
        if meta_element is None:
            raise ValueError(f'Missing transcript metadata: {key}')
        transcript = {child.tag: child.text or '' for child in meta_element}
        if transcript.get('id') != key or transcript.get('language') != language or transcript.get('source') != 'https://quranenc.com' or f"v{edition['version']}-xml." not in transcript.get('updated_at', ''):
            raise ValueError(f'Edition/version mismatch: {key}')
        if transcript.get('url') != f'https://quranenc.com/en/browse/{key}':
            raise ValueError(f'Unapproved edition URL: {key}')
        xml_rows = []
        for surah in root.findall('sura_list/sura'):
            for verse in surah.findall('aya'):
                xml_rows.append((int(surah.attrib['number']), int(verse.attrib['number']), verse.findtext('translation') or '', verse.findtext('footnotes') or ''))
        with closing(sqlite3.connect(database_file.resolve().as_uri() + '?mode=ro', uri=True)) as source:
            if source.execute('PRAGMA integrity_check').fetchall() != [('ok',)]:
                raise ValueError(f'Invalid publisher SQLite: {key}')
            rows = source.execute('SELECT sura, aya, translation, footnotes FROM translations ORDER BY sura, aya').fetchall()
        if rows != xml_rows:
            raise ValueError(f'Publisher SQLite/XML content mismatch: {key}')
        expected = [(surah, verse) for surah in range(1, 115) for verse in range(1, counts[surah] + 1)]
        if [(row[0], row[1]) for row in rows] != expected:
            raise ValueError(f'Incomplete or duplicate verse identities: {key}')
        if any(not isinstance(row[2], str) or not row[2].strip() or not isinstance(row[3], str) for row in rows):
            raise ValueError(f'Invalid translation/footnote text: {key}')
        by_surah = {surah: [] for surah in counts}
        for surah, verse, translation, footnotes in rows:
            by_surah[surah].append({'nomorAyat': verse, 'terjemahan': translation, 'catatan': footnotes})
        for surah, verses in by_surah.items():
            # No chapter meanings are invented; source text and notes are preserved verbatim.
            documents[f'locales/{locale}/surat/{surah}.json'] = {'nomor': surah, 'ayat': verses}
        documents[f'locales/{locale}/source.json'] = {
            'publisher': 'QuranEnc.com',
            'title': edition['title'],
            'description': edition['description'],
            'version': edition['version'],
            'url': transcript['url'],
            'termsUrl': 'https://quranenc.com/en/home/api/',
            'terms': TERMS,
            'sourceUpdatedAt': transcript['updated_at'],
            'importedAt': datetime.now(timezone.utc).isoformat(),
            'transcript': transcript,
            'catalogue': edition,
            'sha256': {
                'sqlite': hashlib.sha256(database_file.read_bytes()).hexdigest(),
                'xml': hashlib.sha256(xml_bytes).hexdigest(),
                'catalogue': hashlib.sha256(catalogue_file.read_bytes()).hexdigest(),
            },
        }
    return documents


def import_editions(source_dir, output):
    if not output.is_file():
        raise ValueError('Existing app SQLite is required; importer will not create an empty database')
    with closing(sqlite3.connect(output.resolve().as_uri() + '?mode=ro', uri=True)) as existing:
        row = existing.execute("SELECT content FROM json_files WHERE path = 'surat.json'").fetchone()
        if row is None:
            raise ValueError('Canonical surat directory missing from app SQLite')
        listing = json.loads(row[0])
    documents = prepare(source_dir, listing)
    # All source/identity checks finish before the single write transaction starts.
    with closing(sqlite3.connect(output)) as target, target:
        for path, content in documents.items():
            target.execute('INSERT INTO json_files(path, content) VALUES (?, ?) ON CONFLICT(path) DO UPDATE SET content = excluded.content', (path, json.dumps(content, ensure_ascii=False)))
    return len(documents)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source-dir', type=Path, required=True, help='Directory containing downloaded publisher SQLite, XML, and catalogue files')
    parser.add_argument('--output', type=Path, default=ROOT / 'data/quran.sqlite')
    args = parser.parse_args()
    try:
        count = import_editions(args.source_dir, args.output)
    except (OSError, sqlite3.Error, ValueError, KeyError, TypeError, ET.ParseError) as error:
        parser.exit(1, f'Import rejected; no content published: {error}\n')
    print(f'Imported {count} locale documents: 2 × 114 surat, 2 × 6,236 ayat, all footnotes and edition metadata preserved.')


if __name__ == '__main__':
    main()
