#!/usr/bin/env python3
"""Exercise source groups and rejected imports on isolated synthetic editions."""
from contextlib import closing
import hashlib
import json
from pathlib import Path
import runpy
import sqlite3
import tempfile

ROOT = Path(__file__).resolve().parent.parent
importer = runpy.run_path(str(ROOT / 'scripts/import-tafsir.py'))
with tempfile.TemporaryDirectory(prefix='myalquran-tafsir-check-') as directory:
    source = Path(directory)
    output = source / 'app.sqlite'
    with closing(sqlite3.connect((ROOT / 'data/quran.sqlite').as_uri() + '?mode=ro', uri=True)) as original:
        listing_text = original.execute("SELECT content FROM json_files WHERE path = 'surat.json'").fetchone()[0]
    listing = json.loads(listing_text)
    with closing(sqlite3.connect(output)) as target, target:
        target.execute('CREATE TABLE json_files(path TEXT PRIMARY KEY, content TEXT NOT NULL CHECK(json_valid(content)))')
        target.executemany('INSERT INTO json_files VALUES (?, ?)', [('surat.json', listing_text), ('locales/en/ui.json', '{"keep":"unchanged"}')])
    cards = []
    for key in ('japanese_mokhtasar', 'chinese_mokhtasar'):
        cards.append(f'<div class="tab_card"><div>01/10/2020 - V1.0.0</div><h2>TEST {key}</h2><small>Issued by Tafsir Center for Quranic Studies</small><a href="https://quranenc.com/en/browse/{key}">Browse</a></div>')
        (source / key).mkdir()
        for surah in listing:
            n = surah['nomor']
            rows = [{'sura': str(n), 'aya': str(a), 'translation': f' TEST {key} {n}:{a}\n保留 ', 'footnotes': ''} for a in range(1, surah['jumlahAyat'] + 1)]
            (source / key / f'{n}.json').write_text(json.dumps({'result': rows}))
    (source / 'tafsir-official-index.html').write_text(''.join(cards))
    (source / 'tafsir-terms.html').write_text(''.join(f'<p>{term}</p>' for term in importer['TERMS']))
    (source / 'tafsir-center-license.md').write_text('license: cc-by-4.0')
    keys = [f"{s['nomor']}:{a}" for s in listing for a in range(1, s['jumlahAyat'] + 1)]
    records = [{'resource_id': 171, 'language_name': 'english', 'verses': [key], 'text': f' TEST English {key} '} for key in keys]
    # A source-declared group has one text for two ayahs; never use the neighboring row implicitly.
    records[0]['verses'] = ['1:1', '1:2']
    records[0]['text'] = '<p> TEST shared group\n </p><p>Second paragraph.</p>'
    del records[1]
    response = source / 'english-tafsir.json'
    response.write_text(json.dumps({'tafsirs': records}))
    (source / 'qul-tafsir-index.json').write_text(json.dumps({'tafsirs': [{'id': 171, 'slug': 'en-mukhtasar', 'language_name': 'english', 'name': 'TEST English edition', 'updated_at': 1769008364}]}))
    center_path = source / 'tafsir-center.db'
    with closing(sqlite3.connect(center_path)) as center, center:
        center.execute('CREATE TABLE QuranTafseer(surahNo INTEGER, ayahNo INTEGER, Mukhtasaren TEXT)')
        center.executemany('INSERT INTO QuranTafseer VALUES (?, ?, ?)', [(*map(int, key.split(':')), f'TEST licensed {key}') for key in keys])
    # The production importer pins a real publisher hash; substitute only this synthetic fixture's hash.
    importer['prepare'].__globals__['CENTER_HASH'] = hashlib.sha256(center_path.read_bytes()).hexdigest()
    assert importer['import_editions'](source, output) == 345
    with closing(sqlite3.connect(output)) as target:
        first = json.loads(target.execute("SELECT content FROM json_files WHERE path='locales/en/tafsir/1.json'").fetchone()[0])
        assert first['tafsir'][0]['teks'] == first['tafsir'][1]['teks'] == records[0]['text']
        assert first['tafsir'][2]['teks'] == ' TEST English 1:3 '
        assert target.execute("SELECT content FROM json_files WHERE path='locales/en/ui.json'").fetchone()[0] == '{"keep":"unchanged"}'
    before = output.read_bytes()

    def reject(message):
        try:
            importer['import_editions'](source, output)
        except ValueError as error:
            assert message in str(error), str(error)
        else:
            raise AssertionError(f'Expected rejection: {message}')
        assert output.read_bytes() == before, 'Rejected edition must preserve every previously published document'

    records[-1]['verses'].append('1:2')
    response.write_text(json.dumps({'tafsirs': records}))
    reject('Duplicate English tafsir verse')
    records[-1]['verses'].pop()
    records[-1]['text'] = '  '
    response.write_text(json.dumps({'tafsirs': records}))
    reject('Empty tafsir text')
    records[-1]['text'] = '<script>unsafe()</script>'
    response.write_text(json.dumps({'tafsirs': records}))
    reject('Unexpected English tafsir markup')
    records[-1]['text'] = 'TEST English 114:6'
    response.write_text(json.dumps({'tafsirs': records}))
    path = source / 'chinese_mokhtasar/114.json'
    last = json.loads(path.read_text())
    last['result'][-1]['footnotes'] = 'TEST note that cannot be discarded'
    path.write_text(json.dumps(last))
    reject('Unrepresented tafsir footnotes')
print('Tafsir import OK: explicit verse groups, exact source strings, duplicate/blank/unsafe/note rejection, atomic preservation. App database untouched.')
