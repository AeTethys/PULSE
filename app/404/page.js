export const dynamic = "error"

export default function Custom404() {
  throw new Error("This page should not be rendered")
}
