"use client"

import { ExternalLink, Pause, Play, SkipBack, SkipForward } from "lucide-react"
import { useMemo, useState } from "react"

import { usePlayer } from "@/components/player-provider"
import { tracks, type Track } from "@/lib/catalog"
import { youtubeEmbedUrl, youtubeWatchUrl } from "@/lib/youtube"
import { cn } from "@/lib/utils"

export function MediaPlayer() {
  const { play, pause } = usePlayer()
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const track = tracks[index] ?? tracks[0]

  const embedSrc = useMemo(() => {
    if (!track || !playing) return null
    return youtubeEmbedUrl(track.youtubeId, true)
  }, [track, playing])

  function start(next: Track, nextIndex = tracks.findIndex((item) => item.id === next.id)) {
    if (nextIndex < 0) return
    setIndex(nextIndex)
    setPlaying(true)
    play(next)
  }

  function stop() {
    setPlaying(false)
    pause()
  }

  function previous() {
    const nextIndex = (index - 1 + tracks.length) % tracks.length
    const next = tracks[nextIndex]
    if (next) start(next, nextIndex)
  }

  function goNext() {
    const nextIndex = (index + 1) % tracks.length
    const next = tracks[nextIndex]
    if (next) start(next, nextIndex)
  }

  if (!track) return null

  return (
    <div
      id="media-player"
      className="grid overflow-hidden rounded-sm border border-gold/30 bg-[linear-gradient(160deg,rgba(201,166,107,0.12),rgba(12,11,9,0.55))] md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
    >
      <div className="flex flex-col border-b border-white/10 p-5 md:border-r md:border-b-0 md:p-8">
        <p className="text-[11px] tracking-[0.32em] text-gold uppercase">Media Player · YouTube</p>

        <div className="mt-5 overflow-hidden rounded-sm bg-black">
          {embedSrc ? (
            <iframe
              key={embedSrc}
              src={embedSrc}
              title={track.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="aspect-video w-full"
            />
          ) : (
            <button
              type="button"
              onClick={() => start(track, index)}
              className="group relative block aspect-video w-full"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={track.cover} alt="" className="size-full object-cover" />
              <span className="absolute inset-0 bg-black/35" />
              <span className="absolute inset-0 m-auto flex size-14 items-center justify-center rounded-full bg-gold text-ink shadow-[0_0_28px_rgba(201,166,107,0.45)] transition group-hover:scale-110">
                <Play className="size-6 fill-current pl-0.5" />
              </span>
            </button>
          )}
        </div>

        <div className="mt-5 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate font-heading text-3xl text-cream md:text-4xl">{track.title}</p>
            <p className="mt-1 truncate text-sm text-cream/50">
              {track.album} · {track.year} · {track.note}
            </p>
          </div>
          <a
            href={youtubeWatchUrl(track.youtubeId)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-cream hover:border-gold hover:text-gold"
            aria-label="YouTube’da aç"
          >
            <ExternalLink className="size-4" />
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 md:justify-start">
          <button
            type="button"
            onClick={previous}
            className="flex size-11 items-center justify-center rounded-full border border-white/15 text-cream hover:border-gold hover:text-gold"
            aria-label="Önceki parça"
          >
            <SkipBack className="size-4 fill-current" />
          </button>
          <button
            type="button"
            onClick={() => (playing ? stop() : start(track, index))}
            className="flex size-14 items-center justify-center rounded-full bg-gold text-ink shadow-[0_0_28px_rgba(201,166,107,0.4)] hover:bg-gold/85"
            aria-label={playing ? "Duraklat" : "Çal"}
          >
            {playing ? (
              <Pause className="size-6 fill-current" />
            ) : (
              <Play className="size-6 fill-current pl-0.5" />
            )}
          </button>
          <button
            type="button"
            onClick={goNext}
            className="flex size-11 items-center justify-center rounded-full border border-white/15 text-cream hover:border-gold hover:text-gold"
            aria-label="Sonraki parça"
          >
            <SkipForward className="size-4 fill-current" />
          </button>
        </div>
      </div>

      <ul className="max-h-[28rem] space-y-0 overflow-y-auto p-2 md:max-h-none md:p-3">
        {tracks.map((item, itemIndex) => {
          const active = item.id === track.id
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => start(item, itemIndex)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-sm px-3 py-3 text-left text-sm transition hover:bg-white/5",
                  active ? "bg-white/5 text-gold" : "text-cream/80"
                )}
              >
                <span className="w-6 tabular-nums text-cream/35">
                  {String(itemIndex + 1).padStart(2, "0")}
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.cover} alt="" className="size-10 rounded-sm object-cover" />
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-heading text-xl">{item.title}</span>
                  <span className="block truncate text-xs text-cream/40">YouTube</span>
                </span>
                {active && playing ? (
                  <span className="eq" aria-hidden>
                    <span />
                    <span />
                    <span />
                  </span>
                ) : null}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
