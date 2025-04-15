import { Suspense } from "react"
import NotFoundContent from "./NotFoundContent"

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Suspense fallback={<p className="text-gray-500 text-lg">Loading...</p>}>
        <NotFoundContent />
      </Suspense>
    </div>
  )
}
