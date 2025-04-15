import Image from "next/image"
import { BarChart3, LineChart, PieChart, TrendingUp, Users, BookOpen, Brain, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LearningAnalyticsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Learning Analytics
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Transform educational data into actionable insights with PULSE's powerful analytics platform.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Request a Demo</Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] lg:h-[400px] w-full overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=400&width=800&text=Analytics+Dashboard"
                  alt="PULSE Analytics Dashboard"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Comprehensive Analytics Suite</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our analytics platform provides deep insights into student performance, engagement, and growth.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <BarChart3 className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Performance Tracking</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Track student progress across subjects, identify strengths and areas for improvement with detailed
                    performance metrics.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <LineChart className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Growth Analysis</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Visualize learning trajectories over time with growth charts that highlight progress and predict
                    future outcomes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <PieChart className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Engagement Metrics</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Measure student engagement with content, identify patterns in learning behavior, and optimize
                    educational resources.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Predictive Insights</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    AI-powered predictions help identify at-risk students early and recommend personalized
                    interventions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Users className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Classroom Overview</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Get a holistic view of classroom performance with aggregated data and comparative analytics.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Curriculum Effectiveness</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Evaluate the impact of learning materials and teaching methods with detailed effectiveness reports.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Powerful Dashboard Experience</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Intuitive interfaces designed for educators, administrators, and students.
                </p>
              </div>
            </div>
            <div className="mx-auto py-12">
              <Tabs defaultValue="teacher" className="w-full max-w-4xl mx-auto">
                <div className="flex justify-center mb-8">
                  <TabsList>
                    <TabsTrigger value="teacher">Teacher View</TabsTrigger>
                    <TabsTrigger value="admin">Administrator View</TabsTrigger>
                    <TabsTrigger value="student">Student View</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="teacher" className="mt-0">
                  <div className="relative h-[400px] w-full overflow-hidden rounded-xl border shadow-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Teacher%20Empowerment_Visual_%20A%20teacher%20using%20PULSE%E2%80%99s%20dashboard%20to%20track%20class%20performance.__The%20screen%20shows%20analytics%2C%20student%20progress%2C%20and%20lesson%20plans.__Background_%20A%20modern%2C%20well-organized%20classroom%20with%20students%20in%20the%20background%20%281%29.jpg-PuKjS85RNLInAfR9cUDJ7G6wJfV5QP.jpeg"
                      alt="Teacher using PULSE dashboard in a classroom setting, showing analytics and student progress metrics on screen"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold">Teacher Analytics Dashboard</h3>
                    <p className="mt-2 text-muted-foreground">
                      Track individual and class performance, identify learning gaps, and get AI-powered recommendations
                      for personalized teaching strategies.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="admin" className="mt-0">
                  <div className="relative h-[400px] w-full overflow-hidden rounded-xl border shadow-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik__pulses-teacher-analytics-dashboard-track-individua__37653-rQyMwMXBGKS6Lt9pEzoyIn6cfMS9f5.jpeg"
                      alt="Administrator Analytics Dashboard showing comprehensive data visualizations including charts and metrics"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold">Administrator Analytics Dashboard</h3>
                    <p className="mt-2 text-muted-foreground">
                      Get a bird's-eye view of school or district performance, track curriculum effectiveness, and make
                      data-driven decisions for resource allocation.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="student" className="mt-0">
                  <div className="relative h-[400px] w-full overflow-hidden rounded-xl border shadow-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/isual_%20A%20close-up%20of%20a%20student%20%28ages%2010%E2%80%9312%29%20deeply%20focused%20on%20a%20tablet%20displaying%20PULSE%E2%80%99s%20interface.__The%20screen%20shows%20a%20progress%20graph%20or%20an%20AI%20tutor%20providing%20feedback.__Background_%20A%20cozy%20home%20study%20setup%20or%20a%20modern%20classroom.__Mood.jpg-Xn3Ac323TtgJt6zYuF1el1TOPX4ufF.jpeg"
                      alt="Student engaging with PULSE's learning analytics on a tablet, showing interactive progress tracking in a comfortable study environment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold">Student Analytics Dashboard</h3>
                    <p className="mt-2 text-muted-foreground">
                      Students can track their own progress, set goals, and receive personalized recommendations for
                      improvement.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Benefits
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Choose PULSE Analytics?</h2>
                <p className="text-muted-foreground md:text-xl">
                  Our analytics platform goes beyond simple data collection to provide actionable insights that
                  transform teaching and learning.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Brain className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">AI-Powered Insights</h3>
                      <p className="text-muted-foreground">
                        Advanced machine learning algorithms analyze patterns and provide personalized recommendations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Targeted Interventions</h3>
                      <p className="text-muted-foreground">
                        Identify at-risk students early and implement effective intervention strategies.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Real-Time Updates</h3>
                      <p className="text-muted-foreground">
                        Get instant feedback on student performance and engagement with real-time analytics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Analytics+Benefits"
                  alt="PULSE Analytics Benefits"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Transform Your Educational Data?
                </h2>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join schools and districts that have already improved student outcomes with PULSE Analytics.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary">
                  Request a Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
