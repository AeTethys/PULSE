import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Check, ArrowRight, Clock, Target, Rocket, Globe2, Sparkles } from "lucide-react"

const phases = [
  {
    year: "2025-2026",
    title: "Vision & Foundation",
    icon: Target,
    description: "Launching PULSE and establishing our core platform",
    status: "In Progress",
    progress: 25,
    milestones: [
      "Launch core AI-driven analytics",
      "Implement personalized learning paths",
      "Pilot in 50+ schools",
      "Secure partnerships with education ministries",
    ],
  },
  {
    year: "2026-2027",
    title: "Platform Enhancement",
    icon: Sparkles,
    description: "Strengthening core features and expanding capabilities",
    status: "Planned",
    progress: 0,
    milestones: [
      "Launch advanced analytics dashboard",
      "Implement AI emotion recognition",
      "Expand to 500+ schools",
      "Develop comprehensive teacher resources",
    ],
  },
  {
    year: "2027-2030",
    title: "Growth & Innovation",
    icon: Rocket,
    description: "Expanding reach and enhancing capabilities",
    status: "Upcoming",
    progress: 0,
    milestones: [
      "Expand to 1,000+ schools",
      "Launch predictive analytics",
      "Develop teacher training programs",
      "Implement school financial tools",
    ],
  },
  {
    year: "2030+",
    title: "Global Impact",
    icon: Globe2,
    description: "Scaling globally and maximizing impact",
    status: "Planned",
    progress: 0,
    milestones: [
      "Scale to multiple regions",
      "Adapt to regional curricula",
      "Partner with UNESCO",
      "Impact 50 million+ learners",
    ],
  },
]

const upcomingFeatures = [
  {
    year: 2025,
    features: [
      "Advanced AI emotion recognition",
      "Early intervention system",
      "Enhanced data analytics dashboard",
      "Automated progress tracking",
    ],
  },
  {
    year: 2026,
    features: [
      "Peer learning networks",
      "School financial management tools",
      "Advanced resource allocation AI",
      "Real-time collaboration tools",
    ],
  },
  {
    year: 2027,
    features: [
      "Global curriculum adaptation",
      "Multi-language support expansion",
      "Cross-border collaboration tools",
      "AI-powered content generation",
    ],
  },
  {
    year: 2028,
    features: [
      "Predictive learning outcomes",
      "Advanced personalization engine",
      "Global education marketplace",
      "Integrated virtual classrooms",
    ],
  },
]

export default function RoadmapPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-muted/40 py-24">
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="mx-auto max-w-[800px] space-y-4 text-center">
              <Badge>Roadmap</Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Building the Future of Education</h1>
              <p className="text-lg text-muted-foreground">
                Our journey to transform education through AI-powered personalized learning
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-[800px] space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Growth Timeline</h2>
              <p className="text-muted-foreground">
                Follow our journey as we work to make quality education accessible to all
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 space-y-8">
            {phases.map((phase, index) => (
              <ScrollReveal key={phase.year} delay={index * 0.1}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <phase.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle>{phase.title}</CardTitle>
                          <CardDescription>{phase.year}</CardDescription>
                        </div>
                      </div>
                      <Badge variant={phase.status === "In Progress" ? "default" : "secondary"}>{phase.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{phase.description}</p>
                      {phase.progress > 0 && (
                        <div className="space-y-2">
                          <div className="text-sm font-medium">{phase.progress}% Complete</div>
                          <div className="h-2 rounded-full bg-muted">
                            <div
                              className="h-full rounded-full bg-primary transition-all"
                              style={{ width: `${phase.progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {phase.milestones.map((milestone, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                            <span className="text-sm">{milestone}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Features Section */}
      <section className="border-t bg-muted/30 py-24">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-[800px] space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Future Innovations</h2>
              <p className="text-muted-foreground">Discover the exciting features and improvements coming to PULSE</p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {upcomingFeatures.map((year, index) => (
              <ScrollReveal key={year.year} delay={index * 0.1}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <CardTitle>{year.year}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {year.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-[800px] space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Be Part of Our Journey</h2>
              <p className="text-lg text-muted-foreground">
                Join us in transforming education and creating better learning opportunities for students worldwide
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Schedule a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
