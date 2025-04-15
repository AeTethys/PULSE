"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface SmoothScrollSectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function SmoothScrollSection({ children, className, id }: SmoothScrollSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  )
}

// Also export as named export for backward compatibility
export { SmoothScrollSection }
