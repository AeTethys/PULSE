"use client"

import dynamic from "next/dynamic"

// Dynamically import the client component with no SSR
const NotFoundContent = dynamic(() => import("@/components/not-found-content"), {
  ssr: false,
  loading: () => <p className="text-gray-500 text-lg">Loading...</p>,
})

export default function NotFoundClientWrapper() {
  return <NotFoundContent />
}
