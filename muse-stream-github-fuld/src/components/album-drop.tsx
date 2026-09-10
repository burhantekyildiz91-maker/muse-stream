import Link from "next/link"

import { artist } from "@/lib/catalog"

export function AlbumDrop() {
  return (
    <section className="relative overflow-hidden px-5 py-16 md:px-8 md:py-20">
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/sahne-08.jpg"
          alt=""
          className="size-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs tracking-[0.32em] text-gold uppercase">Yakında</p>
          <h2 className="mt-3 font-heading text-5xl text-cream md:text-7xl">Bu Nasıl Aşk</h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-cream/65 md:text-lg">
            15 şarkılık hikâye. Yılbaşında sahnede. Albümden önce «İnsan Var» ve «Keke» çalıyor.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <p className="font-heading text-2xl text-gold">Yılbaşı 2026</p>
          <Link
            href="/#muzik"
            className="inline-flex h-11 items-center justify-center rounded-full bg-gold px-6 text-sm font-medium text-ink hover:bg-gold/85"
          >
            Katalogu aç
          </Link>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl font-heading text-xl text-cream/50 md:text-2xl">
        “{artist.quote}”
      </p>
    </section>
  )
}
