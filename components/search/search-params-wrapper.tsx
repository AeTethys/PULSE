"use client"

import type React from "react"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

interface SearchParamsWrapperProps {
  children: (query: string) => React.ReactNode
}

export function SearchParamsWrapper({ children }: SearchParamsWrapperProps) {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  return <>{children(query)}</>
}

export function SafeSearchParamsWrapper({ children }: SearchParamsWrapperProps) {
  return (
    <Suspense fallback={<SearchLoadingSkeleton />}>
      <SearchParamsWrapper>{children}</SearchParamsWrapper>
    </Suspense>
  )
}

function SearchLoadingSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-8 w-64 bg-gray-200 animate-pulse rounded-md"></div>
      <div className="h-4 w-full max-w-md bg-gray-200 animate-pulse rounded-md"></div>
      <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded-md"></div>
    </div>
  )
}
