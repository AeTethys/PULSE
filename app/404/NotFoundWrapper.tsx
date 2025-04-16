import { headers } from "next/headers"
import NotFoundContent from "./NotFoundContent"
import { Suspense } from "react"

export default function NotFoundWrapper() {
  const headersList = headers()
  const from = headersList.get("from")

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <NotFoundContent from={from || ""} />
    </Suspense>
  )
}
