// Global type definitions for the application

// Analytics and error tracking services
interface Window {
  gtag?: (command: string, action: string, params: any) => void
  analytics?: {
    track: (event: string, properties?: any) => void
    identify: (userId: string, traits?: any) => void
    page: (category?: string, name?: string, properties?: any) => void
  }
  Sentry?: {
    captureEvent: (event: any) => void
    captureException: (error: Error, context?: any) => void
    captureMessage: (message: string, level?: string) => void
  }
  LogRocket?: {
    captureException: (error: Error, options?: any) => void
    track: (event: string, properties?: any) => void
    identify: (userId: string, traits?: any) => void
  }
}
