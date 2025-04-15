import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Track 404s at the edge
  if (response.status === 404) {
    // Add custom header for logging
    response.headers.set("x-404-path", request.nextUrl.pathname)

    // Log 404 at the edge (for Vercel Analytics)
    console.log(`[404] ${request.nextUrl.pathname} - Referrer: ${request.headers.get("referer") || "none"}`)

    // Track in Vercel Edge Config now that we have the environment variables
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

// Only run middleware on specific paths
export const config = {
  matcher: [
    // Match all paths except for:
    // - API routes
    // - Static files (images, fonts, etc)
    // - Favicon
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
