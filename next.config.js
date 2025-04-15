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
  // Disable automatic static optimization for the /404 route
  // This prevents Next.js from trying to prerender it
  async rewrites() {
    return {
      beforeFiles: [
        // Redirect /404 to a different path to avoid prerendering issues
        {
          source: "/404",
          destination: "/custom-404",
        },
      ],
    }
  },
}

module.exports = nextConfig
