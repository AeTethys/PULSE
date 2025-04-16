"use client"

import Link from "next/link"

export default function NotFoundContent() {
  return (
    <div className="text-center max-w-lg">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-gray-600 mb-6">Sorry, we couldn't find the page you were looking for.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
      >
        Go to Homepage
      </Link>
    </div>
  )
}
