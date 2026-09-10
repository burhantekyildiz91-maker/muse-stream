import type { SocialId } from "@/lib/catalog"
import { cn } from "@/lib/utils"

function YouTubeLogo() {
  return (
    <svg viewBox="0 0 24 24" className="size-full" aria-hidden>
      <path
        fill="#FF0000"
        d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.54 3.6 12 3.6 12 3.6s-7.54 0-9.38.46A3.02 3.02 0 0 0 .5 6.2 31.8 31.8 0 0 0 0 12a31.8 31.8 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14C4.46 20.4 12 20.4 12 20.4s7.54 0 9.38-.46a3.02 3.02 0 0 0 2.12-2.14A31.8 31.8 0 0 0 24 12a31.8 31.8 0 0 0-.5-5.8Z"
      />
      <path fill="#fff" d="M9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
    </svg>
  )
}

function InstagramLogo() {
  return (
    <span className="grid size-full overflow-hidden rounded-[22%] bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]">
      <svg viewBox="0 0 24 24" className="size-full" aria-hidden>
        <rect
          x="6.4"
          y="6.4"
          width="11.2"
          height="11.2"
          rx="3.2"
          fill="none"
          stroke="#fff"
          strokeWidth="1.7"
        />
        <circle cx="12" cy="12" r="3.3" fill="none" stroke="#fff" strokeWidth="1.7" />
        <circle cx="16.7" cy="7.4" r="0.9" fill="#fff" />
      </svg>
    </span>
  )
}

function TikTokLogo() {
  return (
    <svg viewBox="0 0 24 24" className="size-full" aria-hidden>
      <rect width="24" height="24" rx="6" fill="#111" />
      <path
        fill="#25F4EE"
        d="M16.6 7.55A4.6 4.6 0 0 0 14.9 4h-2.2v11.05a2.35 2.35 0 1 1-2.35-2.35c.12 0 .24 0 .35.02V10.4a4.7 4.7 0 0 0-.35-.02 4.55 4.55 0 1 0 4.55 4.55V10.3a6.8 6.8 0 0 0 3.9 1.23V9.32a4.6 4.6 0 0 1-2.2-1.77Z"
        transform="translate(0.55 0.45)"
      />
      <path
        fill="#FE2C55"
        d="M16.6 7.55A4.6 4.6 0 0 0 14.9 4h-2.2v11.05a2.35 2.35 0 1 1-2.35-2.35c.12 0 .24 0 .35.02V10.4a4.7 4.7 0 0 0-.35-.02 4.55 4.55 0 1 0 4.55 4.55V10.3a6.8 6.8 0 0 0 3.9 1.23V9.32a4.6 4.6 0 0 1-2.2-1.77Z"
        transform="translate(-0.55 -0.35)"
      />
      <path
        fill="#fff"
        d="M16.6 7.55A4.6 4.6 0 0 0 14.9 4h-2.2v11.05a2.35 2.35 0 1 1-2.35-2.35c.12 0 .24 0 .35.02V10.4a4.7 4.7 0 0 0-.35-.02 4.55 4.55 0 1 0 4.55 4.55V10.3a6.8 6.8 0 0 0 3.9 1.23V9.32a4.6 4.6 0 0 1-2.2-1.77Z"
      />
    </svg>
  )
}

function SpotifyLogo() {
  return (
    <svg viewBox="0 0 24 24" className="size-full" aria-hidden>
      <circle cx="12" cy="12" r="12" fill="#1DB954" />
      <path
        fill="#000"
        d="M17.3 16.55a.78.78 0 0 1-1.07.26c-2.93-1.79-6.63-2.2-10.98-1.2a.78.78 0 0 1-.35-1.52c4.73-1.08 8.8-.62 12.04 1.36a.78.78 0 0 1 .36 1.1Zm1.43-3.18a.97.97 0 0 1-1.33.32c-3.36-2.06-8.47-2.66-12.44-1.45a.97.97 0 1 1-.56-1.86c4.54-1.37 10.18-.7 14.04 1.67a.97.97 0 0 1 .29 1.32Zm.12-3.31c-4.03-2.39-10.68-2.61-14.52-1.44a1.16 1.16 0 1 1-.68-2.22c4.43-1.35 11.8-1.09 16.5 1.7a1.16 1.16 0 1 1-1.3 1.96Z"
      />
    </svg>
  )
}

const logos = {
  youtube: YouTubeLogo,
  instagram: InstagramLogo,
  tiktok: TikTokLogo,
  spotify: SpotifyLogo,
}

export function SocialLogo({ id, className }: { id: SocialId; className?: string }) {
  const Icon = logos[id]
  return (
    <span className={cn("inline-flex", className)}>
      <Icon />
    </span>
  )
}
