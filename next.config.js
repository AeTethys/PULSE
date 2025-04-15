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
  // Use a different approach to handle 404 pages
  // Instead of exportPathMap, we'll use trailingSlash and custom handling
  trailingSlash: true, // This helps with static exports

  // Disable the automatic static optimization for problematic routes
  // by using rewrites to redirect them
  async rewrites() {
    return {
      beforeFiles: [
        // Redirect /404 to a custom page to avoid prerendering issues
        {
          source: "/404",
          destination: "/custom-error",
        },
      ],
    }
  },
}

module.exports = nextConfig
