"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // This is where you would normally implement analytics
    // For example: Google Analytics, Fathom, Plausible, etc.
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")

    // Example analytics call (this is just a mock)
    console.log(`📊 Page view: ${url}`)
  }, [pathname, searchParams])

  return null
}
