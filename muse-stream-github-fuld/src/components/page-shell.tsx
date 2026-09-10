import type { ReactNode } from "react"

import { NowPlaying } from "@/components/now-playing"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <NowPlaying />
    </div>
  )
}
