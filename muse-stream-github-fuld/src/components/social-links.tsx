import { SocialLogo } from "@/components/social-icons"
import { artist } from "@/lib/catalog"
import { cn } from "@/lib/utils"

type SocialLinksProps = {
  className?: string
  compact?: boolean
}

export function SocialLinks({ className, compact = false }: SocialLinksProps) {
  return (
    <nav aria-label="Sosyal medya" className={cn("normal-case tracking-normal", className)}>
      <ul
        className={cn(
          compact
            ? "flex flex-wrap gap-3"
            : "grid grid-cols-2 gap-3 sm:flex sm:flex-wrap"
        )}
      >
        {artist.socials.map((social) => (
          <li key={social.id} className={compact ? undefined : "sm:flex-1"}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group flex items-center border border-white/15 bg-black/40 text-cream transition hover:border-gold hover:bg-black/55",
                compact
                  ? "size-11 justify-center rounded-full"
                  : "gap-3 rounded-sm px-4 py-3 backdrop-blur-sm"
              )}
              aria-label={`${social.label} — yeni sekmede aç`}
            >
              <SocialLogo
                id={social.id}
                className={compact ? "size-6" : "size-8 shrink-0 md:size-9"}
              />
              {compact ? (
                <span className="sr-only">{social.label}</span>
              ) : (
                <span className="min-w-0">
                  <span className="block text-[10px] tracking-[0.22em] text-cream/45 uppercase">
                    Takip et
                  </span>
                  <span className="block font-heading text-xl leading-none group-hover:text-gold md:text-2xl">
                    {social.label}
                  </span>
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
