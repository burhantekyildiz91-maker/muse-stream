#!/usr/bin/env python3
"""Build burhan-tekyildiz-simply.zip without song files."""

from __future__ import annotations

import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "out"
ZIP_PATH = ROOT / "public" / "burhan-tekyildiz-simply.zip"
ARTIFACT = Path("/opt/cursor/artifacts/site_duzeltilmis_simply.zip")
SKIP_DIR_NAMES = {"muzik", "audio", "video"}
SKIP_FILE_NAMES = {
    "burhan-tekyildiz-simply.zip",
    "indir.html",
    "site-paket.b64.txt",
}


def main() -> None:
    if not OUT.exists():
        raise SystemExit("Run npm run build first")

    ZIP_PATH.parent.mkdir(parents=True, exist_ok=True)
    if ZIP_PATH.exists():
        ZIP_PATH.unlink()

    with zipfile.ZipFile(ZIP_PATH, "w", compression=zipfile.ZIP_DEFLATED) as zf:
        for path in OUT.rglob("*"):
            if not path.is_file():
                continue
            rel = path.relative_to(OUT)
            if any(part in SKIP_DIR_NAMES for part in rel.parts):
                continue
            if path.name in SKIP_FILE_NAMES or path.suffix == ".zip":
                continue
            zf.write(path, rel.as_posix())

    ARTIFACT.parent.mkdir(parents=True, exist_ok=True)
    ARTIFACT.write_bytes(ZIP_PATH.read_bytes())
    print(f"Wrote {ZIP_PATH} ({ZIP_PATH.stat().st_size} bytes)")
    print(f"Copied {ARTIFACT}")


if __name__ == "__main__":
    main()
