export function youtubeWatchUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}`
}

export function youtubeEmbedUrl(id: string, autoplay = false) {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  })
  if (autoplay) params.set("autoplay", "1")
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`
}

export function youtubePosterUrl(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
}
