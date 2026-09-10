"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"

import { tracks, type Track } from "@/lib/catalog"

type PlayerContextValue = {
  current: Track | null
  isPlaying: boolean
  currentTime: number
  duration: number
  play: (track: Track) => void
  toggle: (track?: Track) => void
  pause: () => void
  seek: (time: number) => void
  next: () => void
  previous: () => void
}

const PlayerContext = createContext<PlayerContextValue | null>(null)

/** Kept for shared UI; Media Player now streams from YouTube embeds. */
export function PlayerProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState<Track | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const play = useCallback((track: Track) => {
    setCurrent(track)
    setIsPlaying(true)
  }, [])

  const pause = useCallback(() => {
    setIsPlaying(false)
  }, [])

  const toggle = useCallback(
    (track?: Track) => {
      const next = track ?? current ?? tracks[0]
      if (!next) return
      if (current?.id === next.id && isPlaying) {
        pause()
        return
      }
      play(next)
    },
    [current, isPlaying, pause, play]
  )

  const skip = useCallback(
    (direction: 1 | -1) => {
      const index = tracks.findIndex((item) => item.id === current?.id)
      if (index < 0) {
        play(direction === 1 ? tracks[0] : tracks[tracks.length - 1])
        return
      }
      const nextTrack = tracks[(index + direction + tracks.length) % tracks.length]
      if (nextTrack) play(nextTrack)
    },
    [current, play]
  )

  const value = useMemo(
    () => ({
      current,
      isPlaying,
      currentTime: 0,
      duration: 0,
      play,
      toggle,
      pause,
      seek: () => undefined,
      next: () => skip(1),
      previous: () => skip(-1),
    }),
    [current, isPlaying, play, toggle, pause, skip]
  )

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
}

export function usePlayer() {
  const ctx = useContext(PlayerContext)
  if (!ctx) {
    throw new Error("usePlayer must be used inside PlayerProvider")
  }
  return ctx
}
