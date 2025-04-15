import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal } from "@/components/scroll-reveal"
import {
  ArrowLeft,
  LayoutGrid,
  BarChart,
  Users,
  MessageSquare,
  Bell,
  Shield,
  Check,
  Calendar,
  BookOpen,
  Settings,
  FileText,
  Zap,
} from "lucide-react"

export default function PlatformOverviewPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-muted/40 py-16">
        <div className="container relative z-10">
          <div className="flex items-center gap-2 mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/help">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Help Center
              </Link>
            </Button>
          </div>
          <ScrollReveal>
            <div className="mx-auto max-w-[800px] space-y-4">
              <Badge>Platform Overview</Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">PULSE Dashboards</h1>
              <p className="text-lg text-muted-foreground">
                A comprehensive guide to the role-specific dashboards in the PULSE platform
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      </section>

      {/* Dashboard Introduction */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">The PULSE Dashboard Ecosystem</h2>
                <p className="text-lg text-muted-foreground">
                  PULSE features role-specific dashboards tailored to the unique needs of teachers, learners, parents,
                  and administrators. Each dashboard provides a personalized interface with relevant tools, analytics,
                  and features to enhance the educational experience.
                </p>
                <div className="relative aspect-video overflow-hidden rounded-xl border">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Teacher%20Empowerment_Visual_%20A%20teacher%20using%20PULSE%E2%80%99s%20dashboard%20to%20track%20class%20performance.__The%20screen%20shows%20analytics%2C%20student%20progress%2C%20and%20lesson%20plans.__Background_%20A%20modern%2C%20well-organized%20classroom%20with%20st.jpg-y1sBxyxPDMxlVWntYJPCats8NK5Cae.jpeg"
                    alt="PULSE dashboard ecosystem"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Role-specific Dashboards */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl space-y-4 text-center">
              <h2 className="text-3xl font-bold">Role-Specific Dashboards</h2>
              <p className="text-muted-foreground">
                Explore the tailored interfaces designed for each stakeholder in the educational process
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-4xl mt-12">
            <Tabs defaultValue="teacher" className="w-full">
              <ScrollReveal>
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="teacher">Teacher</TabsTrigger>
                  <TabsTrigger value="learner">Learner</TabsTrigger>
                  <TabsTrigger value="parent">Parent</TabsTrigger>
                  <TabsTrigger value="admin">Administrator</TabsTrigger>
                </TabsList>
              </ScrollReveal>

              <TabsContent value="teacher" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <LayoutGrid className="h-5 w-5 text-primary" />
                      <CardTitle>Teacher Dashboard</CardTitle>
                    </div>
                    <CardDescription>
                      Comprehensive tools for classroom management, student assessment, and curriculum planning
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Teacher%20Empowerment_Visual_%20A%20teacher%20using%20PULSE%E2%80%99s%20dashboard%20to%20track%20class%20performance.__The%20screen%20shows%20analytics%2C%20student%20progress%2C%20and%20lesson%20plans.__Background_%20A%20modern%2C%20well-organized%20classroom%20with%20st.jpg-y1sBxyxPDMxlVWntYJPCats8NK5Cae.jpeg"
                        alt="Teacher dashboard interface"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <h4 className="font-medium">Key Dashboard Modules:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <BarChart className="mt-1 h-4 w-4 text-primary" />
                            <span>Class Performance Analytics</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Users className="mt-1 h-4 w-4 text-primary" />
                            <span>Student Progress Tracking</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <BookOpen className="mt-1 h-4 w-4 text-primary" />
                            <span>Lesson Planning & Resources</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <FileText className="mt-1 h-4 w-4 text-primary" />
                            <span>Assignment Management</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dashboard Features:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="mt-1 h-4 w-4 text-primary" />
                            <span>AI-assisted grading and feedback</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="mt-1 h-4 w-4 text-primary" />
                            <span>Real-time student engagement monitoring</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="mt-1 h-4 w-4 text-primary" />
                            <span>Customizable assessment tools</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="mt-1 h-4 w-4 text-primary" />
                            <span>Integrated communication center</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="learner" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <LayoutGrid className="h-5 w-5 text-primary" />
                      <CardTitle>Learner Dashboard</CardTitle>
                    </div>
                    <CardDescription>
                      Personalized learning interface that adapts to individual student needs and progress
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dynamic%20Classroom%20Scene_Visual_%20A%20vibrant%20classroom%20with%20students%20of%20diverse%20backgrounds%20engaged%20in%20learning.__Students%20using%20tablets%20or%20laptops%20with%20PULSE%E2%80%99s%20interface%20visible.__A%20teacher%20guiding%20a%20small%20group%2C.jpg-A6zx1BRjfxyOHjzloonFUfHJUbpzmO.jpeg"
                        alt="Learner dashboard interface"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <h4 className="font-medium">Key Dashboard Modules:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Zap className="mt-1 h-4 w-4 text-primary" />
                            <span>Personalized Learning Path</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Calendar className="mt-1 h-4 w-4 text-primary" />
                            <span>Assignment Calendar</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <BarChart className="mt-1 h-4 w-4 text-primary" />
                            <span>Progress & Achievement Tracking</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <MessageSquare className="mt-1 h-4 w-4 text-primary" />
                            <span>AI Learning Assistant</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dashboard Features:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="mt-1 h-4 w-4 text-primary" />
                            <span>Gamified learning elements</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="mt-1 h-4 w-4 text-primary" />
                            <span>Interactive study materials</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="mt-1 h-4 w-4 text-primary" />
                            <span>Real-time feedback on assignments</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="mt-1 h-4 w-4 text-primary" />
                            <span>Peer collaboration tools</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="parent" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <LayoutGrid className="h-5 w-5 text-primary" />
                      <CardTitle>Parent Dashboard</CardTitle>
                    </div>
                    <CardDescription>
                      Comprehensive visibility into student progress, activities, and communication with teachers
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Multi-stakeholder%20Communication___A%20split-screen%20image%20showing%20the%20same%20information%20being%20viewed%20simultaneously%20by%20a%20teacher%20at%20a%20desk%2C%20a%20parent%20on%20a%20phone%2C%20and%20a%20student%20on%20a%20tablet%2C%20with%20visual%20elements%20conne.jpg-gcAq3jb84PwVzMRN6eXcoUosNrCVqk.jpeg"
                        alt="Parent dashboard interface"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <h4 className="font-medium">Key Dashboard Modules:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <BarChart className="mt-1 h-4 w-4 text-primary" />
                            <span>Academic Progress Monitoring</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Calendar className="mt-1 h-4 w-4 text-primary" />
                            <span>Assignment & Due Date Tracking</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <MessageSquare className="mt-1 h-4 w-4 text-primary" />
                            <span>Teacher Communication Center</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Bell className="mt-1 h-4 w-4 text-primary" />
                            <span>Notifications & Alerts</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dashboard Features:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="mt-1 h-4 w-4 text-primary" />
                            <span>Attendance and behavior tracking</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="mt-1 h-4 w-4 text-primary" />
                            <span>Learning resource recommendations</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="mt-1 h-4 w-4 text-primary" />
                            <span>School event calendar integration</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="mt-1 h-4 w-4 text-primary" />
                            <span>Mobile-optimized interface</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="admin" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <LayoutGrid className="h-5 w-5 text-primary" />
                      <CardTitle>Administrator Dashboard</CardTitle>
                    </div>
                    <CardDescription>
                      Powerful oversight tools for school or district-wide management and data analysis
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BarChart className="h-24 w-24 text-primary/20" />
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <h4 className="font-medium">Key Dashboard Modules:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <BarChart className="mt-1 h-4 w-4 text-primary" />
                            <span>Institution-wide Analytics</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Users className="mt-1 h-4 w-4 text-primary" />
                            <span>User Management</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Settings className="mt-1 h-4 w-4 text-primary" />
                            <span>System Configuration</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Shield className="mt-1 h-4 w-4 text-primary" />
                            <span>Security & Compliance</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dashboard Features:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="mt-1 h-4 w-4 text-primary" />
                            <span>Customizable reporting tools</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="mt-1 h-4 w-4 text-primary" />
                            <span>Resource allocation management</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="mt-1 h-4 w-4 text-primary" />
                            <span>Curriculum oversight and planning</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="mt-1 h-4 w-4 text-primary" />
                            <span>Integration with SIS and other systems</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="py-16">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl space-y-4 text-center">
              <h2 className="text-3xl font-bold">Common Dashboard Features</h2>
              <p className="text-muted-foreground">Core functionality available across all PULSE dashboards</p>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-4xl mt-12 grid gap-6 md:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Data Visualization</CardTitle>
                  <CardDescription>Intuitive charts and graphs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary" />
                      <span>Interactive data exploration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary" />
                      <span>Customizable views and filters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary" />
                      <span>Export capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary" />
                      <span>Trend analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Communication Tools</CardTitle>
                  <CardDescription>Seamless messaging system</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary" />
                      <span>Real-time messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary" />
                      <span>File sharing capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary" />
                      <span>Translation support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary" />
                      <span>Message scheduling</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Personalization</CardTitle>
                  <CardDescription>Tailored user experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary" />
                      <span>Customizable widgets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary" />
                      <span>Notification preferences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary" />
                      <span>Accessibility settings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-primary" />
                      <span>Theme customization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Dashboard Navigation */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl space-y-4">
              <h2 className="text-3xl font-bold text-center">Dashboard Navigation</h2>
              <p className="text-muted-foreground text-center mb-8">
                Understanding the interface layout and navigation elements
              </p>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-medium">Main Navigation</h3>
                        <p className="text-sm text-muted-foreground">
                          The primary sidebar navigation provides access to all major sections of your dashboard.
                        </p>
                        <ul className="space-y-1 mt-4">
                          <li className="flex items-center gap-2 text-sm">
                            <LayoutGrid className="h-4 w-4 text-primary" />
                            <span>Dashboard Home - Overview and summary</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <Users className="h-4 w-4 text-primary" />
                            <span>People - Users, classes, and groups</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <BookOpen className="h-4 w-4 text-primary" />
                            <span>Content - Lessons and resources</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <BarChart className="h-4 w-4 text-primary" />
                            <span>Analytics - Performance data</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <MessageSquare className="h-4 w-4 text-primary" />
                            <span>Messages - Communication center</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <Settings className="h-4 w-4 text-primary" />
                            <span>Settings - Account preferences</span>
                          </li>
                        </ul>
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-medium">Quick Actions</h3>
                        <p className="text-sm text-muted-foreground">
                          The top toolbar provides access to frequently used actions and notifications.
                        </p>
                        <ul className="space-y-1 mt-4">
                          <li className="flex items-center gap-2 text-sm">
                            <Bell className="h-4 w-4 text-primary" />
                            <span>Notifications - Alerts and updates</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <MessageSquare className="h-4 w-4 text-primary" />
                            <span>Messages - Recent communications</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>Calendar - Upcoming events</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <Zap className="h-4 w-4 text-primary" />
                            <span>Quick Add - Create new content</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <h3 className="text-xl font-medium mb-4">Dashboard Customization</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        All PULSE dashboards can be customized to match your workflow and preferences:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <div>
                            <span className="font-medium">Widget Arrangement</span>
                            <p className="text-xs text-muted-foreground">
                              Drag and drop widgets to customize your layout
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <div>
                            <span className="font-medium">Favorites</span>
                            <p className="text-xs text-muted-foreground">Pin frequently used items for quick access</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <div>
                            <span className="font-medium">Display Options</span>
                            <p className="text-xs text-muted-foreground">
                              Adjust view modes, density, and information display
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <div>
                            <span className="font-medium">Notification Settings</span>
                            <p className="text-xs text-muted-foreground">Control which alerts you receive and how</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl space-y-8 text-center">
              <h2 className="text-3xl font-bold">Ready to Explore Your Dashboard?</h2>
              <p className="text-lg text-muted-foreground">
                Access detailed guides for each dashboard type to maximize your PULSE experience
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/help/getting-started">Dashboard Tutorials</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Request Demo</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
