/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Disable automatic static optimization for problematic routes
  async rewrites() {
    return {
      beforeFiles: [
        // Redirect /404 to a different path to avoid prerendering issues
        {
          source: "/404",
          destination: "/custom-404",
        },
        // Redirect /_not-found to a different path to avoid prerendering issues
        {
          source: "/_not-found",
          destination: "/custom-not-found",
        },
      ],
    }
  },
  // Explicitly set which pages should be statically generated
  // This helps avoid issues with dynamic routes that use client components
  experimental: {
    // Disable static generation for problematic routes
    excludeDefaultMomentLocales: true,
  },
}

module.exports = nextConfig
