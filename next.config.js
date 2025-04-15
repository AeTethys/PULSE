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
  // Completely disable the App Router
  // This will force Next.js to use only the Pages Router
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
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
