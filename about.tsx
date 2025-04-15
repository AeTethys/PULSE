import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
            <Link
              href="/features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Features
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
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
            <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Story of PULSE</h1>
                <p className="text-muted-foreground md:text-lg">
                  From an A+ student slipping through the cracks to creating a system that ensures no child is left
                  behind.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Our founder experienced firsthand how traditional education can fail even high-achieving students.
                  Despite excelling academically, personal challenges went unnoticed, leading to a temporary decline in
                  performance.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  This experience inspired the creation of PULSE – a platform that looks beyond grades to understand
                  each student's unique learning journey, ensuring that every child receives the support they need to
                  thrive.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Founder's journey"
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
              <div className="space-y-2">
                <blockquote className="text-2xl font-semibold italic text-center mx-auto max-w-3xl">
                  "Education is more than grades. It's about ensuring no one is left behind. That's why PULSE exists."
                </blockquote>
                <p className="text-center text-muted-foreground">- PULSE Founder</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Then vs. Now</h2>
                <div className="rounded-lg border bg-muted/20 p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Traditional Education</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 mt-2 rounded-full bg-destructive"></div>
                      <span>One-size-fits-all approach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 mt-2 rounded-full bg-destructive"></div>
                      <span>Delayed feedback on assignments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 mt-2 rounded-full bg-destructive"></div>
                      <span>Limited parent-teacher communication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 mt-2 rounded-full bg-destructive"></div>
                      <span>Students can easily fall behind</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 mt-2 rounded-full bg-destructive"></div>
                      <span>Focus on standardized results</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-6 opacity-0 lg:block hidden">Then vs. Now</h2>
                <div className="rounded-lg border bg-muted/20 p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Education with PULSE</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 mt-2 rounded-full bg-primary"></div>
                      <span>Personalized learning for each student</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 mt-2 rounded-full bg-primary"></div>
                      <span>Immediate feedback and guidance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 mt-2 rounded-full bg-primary"></div>
                      <span>Seamless communication platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 mt-2 rounded-full bg-primary"></div>
                      <span>Early intervention for struggling students</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 mt-2 rounded-full bg-primary"></div>
                      <span>Focus on individual growth and potential</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl">
                To transform education by creating personalized learning experiences that help every student reach their
                full potential, regardless of their background or learning style.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row pt-4">
                <Button size="lg">Join Our Team</Button>
                <Button variant="outline" size="lg">
                  Learn More
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
