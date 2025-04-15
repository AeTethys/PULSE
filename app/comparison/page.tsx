"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  X,
  Brain,
  Users,
  Gamepad2,
  GraduationCap,
  BarChart4,
  Globe,
  DollarSign,
  ArrowRight,
  Calculator,
} from "lucide-react"

const comparisonFeatures = [
  {
    name: "AI-Powered Personalization",
    description: "Adaptive learning paths and personalized recommendations",
    icon: Brain,
    pulseDetail: "Real-time insights & adaptive learning",
    competitors: {
      "google-classroom": false,
      canvas: false,
      kahoot: false,
    },
  },
  {
    name: "Parent Engagement",
    description: "Tools for parents to track progress and communicate",
    icon: Users,
    pulseDetail: "Free progress tracking & communication",
    competitors: {
      "google-classroom": true,
      canvas: true,
      kahoot: false,
    },
  },
  {
    name: "Creator Ecosystem",
    description: "Tools for educators to design courses and games",
    icon: Gamepad2,
    pulseDetail: "Robust course & game creation tools",
    competitors: {
      "google-classroom": false,
      canvas: true,
      kahoot: true,
    },
  },
  {
    name: "Immersive Learning",
    description: "Gamified STEM modules and interactive educational games",
    icon: GraduationCap,
    pulseDetail: "Fully immersive learning experiences",
    competitors: {
      "google-classroom": false,
      canvas: false,
      kahoot: true,
    },
  },
  {
    name: "Administrative Tools",
    description: "Automated grading, attendance tracking, and analytics",
    icon: BarChart4,
    pulseDetail: "Comprehensive school-wide analytics",
    competitors: {
      "google-classroom": true,
      canvas: true,
      kahoot: false,
    },
  },
  {
    name: "Global Accessibility",
    description: "Multi-language support and offline functionality",
    icon: Globe,
    pulseDetail: "Full offline support & 30+ languages",
    competitors: {
      "google-classroom": true,
      canvas: false,
      kahoot: false,
    },
  },
  {
    name: "Pricing",
    description: "Free tier for parents and affordable premium plans",
    icon: DollarSign,
    pulseDetail: "Free tier & sliding-scale pricing",
    competitors: {
      "google-classroom": true,
      canvas: false,
      kahoot: true,
    },
  },
]

const differentiators = [
  {
    title: "AI-Driven Insights",
    subtitle: "Proactive learning support through advanced analytics",
    icon: Brain,
    pulse:
      "PULSE uses advanced AI to provide real-time analytics and personalized learning paths, helping teachers identify and address challenges early.",
    competitors:
      "Competitors rely on manual input and lack predictive capabilities, often missing critical intervention opportunities.",
  },
  {
    title: "Holistic Ecosystem",
    subtitle: "A unified platform for all education stakeholders",
    icon: Users,
    pulse:
      "PULSE connects students, teachers, parents, and administrators in one platform, fostering collaboration and transparency across the entire educational journey.",
    competitors:
      "Competitors often focus on specific user groups (e.g., teachers and students) without integrating parents or administrators, creating communication gaps.",
  },
  {
    title: "Creator & Developer Tools",
    subtitle: "Empower educators to build engaging content",
    icon: Gamepad2,
    pulse:
      "PULSE empowers educators and developers to create courses, games, and interactive content, making learning engaging and innovative through our open platform.",
    competitors:
      "Competitors lack robust tools for user-generated content, limiting the creativity and customization options for educators.",
  },
  {
    title: "Equity & Accessibility",
    subtitle: "Education for everyone, everywhere",
    icon: Globe,
    pulse:
      "PULSE offers free access to parents and sliding-scale pricing for underserved schools, ensuring no learner is left behind regardless of socioeconomic status.",
    competitors:
      "Competitors often charge for basic features, creating barriers for low-income users and widening the digital divide in education.",
  },
]

const testimonials = [
  {
    quote:
      "PULSE's AI insights helped us identify struggling students before it was too late. It's a game-changer for our school.",
    name: "Principal Thandi",
    role: "Johannesburg High School",
  },
  {
    quote: "The creator tools allowed me to design a course that my students love. PULSE has transformed how I teach.",
    name: "Mr. Sipho",
    role: "Science Teacher",
  },
  {
    quote:
      "As a parent, I finally feel connected to my child's education. I can see progress in real-time and communicate easily with teachers.",
    name: "Mrs. Naidoo",
    role: "Parent",
  },
]

