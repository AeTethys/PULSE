"use client"

import { Suspense, type ReactNode } from "react"
import { useSearchParams } from "next/navigation"

interface SearchClientWrapperProps {
  children: (searchParams: URLSearchParams) => ReactNode
}

function SearchParamsComponent({ children }: SearchClientWrapperProps) {
  const searchParams = useSearchParams()
  return <>{children(searchParams)}</>
}

export function SearchClientWrapper({ children }: SearchClientWrapperProps) {
  return (
    <Suspense fallback={<SearchLoadingFallback />}>
      <SearchParamsComponent>{children}</SearchParamsComponent>
    </Suspense>
  )
}

function SearchLoadingFallback() {
  return (
    <div className="space-y-4">
      <div className="h-8 w-64 bg-gray-200 animate-pulse rounded-md"></div>
      <div className="h-4 w-full max-w-md bg-gray-200 animate-pulse rounded-md"></div>
    </div>
  )
}
