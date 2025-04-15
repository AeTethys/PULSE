import Link from "next/link"
import Image from "next/image"
import { Book, CalendarCheck, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">PULSE</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link
              href="/features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
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
          <div className="container flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Every Mind, Every Dream, Every Day.
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Personalized education that adapts to each student's unique learning journey.
            </p>
            <div className="mx-auto w-full max-w-sm space-y-4">
              <div className="flex justify-center gap-4">
                <Button size="lg" className="px-8">
                  Try PULSE
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center">
              <div className="relative h-[300px] w-full sm:h-[400px] md:h-[500px] lg:h-[600px]">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Student learning with a teacher"
                  fill
                  className="rounded-lg object-cover shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-sm border">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Book className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">For Students</h3>
                <p className="text-muted-foreground">
                  Personalized learning paths that adapt to your pace, with instant feedback to boost your confidence.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-sm border">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <CalendarCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">For Teachers</h3>
                <p className="text-muted-foreground">
                  AI-driven insights and time-saving automation to help you focus on what matters most: teaching.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-sm border">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">For Parents</h3>
                <p className="text-muted-foreground">
                  Real-time updates on your child's progress and direct communication with teachers.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Transforming Education with AI
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl">
                PULSE uses advanced AI to create personalized learning experiences, helping students achieve their full
                potential.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Smart Learning
                </div>
                <h3 className="text-2xl font-bold">How PULSE Works</h3>
                <p className="text-muted-foreground md:text-lg">
                  Our adaptive learning system analyzes each student's strengths and areas for improvement, creating a
                  tailored educational journey that evolves as they progress.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Personalized learning paths</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Real-time feedback and assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>AI-powered progress tracking</span>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button>Learn More</Button>
                  <Button variant="outline">Request a Demo</Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="PULSE dashboard"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Learning?
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl">
                Join schools and districts that have already improved student outcomes with PULSE.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button size="lg" className="px-8">
                  Try PULSE
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
