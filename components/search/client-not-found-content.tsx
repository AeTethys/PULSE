"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shell } from "@/components/Shell"

export default function ClientNotFoundContent() {
  const searchParams = useSearchParams()
  const from = searchParams.get("from")

  return (
    <Shell className="grid h-[calc(100vh-80px)] place-items-center">
      <Card className="w-[400px] border-none">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Oops! Page Not Found</CardTitle>
          <CardDescription className="text-center">
            The page you are looking for does not exist or has been moved.
            {from && <span className="block mt-2">You came from: {from}</span>}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex justify-center">
            <Button asChild>
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Shell>
  )
}
