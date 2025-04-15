import { LogoShowcase } from "@/components/logo-showcase"

export default function BrandPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full pt-24 pb-12 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-4">PULSE Brand Assets</h1>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
            Our brand identity reflects our mission to transform educational analytics with innovative technology and
            data-driven insights.
          </p>
        </div>
      </div>

      <LogoShowcase />

      <section className="py-16 px-4 md:px-6 lg:px-8 w-full">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                PULSE is dedicated to empowering educators with real-time analytics and insights that help improve
                student outcomes and create more effective learning environments.
              </p>
              <p className="text-muted-foreground">
                Our brand reflects our commitment to innovation, reliability, and educational excellence.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Brand Values</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="h-3 w-3 rounded-full bg-primary"></span>
                  </span>
                  <span>
                    <strong>Innovation</strong> - Pushing the boundaries of educational technology
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="h-3 w-3 rounded-full bg-primary"></span>
                  </span>
                  <span>
                    <strong>Reliability</strong> - Providing consistent, accurate data insights
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="h-3 w-3 rounded-full bg-primary"></span>
                  </span>
                  <span>
                    <strong>Accessibility</strong> - Making analytics available to all educators
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="h-3 w-3 rounded-full bg-primary"></span>
                  </span>
                  <span>
                    <strong>Impact</strong> - Focusing on meaningful educational outcomes
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
