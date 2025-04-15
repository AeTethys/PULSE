const fs = require("fs")
const path = require("path")

// This script runs after the Next.js build and removes any problematic files
console.log("Running build override script...")

// Remove the App Router 404 page if it exists
const appRouter404Path = path.join(__dirname, ".next/server/app/404")
if (fs.existsSync(appRouter404Path)) {
  console.log("Removing App Router 404 page...")
  fs.rmSync(appRouter404Path, { recursive: true, force: true })
}

// Remove the not-found page if it exists
const notFoundPath = path.join(__dirname, ".next/server/app/not-found")
if (fs.existsSync(notFoundPath)) {
  console.log("Removing not-found page...")
  fs.rmSync(notFoundPath, { recursive: true, force: true })
}

console.log("Build override script completed.")
