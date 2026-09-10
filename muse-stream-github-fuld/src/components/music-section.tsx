import { MediaPlayer } from "@/components/media-player"

export function MusicSection() {
  return (
    <section id="muzik" className="scroll-mt-8 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.32em] text-gold uppercase">Katalog</p>
            <h2 className="mt-3 font-heading text-5xl text-cream md:text-7xl">Müzik</h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm leading-relaxed text-cream/50 md:block">
            «İnsan Var», «Keke» ve «Bu Nasıl Aşk» albümünden kesitler. Birine bas, sahne açılsın.
          </p>
        </div>

        <MediaPlayer />
      </div>
    </section>
  )
}
