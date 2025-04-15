import EnhancedHero from "@/components/enhanced-hero"

export default function EnhancedDemoPage() {
  return (
    <main>
      <EnhancedHero />

      {/* Rest of the page content would go here */}
      <div className="container py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Explore More Features</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          This is a demo page showcasing our enhanced hero section design. The hero section above is designed to be
          attention-grabbing, responsive, and optimized for performance while maintaining all the original content.
        </p>
      </div>
    </main>
  )
}
