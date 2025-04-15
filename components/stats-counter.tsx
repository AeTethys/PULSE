"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

type StatsCounterProps = {
  end: number
  suffix?: string
  label: string
  duration?: number
}

export default function StatsCounter({ end, suffix = "", label, duration = 2000 }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    if (!inView) return

    countRef.current = 0
    const step = Math.max(1, Math.floor(end / (duration / 16)))
    let lastTime = 0

    const animate = (time: number) => {
      if (!lastTime) lastTime = time
      const delta = time - lastTime

      if (delta >= 16) {
        // Aim for 60fps
        countRef.current = Math.min(countRef.current + step, end)
        setCount(Math.floor(countRef.current))
        lastTime = time
      }

      if (countRef.current < end) {
        requestAnimationFrame(animate)
      }
    }

    const frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [inView, end, duration])

  // Format the number with commas
  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold md:text-4xl lg:text-5xl">
        {formattedCount}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-muted-foreground md:text-base">{label}</div>
    </div>
  )
}
