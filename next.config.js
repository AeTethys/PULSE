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
  // Completely disable the App Router's handling of 404 pages
  // This will force Next.js to use the Pages Router's 404 page
  output: "export", // Use static export
  distDir: "out", // Output to the 'out' directory
  // Explicitly exclude problematic routes from static generation
  exportPathMap: async (defaultPathMap) => {
    // Remove /404 and /_not-found from the static export
    const filteredPaths = { ...defaultPathMap }
    delete filteredPaths["/404"]
    delete filteredPaths["/_not-found"]
    return filteredPaths
  },
}

module.exports = nextConfig
