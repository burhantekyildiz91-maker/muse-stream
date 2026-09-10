"use client"

import { FormEvent, useState } from "react"
import { toast } from "sonner"

import { SocialLinks } from "@/components/social-links"
import { Button } from "@/components/ui/button"
import { artist } from "@/lib/catalog"

export function ContactSection() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()

    if (!name || !email || !message) {
      toast.error("Lütfen tüm alanları doldur.")
      return
    }

    const subject = encodeURIComponent(`Burhan Tekyıldız — ${name}`)
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`)
    window.location.href = `mailto:${artist.email}?subject=${subject}&body=${body}`
    setSent(true)
    event.currentTarget.reset()
    toast.success("E-posta uygulaman açıldı.")
  }

  return (
    <section id="iletisim" className="scroll-mt-8 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 border-t border-white/10 pt-16 md:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.32em] text-gold uppercase">Sahne arkası</p>
          <h2 className="mt-3 font-heading text-5xl text-cream md:text-7xl">İletişim</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/60">
            Sahne, kayıt, işbirliği veya sadece bir parça üzerine konuşmak için yaz.
          </p>
          <a
            href={`mailto:${artist.email}`}
            className="mt-8 inline-block break-all font-heading text-2xl text-gold hover:text-cream"
          >
            {artist.email}
          </a>
          <SocialLinks compact className="mt-10" />
        </div>

        {sent ? (
          <div className="flex min-h-64 flex-col justify-center rounded-sm border border-gold/25 bg-gold/5 p-8">
            <p className="font-heading text-3xl text-cream">Teşekkürler.</p>
            <p className="mt-3 text-cream/60">
              Mesajın {artist.email} adresine yönlendirildi.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-8 w-fit border-gold/30 text-cream"
              onClick={() => setSent(false)}
            >
              Yeni mesaj
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <label className="block space-y-2 text-sm text-cream/70">
              İsim
              <input
                name="name"
                required
                autoComplete="name"
                placeholder="Adın"
                className="h-11 w-full rounded-lg border border-white/15 bg-white/5 px-3 text-cream outline-none placeholder:text-cream/30 focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/40"
              />
            </label>
            <label className="block space-y-2 text-sm text-cream/70">
              E-posta
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="sen@ornek.com"
                className="h-11 w-full rounded-lg border border-white/15 bg-white/5 px-3 text-cream outline-none placeholder:text-cream/30 focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/40"
              />
            </label>
            <label className="block space-y-2 text-sm text-cream/70">
              Mesaj
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Ne üzerine konuşalım?"
                className="min-h-32 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-cream outline-none placeholder:text-cream/30 focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/40"
              />
            </label>
            <Button
              type="submit"
              className="h-11 bg-gold px-6 text-ink hover:bg-gold/85"
            >
              Gönder
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
