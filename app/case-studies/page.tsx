"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import {
  ArrowRight,
  Download,
  FileText,
  School,
  Users,
  BookOpen,
  TrendingUp,
  Check,
  Lightbulb,
  Award,
  BarChart,
  PieChart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// Image with fallback component
const ImageWithFallback = ({
  src,
  alt,
  ...props
}: {
  src: string
  alt: string
  [key: string]: any
}) => {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      {...props}
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      onError={() => {
        console.error(`Failed to load image: ${src}`)
        setImgSrc("/placeholder.svg?height=600&width=1200")
      }}
    />
  )
}

export default function CaseStudies() {
  const [activeSection, setActiveSection] = useState<string>("urban")
  const [loadingErrors, setLoadingErrors] = useState<Record<string, boolean>>({})

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["urban", "rural", "model-c", "multi-grade", "mathematics", "insights", "metrics"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Check for loading errors
  useEffect(() => {
    const checkForErrors = () => {
      const sections = ["urban", "rural", "model-c", "multi-grade", "mathematics", "insights", "metrics"]
      let errorCount = 0

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (!element || element.offsetHeight < 100) {
          errorCount++
          setLoadingErrors((prev) => ({ ...prev, [section]: true }))
        }
      })

      // If more than half the sections failed to load
      if (errorCount > sections.length / 2) {
        const errorElement = document.getElementById("case-studies-error")
        if (errorElement) errorElement.classList.remove("hidden")
      }
    }

    // Run check after everything has loaded
    window.addEventListener("load", checkForErrors)

    return () => window.removeEventListener("load", checkForErrors)
  }, [])

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-muted/40 py-24">
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="mx-auto max-w-[800px] space-y-4 text-center">
              <Badge>Success Stories</Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Implementation Case Studies</h1>
              <p className="text-lg text-muted-foreground">
                Discover how PULSE is transforming education across diverse learning environments
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button size="lg">
                  <FileText className="mr-2 h-4 w-4" />
                  Download All Case Studies
                </Button>
                <Button variant="outline" size="lg">
                  <School className="mr-2 h-4 w-4" />
                  View Success Stories
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
            {/* Sidebar Navigation */}
            <div className="hidden lg:block">
              <div className="sticky top-20">
                <ScrollArea className="h-[calc(100vh-120px)]">
                  <div className="pr-6">
                    <h3 className="mb-4 text-lg font-semibold tracking-tight">Case Study Categories</h3>
                    <div className="space-y-1">
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start",
                          activeSection === "urban" && "bg-accent text-accent-foreground",
                        )}
                        onClick={() => scrollToSection("urban")}
                      >
                        Urban Township Schools
                      </Button>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start",
                          activeSection === "rural" && "bg-accent text-accent-foreground",
                        )}
                        onClick={() => scrollToSection("rural")}
                      >
                        Rural Schools
                      </Button>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start",
                          activeSection === "model-c" && "bg-accent text-accent-foreground",
                        )}
                        onClick={() => scrollToSection("model-c")}
                      >
                        Model C Schools
                      </Button>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start",
                          activeSection === "multi-grade" && "bg-accent text-accent-foreground",
                        )}
                        onClick={() => scrollToSection("multi-grade")}
                      >
                        Multi-Grade Schools
                      </Button>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start",
                          activeSection === "mathematics" && "bg-accent text-accent-foreground",
                        )}
                        onClick={() => scrollToSection("mathematics")}
                      >
                        Mathematics Focus
                      </Button>
                    </div>

                    <div className="mt-8">
                      <h3 className="mb-4 text-lg font-semibold tracking-tight">Implementation Insights</h3>
                      <div className="space-y-1">
                        <Button
                          variant="ghost"
                          className={cn(
                            "w-full justify-start",
                            activeSection === "insights" && "bg-accent text-accent-foreground",
                          )}
                          onClick={() => scrollToSection("insights")}
                        >
                          Success Factors
                        </Button>
                        <Button
                          variant="ghost"
                          className={cn(
                            "w-full justify-start",
                            activeSection === "metrics" && "bg-accent text-accent-foreground",
                          )}
                          onClick={() => scrollToSection("metrics")}
                        >
                          Impact Metrics
                        </Button>
                      </div>
                    </div>

                    <Card className="mt-8 border-primary/20 bg-primary/5">
                      <CardHeader>
                        <CardTitle className="text-base">Need Custom Implementation?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Our team can help you implement PULSE in your unique educational environment.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button size="sm" className="w-full" asChild>
                          <Link href="/contact">Contact Us</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </ScrollArea>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="space-y-16">
              <ScrollReveal>
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold tracking-tighter" id="urban">
                    Urban Township Schools
                  </h2>

                  <Card className="overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <ImageWithFallback
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Urban%20School%20in%20South%20Africa%2C%20Ibhongo%20Secondary%20School%2C%20Khayelitsha_%20%282%29.jpg-QM45Dyv7MLDlyRT2Ly0PDBjMr7ODJL.jpeg"
                        alt="PULSE educational platform showing cross-device compatibility and student engagement features"
                        width={1200}
                        height={600}
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <Badge className="mb-2">Urban Township</Badge>
                          <CardTitle className="text-2xl">Ibhongo Secondary School</CardTitle>
                          <CardDescription>Cape Town, Western Cape | 1,200 Students</CardDescription>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download Case Study
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      <div className="grid gap-8 md:grid-cols-2">
                        <div className="space-y-4">
                          <h3 className="flex items-center gap-2 text-lg font-semibold">
                            <Users className="h-5 w-5 text-primary" />
                            School Profile
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Languages: isiXhosa (primary), English (FAL)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Overcrowded classrooms with 45+ students per class</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Limited computer facilities (1 lab for 1,200 students)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>High student-to-teacher ratio (40:1)</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h3 className="flex items-center gap-2 text-lg font-semibold">
                            <BookOpen className="h-5 w-5 text-primary" />
                            Implementation Strategy
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Mobile-first approach leveraging students&#39; personal devices</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Computer lab optimization with scheduled access</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Offline content downloading for home study</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Data-light version for limited connectivity environments</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          Results (6-Month Pilot)
                        </h3>
                        <div className="grid gap-6 md:grid-cols-4">
                          {[
                            { value: "32%", label: "Mathematics improvement" },
                            { value: "45%", label: "Homework completion increase" },
                            { value: "28%", label: "English proficiency improvement" },
                            { value: "90%", label: "Student engagement rate" },
                          ].map((stat, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                              <Card className="border-primary/20 bg-primary/5">
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-3xl font-bold text-primary">{stat.value}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                                </CardContent>
                              </Card>
                            </ScrollReveal>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-lg border bg-muted/40 p-6">
                        <h3 className="mb-4 font-semibold">Teacher Testimonial</h3>
                        <figure className="space-y-4">
                          <blockquote className="text-muted-foreground">
                            "PULSE has transformed how we teach and learn. The mobile-first approach means every student
                            can access content, and the offline capabilities ensure learning continues despite
                            connectivity challenges. We&#39;ve seen remarkable improvements in student engagement and
                            academic performance."
                          </blockquote>
                          <figcaption className="text-sm">
                            <div className="font-semibold">Mrs. Nomvula Khumalo</div>
                            <div className="text-muted-foreground">Head of Mathematics Department</div>
                          </figcaption>
                        </figure>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t bg-muted/20 px-6 py-4">
                      <div className="text-sm text-muted-foreground">Implementation Period: January - June 2023</div>
                      <Button variant="link" size="sm" className="gap-1" asChild>
                        <Link href="/contact">
                          Request Similar Implementation
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="space-y-8" id="rural">
                  <h2 className="text-3xl font-bold tracking-tighter">Rural Schools</h2>
                  <Card className="overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <ImageWithFallback
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rural%20School%20in%20South%20Africa%2C%20Themba%20Combined%20School%2C%20Umtata%2C%20Eastern%20Cape%20__.jpg-O7FFH0SrbjoKTX0dNenT8gA2JX5rsl.jpeg"
                        alt="Themba Combined School campus in Umtata, Eastern Cape"
                        width={1200}
                        height={600}
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <Badge className="mb-2">Rural School</Badge>
                          <CardTitle className="text-2xl">Themba Combined School</CardTitle>
                          <CardDescription>Umtata, Eastern Cape | 450 Students</CardDescription>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download Case Study
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      <div className="grid gap-8 md:grid-cols-2">
                        <div className="space-y-4">
                          <h3 className="flex items-center gap-2 text-lg font-semibold">
                            <Users className="h-5 w-5 text-primary" />
                            School Profile
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Limited access to technology and internet connectivity</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Large class sizes with diverse learning needs</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Limited teacher resources and support</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h3 className="flex items-center gap-2 text-lg font-semibold">
                            <BookOpen className="h-5 w-5 text-primary" />
                            Implementation Strategy
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Offline content delivery for consistent learning</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Differentiated learning pathways for diverse student needs</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Teacher training and support to maximize PULSE effectiveness</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          Results (6-Month Pilot)
                        </h3>
                        <div className="grid gap-6 md:grid-cols-4">
                          {[
                            { value: "25%", label: "Mathematics improvement" },
                            { value: "30%", label: "Reading comprehension increase" },
                            { value: "18%", label: "Overall academic improvement" },
                            { value: "85%", label: "Teacher satisfaction rate" },
                          ].map((stat, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                              <Card className="border-primary/20 bg-primary/5">
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-3xl font-bold text-primary">{stat.value}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                                </CardContent>
                              </Card>
                            </ScrollReveal>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-lg border bg-muted/40 p-6">
                        <h3 className="mb-4 font-semibold">Teacher Testimonial</h3>
                        <figure className="space-y-4">
                          <blockquote className="text-muted-foreground">
                            "PULSE has been a game-changer for our rural school. The offline content and differentiated
                            learning paths have allowed me to cater to the diverse needs of my students more
                            effectively. I&#39;m seeing significant improvements in their academic performance."
                          </blockquote>
                          <figcaption className="text-sm">
                            <div className="font-semibold">Mr. Bongani Mthembu</div>
                            <div className="text-muted-foreground">Grade 3-5 Teacher</div>
                          </figcaption>
                        </figure>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t bg-muted/20 px-6 py-4">
                      <div className="text-sm text-muted-foreground">Implementation Period: February - August 2023</div>
                      <Button variant="link" size="sm" className="gap-1" asChild>
                        <Link href="/contact">
                          Request Similar Implementation
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="space-y-8" id="model-c">
                  <h2 className="text-3xl font-bold tracking-tighter">Model C Schools</h2>
                  <Card className="overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <ImageWithFallback
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Model%20C%20School%20in%20South%20Africa%2C%20Riverside%20High%20School%2C%20Johannesburg%2C%20Gauteng.jpg-sKtJDqQyYZ8ECBcTw4PSi7KZZRSg2j.jpeg"
                        alt="Riverside High School entrance and modern campus buildings in Johannesburg"
                        width={1200}
                        height={600}
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <Badge className="mb-2">Model C School</Badge>
                          <CardTitle className="text-2xl">Riverside High School</CardTitle>
                          <CardDescription>Johannesburg, Gauteng | 850 Students</CardDescription>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download Case Study
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      <div className="grid gap-8 md:grid-cols-2">
                        <div className="space-y-4">
                          <h3 className="flex items-center gap-2 text-lg font-semibold">
                            <Users className="h-5 w-5 text-primary" />
                            School Profile
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Well-resourced school with modern facilities</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Strong academic focus and high student achievement</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Experienced and well-trained teaching staff</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h3 className="flex items-center gap-2 text-lg font-semibold">
                            <BookOpen className="h-5 w-5 text-primary" />
                            Implementation Strategy
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Integration with existing learning management system</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Targeted professional development for teachers</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Data-driven insights to inform teaching and learning</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          Results (6-Month Pilot)
                        </h3>
                        <div className="grid gap-6 md:grid-cols-4">
                          {[
                            { value: "15%", label: "Improved student engagement" },
                            { value: "12%", label: "Increased test scores" },
                            { value: "20%", label: "Enhanced teacher efficiency" },
                            { value: "95%", label: "Teacher satisfaction" },
                          ].map((stat, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                              <Card className="border-primary/20 bg-primary/5">
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-3xl font-bold text-primary">{stat.value}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                                </CardContent>
                              </Card>
                            </ScrollReveal>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-lg border bg-muted/40 p-6">
                        <h3 className="mb-4 font-semibold">Teacher Testimonial</h3>
                        <figure className="space-y-4">
                          <blockquote className="text-muted-foreground">
                            "PULSE has seamlessly integrated into our existing systems, providing valuable data-driven
                            insights that have enhanced our teaching strategies. We've seen a noticeable improvement in
                            student engagement and academic performance."
                          </blockquote>
                          <figcaption className="text-sm">
                            <div className="font-semibold">Ms. Sarah Jones</div>
                            <div className="text-muted-foreground">Head of English Department</div>
                          </figcaption>
                        </figure>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t bg-muted/20 px-6 py-4">
                      <div className="text-sm text-muted-foreground">Implementation Period: March - September 2023</div>
                      <Button variant="link" size="sm" className="gap-1" asChild>
                        <Link href="/contact">
                          Request Similar Implementation
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="space-y-8" id="multi-grade">
                  <h2 className="text-3xl font-bold tracking-tighter">Multi-Grade Schools</h2>
                  <Card className="overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <ImageWithFallback
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Multi-grade%20School%20in%20South%20Africa%2C%20Vulamehlo%20Primary%20School%2C%20Nongoma%2C%20KwaZulu-Natal.jpg-NXjbsbNsk04KGBROgw9bdVSys96JoE.jpeg"
                        alt="Vulamehlo Primary School campus in Nongoma, KwaZulu-Natal"
                        width={1200}
                        height={600}
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <Badge className="mb-2">Multi-Grade School</Badge>
                          <CardTitle className="text-2xl">Vulamehlo Primary School</CardTitle>
                          <CardDescription>Nongoma, KwaZulu-Natal | 280 Students</CardDescription>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download Case Study
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      <div className="grid gap-8 md:grid-cols-2">
                        <div className="space-y-4">
                          <h3 className="flex items-center gap-2 text-lg font-semibold">
                            <Users className="h-5 w-5 text-primary" />
                            School Profile
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Multiple grade levels in a single classroom</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Limited teacher resources and support</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Lack of access to technology and internet connectivity</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h3 className="flex items-center gap-2 text-lg font-semibold">
                            <BookOpen className="h-5 w-5 text-primary" />
                            Implementation Strategy
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Offline content delivery for consistent learning</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Differentiated learning pathways for diverse student needs</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Automated assessment generation and grading</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          Results (6-Month Pilot)
                        </h3>
                        <div className="grid gap-6 md:grid-cols-4">
                          {[
                            { value: "25%", label: "Mathematics improvement" },
                            { value: "30%", label: "Reading comprehension increase" },
                            { value: "18%", label: "Overall academic improvement" },
                            { value: "85%", label: "Teacher satisfaction rate" },
                          ].map((stat, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                              <Card className="border-primary/20 bg-primary/5">
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-3xl font-bold text-primary">{stat.value}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                                </CardContent>
                              </Card>
                            </ScrollReveal>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-lg border bg-muted/40 p-6">
                        <h3 className="mb-4 font-semibold">Teacher Testimonial</h3>
                        <figure className="space-y-4">
                          <blockquote className="text-muted-foreground">
                            "PULSE has been a game-changer for our multi-grade classroom. The offline content and
                            differentiated learning paths have allowed me to cater to the diverse needs of my students
                            more effectively. I&#39;m seeing significant improvements in their academic performance."
                          </blockquote>
                          <figcaption className="text-sm">
                            <div className="font-semibold">Mr. Bongani Mthembu</div>
                            <div className="text-muted-foreground">Grade 3-5 Teacher</div>
                          </figcaption>
                        </figure>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t bg-muted/20 px-6 py-4">
                      <div className="text-sm text-muted-foreground">Implementation Period: February - August 2023</div>
                      <Button variant="link" size="sm" className="gap-1" asChild>
                        <Link href="/contact">
                          Request Similar Implementation
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="space-y-8" id="mathematics">
                  <h2 className="text-3xl font-bold tracking-tighter">Mathematics Focus</h2>
                  <Card className="overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <ImageWithFallback
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Masibambane%20Secondary%20School%20mathematics%20classroom%20showing%20learners%20engaged%20in%20learning%20with%20digital%20tools.jpg-ySVI9TqnJrUpzhd60p511JoF54vuVW.jpeg"
                        alt="Masibambane Secondary School mathematics classroom showing students engaged in learning with digital tools"
                        width={1200}
                        height={600}
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <Badge className="mb-2">Mathematics Focus</Badge>
                          <CardTitle className="text-2xl">Masibambane Secondary School</CardTitle>
                          <CardDescription>Orange Farm, Gauteng | 750 Students</CardDescription>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download Case Study
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      <div className="grid gap-8 md:grid-cols-2">
                        <div className="space-y-4">
                          <h3 className="flex items-center gap-2 text-lg font-semibold">
                            <Users className="h-5 w-5 text-primary" />
                            School Profile
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Focus on improving mathematics skills</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Large class sizes with diverse learning needs</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Limited access to technology and internet connectivity</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h3 className="flex items-center gap-2 text-lg font-semibold">
                            <BookOpen className="h-5 w-5 text-primary" />
                            Implementation Strategy
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Targeted mathematics content and exercises</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Differentiated learning pathways for diverse student needs</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Offline content delivery for consistent learning</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          Results (6-Month Pilot)
                        </h3>
                        <div className="grid gap-6 md:grid-cols-4">
                          {[
                            { value: "35%", label: "Mathematics improvement" },
                            { value: "40%", label: "Increased confidence in mathematics" },
                            { value: "25%", label: "Improved problem-solving skills" },
                            { value: "92%", label: "Student engagement rate" },
                          ].map((stat, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                              <Card className="border-primary/20 bg-primary/5">
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-3xl font-bold text-primary">{stat.value}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                                </CardContent>
                              </Card>
                            </ScrollReveal>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-lg border bg-muted/40 p-6">
                        <h3 className="mb-4 font-semibold">Teacher Testimonial</h3>
                        <figure className="space-y-4">
                          <blockquote className="text-muted-foreground">
                            "PULSE's focused mathematics content has significantly improved my students' understanding
                            and confidence. The differentiated learning paths have allowed me to cater to individual
                            needs, leading to remarkable progress."
                          </blockquote>
                          <figcaption className="text-sm">
                            <div className="font-semibold">Mr. Thabo Moloi</div>
                            <div className="text-muted-foreground">Mathematics Teacher</div>
                          </figcaption>
                        </figure>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t bg-muted/20 px-6 py-4">
                      <div className="text-sm text-muted-foreground">Implementation Period: April - October 2023</div>
                      <Button variant="link" size="sm" className="gap-1" asChild>
                        <Link href="/contact">
                          Request Similar Implementation
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="space-y-8" id="insights">
                  <h2 className="text-3xl font-bold tracking-tighter">Success Factors</h2>
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-primary" />
                        <CardTitle>Key Implementation Success Factors</CardTitle>
                      </div>
                      <CardDescription>
                        Common elements that contributed to successful PULSE deployments across different school
                        environments
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-4">
                          <h3 className="flex items-center gap-2 text-lg font-semibold">
                            <Users className="h-5 w-5 text-primary" />
                            Stakeholder Engagement
                          </h3>
                          <p className="text-muted-foreground">
                            Early and continuous involvement of all stakeholders proved critical to successful
                            implementation. Schools that engaged teachers, parents, students, and community leaders from
                            the planning stages saw higher adoption rates and stronger support.
                          </p>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Teacher workshops and input sessions during planning phase</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Parent orientation programs and regular updates</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h3 className="flex items-center gap-2 text-lg font-semibold">
                            <Award className="h-5 w-5 text-primary" />
                            Comprehensive Training
                          </h3>
                          <p className="text-muted-foreground">
                            Thorough training and ongoing support were essential for successful adoption. Schools that
                            invested in teacher development saw faster implementation and better outcomes.
                          </p>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Initial training workshops and certification</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-primary" />
                              <span>Ongoing mentorship and professional development</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="rounded-lg border bg-muted/40 p-6">
                        <h3 className="mb-4 font-semibold">Implementation Approach</h3>
                        <p className="text-muted-foreground mb-4">
                          Schools that implemented PULSE in phases rather than all at once experienced smoother
                          transitions and higher success rates. This allowed for learning and adaptation throughout the
                          process.
                        </p>
                        <div className="grid gap-4 md:grid-cols-3">
                          <div className="rounded-lg bg-background p-4">
                            <h4 className="font-medium">Phase 1: Pilot</h4>
                            <p className="mt-2 text-sm text-muted-foreground">
                              Start with a small group of teachers and classes to test and refine the implementation
                              approach.
                            </p>
                          </div>
                          <div className="rounded-lg bg-background p-4">
                            <h4 className="font-medium">Phase 2: Expansion</h4>
                            <p className="mt-2 text-sm text-muted-foreground">
                              Gradually roll out to more classes, incorporating lessons learned from the pilot phase.
                            </p>
                          </div>
                          <div className="rounded-lg bg-background p-4">
                            <h4 className="font-medium">Phase 3: Full Integration</h4>
                            <p className="mt-2 text-sm text-muted-foreground">
                              Complete school-wide implementation with established support systems and best practices.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="space-y-8" id="metrics">
                  <h2 className="text-3xl font-bold tracking-tighter">Impact Metrics</h2>
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <BarChart className="h-5 w-5 text-primary" />
                        <CardTitle>Overall Performance Improvements</CardTitle>
                      </div>
                      <CardDescription>
                        Aggregated results across all implementation types after 12 months
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      <div className="grid gap-6 md:grid-cols-4">
                        {[
                          { value: "35%", label: "Average grade improvement across all subjects" },
                          { value: "42%", label: "Reduction in achievement gaps between student groups" },
                          { value: "85%", label: "Student engagement and participation rates" },
                          { value: "90%", label: "Teacher adoption and satisfaction" },
                        ].map((stat, index) => (
                          <ScrollReveal key={index} delay={index * 0.1}>
                            <Card className="border-primary/20 bg-primary/5">
                              <CardHeader className="pb-2">
                                <CardTitle className="text-3xl font-bold text-primary">{stat.value}</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-sm text-muted-foreground">{stat.label}</p>
                              </CardContent>
                            </Card>
                          </ScrollReveal>
                        ))}
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <Card className="overflow-hidden">
                          <CardHeader>
                            <CardTitle className="text-lg">Academic Performance</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Mathematics</span>
                                <span className="text-sm text-primary">+38%</span>
                              </div>
                              <div className="h-2 w-full rounded-full bg-muted">
                                <div className="h-2 rounded-full bg-primary" style={{ width: "38%" }}></div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Science</span>
                                <span className="text-sm text-primary">+32%</span>
                              </div>
                              <div className="h-2 w-full rounded-full bg-muted">
                                <div className="h-2 rounded-full bg-primary" style={{ width: "32%" }}></div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Language Arts</span>
                                <span className="text-sm text-primary">+29%</span>
                              </div>
                              <div className="h-2 w-full rounded-full bg-muted">
                                <div className="h-2 rounded-full bg-primary" style={{ width: "29%" }}></div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="overflow-hidden">
                          <CardHeader>
                            <CardTitle className="text-lg">Long-term Impact</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <p className="text-muted-foreground">
                              Schools that have implemented PULSE for over a year report sustained improvements in
                              academic performance, teacher retention, and resource optimization.
                            </p>
                            <div className="grid gap-4 md:grid-cols-2">
                              <div className="rounded-lg bg-background p-4">
                                <div className="flex items-center gap-2">
                                  <PieChart className="h-5 w-5 text-primary" />
                                  <h4 className="font-medium">Sustainable Growth</h4>
                                </div>
                                <p className="mt-2 text-sm text-muted-foreground">
                                  Year-over-year improvement continues at 15-20% after initial implementation gains.
                                </p>
                              </div>
                              <div className="rounded-lg bg-background p-4">
                                <div className="flex items-center gap-2">
                                  <Users className="h-5 w-5 text-primary" />
                                  <h4 className="font-medium">Teacher Retention</h4>
                                </div>
                                <p className="mt-2 text-sm text-muted-foreground">
                                  Schools using PULSE report 28% higher teacher retention rates compared to similar
                                  schools.
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>

              {/* Fallback for any case studies that fail to load */}
              <div id="case-studies-error" className={Object.keys(loadingErrors).length > 2 ? "" : "hidden"}>
                <Card className="p-6 text-center">
                  <CardContent className="space-y-4 pt-6">
                    <h3 className="text-xl font-semibold">Some case studies could not be displayed</h3>
                    <p className="text-muted-foreground">
                      We're experiencing technical difficulties loading some case studies. Please try refreshing the
                      page or contact support if the issue persists.
                    </p>
                    <Button onClick={() => window.location.reload()}>Refresh Page</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
