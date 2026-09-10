import { Play } from "lucide-react"

import { SocialLogo } from "@/components/social-icons"
import { artist, videos, type VideoClip } from "@/lib/catalog"
import { youtubePosterUrl, youtubeWatchUrl } from "@/lib/youtube"
import { cn } from "@/lib/utils"

const youtubeChannel = artist.socials.find((social) => social.id === "youtube")

export function VideoSection() {
  const featured = videos[0]
  const rest = videos.slice(1)

  if (!featured) return null

  return (
    <section id="video" className="scroll-mt-8 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs tracking-[0.32em] text-gold uppercase">YouTube</p>
            <h2 className="mt-3 font-heading text-5xl text-cream md:text-7xl">Video</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-cream/50 md:text-right">
            Klipler YouTube’dan. Birine bas, yeni sekmede açılsın.
          </p>
        </div>

        <VideoCard clip={featured} featured />

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((clip) => (
            <VideoCard key={clip.id} clip={clip} />
          ))}
        </div>

        {youtubeChannel ? (
          <a
            href={youtubeChannel.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 text-cream/70 transition hover:text-gold"
          >
            <SocialLogo id="youtube" className="size-7" />
            <span className="font-heading text-xl">Tüm klipler YouTube’da</span>
          </a>
        ) : null}
      </div>
    </section>
  )
}

function VideoCard({ clip, featured = false }: { clip: VideoClip; featured?: boolean }) {
  return (
    <article>
      <a
        href={youtubeWatchUrl(clip.youtubeId)}
        target="_blank"
        rel="noopener noreferrer"
        className="group block w-full text-left"
      >
        <span
          className={cn(
            "relative block overflow-hidden rounded-sm bg-white/5",
            featured ? "aspect-video md:aspect-[16/7.2]" : "aspect-video"
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={youtubePosterUrl(clip.youtubeId)}
            alt={`${clip.title} klibi`}
            className="size-full object-cover transition duration-700 group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-gold text-ink shadow-[0_0_28px_rgba(201,166,107,0.45)] transition group-hover:scale-110 md:size-14">
              <Play className="size-5 fill-current pl-0.5 md:size-6" />
            </span>
          </span>
          {featured ? (
            <span className="absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-black/80 to-transparent px-6 pb-6 pt-16 md:block">
              <span className="text-[11px] tracking-[0.28em] text-gold uppercase">Klip</span>
              <span className="mt-1 block font-heading text-4xl leading-none text-cream lg:text-5xl">
                {clip.title}
              </span>
            </span>
          ) : null}
        </span>
        <span className={cn("mt-4 block font-heading text-cream", featured ? "text-3xl md:hidden" : "text-2xl")}>
          {clip.title}
        </span>
      </a>
    </article>
  )
}