export default function ComparisonPage() {
  const [selectedCompetitor, setSelectedCompetitor] = useState("google-classroom")

  // Format currency in South African Rand
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  // Example conversion from USD to ZAR (using a fixed exchange rate for demonstration)
  const exchangeRate = 18.5 // Example exchange rate: 1 USD = 18.5 ZAR
  const currentCost = 10000 * exchangeRate // R185,000
  const pulseCost = 6000 * exchangeRate // R111,000
  const annualSavings = currentCost - pulseCost // R74,000
  const fiveYearSavings = annualSavings * 5 // R370,000

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-muted/40 py-24">
        <div className="container relative z-10">
          <div className="mx-auto max-w-[800px] space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">PULSE Smart Learning vs. Competitors</h1>
            <p className="text-lg text-muted-foreground">
              Discover how PULSE goes beyond traditional platforms to deliver a holistic, AI-driven education solution.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      </section>

      {/* Comparison Table */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-[800px] space-y-4 text-center">
            <Badge>Feature Comparison</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Sets Us Apart</h2>
            <p className="text-muted-foreground">
              See how PULSE compares to other educational platforms in key areas that matter most.
            </p>
          </div>

          <div className="mt-16">
            <Tabs defaultValue="google-classroom" onValueChange={setSelectedCompetitor} className="mx-auto max-w-4xl">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="google-classroom">Google Classroom</TabsTrigger>
                <TabsTrigger value="canvas">Canvas</TabsTrigger>
                <TabsTrigger value="kahoot">Kahoot!</TabsTrigger>
              </TabsList>

              {["google-classroom", "canvas", "kahoot"].map((competitor) => (
                <TabsContent key={competitor} value={competitor} className="mt-8">
                  <div className="overflow-hidden rounded-lg border">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="p-4 text-left">Feature</th>
                          <th className="p-4 text-center">PULSE Smart Learning</th>
                          <th className="p-4 text-center">
                            {competitor === "google-classroom"
                              ? "Google Classroom"
                              : competitor === "canvas"
                                ? "Canvas"
                                : "Kahoot!"}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonFeatures.map((feature, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                            <td className="p-4">
                              <div className="flex items-start gap-3">
                                <feature.icon className="mt-1 h-5 w-5 text-primary" />
                                <div>
                                  <p className="font-medium">{feature.name}</p>
                                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                                </div>
                              </div>
                            </td>
                            <td className="p-4 text-center">
                              <div className="flex flex-col items-center justify-center">
                                <Check className="h-6 w-6 text-green-500" />
                                <span className="mt-1 text-xs text-muted-foreground">{feature.pulseDetail}</span>
                              </div>
                            </td>
                            <td className="p-4 text-center">
                              <div className="flex flex-col items-center justify-center">
                                {feature.competitors[competitor] ? (
                                  <>
                                    <div className="flex items-center justify-center rounded-full border border-amber-200 bg-amber-50 p-1">
                                      <Check className="h-4 w-4 text-amber-500" />
                                    </div>
                                    <span className="mt-1 text-xs text-muted-foreground">Limited</span>
                                  </>
                                ) : (
                                  <>
                                    <X className="h-6 w-6 text-red-500" />
                                    <span className="mt-1 text-xs text-muted-foreground">Not available</span>
                                  </>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="border-t bg-muted/30 py-24">
        <div className="container">
          <div className="mx-auto max-w-[800px] space-y-4 text-center">
            <Badge>Key Differentiators</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Unique Selling Points</h2>
            <p className="text-muted-foreground">
              Discover the innovative features that make PULSE the leading choice for modern education.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {differentiators.map((diff, index) => (
              <Card key={diff.title} className="h-full">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <diff.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{diff.title}</CardTitle>
                  <CardDescription>{diff.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div>
                      <h4 className="mb-2 font-medium text-primary">PULSE</h4>
                      <p className="text-sm text-muted-foreground">{diff.pulse}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium text-muted-foreground">Competitors</h4>
                      <p className="text-sm text-muted-foreground">{diff.competitors}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-[800px] space-y-4 text-center">
            <Badge>Success Stories</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">From Those Who Switched</h2>
            <p className="text-muted-foreground">
              Hear from schools and educators who have transformed their approach with PULSE.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 fill-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mb-6 border-l-4 border-primary/30 pl-4 italic text-muted-foreground">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                      <Image
                        src={`/placeholder.svg?height=48&width=48&text=${testimonial.name.charAt(0)}`}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="border-t bg-muted/30 py-24">
        <div className="container">
          <div className="mx-auto max-w-[800px] space-y-4 text-center">
            <Badge>Cost Comparison</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Calculate Your Savings</h2>
            <p className="text-muted-foreground">
              See how much you can save by switching to PULSE from your current solution.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  <CardTitle>Savings Calculator</CardTitle>
                </div>
                <CardDescription>Enter your details below to see how much you could save with PULSE.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium">Number of Students</label>
                      <input
                        type="number"
                        placeholder="e.g., 500"
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Current Platform</label>
                      <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                        <option value="google-classroom">Google Classroom</option>
                        <option value="canvas">Canvas</option>
                        <option value="kahoot">Kahoot!</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Current Annual Cost (ZAR)</label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                          R
                        </span>
                        <input
                          type="number"
                          placeholder="e.g., 185 000"
                          className="w-full rounded-md border border-input bg-background pl-7 pr-3 py-2"
                        />
                      </div>
                    </div>
                    <Button className="w-full">Calculate Savings</Button>
                  </div>
                  <div className="rounded-lg bg-muted p-6">
                    <h3 className="mb-4 text-lg font-medium">Your Estimated Savings</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between border-b pb-2">
                        <span>Current Annual Cost:</span>
                        <span className="font-medium">{formatCurrency(currentCost)}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span>PULSE Annual Cost:</span>
                        <span className="font-medium">{formatCurrency(pulseCost)}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span>Annual Savings:</span>
                        <span className="font-medium text-green-600">{formatCurrency(annualSavings)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>5-Year Savings:</span>
                        <span className="font-medium text-green-600">{formatCurrency(fiveYearSavings)}</span>
                      </div>
                      <div className="mt-4 rounded-md bg-primary/10 p-3 text-sm">
                        <p>
                          <span className="font-medium">Note:</span> PULSE also provides additional value through
                          improved outcomes and time savings not reflected in this calculation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-[800px] space-y-8 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to Experience the PULSE Smart Learning Difference?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join the schools and educators who are transforming education with PULSE. Schedule a demo today and see
              how PULSE can work for you.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
