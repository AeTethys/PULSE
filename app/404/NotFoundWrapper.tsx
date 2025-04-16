import { headers } from "next/headers"
import NotFoundContent from "./NotFoundContent"

export default function NotFoundWrapper() {
  const headersList = headers()
  const from = headersList.get("from")

  return <NotFoundContent from={from || ""} />
}
