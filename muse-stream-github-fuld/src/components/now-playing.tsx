"use client"

import { Pause, Play } from "lucide-react"

import { usePlayer } from "@/components/player-provider"

export function NowPlaying() {
  const { current, isPlaying, toggle } = usePlayer()

  if (!current) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[110] border-t border-gold/25 bg-[#120e0a]/95 px-4 py-3 shadow-[0_-12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md md:px-8">
      <div className="mx-auto flex max-w-6xl items-center gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={current.cover}
          alt=""
          className="size-12 rounded-sm object-cover md:size-14"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate font-heading text-lg text-cream">{current.title}</p>
          <p className="truncate text-xs text-cream/45">
            {current.album} · YouTube ·{" "}
            <a href="/#muzik" className="text-gold hover:text-cream">
              Media Player’a dön
            </a>
          </p>
        </div>
        <button
          type="button"
          onClick={() => toggle(current)}
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold text-ink"
          aria-label={isPlaying ? "Duraklat" : "Çal"}
        >
          {isPlaying ? (
            <Pause className="size-4 fill-current" />
          ) : (
            <Play className="size-4 fill-current pl-0.5" />
          )}
        </button>
      </div>
    </div>
  )
}
