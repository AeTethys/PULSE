"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Something went wrong</h2>
      <p className="text-xl text-gray-600 max-w-md mb-8">
        We apologize for the inconvenience. Our team has been notified of this issue.
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
      >
        Try again
      </button>
    </div>
  )
}
