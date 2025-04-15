import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, BarChart3, Sparkles, MessageSquare, Award } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold tracking-tight">
              PULSE
            </Link>
          </div>
          <nav className="hidden gap-6 md:flex">
            <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <div>
            <Button asChild size="sm">
              <Link href="/demo">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="mx-auto grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  How PULSE Works
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Our AI-driven platform adapts to each student's unique learning needs, making education more
                  personalized, engaging, and effective.
                </p>
                <div className="flex flex-col gap-2 pt-4 md:flex-row">
                  <Button className="gap-1.5">
                    Get Started
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline">View Demo</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="PULSE dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                The Power of AI in Learning
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl">
                Our advanced AI analyzes student progress in real-time, providing personalized insights and
                recommendations.
              </p>
            </div>
            <div className="mx-auto mt-16 flex items-center justify-center">
              <div className="relative h-[300px] w-full sm:h-[400px] md:h-[500px] lg:h-[600px]">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="AI analyzing student progress"
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Progress Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Monitor student growth with detailed analytics and visualizations.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Adaptive Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Content that adjusts to each student's pace, preferences, and learning style.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Instant Feedback</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time responses that guide students through challenging concepts.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Skill Mastery</h3>
                <p className="text-sm text-muted-foreground">
                  Clear pathways for students to develop and demonstrate competency.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="mx-auto grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="flex items-center justify-center lg:order-last">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Parent-teacher communication"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Seamless Parent-Teacher Communication
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  PULSE connects parents and teachers like never before, creating a collaborative environment that
                  supports student success.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-primary"></div>
                    <span>Direct messaging between parents and teachers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-primary"></div>
                    <span>Automated progress updates and notifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-primary"></div>
                    <span>Schedule meetings and parent-teacher conferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-primary"></div>
                    <span>Share resources and learning materials</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container">
            <div className="mx-auto grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Making Learning Engaging</h2>
                <p className="text-muted-foreground md:text-lg">
                  Our gamification elements keep students motivated and excited about their educational journey.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="rounded-lg border bg-background p-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Achievement badge"
                      width={100}
                      height={100}
                      className="mx-auto mb-2"
                    />
                    <p className="text-center text-sm font-medium">Math Master</p>
                  </div>
                  <div className="rounded-lg border bg-background p-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Achievement badge"
                      width={100}
                      height={100}
                      className="mx-auto mb-2"
                    />
                    <p className="text-center text-sm font-medium">Reading Champion</p>
                  </div>
                  <div className="rounded-lg border bg-background p-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Achievement badge"
                      width={100}
                      height={100}
                      className="mx-auto mb-2"
                    />
                    <p className="text-center text-sm font-medium">Science Explorer</p>
                  </div>
                  <div className="rounded-lg border bg-background p-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Achievement badge"
                      width={100}
                      height={100}
                      className="mx-auto mb-2"
                    />
                    <p className="text-center text-sm font-medium">Writing Wizard</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Student achievements"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your School?
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl">
                Join the growing community of schools using PULSE to revolutionize education.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button size="lg" className="px-8">
                  Request a Demo
                </Button>
                <Button variant="outline" size="lg">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-6 md:gap-8">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} PULSE Education. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
