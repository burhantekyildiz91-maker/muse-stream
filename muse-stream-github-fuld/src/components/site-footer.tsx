import { BrandLogo } from "@/components/brand-logo"
import { SocialLinks } from "@/components/social-links"

export function SiteFooter() {
  return (
    <footer className="px-5 pb-28 pt-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 border-t border-white/10 pt-8 text-xs tracking-[0.18em] text-cream/40 uppercase md:flex-row md:items-center md:justify-between">
        <span className="flex items-center gap-3 normal-case tracking-normal">
          <BrandLogo className="size-9" sizes="36px" />
          <span className="tracking-[0.18em] uppercase">Burhan Tekyıldız</span>
        </span>
        <SocialLinks compact />
        <p>Sanatçı · Yönetmen · {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
