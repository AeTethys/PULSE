"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (email && email.includes("@")) {
        setStatus("success")
        toast({
          title: "Subscription successful!",
          description: "Check your email for a confirmation.",
        })
      } else {
        setStatus("error")
        toast({
          title: "Error",
          description: "Please enter a valid email address.",
          variant: "destructive",
        })
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
      <div className="relative flex-1">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pr-10"
          disabled={status === "success" || isLoading}
        />
        {status === "success" && <CheckCircle2 className="absolute right-3 top-2.5 h-5 w-5 text-green-500" />}
        {status === "error" && <AlertCircle className="absolute right-3 top-2.5 h-5 w-5 text-red-500" />}
      </div>
      <Button type="submit" disabled={status === "success" || isLoading || !email} className="min-w-24">
        {isLoading ? "Subscribing..." : status === "success" ? "Subscribed!" : "Subscribe"}
      </Button>
    </form>
  )
}
