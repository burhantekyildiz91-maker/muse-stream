"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { BrandLogo } from "@/components/brand-logo"
import { artist } from "@/lib/catalog"
import { navLinks } from "@/lib/nav"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link
          href="/#ust"
          className="flex items-center gap-3 text-cream"
          aria-label={`${artist.fullName} ana sayfa`}
        >
          <BrandLogo className="size-11 md:size-12" sizes="48px" />
          <span className="hidden font-heading text-base tracking-[0.16em] uppercase sm:inline md:text-lg">
            {artist.fullName}
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-[0.7rem] tracking-[0.16em] text-cream/70 uppercase lg:flex lg:gap-7 lg:text-sm lg:tracking-[0.18em]">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-gold">
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg text-cream hover:bg-white/5 lg:hidden"
          aria-label="Menüyü aç"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu className="size-5" />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-[120] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/70"
            aria-label="Menüyü kapat"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 flex w-[min(20rem,88vw)] flex-col border-l border-white/10 bg-[#120e0a] pt-6 text-cream shadow-2xl">
            <div className="flex items-center justify-between px-5">
              <span className="flex items-center gap-3 font-heading tracking-[0.16em] uppercase">
                <BrandLogo className="size-10" sizes="40px" />
                {artist.fullName}
              </span>
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center rounded-lg hover:bg-white/5"
                aria-label="Menüyü kapat"
                onClick={() => setOpen(false)}
              >
                <X className="size-5" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col gap-5 px-5 pb-10 text-lg tracking-[0.16em] uppercase">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-cream/80 hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  )
}
