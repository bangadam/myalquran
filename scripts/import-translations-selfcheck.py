#!/usr/bin/env python3
"""Exercise the local publisher importer with isolated, explicitly synthetic fixtures."""
from contextlib import closing
import json
from pathlib import Path
import runpy
import sqlite3
import tempfile
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
importer = runpy.run_path(str(ROOT / 'scripts/import-translations.py'))

with tempfile.TemporaryDirectory(prefix='myalquran-import-check-') as temporary:
    source = Path(temporary) / 'publisher'
    source.mkdir()
    output = Path(temporary) / 'app.sqlite'
    with closing(sqlite3.connect(ROOT / 'data/quran.sqlite')) as original:
        listing = original.execute("SELECT content FROM json_files WHERE path = 'surat.json'").fetchone()[0]
    with closing(sqlite3.connect(output)) as target, target:
        target.execute('CREATE TABLE json_files(path TEXT PRIMARY KEY, content TEXT NOT NULL CHECK(json_valid(content)))')
        target.executemany('INSERT INTO json_files VALUES (?, ?)', [('surat.json', listing), ('locales/en/ui.json', '{"keep":"unchanged"}')])
    counts = {s['nomor']: s['jumlahAyat'] for s in json.loads(listing)}
    for locale, language, prefix, key in importer['EDITIONS']:
        root = ET.Element('translation_root')
        meta = ET.SubElement(root, 'meta')
        for name, text in {'title': 'TEST edition', 'language': language, 'id': key, 'source': 'https://quranenc.com', 'url': f'https://quranenc.com/en/browse/{key}', 'updated_at': 'TEST date (v1.0.0-xml.1)', 'check_updates': f'https://quranenc.com/check/{key}/v1.0.0-xml.1'}.items():
            ET.SubElement(meta, name).text = text
        sura_list = ET.SubElement(root, 'sura_list')
        rows = []
        for surah, count in counts.items():
            sura = ET.SubElement(sura_list, 'sura', number=str(surah))
            for verse in range(1, count + 1):
                text = f' TEST {locale} {surah}:{verse} '
                notes = '  TEST footnote\n保留 ' if (surah, verse) == (1, 1) else ''
                aya = ET.SubElement(sura, 'aya', number=str(verse))
                ET.SubElement(aya, 'translation').text = text
                ET.SubElement(aya, 'footnotes').text = notes
                rows.append((surah, verse, text, notes))
        ET.ElementTree(root).write(source / f'{prefix}-source.xml', encoding='utf-8')
        (source / f'{prefix}-source.json').write_text(json.dumps({'translations': [{'key': key, 'version': '1.0.0', 'title': 'TEST edition', 'description': 'TEST attribution'}]}))
        with closing(sqlite3.connect(source / f'{key}.sqlite')) as database, database:
            database.execute('CREATE TABLE translations(sura INTEGER, aya INTEGER, translation TEXT, footnotes TEXT)')
            database.executemany('INSERT INTO translations VALUES (?, ?, ?, ?)', rows)
    assert importer['import_editions'](source, output) == 230
    with closing(sqlite3.connect(output)) as database:
        assert database.execute("SELECT content FROM json_files WHERE path = 'locales/en/ui.json'").fetchone()[0] == '{"keep":"unchanged"}'
        first = json.loads(database.execute("SELECT content FROM json_files WHERE path = 'locales/ja/surat/1.json'").fetchone()[0])
        assert first['ayat'][0]['terjemahan'] == ' TEST ja 1:1 '
        assert first['ayat'][0]['catatan'] == '  TEST footnote\n保留 '
        source_info = json.loads(database.execute("SELECT content FROM json_files WHERE path = 'locales/ja/source.json'").fetchone()[0])
        assert source_info['version'] == '1.0.0' and source_info['transcript']['id'] == 'japanese_saeedsato'
        assert 'arti' not in first, 'Importer must not invent chapter meanings'
    before = output.read_bytes()
    japanese_xml = source / 'japanese-source.xml'
    original_xml = japanese_xml.read_bytes()
    root = ET.fromstring(original_xml)
    url = root.find('meta/url')
    assert url is not None
    url.text = 'javascript:alert(1)'
    ET.ElementTree(root).write(japanese_xml, encoding='utf-8')
    try:
        importer['import_editions'](source, output)
    except ValueError as error:
        assert 'Unapproved edition URL' in str(error)
    else:
        raise AssertionError('Unexpected transcript URLs must be rejected before any edition writes')
    assert output.read_bytes() == before, 'Rejected transcript must not modify the app database'
    japanese_xml.write_bytes(original_xml)
    with closing(sqlite3.connect(source / 'chinese_suliman.sqlite')) as database, database:
        database.execute("UPDATE translations SET translation = 'wrong text' WHERE sura = 114 AND aya = 6")
    try:
        importer['import_editions'](source, output)
    except ValueError as error:
        assert 'SQLite/XML content mismatch' in str(error)
    else:
        raise AssertionError('Mismatched publisher exports must be rejected before any edition writes')
    assert output.read_bytes() == before, 'Rejected import must leave the previous database byte-identical'
print('Translation import OK: all verse identities, verbatim text/footnotes, provenance, unrelated content, atomic rejection. Synthetic data never touches the app database.')
