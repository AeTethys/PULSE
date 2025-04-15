"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Only scroll to top when the pathname changes
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])

  return null
}
