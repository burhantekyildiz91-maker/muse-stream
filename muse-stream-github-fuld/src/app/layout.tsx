import type { Metadata } from "next"
import { Cormorant_Garamond, Geist_Mono, Outfit } from "next/font/google"

import { PlayerProvider } from "@/components/player-provider"
import { Toaster } from "@/components/ui/sonner"

import "./globals.css"

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
})

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Burhan Tekyıldız",
    template: "%s — Burhan Tekyıldız",
  },
  description:
    "Burhan Tekyıldız’ın sanatçı sayfası. İnsan Var, Keke, Bu Nasıl Aşk. Kulu’dan Danimarka’ya.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`dark ${outfit.variable} ${cormorant.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <PlayerProvider>
          {children}
          <Toaster />
        </PlayerProvider>
      </body>
    </html>
  )
}
