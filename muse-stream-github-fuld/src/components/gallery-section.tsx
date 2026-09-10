"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

import { photos } from "@/lib/catalog"

export function GallerySection() {
  const [index, setIndex] = useState<number | null>(null)
  const ignoreClose = useRef(false)
  const active = index === null ? null : photos[index]

  useEffect(() => {
    if (index === null) return
    ignoreClose.current = true
    const allow = window.setTimeout(() => {
      ignoreClose.current = false
    }, 250)

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setIndex(null)
      if (event.key === "ArrowRight") {
        setIndex((current) => (current === null ? current : (current + 1) % photos.length))
      }
      if (event.key === "ArrowLeft") {
        setIndex((current) =>
          current === null ? current : (current - 1 + photos.length) % photos.length
        )
      }
    }

    window.addEventListener("keydown", onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.clearTimeout(allow)
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = previous
    }
  }, [index])

  function close() {
    if (ignoreClose.current) return
    setIndex(null)
  }

  return (
    <section id="resimler" className="scroll-mt-8 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs tracking-[0.32em] text-gold uppercase">Sahne</p>
            <h2 className="mt-3 font-heading text-5xl text-cream md:text-7xl">Resimler</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-cream/50 md:text-right">
            Orkestra, avize, smokin. Bir kareye bas, büyüsün.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {photos.map((photo, photoIndex) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setIndex(photoIndex)}
              className="group relative z-0 block aspect-[3/4] cursor-pointer overflow-hidden rounded-sm bg-white/5 text-left"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="pointer-events-none absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-3">
                <span className="font-heading text-lg text-cream md:text-xl">{photo.title}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {typeof document !== "undefined" && active
        ? createPortal(
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              <button
                type="button"
                className="absolute inset-0 bg-black/85"
                aria-label="Galeriyi kapat"
                onClick={close}
              />
              <button
                type="button"
                className="absolute left-3 z-10 inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-cream md:left-8"
                aria-label="Önceki fotoğraf"
                onClick={() =>
                  setIndex((current) =>
                    current === null ? 0 : (current - 1 + photos.length) % photos.length
                  )
                }
              >
                <ChevronLeft className="size-5" />
              </button>
              <figure className="relative z-10 max-h-[88vh] w-full max-w-3xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={active.src}
                  alt={active.alt}
                  className="mx-auto max-h-[80vh] w-auto rounded-sm object-contain"
                />
                <figcaption className="mt-4 text-center font-heading text-2xl text-cream">
                  {active.title}
                </figcaption>
              </figure>
              <button
                type="button"
                className="absolute right-3 z-10 inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-cream md:right-8"
                aria-label="Sonraki fotoğraf"
                onClick={() =>
                  setIndex((current) => (current === null ? 0 : (current + 1) % photos.length))
                }
              >
                <ChevronRight className="size-5" />
              </button>
              <button
                type="button"
                className="absolute top-4 right-4 z-10 inline-flex size-10 items-center justify-center rounded-full bg-black/50 text-cream"
                aria-label="Kapat"
                onClick={close}
              >
                <X className="size-4" />
              </button>
            </div>,
            document.body
          )
        : null}
    </section>
  )
}
