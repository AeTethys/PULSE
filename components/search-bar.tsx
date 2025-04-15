"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { MicroscopeIcon as MagnifyingGlass } from "lucide-react"

export function SearchBar({ className }: { className?: string }) {
  const [search, setSearch] = useState("")
  const router = useRouter()
  const searchInputRef = useRef(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    const currentSearch = searchParams.get("q") || ""
    setSearch(currentSearch)
  }, [searchParams])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (search) {
      router.push(`/?q=${search}`)
    } else {
      router.push("/")
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <input
        ref={searchInputRef}
        className="
          h-10
          w-full
          rounded-md
          border
          border-input
          bg-background
          px-3
          py-2
          text-sm
          ring-offset-background
          file:border-0
          file:bg-transparent
          file:text-sm
          file:font-medium
          placeholder:text-muted-foreground
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-ring
          focus-visible:ring-offset-2
          disabled:cursor-not-allowed
          disabled:opacity-50
          pr-10
        "
        placeholder="Search..."
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <MagnifyingGlass className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    </form>
  )
}
