#!/usr/bin/env python3
"""Generate demo audio, covers, and video clips for the artist site."""

from __future__ import annotations

import math
import os
import struct
import subprocess
import wave

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC = os.path.join(ROOT, "public")
SR = 44100
FONT = "/usr/share/fonts/truetype/macos/Inter-SemiBold.ttf"


def ensure_dirs() -> None:
    for folder in ("audio", "covers", "video"):
        os.makedirs(os.path.join(PUBLIC, folder), exist_ok=True)


def midi(n: float) -> float:
    return 440.0 * (2 ** ((n - 69) / 12.0))


def clamp(x: float, lo: float = -1.0, hi: float = 1.0) -> float:
    return lo if x < lo else hi if x > hi else x


def env(i: int, n: int, attack: float, release: float) -> float:
    a = max(1, int(attack * SR))
    r = max(1, int(release * SR))
    if i < a:
        return i / a
    if i > n - r:
        return max(0.0, (n - i) / r)
    return 1.0


def render_track(
    path: str,
    seconds: float,
    chords: list[list[float]],
    pulse_hz: float,
    brightness: float,
) -> None:
    n = int(seconds * SR)
    samples = []
    chord_len = n // len(chords)
    for i in range(n):
        t = i / SR
        chord = chords[min(i // chord_len, len(chords) - 1)]
        local_i = i % chord_len
        e = env(local_i, chord_len, 1.6, 2.4)
        pad = 0.0
        for idx, freq in enumerate(chord):
            detune = 1.0 + (0.003 if idx % 2 else -0.002)
            pad += math.sin(2 * math.pi * freq * detune * t) / (idx + 1.4)
        shimmer = math.sin(2 * math.pi * chord[0] * 2 * t) * 0.12 * brightness
        pulse = (0.55 + 0.45 * math.sin(2 * math.pi * pulse_hz * t)) if pulse_hz else 1.0
        noise = ((i * 1103515245 + 12345) & 0x7FFF) / 32768.0 - 0.5
        val = (pad * 0.22 + shimmer) * e * pulse + noise * 0.018
        samples.append(clamp(val * 0.9))

    tmp = path.replace(".mp3", ".wav")
    with wave.open(tmp, "w") as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(SR)
        wav.writeframes(b"".join(struct.pack("<h", int(s * 32767)) for s in samples))

    subprocess.run(
        ["ffmpeg", "-y", "-i", tmp, "-codec:a", "libmp3lame", "-q:a", "4", path],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    os.remove(tmp)


def write_svg(path: str, body: str, w: int = 800, h: int = 800) -> None:
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">
  <defs>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.18"/></feComponentTransfer>
      <feBlend in="SourceGraphic" mode="overlay"/>
    </filter>
  </defs>
  {body}
</svg>
"""
    with open(path, "w", encoding="utf-8") as f:
        f.write(svg)


def make_covers() -> None:
    covers = [
        (
            "gece-lambasi.svg",
            """
            <rect width="800" height="800" fill="#120e0a"/>
            <circle cx="400" cy="430" r="220" fill="#2a1d12"/>
            <circle cx="400" cy="390" r="118" fill="#c9a66b"/>
            <circle cx="400" cy="390" r="54" fill="#f4e6c3"/>
            <rect width="800" height="800" fill="#000" opacity="0.08" filter="url(#grain)"/>
            """,
        ),
        (
            "kayip-teyp.svg",
            """
            <rect width="800" height="800" fill="#0e1214"/>
            <rect x="90" y="210" width="620" height="380" rx="28" fill="#1b2428"/>
            <circle cx="280" cy="400" r="88" fill="#c9a66b"/>
            <circle cx="520" cy="400" r="88" fill="#c9a66b"/>
            <circle cx="280" cy="400" r="28" fill="#0e1214"/>
            <circle cx="520" cy="400" r="28" fill="#0e1214"/>
            <rect x="250" y="248" width="300" height="18" fill="#8a7350"/>
            """,
        ),
        (
            "iskele.svg",
            """
            <rect width="800" height="800" fill="#10151c"/>
            <rect y="470" width="800" height="330" fill="#1c2733"/>
            <polygon points="80,470 220,250 360,470" fill="#c9a66b" opacity="0.9"/>
            <rect x="0" y="468" width="800" height="8" fill="#c9a66b"/>
            <rect x="40" y="520" width="720" height="6" fill="#2d3b4a"/>
            <rect x="40" y="560" width="720" height="6" fill="#2d3b4a"/>
            <rect x="40" y="600" width="720" height="6" fill="#2d3b4a"/>
            """,
        ),
        (
            "son-perde.svg",
            """
            <rect width="800" height="800" fill="#1a0f12"/>
            <rect x="70" y="70" width="90" height="660" fill="#7a1f2b"/>
            <rect x="200" y="70" width="90" height="660" fill="#5c1822"/>
            <rect x="330" y="70" width="90" height="660" fill="#7a1f2b"/>
            <rect x="460" y="70" width="90" height="660" fill="#5c1822"/>
            <rect x="590" y="70" width="140" height="660" fill="#c9a66b"/>
            """,
        ),
        (
            "toz.svg",
            """
            <rect width="800" height="800" fill="#16120c"/>
            <circle cx="260" cy="280" r="160" fill="#3a2c1c"/>
            <circle cx="540" cy="520" r="210" fill="#c9a66b" opacity="0.85"/>
            <circle cx="540" cy="520" r="70" fill="#16120c"/>
            """,
        ),
    ]
    for name, body in covers:
        write_svg(os.path.join(PUBLIC, "covers", name), body)

    posters = [
        (
            "kirmizi-perde.svg",
            1280,
            720,
            """
            <rect width="1280" height="720" fill="#1a0f12"/>
            <rect x="80" y="0" width="70" height="720" fill="#7a1f2b"/>
            <rect x="180" y="0" width="70" height="720" fill="#5c1822"/>
            <rect x="280" y="0" width="70" height="720" fill="#7a1f2b"/>
            <rect x="980" y="0" width="220" height="720" fill="#c9a66b"/>
            """,
        ),
        (
            "sahil-kaydi.svg",
            1280,
            720,
            """
            <rect width="1280" height="720" fill="#10151c"/>
            <rect y="430" width="1280" height="290" fill="#1c2733"/>
            <polygon points="160,430 360,180 560,430" fill="#c9a66b"/>
            <rect y="426" width="1280" height="8" fill="#c9a66b"/>
            """,
        ),
        (
            "son-isik.svg",
            1280,
            720,
            """
            <rect width="1280" height="720" fill="#120e0a"/>
            <circle cx="900" cy="220" r="160" fill="#c9a66b"/>
            <circle cx="900" cy="220" r="70" fill="#f4e6c3"/>
            <rect y="480" width="1280" height="240" fill="#1a1610"/>
            """,
        ),
    ]
    for name, w, h, body in posters:
        write_svg(os.path.join(PUBLIC, "video", name), body, w, h)


def make_audio() -> None:
    a, c, d, e, f, g = midi(57), midi(60), midi(62), midi(64), midi(65), midi(67)
    tracks = [
        (
            "gece-lambasi.mp3",
            [[a, c, e], [a, d, f], [g / 2, c, e], [a, c, e]],
            0.12,
            0.7,
        ),
        (
            "kayip-teyp.mp3",
            [[a * 0.99, c, e * 1.01], [f / 2, a, d], [g / 2, c, e], [a, c, f]],
            0.25,
            0.45,
        ),
        (
            "iskele.mp3",
            [[g / 2, c, e], [a, c, e], [f / 2, a, d], [g / 2, midi(59), d]],
            0.08,
            0.85,
        ),
        (
            "son-perde.mp3",
            [[a, c, e], [g / 2, midi(58), d], [f / 2, a, c], [e / 2, a, c]],
            0.05,
            0.35,
        ),
        (
            "toz.mp3",
            [[a, e, g], [a, d, f], [c, e, g], [a, c, e]],
            1.6,
            0.55,
        ),
    ]
    for name, chords, pulse, bright in tracks:
        render_track(os.path.join(PUBLIC, "audio", name), 24.0, chords, pulse, bright)
        print("audio", name)


def make_videos() -> None:
    clips = [
        ("kirmizi-perde.mp4", "0x1a0f12", "Kırmızı Perde"),
        ("sahil-kaydi.mp4", "0x10151c", "Sahil Kaydı"),
        ("son-isik.mp4", "0x120e0a", "Son Işık"),
    ]
    for name, color, title in clips:
        out = os.path.join(PUBLIC, "video", name)
        vf = (
            f"hue=h=t*12:s=1.1,"
            f"fade=t=in:st=0:d=0.8,fade=t=out:st=7.2:d=0.8,"
            f"drawtext=fontfile={FONT}:text='{title}':fontsize=52:fontcolor=0xF3EAD8:"
            f"x=(w-text_w)/2:y=(h-text_h)/2"
        )
        subprocess.run(
            [
                "ffmpeg",
                "-y",
                "-f",
                "lavfi",
                "-i",
                f"color=c={color}:s=1280x720:d=8:r=24",
                "-vf",
                vf,
                "-c:v",
                "libx264",
                "-pix_fmt",
                "yuv420p",
                "-movflags",
                "+faststart",
                out,
            ],
            check=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        print("video", name)


if __name__ == "__main__":
    ensure_dirs()
    make_covers()
    make_audio()
    make_videos()
    print("done")
