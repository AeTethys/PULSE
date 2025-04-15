"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Heart, Users, Globe, ArrowRight, User2, LayoutGrid, GraduationCap, Sparkles, Zap, Shield } from "lucide-react"

export default function AboutPage() {
  // Function to handle smooth scrolling to sections
  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="flex-1">
      {/* Hero Section - Streamlined */}
      <section className="relative overflow-hidden border-b bg-muted/40 py-16 md:py-24">
        <div className="container relative z-10">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column - Content */}
            <ScrollReveal>
              <div className="space-y-6">
                <Badge className="px-3 py-1 text-sm">Our Story</Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Every Mind Deserves <span className="text-primary">Attention</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  PULSE was born when our founder, once an A+ student, saw their grades slip simply because no one
                  noticed they needed help. This insight sparked our mission: to create a system where no learner falls
                  through the cracks.
                </p>
                <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                  <Button size="lg" onClick={(e) => scrollToSection(e, "mission")}>
                    Explore Our Mission
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/case-studies">See Our Impact</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column - Visual Element */}
            <ScrollReveal delay={0.2}>
              <div className="relative mx-auto aspect-video max-w-md overflow-hidden rounded-2xl border bg-background shadow-xl lg:ml-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Every%20Mind%2C%20Every%20Dream%2C%20Every%20Day.%20PULSE%20provides%20AI-powered%20personalized%20education%20that%20adapts%20to%20each%20student%27s%20unique%20learning%20journey%2C%20ensuring%20no%20one%20gets%20left%20behind..jpg-tA6ebkAvWSHW5xdBT2SFbUH2Lxua4z.jpeg"
                  alt="Student using PULSE platform with personalized learning dashboard"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                  <p className="font-medium">Personalized learning for every student</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      </section>

      {/* Mission & Vision Section - Combined */}
      <section id="mission" className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-[800px] space-y-4 text-center">
              <Badge>Our Mission & Vision</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Every Student. Every Dream. Every Step of the Way.
              </h2>
              <p className="text-muted-foreground">
                At PULSE, we believe that education should be personalized, inclusive, and empowering. Our mission is to
                ensure that no learner is left behind by providing a connected, data-driven platform that supports
                students, teachers, parents, and schools.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal delay={0.1}>
              <Card className="h-full relative overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Real-Time Insights</CardTitle>
                  <CardDescription>Identifying challenges early and providing actionable solutions.</CardDescription>
                </CardHeader>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="h-full relative overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <User2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Personalized Learning</CardTitle>
                  <CardDescription>Adapting to each student's unique needs and learning style.</CardDescription>
                </CardHeader>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="h-full relative overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Collaboration</CardTitle>
                  <CardDescription>
                    Bridging the communication gap between all stakeholders in education.
                  </CardDescription>
                </CardHeader>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Card className="h-full relative overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Equity</CardTitle>
                  <CardDescription>
                    Ensuring every child has access to the support they need to succeed.
                  </CardDescription>
                </CardHeader>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision Details Section */}
      <section id="vision" className="py-16 md:py-24">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-[800px] space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">More Than a Platform—A Movement</h2>
              <p className="text-muted-foreground">
                PULSE is building a future where every stakeholder in education is empowered to succeed.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-2">
            <ScrollReveal>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>For Students & Teachers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold flex items-center">
                      <User2 className="h-5 w-5 mr-2 text-primary" />
                      Every Student Thrives
                    </h3>
                    <p className="text-muted-foreground">
                      Personalized learning paths ensure no one is left behind, adapting to each student's unique needs
                      and pace.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                      Teachers Are Empowered
                    </h3>
                    <p className="text-muted-foreground">
                      AI-driven tools free educators to focus on what matters most: teaching and mentoring their
                      students.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold flex items-center">
                      <Users className="h-5 w-5 mr-2 text-primary" />
                      Parents Are Involved
                    </h3>
                    <p className="text-muted-foreground">
                      Real-time updates and communication tools keep families engaged in their children's education
                      journey.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>For Schools & Communities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold flex items-center">
                      <LayoutGrid className="h-5 w-5 mr-2 text-primary" />
                      Schools Operate Efficiently
                    </h3>
                    <p className="text-muted-foreground">
                      Data-driven insights help administrators make informed decisions for better educational outcomes.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold flex items-center">
                      <Sparkles className="h-5 w-5 mr-2 text-primary" />
                      Creators Innovate
                    </h3>
                    <p className="text-muted-foreground">
                      Educators, hobbyists, and experts design courses and learning materials that inspire and engage.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold flex items-center">
                      <Globe className="h-5 w-5 mr-2 text-primary" />
                      Communities Flourish
                    </h3>
                    <p className="text-muted-foreground">
                      A vibrant network of innovators shares knowledge and inspires growth across the platform.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section - Streamlined */}
      <section id="values" className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-[800px] space-y-4 text-center">
              <Badge>Our Values</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Drives Us Forward</h2>
              <p className="text-muted-foreground">
                At the heart of PULSE are the values that guide everything we do, from product development to customer
                support.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal delay={0.1}>
              <Card className="h-full relative overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Empathy</CardTitle>
                  <CardDescription>
                    We understand the challenges because we've been there. Every feature is built with genuine care for
                    our users.
                  </CardDescription>
                </CardHeader>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="h-full relative overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Innovation</CardTitle>
                  <CardDescription>
                    We constantly push the boundaries of what's possible in education technology.
                  </CardDescription>
                </CardHeader>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="h-full relative overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Collaboration</CardTitle>
                  <CardDescription>
                    Success is a team effort. We work closely with schools, teachers, and parents.
                  </CardDescription>
                </CardHeader>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Card className="h-full relative overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Integrity</CardTitle>
                  <CardDescription>
                    We are committed to transparency, security, and ethical practices in everything we do.
                  </CardDescription>
                </CardHeader>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PULSE Meaning - Condensed */}
      <section id="name" className="py-16 md:py-24">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-[800px]">
              <div className="rounded-2xl border bg-card p-8 shadow-sm">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Badge>Our Name</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Does PULSE Stand For?</h2>
                  <p className="text-muted-foreground max-w-[600px]">
                    PULSE stands for <span className="font-semibold">P</span>ersonal{" "}
                    <span className="font-semibold">U</span>niversal
                    <span className="font-semibold"> L</span>earning <span className="font-semibold">S</span>ystem for
                    <span className="font-semibold"> E</span>ducation, reflecting our mission to create a platform that
                    adapts to every learner's unique journey through smart, AI-driven technology.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-4">
                    <div className="flex flex-col items-center p-3 rounded-lg bg-primary/5">
                      <User2 className="h-6 w-6 text-primary mb-2" />
                      <span className="font-semibold">Personal</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-primary/5">
                      <Globe className="h-6 w-6 text-primary mb-2" />
                      <span className="font-semibold">Universal</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-primary/5">
                      <LayoutGrid className="h-6 w-6 text-primary mb-2" />
                      <span className="font-semibold">Learning</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-primary/5">
                      <GraduationCap className="h-6 w-6 text-primary mb-2" />
                      <span className="font-semibold">System for Education</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-[800px] space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Us in Transforming Education</h2>
              <p className="text-lg text-muted-foreground">
                Whether you're a school administrator, teacher, parent, or student, we invite you to join us in
                revolutionizing education. Together, we can ensure that no child is left behind.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
