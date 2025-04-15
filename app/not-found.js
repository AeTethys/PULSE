export const dynamic = "error"

export default function NotFound() {
  throw new Error("This page should not be rendered")
}
