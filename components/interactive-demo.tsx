"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

// Demo screens to cycle through
const screens = [
  {
    id: "dashboard",
    title: "Student Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: "analytics",
    title: "Performance Analytics",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop",
  },
  {
    id: "lessons",
    title: "Interactive Lessons",
    image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=1170&auto=format&fit=crop",
  },
]

export default function InteractiveDemo() {
  const [activeScreen, setActiveScreen] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  // Auto-cycle through screens unless user is hovering
  useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      setActiveScreen((current) => (current + 1) % screens.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isHovering])

  return (
    <div className="relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={screens[activeScreen].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={screens[activeScreen].image || "/placeholder.svg"}
            alt={screens[activeScreen].title}
            width={900}
            height={600}
            className="rounded-lg shadow-md"
          />
          <div className="absolute bottom-4 left-4 rounded-lg bg-black/70 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            {screens[activeScreen].title}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        {screens.map((screen, index) => (
          <button
            key={screen.id}
            className={`h-2 w-2 rounded-full transition-all ${
              index === activeScreen ? "bg-primary w-4" : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => setActiveScreen(index)}
            aria-label={`View ${screen.title}`}
          />
        ))}
      </div>

      {/* Interactive hotspots */}
      <div className="absolute left-1/4 top-1/3">
        <motion.div
          className="h-6 w-6 rounded-full bg-primary/50 cursor-pointer"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          onClick={() => alert("Student progress tracking feature")}
        >
          <span className="absolute -right-24 top-0 hidden rounded bg-black/80 px-2 py-1 text-xs text-white group-hover:block">
            Progress Tracking
          </span>
        </motion.div>
      </div>

      <div className="absolute right-1/4 bottom-1/3">
        <motion.div
          className="h-6 w-6 rounded-full bg-primary/50 cursor-pointer"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          onClick={() => alert("AI recommendation system")}
        >
          <span className="absolute -left-24 top-0 hidden rounded bg-black/80 px-2 py-1 text-xs text-white group-hover:block">
            AI Recommendations
          </span>
        </motion.div>
      </div>
    </div>
  )
}
