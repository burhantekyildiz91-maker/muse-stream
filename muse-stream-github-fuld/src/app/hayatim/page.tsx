import type { Metadata } from "next"
import Link from "next/link"

import { BrandLogo } from "@/components/brand-logo"
import { PageShell } from "@/components/page-shell"
import { artist, lifeChapters } from "@/lib/catalog"

export const metadata: Metadata = {
  title: "Hayatım",
  description:
    "Kulu’dan Danimarka’ya, ev stüdyosundan İnsan Var ve Keke’ye: Burhan Tekyıldız’ın hikâyesi. Bu Nasıl Aşk albümü yılbaşında.",
}

export default function HayatimPage() {
  return (
    <PageShell>
      <article className="relative isolate overflow-hidden px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,166,107,0.18),transparent_62%)] blur-2xl" />
        </div>

        <div className="mx-auto max-w-3xl">
          <BrandLogo className="size-28 md:size-36" sizes="144px" />
          <p className="mt-8 text-xs tracking-[0.32em] text-gold uppercase">
            {artist.fullName}
          </p>
          <h1 className="mt-4 font-heading text-6xl leading-none text-cream md:text-8xl">
            Hayatım
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/70 md:text-xl">
            Konya’nın Kulu ilçesinden Danimarka sahnesine. Ev stüdyosundan
            yönetmen koltuğuna, «İnsan Var»dan «Bu Nasıl Aşk»a uzanan hikâye.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl border-t border-white/10">
          {lifeChapters.map((chapter) => (
            <section
              key={chapter.title}
              className="grid gap-3 border-b border-white/10 py-10 md:grid-cols-[8rem_1fr] md:gap-10"
            >
              <p className="text-xs tracking-[0.28em] text-gold uppercase">
                {chapter.year}
              </p>
              <div>
                <h2 className="font-heading text-3xl text-cream md:text-4xl">
                  {chapter.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-cream/70 md:text-lg">
                  {chapter.body}
                </p>
              </div>
            </section>
          ))}
        </div>

        <figure className="mx-auto mt-16 max-w-3xl border border-gold/25 bg-gold/5 px-6 py-10 md:px-12 md:py-14">
          <blockquote className="font-heading text-3xl leading-tight text-cream md:text-5xl">
            “{artist.quote}”
          </blockquote>
          <figcaption className="mt-6 text-xs tracking-[0.22em] text-gold uppercase">
            Halkına sözü · {artist.fullName}
          </figcaption>
        </figure>

        <p className="mx-auto mt-12 max-w-3xl text-sm text-cream/45">
          <Link href="/#muzik" className="text-gold hover:text-cream">
            Müzik
          </Link>
          {" · "}
          <Link href="/#video" className="text-gold hover:text-cream">
            Video
          </Link>
          {" · "}
          <Link href="/#resimler" className="text-gold hover:text-cream">
            Resimler
          </Link>
          {" · "}
          <Link href="/#iletisim" className="text-gold hover:text-cream">
            İletişim
          </Link>
        </p>
      </article>
    </PageShell>
  )
}
