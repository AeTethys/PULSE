/**
 * Error tracking utility for the PULSE application
 * Handles 404 errors and other application errors
 */

type Error404Data = {
  path: string
  referrer?: string
  searchParams?: Record<string, string>
  userAgent?: string
}

/**
 * Tracks 404 errors through multiple channels
 */
export async function track404Error(data: Error404Data): Promise<void> {
  try {
    // 1. Log to server API
    await logToServerAPI(data)

    // 2. Track with analytics (if available)
    trackWithAnalytics(data)

    // 3. Report to error monitoring services (if available)
    reportToErrorServices(data)

    // 4. Log to console in development
    if (process.env.NODE_ENV !== "production") {
      console.warn("404 Error:", data)
    }
  } catch (error) {
    // Fail silently in production, log in development
    if (process.env.NODE_ENV !== "production") {
      console.error("Failed to track 404 error:", error)
    }
  }
}

/**
 * Logs 404 error to our server API
 */
async function logToServerAPI(data: Error404Data): Promise<void> {
  try {
    await fetch("/api/log-404", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        userAgent: data.userAgent || (typeof navigator !== "undefined" ? navigator.userAgent : undefined),
      }),
    })
  } catch (error) {
    // Fail silently - we don't want error tracking to cause errors
    console.error("Failed to log to API:", error)
  }
}

/**
 * Tracks 404 error with analytics services
 */
function trackWithAnalytics(data: Error404Data): void {
  // Google Analytics
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "404_error", {
      event_category: "error",
      event_label: data.path,
      non_interaction: true,
    })
  }

  // Segment
  if (typeof window !== "undefined" && window.analytics) {
    window.analytics.track("404 Error", {
      path: data.path,
      referrer: data.referrer,
      ...data.searchParams,
    })
  }
}

/**
 * Reports 404 error to error monitoring services
 */
function reportToErrorServices(data: Error404Data): void {
  // Sentry
  if (typeof window !== "undefined" && window.Sentry) {
    window.Sentry.captureEvent({
      message: "404 Error",
      level: "warning",
      tags: {
        path: data.path,
        referrer: data.referrer || "unknown",
      },
      extra: {
        ...data,
      },
    })
  }

  // LogRocket
  if (typeof window !== "undefined" && window.LogRocket) {
    window.LogRocket.captureException(new Error("404 Page Not Found"), {
      tags: {
        path: data.path,
        errorType: "404",
      },
      extra: {
        ...data,
      },
    })
  }
}

// Add TypeScript declarations for global objects
declare global {
  interface Window {
    gtag?: (command: string, action: string, params: any) => void
    analytics?: {
      track: (event: string, properties?: any) => void
    }
    Sentry?: {
      captureEvent: (event: any) => void
    }
    LogRocket?: {
      captureException: (error: Error, options?: any) => void
    }
  }
}
