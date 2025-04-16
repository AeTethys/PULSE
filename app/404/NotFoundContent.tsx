import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shell } from "@/components/Shell"
import Link from "next/link"

export default function NotFoundContent() {
  return (
    <Shell className="grid h-[calc(100vh-80px)] place-items-center">
      <Card className="w-[400px] border-none">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Oops! Page Not Found</CardTitle>
          <CardDescription className="text-center">
            The page you are looking for does not exist or has been moved.
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
