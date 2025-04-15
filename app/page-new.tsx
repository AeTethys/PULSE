import Link from "next/link"
import Image from "next/image"
import { Book, CalendarCheck, MessageSquare, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import NewsletterSignup from "@/components/newsletter-signup"
import StatsCounter from "@/components/stats-counter"
import TestimonialCarousel from "@/components/testimonial-carousel"
import FeatureShowcase from "@/components/feature-showcase"
import { ScrollReveal } from "@/components/scroll-reveal"
import AnimatedChart from "@/components/animated-chart"
import { SmoothScrollSection } from "@/components/smooth-scroll-section"
import EnhancedHero from "@/components/enhanced-hero"

export default function HomePage() {
  return (
    <main>
      {/* Enhanced Hero Section */}
      <EnhancedHero />

      {/* Stats Section with Simplified Design */}
      <SmoothScrollSection className="border-y bg-muted/30" id="stats">
        <div className="container py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <StatsCounter end={25} suffix="+" label="Schools" />
            <StatsCounter end={15000} suffix="+" label="Students" />
            <StatsCounter end={89} suffix="%" label="Satisfaction" />
            <StatsCounter end={32} suffix="%" label="Grade Improvement" />
          </div>
        </div>
      </SmoothScrollSection>

      {/* Consolidated Benefits & Features Section */}
      <SmoothScrollSection className="py-16 md:py-24" id="features">
        <div className="container">
          <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tighter md:text-4xl">Education Tailored For Everyone</h2>
            <p className="text-muted-foreground">
              PULSE transforms the educational experience for everyone involved - students gain confidence, teachers
              save time, and parents stay connected.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {/* For Students */}
            <ScrollReveal>
              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Book className="h-7 w-7" />
                  </div>
                  <CardTitle>For Students</CardTitle>
                  <CardDescription>Personalized learning journeys</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                      <span>Adaptive learning paths that evolve with progress</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                      <span>Instant feedback on assignments and quizzes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                      <span>Gamified learning experience with rewards</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                      <span>Accessibility features for all learning styles</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/features#students">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </ScrollReveal>

            {/* For Teachers */}
            <ScrollReveal>
              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CalendarCheck className="h-7 w-7" />
                  </div>
                  <CardTitle>For Teachers</CardTitle>
                  <CardDescription>AI-powered teaching assistant</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                      <span>Automated grading and assignment creation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                      <span>Data-driven insights on class performance</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                      <span>Early intervention alerts for struggling students</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                      <span>Customizable curriculum and lesson plans</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/features#teachers">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </ScrollReveal>

            {/* For Parents */}
            <ScrollReveal>
              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MessageSquare className="h-7 w-7" />
                  </div>
                  <CardTitle>For Parents</CardTitle>
                  <CardDescription>Stay connected and informed</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                      <span>Real-time progress updates and notifications</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                      <span>Direct messaging with teachers and staff</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                      <span>Insights on strengths and areas for growth</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                      <span>Resources to support learning at home</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/features#parents">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </SmoothScrollSection>

      {/* Simplified Feature Showcase */}
      <SmoothScrollSection className="py-16 md:py-24 bg-muted/30" id="tools">
        <div className="container">
          <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tighter md:text-4xl">Powerful Tools for Learning</h2>
            <p className="text-muted-foreground">
              Discover how PULSE's innovative features create an engaging and effective educational experience.
            </p>
          </ScrollReveal>

          <FeatureShowcase />
        </div>
      </SmoothScrollSection>

      {/* Platform Preview with Interactive Tabs */}
      <SmoothScrollSection className="py-16 md:py-24" id="platform">
        <div className="container">
          <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4">The Platform</Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tighter md:text-4xl">Experience PULSE in Action</h2>
            <p className="text-muted-foreground">
              See how our platform transforms the educational experience with AI-driven personalization and real-time
              analytics.
            </p>
          </ScrollReveal>

          <Tabs defaultValue="dashboard" className="mx-auto max-w-5xl">
            <div className="mb-8 flex justify-center">
              <TabsList className="grid w-full max-w-lg grid-cols-3">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="lessons">Lessons</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="dashboard" className="border rounded-xl bg-white p-2 shadow-lg">
              <div className="relative">
                <div className="relative bg-white rounded-lg shadow-md h-[450px] overflow-hidden">
                  {/* Dashboard Header */}
                  <div className="bg-primary/5 p-4 border-b flex items-center justify-between">
                    <div className="flex items-center">
                      <h3 className="font-medium text-lg">PULSE Dashboard</h3>
                      <span className="ml-4 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        Student View
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-muted/50 rounded-md px-3 py-1 text-sm flex items-center">
                        <span className="mr-2">Today</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3 4.5L6 7.5L9 4.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                        JS
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="grid grid-cols-12 gap-4 p-4 h-[calc(450px-64px)] overflow-auto">
                    {/* Left Column */}
                    <div className="col-span-8 space-y-4">
                      {/* Progress Overview */}
                      <div className="bg-white border rounded-lg p-4 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-medium">Weekly Progress</h4>
                          <div className="flex gap-2">
                            <span className="inline-flex items-center text-xs">
                              <span className="h-2 w-2 rounded-full bg-primary mr-1"></span>
                              Math
                            </span>
                            <span className="inline-flex items-center text-xs">
                              <span className="h-2 w-2 rounded-full bg-blue-400 mr-1"></span>
                              Science
                            </span>
                            <span className="inline-flex items-center text-xs">
                              <span className="h-2 w-2 rounded-full bg-green-400 mr-1"></span>
                              English
                            </span>
                          </div>
                        </div>
                        <div className="h-48 w-full bg-muted/20 rounded-md relative">
                          {/* Mock Chart */}
                          <div className="absolute inset-0 flex items-end p-4">
                            <div className="w-1/7 h-[30%] bg-primary rounded-t-md mx-1"></div>
                            <div className="w-1/7 h-[45%] bg-primary rounded-t-md mx-1"></div>
                            <div className="w-1/7 h-[60%] bg-primary rounded-t-md mx-1"></div>
                            <div className="w-1/7 h-[40%] bg-primary rounded-t-md mx-1"></div>
                            <div className="w-1/7 h-[70%] bg-primary rounded-t-md mx-1"></div>
                            <div className="w-1/7 h-[55%] bg-primary rounded-t-md mx-1"></div>
                            <div className="w-1/7 h-[65%] bg-primary rounded-t-md mx-1"></div>
                          </div>
                          <div className="absolute inset-0 flex items-end p-4 opacity-70">
                            <div className="w-1/7 h-[20%] bg-blue-400 rounded-t-md mx-1"></div>
                            <div className="w-1/7 h-[35%] bg-blue-400 rounded-t-md mx-1"></div>
                            <div className="w-1/7 h-[50%] bg-blue-400 rounded-t-md mx-1"></div>
                            <div className="w-1/7 h-[30%] bg-blue-400 rounded-t-md mx-1"></div>
                            <div className="w-1/7 h-[60%] bg-blue-400 rounded-t-md mx-1"></div>
                            <div className="w-1/7 h-[45%] bg-blue-400 rounded-t-md mx-1"></div>
                            <div className="w-1/7 h-[55%] bg-blue-400 rounded-t-md mx-1"></div>
                          </div>
                          <div className="absolute inset-0 flex items-end p-4 opacity-70">
                            <div className="w-1/7 h-[25%] bg-green-400 rounded-t-md mx-1"></div>
                            <div className="w-1/7 h-[40%] bg-green-400 rounded-t-md mx-1"></div>
                            <div className="w-1/7 h-[30%] bg-green-400 rounded-t-md mx-1"></div>
                            <div className="w-1/7 h-[50%] bg-green-400 rounded-t-md mx-1"></div>
                            <div className="w-1/7 h-[35%] bg-green-400 rounded-t-md mx-1"></div>
                            <div className="w-1/7 h-[60%] bg-green-400 rounded-t-md mx-1"></div>
                            <div className="w-1/7 h-[45%] bg-green-400 rounded-t-md mx-1"></div>
                          </div>
                        </div>
                      </div>

                      {/* Upcoming Assignments */}
                      <div className="bg-white border rounded-lg p-4 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-medium">Upcoming Assignments</h4>
                          <button className="text-xs text-primary">View All</button>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-2 border rounded-md bg-muted/5 hover:bg-muted/10 transition-colors">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-md bg-primary/10 text-primary flex items-center justify-center mr-3">
                                M
                              </div>
                              <div>
                                <p className="text-sm font-medium">Algebra Quiz</p>
                                <p className="text-xs text-muted-foreground">Math - Due Tomorrow</p>
                              </div>
                            </div>
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                              In Progress
                            </span>
                          </div>
                          <div className="flex items-center justify-between p-2 border rounded-md bg-muted/5 hover:bg-muted/10 transition-colors">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                                S
                              </div>
                              <div>
                                <p className="text-sm font-medium">Lab Report</p>
                                <p className="text-xs text-muted-foreground">Science - Due in 3 days</p>
                              </div>
                            </div>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                              Not Started
                            </span>
                          </div>
                          <div className="flex items-center justify-between p-2 border rounded-md bg-muted/5 hover:bg-muted/10 transition-colors">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-md bg-green-100 text-green-600 flex items-center justify-center mr-3">
                                E
                              </div>
                              <div>
                                <p className="text-sm font-medium">Essay Draft</p>
                                <p className="text-xs text-muted-foreground">English - Due in 5 days</p>
                              </div>
                            </div>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                              Not Started
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-span-4 space-y-4">
                      {/* Performance Summary */}
                      <div className="bg-white border rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium mb-3">Performance</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>Math</span>
                              <span className="font-medium">87%</span>
                            </div>
                            <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                              <div className="h-full bg-primary rounded-full" style={{ width: "87%" }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>Science</span>
                              <span className="font-medium">76%</span>
                            </div>
                            <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                              <div className="h-full bg-blue-400 rounded-full" style={{ width: "76%" }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>English</span>
                              <span className="font-medium">92%</span>
                            </div>
                            <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                              <div className="h-full bg-green-400 rounded-full" style={{ width: "92%" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="bg-white border rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium mb-3">Recent Achievements</h4>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="flex flex-col items-center">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 15L8.5 18L9.5 14L6.5 11.5L10.5 11L12 7L13.5 11L17.5 11.5L14.5 14L15.5 18L12 15Z"
                                  fill="currentColor"
                                  className="text-primary"
                                />
                              </svg>
                            </div>
                            <span className="text-xs text-center">Math Whiz</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M20 6H4V18H20V6Z"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  className="text-blue-600"
                                />
                                <circle cx="12" cy="12" r="3" fill="currentColor" className="text-blue-600" />
                              </svg>
                            </div>
                            <span className="text-xs text-center">Lab Master</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-1">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 6V18M6 12H18"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  className="text-green-600"
                                />
                              </svg>
                            </div>
                            <span className="text-xs text-center">Perfect Score</span>
                          </div>
                        </div>
                      </div>

                      {/* Study Time */}
                      <div className="bg-white border rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium mb-3">Study Time</h4>
                        <div className="flex items-center justify-center">
                          <div className="relative h-24 w-24">
                            <svg viewBox="0 0 100 100" className="h-full w-full">
                              <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" strokeWidth="10" />
                              <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="10"
                                strokeDasharray="283"
                                strokeDashoffset="70"
                                className="text-primary"
                                transform="rotate(-90 50 50)"
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-xl font-bold">75%</div>
                                <div className="text-xs text-muted-foreground">of goal</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center mt-2 text-sm">
                          <p>15 hours this week</p>
                          <p className="text-xs text-muted-foreground">Goal: 20 hours</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-4 top-4 flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="border rounded-xl bg-white p-2 shadow-lg">
              <div className="relative">
                <div className="rounded-lg shadow-md overflow-hidden h-[450px]">
                  <AnimatedChart />
                </div>
                <div className="absolute left-4 top-4 flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="lessons" className="border rounded-xl bg-white p-2 shadow-lg">
              <div className="relative">
                <div className="rounded-lg shadow-md overflow-hidden">
                  {/* Lessons Header */}
                  <div className="bg-primary/5 p-4 border-b flex items-center justify-between">
                    <div className="flex items-center">
                      <h3 className="font-medium text-lg">PULSE Learning</h3>
                      <span className="ml-4 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        Mathematics
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-muted/50 rounded-md px-3 py-1 text-sm flex items-center">
                        <span className="mr-2">Module 3</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3 4.5L6 7.5L9 4.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                        JS
                      </div>
                    </div>
                  </div>

                  {/* Lessons Content */}
                  <div className="grid grid-cols-12 h-[calc(450px-64px)]">
                    {/* Left Sidebar - Course Navigation */}
                    <div className="col-span-3 border-r overflow-auto">
                      <div className="p-3 border-b bg-muted/10">
                        <h4 className="font-medium text-sm">Course Content</h4>
                      </div>
                      <div className="divide-y">
                        <div className="p-3 hover:bg-muted/10 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Module 1</span>
                            <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">Completed</span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">Introduction to Algebra</p>
                        </div>
                        <div className="p-3 hover:bg-muted/10 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Module 2</span>
                            <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">Completed</span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">Linear Equations</p>
                        </div>
                        <div className="p-3 bg-primary/5 border-l-2 border-primary cursor-pointer">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Module 3</span>
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded">
                              In Progress
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">Quadratic Equations</p>
                        </div>
                        <div className="p-3 hover:bg-muted/10 cursor-pointer">
                          <div className="flex items-center justifycursor-pointer">
                            <span className="text-sm font-medium">Module 4</span>
                            <span className="text-xs bg-muted/30 text-muted-foreground px-1.5 py-0.5 rounded">
                              Locked
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">Polynomials</p>
                        </div>
                        <div className="p-3 hover:bg-muted/10 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Module 5</span>
                            <span className="text-xs bg-muted/30 text-muted-foreground px-1.5 py-0.5 rounded">
                              Locked
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">Functions &amp; Graphs</p>
                        </div>
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="col-span-9 overflow-auto">
                      <div className="p-6">
                        <div className="mb-6">
                          <h2 className="text-2xl font-bold mb-2">Quadratic Equations</h2>
                          <p className="text-muted-foreground">
                            Learn how to solve quadratic equations using different methods.
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="flex items-center">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-muted-foreground mr-1"
                              >
                                <path
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span className="text-xs text-muted-foreground">45 minutes</span>
                            </div>
                            <div className="flex items-center">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-muted-foreground mr-1"
                              >
                                <path
                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-9.618 5.04L12 21.012l9.618-13.028z"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span className="text-xs text-muted-foreground">Intermediate</span>
                            </div>
                          </div>
                        </div>

                        {/* Video Player */}
                        <div className="relative bg-black rounded-lg overflow-hidden mb-6 aspect-video">
                          <Image
                            src="https://images.unsplash.com/photo-1621570071349-aa0668735f79?q=80&amp;w=1170&amp;auto=format&amp;fit=crop"
                            alt="Math lesson video"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-white ml-1"
                              >
                                <path d="M5 3l14 9-14 9V3z" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/70 to-transparent flex items-center px-4">
                            <div className="w-full bg-white/30 h-1 rounded-full overflow-hidden">
                              <div className="bg-primary h-full w-1/3"></div>
                            </div>
                            <span className="text-white text-xs ml-2">15:23 / 45:00</span>
                          </div>
                        </div>

                        {/* Interactive Exercise */}
                        <div className="border rounded-lg p-4 mb-6">
                          <h3 className="font-medium mb-3">Practice Exercise</h3>
                          <p className="mb-4">Solve the following quadratic equation: x² + 5x + 6 = 0</p>
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="border rounded p-3 hover:bg-primary/5 cursor-pointer transition-colors">
                              <div className="flex items-center">
                                <span className="h-5 w-5 rounded-full border flex items-center justify-center mr-2">
                                  A
                                </span>
                                <span>x = -2, x = -3</span>
                              </div>
                            </div>
                            <div className="border rounded p-3 hover:bg-primary/5 cursor-pointer transition-colors">
                              <div className="flex items-center">
                                <span className="h-5 w-5 rounded-full border flex items-center justify-center mr-2">
                                  B
                                </span>
                                <span>x = 2, x = 3</span>
                              </div>
                            </div>
                            <div className="border rounded p-3 hover:bg-primary/5 cursor-pointer transition-colors">
                              <div className="flex items-center">
                                <span className="h-5 w-5 rounded-full border flex items-center justify-center mr-2">
                                  C
                                </span>
                                <span>x = -2, x = 3</span>
                              </div>
                            </div>
                            <div className="border rounded p-3 hover:bg-primary/5 cursor-pointer transition-colors">
                              <div className="flex items-center">
                                <span className="h-5 w-5 rounded-full border flex items-center justify-center mr-2">
                                  D
                                </span>
                                <span>x = 2, x = -3</span>
                              </div>
                            </div>
                          </div>
                          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                            Submit Answer
                          </button>
                        </div>

                        {/* Next Steps */}
                        <div className="flex justify-between items-center">
                          <button className="flex items-center text-primary hover:underline">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="mr-1"
                            >
                              <path
                                d="M15 18l-6-6 6-6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            Previous Lesson
                          </button>
                          <button className="flex items-center bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                            Next Lesson
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="ml-1"
                            >
                              <path
                                d="M9 6l6 6-6 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-4 top-4 flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </SmoothScrollSection>

      {/* Testimonials - Simplified */}
      <SmoothScrollSection className="py-16 md:py-24 bg-muted/30" id="testimonials">
        <div className="container">
          <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tighter md:text-4xl">
              Loved by Educators, Students &amp; Parents
            </h2>
            <p className="text-muted-foreground">
              Discover how PULSE is transforming education in schools across the country.
            </p>
          </ScrollReveal>

          <TestimonialCarousel />
        </div>
      </SmoothScrollSection>

      {/* CTA Section - Simplified */}
      <SmoothScrollSection className="bg-primary py-16 md:py-24" id="cta">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <ScrollReveal>
              <h2 className="mb-4 text-3xl font-bold tracking-tighter text-white md:text-4xl">
                Ready to Transform Your Educational Approach?
              </h2>
              <p className="mb-6 text-lg text-white/80">
                Join thousands of schools already using PULSE to deliver personalized education that drives better
                outcomes for every student.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="/contact">Schedule a Demo</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal className="flex items-center justify-center lg:justify-end">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PULSE%20is%20available%20on%20any%20device.jpg-OxemCZ4sg0EMOvWWvU0jyiJGk3oz5V.jpeg"
                alt="PULSE educational platform shown across multiple devices"
                width={400}
                height={320}
                className="rounded-lg shadow-lg"
              />
            </ScrollReveal>
          </div>
        </div>
      </SmoothScrollSection>

      {/* Newsletter Section - Simplified */}
      <SmoothScrollSection className="border-t py-16" id="newsletter">
        <div className="container">
          <div className="mx-auto max-w-xl text-center">
            <h3 className="mb-3 text-xl font-semibold">Stay Updated</h3>
            <p className="mb-6 text-muted-foreground">
              Join our newsletter for the latest educational insights and platform updates.
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </SmoothScrollSection>
    </main>
  )
}
