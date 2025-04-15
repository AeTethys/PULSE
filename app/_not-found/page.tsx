import { redirect } from "next/navigation"

// This is a minimal _not-found page that redirects to the Pages Router 404 page
export default function NotFoundPage() {
  redirect("/404")
}
