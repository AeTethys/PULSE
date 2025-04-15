"use client"

import { motion } from "framer-motion"

export function TypingAnimation() {
  return (
    <div className="flex items-center gap-1 px-2">
      {[0, 1, 2].map((dot) => (
        <motion.div
          key={dot}
          className="h-2 w-2 rounded-full bg-primary"
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.2,
            repeat: Number.POSITIVE_INFINITY,
            delay: dot * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
