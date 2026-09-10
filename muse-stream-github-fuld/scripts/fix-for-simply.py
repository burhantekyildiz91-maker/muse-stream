#!/usr/bin/env python3
"""Make the Next.js static export safe for Simply.com webhotel.

Simply File Manager and some Apache setups mishandle folders that start
with an underscore, so `/_next` CSS/JS never loads and the page looks broken.
Rename `_next` -> `next` and rewrite every reference.
"""

from __future__ import annotations

import os
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "out"
OLD = OUT / "_next"
NEW = OUT / "next"
SKIP_SUFFIXES = {".png", ".jpg", ".jpeg", ".webp", ".gif", ".woff", ".woff2", ".mp3", ".wav", ".mp4"}


def rewrite_file(path: Path) -> None:
    if path.suffix.lower() in SKIP_SUFFIXES:
        return
    try:
        text = path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return
    if "/_next/" not in text and "/_next\"" not in text and "/_next'" not in text:
        return
    updated = (
        text.replace("/_next/", "/next/")
        .replace('"/_next"', '"/next"')
        .replace("'/_next'", "'/next'")
    )
    if updated != text:
        path.write_text(updated, encoding="utf-8")


def main() -> None:
    if not OUT.exists():
        raise SystemExit(f"Missing export folder: {OUT}")

    if OLD.exists():
        if NEW.exists():
            shutil.rmtree(NEW)
        OLD.rename(NEW)
        print(f"Renamed {OLD.name} -> {NEW.name}")
    elif NEW.exists():
        print("Asset folder already named next/")
    else:
        raise SystemExit("Neither _next nor next found in out/")

    count = 0
    for path in OUT.rglob("*"):
        if path.is_file():
            before = path.read_bytes() if path.suffix.lower() not in SKIP_SUFFIXES else b""
            rewrite_file(path)
            if path.suffix.lower() not in SKIP_SUFFIXES:
                try:
                    after = path.read_bytes()
                except OSError:
                    continue
                if after != before:
                    count += 1
    print(f"Rewrote /_next/ -> /next/ in {count} files")


if __name__ == "__main__":
    main()
