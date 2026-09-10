import { SocialLinks } from "@/components/social-links"
import { artist, photos } from "@/lib/catalog"

const stagePhoto = photos.find((photo) => photo.title === "Sahne") ?? photos[0]

export function Hero() {
  return (
    <section
      id="ust"
      className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={stagePhoto.src}
          alt={stagePhoto.alt}
          className="hero-photo size-full object-cover object-[center_22%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,11,9,0.35)_0%,rgba(12,11,9,0.2)_35%,rgba(12,11,9,0.72)_72%,#0c0b09_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(12,11,9,0.55)_100%)]" />
        <div className="stage-beams" aria-hidden />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-20">
        <p className="mb-5 text-xs tracking-[0.42em] text-gold uppercase">
          Canlı sahne · {artist.role}
        </p>
        <h1 className="font-heading text-6xl leading-[0.86] tracking-[-0.04em] text-cream drop-shadow-[0_12px_40px_rgba(0,0,0,0.55)] sm:text-8xl lg:text-[7.4rem]">
          <span className="block">Burhan</span>
          <span className="block text-gold">Tekyıldız</span>
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-cream/70 md:text-lg">
          {artist.tagline}
        </p>
        <SocialLinks className="mt-8 max-w-3xl" />
      </div>
    </section>
  )
}
