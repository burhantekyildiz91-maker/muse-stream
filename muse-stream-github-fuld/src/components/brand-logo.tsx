import { cn } from "@/lib/utils"

type BrandLogoProps = {
  className?: string
  sizes?: string
  preload?: boolean
}

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <span
      className={cn(
        "relative inline-block shrink-0 overflow-hidden rounded-full ring-1 ring-gold/35",
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="Burhan Tekyıldız — Sanatçı, yönetmen, özel projeler"
        className="size-full object-cover"
        width={96}
        height={96}
      />
    </span>
  )
}
