export function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00"
  const whole = Math.floor(seconds)
  const m = Math.floor(whole / 60)
  const s = whole % 60
  return `${m}:${s.toString().padStart(2, "0")}`
}
