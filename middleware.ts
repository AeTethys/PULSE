import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Track 404s at the edge
  const pathname = request.nextUrl.pathname

  // Check if the path is a special Next.js path
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt"
  ) {
    return NextResponse.next()
  }

  // For App Router 404 paths, redirect to the Pages Router 404 page
  if (pathname === "/404" || pathname === "/_not-found") {
    const url = request.nextUrl.clone()
    url.pathname = "/404"
    return NextResponse.rewrite(url)
  }

  // Log 404 at the edge if we have Edge Config
  const response = NextResponse.next()
  if (response.status === 404) {
    const edgeConfig = process.env.EDGE_CONFIG
    if (edgeConfig) {
      fetch(`https://edge-config.vercel.com/v1/log-404?configurationId=${edgeConfig}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.EDGE_CONFIG_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path: request.nextUrl.pathname,
          referrer: request.headers.get("referer") || "none",
          userAgent: request.headers.get("user-agent") || "unknown",
          timestamp: new Date().toISOString(),
        }),
      }).catch((err) => console.error("Failed to log to Edge Config:", err))
    }
  }

  return response
}

export const config = {
  matcher: [
    // Match all paths except static assets
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}
