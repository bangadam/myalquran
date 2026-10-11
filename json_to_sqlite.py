#!/usr/bin/env python3
"""Simpan seluruh JSON di data/ ke SQLite tanpa mengubah isi dokumen."""

import argparse
from contextlib import ExitStack, closing
from pathlib import Path
import sqlite3
import tempfile

ROOT = Path(__file__).resolve().parent


def convert(source, output):
    source, output = source.resolve(), output.resolve()
    if not source.is_dir():
        raise ValueError(f"Folder sumber tidak ditemukan: {source}")
    files = sorted(source.rglob("*.json"))
    if not files:
        raise ValueError(f"Tidak ada file JSON di {source}")
    if output.suffix.lower() == ".json":
        raise ValueError("Output SQLite tidak boleh menimpa file JSON")

    output.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix=".quran-", dir=output.parent) as temporary, ExitStack() as stack:
        database = Path(temporary) / "quran.sqlite"
        existing = None
        if output.exists():
            existing = stack.enter_context(closing(sqlite3.connect(output.as_uri() + "?mode=ro", uri=True)))
            objects = existing.execute("SELECT type, name FROM sqlite_master WHERE name NOT LIKE 'sqlite_%' AND type IN ('table', 'view', 'trigger', 'index')").fetchall()
            columns = existing.execute("PRAGMA table_info(json_files)").fetchall()
            if objects != [("table", "json_files")] or [(row[1], row[2], row[5]) for row in columns] != [("path", "TEXT", 1), ("content", "TEXT", 0)]:
                raise ValueError("Output bukan database json_files yang kompatibel; file lama tidak diubah")
            if existing.execute("PRAGMA quick_check").fetchall() != [("ok",)]:
                raise ValueError("Database tujuan rusak; file lama tidak diubah")
        with closing(sqlite3.connect(database)) as connection, connection:
            # ponytail: dokumen utuh; normalisasi tabel saat aplikasi butuh skema khusus.
            connection.execute(
                "CREATE TABLE json_files (path TEXT PRIMARY KEY, "
                "content TEXT NOT NULL CHECK (json_valid(content))) WITHOUT ROWID"
            )
            if existing:
                connection.executemany("INSERT INTO json_files VALUES (?, ?)", existing.execute("SELECT path, content FROM json_files WHERE path GLOB 'locales/*'"))
            for path in files:
                relative = path.relative_to(source).as_posix()
                content = path.read_text(encoding="utf-8")
                try:
                    local = connection.execute("SELECT content FROM json_files WHERE path = ?", (relative,)).fetchone() if relative.startswith("locales/") else None
                    if local:
                        if local[0] != content:
                            raise ValueError(f"Konflik konten SQLite-owned: {relative}; file lama tidak diubah")
                        continue
                    connection.execute("INSERT INTO json_files VALUES (?, ?)", (relative, content))
                except sqlite3.IntegrityError as error:
                    raise ValueError(f"JSON tidak valid: {relative}") from error
            count = connection.execute("SELECT COUNT(*) FROM json_files").fetchone()[0]
        if existing:
            existing.close()
        database.replace(output)
    return count


def selftest():
    with tempfile.TemporaryDirectory() as temporary:
        root = Path(temporary)
        source, output = root / "data", root / "quran.sqlite"
        (source / "nested").mkdir(parents=True)
        documents = {
            "surat.json": '{"nama":"الفاتحة","audio":{"01":"https://example.com/1.mp3"}}',
            "nested/extra.json": '[null, true, 1.5, [], {"teks":"doa"}]',
        }
        for name, content in documents.items():
            (source / name).write_text(content, encoding="utf-8")
        assert convert(source, output) == 2
        with closing(sqlite3.connect(output)) as connection:
            assert dict(connection.execute("SELECT path, content FROM json_files")) == documents
            assert connection.execute("PRAGMA integrity_check").fetchone() == ("ok",)

        local_path = "locales/ja/ui.json"
        local_content = '{"languageName":"日本語"}'
        with closing(sqlite3.connect(output)) as connection, connection:
            connection.execute("INSERT INTO json_files VALUES (?, ?)", (local_path, local_content))
        assert convert(source, output) == 3
        with closing(sqlite3.connect(output)) as connection:
            assert connection.execute("SELECT content FROM json_files WHERE path = ?", (local_path,)).fetchone() == (local_content,), "Konten database-only harus dipertahankan"

        locale_file = source / local_path
        locale_file.parent.mkdir(parents=True)
        locale_file.write_text(local_content, encoding="utf-8")
        assert convert(source, output) == 3, "Locale identik tidak boleh diduplikasi"
        previous = output.read_bytes()
        locale_file.write_text('{"languageName":"Changed"}', encoding="utf-8")
        try:
            convert(source, output)
        except ValueError as error:
            assert local_path in str(error)
        else:
            raise AssertionError("Arsip tidak boleh diam-diam menimpa konten SQLite-owned")
        assert output.read_bytes() == previous
        locale_file.unlink()

        unrelated = root / "unrelated.sqlite"
        with closing(sqlite3.connect(unrelated)) as connection, connection:
            connection.execute("CREATE TABLE user_notes (content TEXT)")
            connection.execute("INSERT INTO user_notes VALUES ('keep me')")
        previous_unrelated = unrelated.read_bytes()
        try:
            convert(source, unrelated)
        except ValueError as error:
            assert "kompatibel" in str(error)
        else:
            raise AssertionError("Database tak terkait tidak boleh ditimpa")
        assert unrelated.read_bytes() == previous_unrelated

        corrupted = root / "corrupted.sqlite"
        corrupted.write_bytes(b"not a SQLite database")
        previous_corrupted = corrupted.read_bytes()
        try:
            convert(source, corrupted)
        except sqlite3.DatabaseError:
            pass
        else:
            raise AssertionError("Database rusak tidak boleh diam-diam diganti")
        assert corrupted.read_bytes() == previous_corrupted

        (source / "surat.json").unlink()
        assert convert(source, output) == 2
        with closing(sqlite3.connect(output)) as connection:
            assert set(dict(connection.execute("SELECT path, content FROM json_files"))) == {"nested/extra.json", local_path}
        previous = output.read_bytes()
        (source / "nested/extra.json").write_text("{invalid", encoding="utf-8")
        try:
            convert(source, output)
        except ValueError as error:
            assert "nested/extra.json" in str(error)
        else:
            raise AssertionError("JSON rusak seharusnya ditolak")
        assert output.read_bytes() == previous, "Database lama harus tetap utuh saat gagal"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source", type=Path, default=ROOT / "data", help="Folder sumber JSON")
    parser.add_argument("--output", type=Path, default=ROOT / "data/quran.sqlite", help="File SQLite tujuan")
    parser.add_argument("--selftest", action="store_true", help="Periksa konversi dan keamanan saat gagal")
    arguments = parser.parse_args()
    try:
        if arguments.selftest:
            selftest()
            print("Self-test OK: Unicode, re-run, locale SQLite dipertahankan, database utuh saat gagal")
        else:
            count = convert(arguments.source, arguments.output)
            print(f"{count} dokumen tersimpan di {arguments.output.resolve()}")
    except (OSError, UnicodeError, ValueError, sqlite3.Error) as error:
        parser.exit(1, f"Gagal: {error}\n")


if __name__ == "__main__":
    main()
