import Link from "next/link"
import Image from "next/image"
import { Bot, Brain, MessageSquare, Lightbulb, Target, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AIAssistantPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  The PULSE AI Assistant—Guiding Students to Success
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Empowering learners to find answers themselves through guided assistance, critical thinking, and
                  personalized support.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="#get-started">Get Started Today</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#how-it-works">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[400px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Futuristic%20AI%20Tutor_Visual_%20A%20futuristic%2C%20glowing%20AI%20tutor%20avatar%20%28friendly%20and%20approachable%29%20interacting%20with%20a%20student.__The%20student%20is%20smiling%2C%20holding%20a%20tablet%20with%20PULSE%E2%80%99s%20interface.__Background_%20A%20sleek%2C%20.jpg-yQ4NYYRDS67kvPtqt6E7HM1SeBIlZH.jpeg"
                  alt="AI tutor avatar interacting with a smiling student holding a PULSE tablet, with holographic data visualizations in the background"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Our AI Assistant guides students through their learning journey, promoting independence and critical
                thinking.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <Card className="relative overflow-hidden">
              <CardHeader>
                <Brain className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Guided Assistance</CardTitle>
                <CardDescription>
                  Get hints, explanations, and resources to solve problems independently.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mt-4 space-y-2">
                  <h4 className="font-medium">Example Interaction:</h4>
                  <div className="rounded-lg bg-muted p-4 space-y-2">
                    <p className="text-sm">
                      <strong>Student:</strong> Can you help me solve this equation: 2x + 5 = 13
                    </p>
                    <p className="text-sm">
                      <strong>AI:</strong> Let's break this down step by step. What do you think we should do first to
                      isolate x?
                    </p>
                    <p className="text-sm">
                      <strong>Student:</strong> Subtract 5 from both sides?
                    </p>
                    <p className="text-sm">
                      <strong>AI:</strong> Exactly! That's the perfect first step. Why don't you try that and tell me
                      what you get?
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Critical Thinking</CardTitle>
                <CardDescription>
                  Learn to think deeply and creatively with follow-up questions and prompts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mt-4 space-y-2">
                  <h4 className="font-medium">Example Interaction:</h4>
                  <div className="rounded-lg bg-muted p-4 space-y-2">
                    <p className="text-sm">
                      <strong>Student:</strong> I need words that rhyme with "bright" for my poem.
                    </p>
                    <p className="text-sm">
                      <strong>AI:</strong> Here are some options: light, night, sight, flight. Which words best match
                      the emotion or theme of your poem?
                    </p>
                    <p className="text-sm">
                      <strong>Student:</strong> I'm writing about stars, so "night" fits well!
                    </p>
                    <p className="text-sm">
                      <strong>AI:</strong> Great choice! How does "night" help create the imagery you want in your poem?
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Personalized Support</CardTitle>
                <CardDescription>Receive tailored guidance based on your unique learning journey.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mt-4 space-y-2">
                  <h4 className="font-medium">Example Interaction:</h4>
                  <div className="rounded-lg bg-muted p-4 space-y-2">
                    <p className="text-sm">
                      <strong>Student:</strong> I'm still struggling with adding fractions.
                    </p>
                    <p className="text-sm">
                      <strong>AI:</strong> I notice you're doing well with finding common denominators. Let's focus on
                      the next step with some visual aids. Would you like to see how we can represent this with pizza
                      slices?
                    </p>
                    <p className="text-sm">
                      <strong>Student:</strong> Yes, that would help!
                    </p>
                    <p className="text-sm">
                      <strong>AI:</strong> Great! Let's start with a simple example using pictures...
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Discover how our AI Assistant helps students develop essential skills while maintaining academic
                integrity.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-6 py-12 md:grid-cols-2">
            <Card>
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Homework Helper</CardTitle>
                <CardDescription>
                  Get hints and resources to tackle assignments without giving away the answers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                    Step-by-step guidance through problem-solving
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                    Relevant examples and explanations
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                    Practice problems for self-assessment
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Bot className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Writing Assistant</CardTitle>
                <CardDescription>
                  Improve your writing with grammar suggestions, creative prompts, and peer examples.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                    Grammar and style suggestions
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                    Creative writing prompts
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                    Structure and organization tips
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Learning?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Join thousands of students already benefiting from personalized AI assistance.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/demo">Try PULSE AI</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
