"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface PulseLogoProps {
  className?: string
  animated?: boolean
  size?: "sm" | "md" | "lg" | "xl"
  color?: "primary" | "white" | "black"
}

export function PulseLogo({ className, animated = true, size = "md", color = "primary" }: PulseLogoProps) {
  const [logoSvg, setLogoSvg] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  }

  const colorClasses = {
    primary: "text-primary",
    white: "text-white",
    black: "text-black",
  }

  const generateLogo = async () => {
    try {
      setIsLoading(true)
      const svg = `<svg width="100%" height="100%" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z"/>
  <path d="M256 96c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160S344.4 96 256 96zm0 303.1c-78.9 0-143.1-64.2-143.1-143.1 0-78.9 64.2-143.1 143.1-143.1 78.9 0 143.1 64.2 143.1 143.1 0 78.9-64.2 143.1-143.1 143.1z"/>
  <path d="M256 144c-61.8 0-112 50.2-112 112s50.2 112 112 112 112-50.2 112-112-50.2-112-112-112zm0 207.3c-52.5 0-95.3-42.8-95.3-95.3S203.5 160.7 256 160.7s95.3 42.8 95.3 95.3-42.8 95.3-95.3 95.3z"/>
  <path d="M256 192c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm0 111.5c-26.1 0-47.5-21.4-47.5-47.5s21.4-47.5 47.5-47.5 47.5 21.4 47.5 47.5-21.4 47.5-47.5 47.5z"/>
  <circle cx="256" cy="256" r="32"/>
</svg>`
      setLogoSvg(svg)
    } catch (err) {
      console.error("Error setting logo:", err)
      setError(err instanceof Error ? err.message : "Failed to set logo")
      setLogoSvg(null)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // Only try to set if we don't already have a logo
    if (!logoSvg && !error) {
      generateLogo()
    }
  }, [logoSvg, error])

  // Fallback logo (text-based)
  const fallbackLogo = (
    <div
      className={cn(
        "font-bold tracking-tighter flex items-center",
        colorClasses[color],
        size === "sm" ? "text-xl" : size === "md" ? "text-2xl" : size === "lg" ? "text-3xl" : "text-4xl",
        className,
      )}
    >
      <span className="relative">
        PULSE
        {animated && <span className="absolute -right-2 top-0 h-2 w-2 rounded-full bg-primary animate-pulse" />}
      </span>
    </div>
  )

  if (isLoading) {
    return (
      <div className={cn("flex items-center justify-center", sizeClasses[size], className)}>
        <div className="animate-pulse rounded-full bg-gray-200 h-full w-full" />
      </div>
    )
  }

  if (error || !logoSvg) {
    return fallbackLogo
  }

  return (
    <div
      className={cn(sizeClasses[size], colorClasses[color], className)}
      dangerouslySetInnerHTML={{ __html: logoSvg }}
    />
  )
}
