import { type NextRequest, NextResponse } from "next/server"

type Log404RequestBody = {
  path: string
  referrer?: string
  timestamp: string
  userAgent?: string
  searchParams?: Record<string, string>
}

/**
 * API route to log 404 errors
 * POST /api/log-404
 */
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body: Log404RequestBody = await request.json()

    // Validate required fields
    if (!body.path) {
      return NextResponse.json({ error: "Missing required field: path" }, { status: 400 })
    }

    // Log the 404 error
    await log404Error(body)

    // Return success response
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error logging 404:", error)
    return NextResponse.json({ error: "Failed to log 404 error" }, { status: 500 })
  }
}

/**
 * Logs 404 error to database or other storage
 */
async function log404Error(data: Log404RequestBody): Promise<void> {
  // In a real implementation, you would store this in a database
  // For now, we'll just log it to the console
  console.log("404 Error:", {
    path: data.path,
    referrer: data.referrer || "unknown",
    timestamp: data.timestamp,
    userAgent: data.userAgent,
    searchParams: data.searchParams,
  })

  // Example database implementation (commented out)
  /*
  await db.collection('404_errors').insertOne({
    path: data.path,
    referrer: data.referrer || 'unknown',
    timestamp: new Date(data.timestamp),
    userAgent: data.userAgent,
    searchParams: data.searchParams,
  });
  */

  // Example notification for critical paths (commented out)
  /*
  const criticalPaths = ['/checkout', '/payment', '/signup'];
  if (criticalPaths.some(criticalPath => data.path.includes(criticalPath))) {
    await sendNotification({
      title: 'Critical 404 Error',
      message: `A user encountered a 404 error on a critical path: ${data.path}`,
      level: 'high',
    });
  }
  */
}
