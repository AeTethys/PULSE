"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useEffect } from "react"
import {
  Brain,
  Shield,
  Zap,
  Globe,
  BookOpen,
  MessageSquare,
  ArrowRight,
  Check,
  BarChart,
  Layout,
  Users,
  Settings,
  Bot,
  PenTool,
  Search,
  GraduationCap,
} from "lucide-react"

export default function FeaturesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-muted/40 py-24">
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="mx-auto max-w-[800px] space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">How PULSE Smart Learning Works</h1>
              <p className="text-lg text-muted-foreground">
                PULSE redefines education by combining cutting-edge AI, intuitive design, and actionable insights to
                create a personalized, engaging, and equitable learning experience.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      </section>

      {/* Core Features */}
      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-[800px] space-y-4 text-center">
              <Badge>Core Features</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Transforming Education with Smart Technology
              </h2>
              <p className="text-muted-foreground">
                Discover how PULSE empowers students, teachers, and administrators with innovative tools and insights.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16">
            <Tabs defaultValue="ai" className="mx-auto max-w-4xl">
              <ScrollReveal>
                <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7">
                  <TabsTrigger value="ai">AI</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="dashboards">Dashboards</TabsTrigger>
                  <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
                  <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
                  <TabsTrigger value="management">Management</TabsTrigger>
                  <TabsTrigger value="ai-assistant">AI Assistant</TabsTrigger>
                </TabsList>
              </ScrollReveal>

              <TabsContent value="ai" className="mt-8">
                <div className="grid gap-8 lg:grid-cols-2">
                  <ScrollReveal>
                    <div className="space-y-4">
                      <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                        <Brain className="mr-2 h-4 w-4" />
                        AI-Driven Personalization
                      </div>
                      <h3 className="text-2xl font-bold">Adaptive Learning Paths</h3>
                      <p className="text-muted-foreground">
                        PULSE's AI analyzes each student's strengths, weaknesses, and learning pace to create customized
                        lesson plans and assignments.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>Personalized learning recommendations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>Smart content adaptation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>Progress-based difficulty adjustment</span>
                        </li>
                      </ul>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal>
                    <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PULSE%27s%20AI%20analyzes%20each%20student%27s%20strengths%2C%20weaknesses%2C%20and%20learning%20pace%20to%20create%20customized%20lesson%20plans%20and%20assignments._%20%281%29.jpg-0vbFiJe8xmqALy1TZo1Mf2vihN45FM.jpeg"
                        alt="AI-powered learning"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </ScrollReveal>
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="mt-8">
                <div className="grid gap-8 lg:grid-cols-2">
                  <ScrollReveal>
                    <div className="space-y-4">
                      <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                        <BarChart className="mr-2 h-4 w-4" />
                        Real-Time Analytics
                      </div>
                      <h3 className="text-2xl font-bold">Data-Driven Insights</h3>
                      <p className="text-muted-foreground">
                        Transform raw data into actionable insights with comprehensive analytics tools that help track
                        student progress and identify areas for improvement.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>Performance tracking dashboards</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>Predictive analytics for early intervention</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>Automated progress reports</span>
                        </li>
                      </ul>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal>
                    <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Performance%20tracking%20dashboards_Predictive%20analytics%20for%20early%20intervention_Automated%20progress%20reports.jpg-PDfpMchfNpmZfeJCWLMvgRUGWXqxLy.jpeg"
                        alt="Performance tracking dashboard showing predictive analytics and automated progress reports with interactive charts and graphs"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </ScrollReveal>
                </div>
              </TabsContent>

              <TabsContent value="dashboards" className="mt-8">
                <div className="grid gap-8 lg:grid-cols-2">
                  <ScrollReveal>
                    <div className="space-y-4">
                      <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                        <Layout className="mr-2 h-4 w-4" />
                        Comprehensive Dashboards
                      </div>
                      <h3 className="text-2xl font-bold">Role-Based Interfaces</h3>
                      <p className="text-muted-foreground">
                        Tailored dashboards for students, teachers, and administrators provide relevant information and
                        tools for each user type.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>Student progress tracking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>Teacher management tools</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>Administrative oversight features</span>
                        </li>
                      </ul>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal>
                    <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Resource%20allocation%20tracking_Staff%20performance%20monitoring_Financial%20management%20tools_.jpg-NHICrXi3b3qAkiSRDdfQCnpDaXxFNJ.jpeg"
                        alt="School management dashboard showing resource allocation, staff performance, and financial management tools"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </ScrollReveal>
                </div>
              </TabsContent>

              <TabsContent value="collaboration" className="mt-8">
                <div className="grid gap-8 lg:grid-cols-2">
                  <ScrollReveal>
                    <div className="space-y-4">
                      <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                        <Users className="mr-2 h-4 w-4" />
                        Collaborative Tools
                      </div>
                      <h3 className="text-2xl font-bold">Connected Learning Community</h3>
                      <p className="text-muted-foreground">
                        Foster collaboration between students, teachers, and parents with integrated communication and
                        sharing tools.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>Real-time messaging system</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>Group project workspaces</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>Parent-teacher communication</span>
                        </li>
                      </ul>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal>
                    <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Seamless%20Communication___A%20triptych%20visualization%20showing%20simultaneous%20communication%20between%20teacher%2C%20parent%2C%20and%20student%20interfaces.%20Messages%20flow%20between%20devices%20with%20translation%20happening%20in%20real-time.jpg-9fMadgrJNMApBHenXiF1Pn0P4pdI6c.jpeg"
                        alt="Cross-platform communication visualization showing seamless messaging between laptop, mobile, and tablet devices, connected by flowing gradient ribbons"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </ScrollReveal>
                </div>
              </TabsContent>

              <TabsContent value="accessibility" className="mt-8">
                <div className="grid gap-8 lg:grid-cols-2">
                  <ScrollReveal>
                    <div className="space-y-4">
                      <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                        <Globe className="mr-2 h-4 w-4" />
                        Universal Access
                      </div>
                      <h3 className="text-2xl font-bold">Education for Everyone</h3>
                      <p className="text-muted-foreground">
                        Ensure equal access to education with comprehensive accessibility features and multi-language
                        support.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>Screen reader compatibility</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>Multiple language options</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>Offline learning support</span>
                        </li>
                      </ul>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal>
                    <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Multi-stakeholder%20Communication__Offline%20Learning___A%20student%20using%20PULSE%20on%20a%20tablet%20in%20a%20rural%20setting%20without%20visible%20internet%20infrastructure%2C%20with%20visual%20indicators%20showing%20the%20system%20is%20working%20in%20offl%20%282%29.jpg-bzrWHA1tBepF2KDIC0LSxbuKBACHQk.jpeg"
                        alt="African student using PULSE offline in a rural setting, demonstrating universal access to education"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </ScrollReveal>
                </div>
              </TabsContent>

              <TabsContent value="management" className="mt-8">
                <div className="grid gap-8 lg:grid-cols-2">
                  <ScrollReveal>
                    <div className="space-y-4">
                      <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                        <Settings className="mr-2 h-4 w-4" />
                        School Management
                      </div>
                      <h3 className="text-2xl font-bold">Streamlined Administration</h3>
                      <p className="text-muted-foreground">
                        Comprehensive tools for managing school operations, resources, and administrative tasks
                        efficiently.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>Resource allocation tracking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>Staff performance monitoring</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>Financial management tools</span>
                        </li>
                      </ul>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal>
                    <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Resource%20allocation%20tracking_Staff%20performance%20monitoring_Financial%20management%20tools_.jpg-NHICrXi3b3qAkiSRDdfQCnpDaXxFNJ.jpeg"
                        alt="School management dashboard showing resource allocation, staff performance, and financial management tools"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </ScrollReveal>
                </div>
              </TabsContent>

              <TabsContent value="ai-assistant" className="mt-8">
                <div className="grid gap-8 lg:grid-cols-2">
                  <ScrollReveal>
                    <div className="space-y-4">
                      <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                        <Bot className="mr-2 h-4 w-4" />
                        AI Learning Companion
                      </div>
                      <h3 className="text-2xl font-bold">Your Partner in Learning</h3>
                      <p className="text-muted-foreground">
                        The PULSE AI Assistant is more than a tool—it's a learning companion that helps students develop
                        the skills they need to succeed through guided discovery and personalized support.
                      </p>
                      <div className="grid gap-4">
                        <Card>
                          <CardHeader className="space-y-1">
                            <div className="flex items-center gap-2">
                              <PenTool className="h-4 w-4 text-primary" />
                              <CardTitle className="text-base">Writing Assistant</CardTitle>
                            </div>
                            <CardDescription>
                              Improve your writing with grammar suggestions, creative prompts, and peer examples
                            </CardDescription>
                          </CardHeader>
                        </Card>
                        <Card>
                          <CardHeader className="space-y-1">
                            <div className="flex items-center gap-2">
                              <Search className="h-4 w-4 text-primary" />
                              <CardTitle className="text-base">Research Assistant</CardTitle>
                            </div>
                            <CardDescription>
                              Find credible sources, summarize articles, and fact-check information
                            </CardDescription>
                          </CardHeader>
                        </Card>
                        <Card>
                          <CardHeader className="space-y-1">
                            <div className="flex items-center gap-2">
                              <GraduationCap className="h-4 w-4 text-primary" />
                              <CardTitle className="text-base">Personalized Tutor</CardTitle>
                            </div>
                            <CardDescription>
                              Receive tailored practice exercises and motivational feedback based on your progress
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      </div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal>
                    <div className="space-y-6">
                      <div className="rounded-lg border bg-card p-4">
                        <div className="mb-4 flex items-center gap-2">
                          <Bot className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold">Example Interaction</h4>
                        </div>
                        <div className="space-y-4">
                          <div className="flex gap-2">
                            <div className="rounded-lg bg-muted p-3 text-sm">
                              Can you help me with this math problem?
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <div className="rounded-lg bg-primary/10 p-3 text-sm">
                              I'd be happy to guide you! Instead of giving you the answer, let's break down the problem
                              together. What's the first step you think we should take?
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <div className="rounded-lg bg-muted p-3 text-sm">I'm not sure where to start...</div>
                          </div>
                          <div className="flex gap-2">
                            <div className="rounded-lg bg-primary/10 p-3 text-sm">
                              That's okay! Let's identify what we know first. Can you tell me what information is given
                              in the problem? This will help us create a plan to solve it.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <Button size="lg" asChild>
                          <Link href="/demo">
                            Watch Demo
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="border-t bg-muted/30 py-24">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-[800px] space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why PULSE Stands Out</h2>
              <p className="text-muted-foreground">
                Our platform combines powerful features with intuitive design to create an unmatched educational
                experience.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <Card className="relative overflow-hidden transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>{benefit}</span>
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

      {/* Stats Section */}
      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-[800px] space-y-4 text-center">
              <Badge>Proven Impact</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Transforming Education Across Schools</h2>
              <p className="text-muted-foreground">
                See the measurable difference PULSE makes in educational outcomes.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.value} delay={index * 0.1}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold text-primary">{stat.value}</CardTitle>
                    <CardDescription>{stat.label}</CardDescription>
                  </CardHeader>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/30 py-24">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-[800px] space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join the Future of Education</h2>
              <p className="text-lg text-muted-foreground">
                Whether you're a teacher tired of paperwork, a parent seeking transparency, or a school leader aiming
                for excellence, PULSE empowers you to create an environment where every student thrives.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Schedule a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}

