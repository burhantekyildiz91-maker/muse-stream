const items = [
  "İnsan Var",
  "Keke",
  "Bu Nasıl Aşk",
  "Sanatçı",
  "Yönetmen",
  "Özel projeler",
  "Danimarka",
  "Yılbaşı 2026",
]

export function StageTicker() {
  const line = [...items, ...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-gold/20 bg-gold/5 py-3">
      <div className="stage-marquee gap-10 pr-10 text-xs tracking-[0.32em] text-gold uppercase">
        {line.map((item, index) => (
          <span key={`${item}-${index}`} className="inline-flex items-center gap-10 whitespace-nowrap">
            {item}
            <span aria-hidden className="text-cream/30">
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
