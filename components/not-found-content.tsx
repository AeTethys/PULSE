"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

export default function NotFoundContent() {
  const searchParams = useSearchParams()
  const referrer = searchParams.get("from") || ""

  useEffect(() => {
    // Log 404 error if needed
    console.log("404 error occurred", { path: window.location.pathname, referrer })
  }, [referrer])

  return (
    <div className="flex flex-col items-center justify-center p-8 max-w-2xl mx-auto text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
      <p className="text-xl text-gray-600 max-w-md mb-8">
        We couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
        >
          Return Home
        </Link>
        <Link
          href="/help"
          className="px-6 py-3 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
        >
          Visit Help Center
        </Link>
      </div>
    </div>
  )
}
