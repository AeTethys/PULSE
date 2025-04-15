"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type FloatingElement = {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    // Generate random floating elements
    const newElements: FloatingElement[] = []
    const count = 15 // Number of floating elements

    for (let i = 0; i < count; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100, // Random x position (0-100%)
        y: Math.random() * 100, // Random y position (0-100%)
        size: Math.random() * 10 + 5, // Random size (5-15px)
        duration: Math.random() * 10 + 20, // Random animation duration (20-30s)
        delay: Math.random() * 5, // Random delay (0-5s)
      })
    }

    setElements(newElements)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full bg-primary/10"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
          }}
          animate={{
            y: ["0%", "100%", "0%"],
            x: [`${element.x}%`, `${element.x + 10}%`, `${element.x}%`],
          }}
          transition={{
            duration: element.duration,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            delay: element.delay,
          }}
        />
      ))}
    </div>
  )
}
