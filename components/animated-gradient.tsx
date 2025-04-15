"use client"

import { useEffect, useRef } from "react"

export default function AnimatedGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create gradient points
    const points = [
      { x: canvas.width * 0.1, y: canvas.height * 0.2, radius: 300, color: "rgba(0, 149, 200, 0.05)" },
      { x: canvas.width * 0.8, y: canvas.height * 0.5, radius: 250, color: "rgba(0, 149, 200, 0.07)" },
      { x: canvas.width * 0.5, y: canvas.height * 0.8, radius: 350, color: "rgba(0, 149, 200, 0.03)" },
    ]

    // Animation variables
    let animationFrameId: number
    let angle = 0

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update positions with gentle wave motion
      points.forEach((point, i) => {
        const offsetX = Math.sin(angle + i) * 100
        const offsetY = Math.cos(angle + i * 0.5) * 50

        const gradient = ctx.createRadialGradient(
          point.x + offsetX,
          point.y + offsetY,
          0,
          point.x + offsetX,
          point.y + offsetY,
          point.radius,
        )

        gradient.addColorStop(0, point.color)
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(point.x + offsetX, point.y + offsetY, point.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      angle += 0.002
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ pointerEvents: "none" }} />
}