const features = [
  {
    icon: Brain,
    title: "AI That Understands Humans",
    description: "Intelligent learning that adapts to each student's needs",
    benefits: ["Emotion recognition in work patterns", "Growth mindset coaching", "Personalized motivation"],
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "Enterprise-grade protection for educational data",
    benefits: ["End-to-end encryption", "GDPR/COPPA compliance", "Regular security audits"],
  },
  {
    icon: Zap,
    title: "Seamless Integration",
    description: "Works with your existing educational tools",
    benefits: ["LMS platform compatibility", "API ecosystem", "Custom plugin support"],
  },
  {
    icon: Globe,
    title: "Accessibility First",
    description: "Education available to everyone, everywhere",
    benefits: ["Multi-language support", "Screen reader compatibility", "Offline mode"],
  },
  {
    icon: BookOpen,
    title: "Comprehensive Learning",
    description: "Complete toolkit for educational success",
    benefits: ["Interactive lessons", "Resource library", "Progress tracking"],
  },
  {
    icon: MessageSquare,
    title: "Enhanced Communication",
    description: "Better connection between all stakeholders",
    benefits: ["Parent-teacher messaging", "Progress updates", "Community features"],
  },
]

const stats = [
  {
    value: "25%",
    label: "Improvement in student engagement",
  },
  {
    value: "15%",
    label: "Reduction in administrative costs",
  },
  {
    value: "90%",
    label: "Teacher & parent satisfaction",
  },
  {
    value: "12hrs",
    label: "Monthly time saved per teacher",
  },
]
