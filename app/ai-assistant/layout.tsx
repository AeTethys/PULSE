import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Assistant - PULSE Education",
  description:
    "Discover how the PULSE AI Assistant empowers learners through guided assistance, critical thinking, and personalized support.",
}

export default function AIAssistantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
