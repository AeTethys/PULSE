"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { useEffect } from "react"
import { track404Error } from "@/lib/error-tracking"

export default function NotFoundClient() {
  const searchParams = useSearchParams()
  const referrer = searchParams.get("from") || ""
  const path = typeof window !== "undefined" ? window.location.pathname : ""
  const referrerUrl = typeof window !== "undefined" ? document.referrer : ""

  useEffect(() => {
    // Track the 404 error when component mounts
    track404Error({
      path,
      referrer: referrerUrl,
      searchParams: Object.fromEntries(searchParams.entries()),
    })
  }, [path, referrerUrl, searchParams])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>

        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
          {referrer && <span className="block mt-2">You came from: {referrer}</span>}
        </p>

        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}
