import { PageShell } from "@/components/page-shell"
import { AlbumDrop } from "@/components/album-drop"
import { ContactSection } from "@/components/contact-section"
import { GallerySection } from "@/components/gallery-section"
import { Hero } from "@/components/hero"
import { MusicSection } from "@/components/music-section"
import { StageTicker } from "@/components/stage-ticker"
import { VideoSection } from "@/components/video-section"

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <StageTicker />
      <AlbumDrop />
      <MusicSection />
      <VideoSection />
      <GallerySection />
      <ContactSection />
    </PageShell>
  )
}
