import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Search, BookOpen, MessageCircle, Video, FileText, Lightbulb, ArrowRight } from "lucide-react"

export default function HelpPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-4 text-center">
              <Badge className="mb-4">Help Center</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                How Can We Help You?
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Find answers to common questions or get in touch with our support team.
              </p>
              <div className="w-full max-w-2xl mt-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    className="w-full pl-10 py-6 text-lg"
                    placeholder="Search for help articles..."
                    type="search"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl space-y-12">
            <ScrollReveal>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <BookOpen className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Getting Started</CardTitle>
                    <CardDescription>New to PULSE? Start here for the basics.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        <Link href="/help/platform-overview" className="hover:text-primary flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          Platform Overview
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-primary flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          Account Setup
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-primary flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          First Steps Guide
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <MessageCircle className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Common Questions</CardTitle>
                    <CardDescription>Find answers to frequently asked questions.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        <Link href="#" className="hover:text-primary flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          Billing & Subscriptions
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-primary flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          Technical Requirements
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-primary flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          Account Management
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <Video className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Video Tutorials</CardTitle>
                    <CardDescription>Learn through step-by-step video guides.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        <Link href="#" className="hover:text-primary flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          Feature Walkthroughs
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-primary flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          Best Practices
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-primary flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          Tips & Tricks
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <FileText className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Documentation</CardTitle>
                    <CardDescription>Detailed guides and reference materials.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        <Link href="#" className="hover:text-primary flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          API Documentation
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-primary flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          Integration Guides
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-primary flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          Release Notes
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <Lightbulb className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Tips & Resources</CardTitle>
                    <CardDescription>Maximize your PULSE experience.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        <Link href="#" className="hover:text-primary flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          Success Stories
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-primary flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          Best Practices
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-primary flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          Community Tips
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-12 text-center">
                <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
                <p className="text-muted-foreground mb-6">
                  Our support team is available 24/7 to assist you with any questions or concerns.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row justify-center">
                  <Button asChild size="lg">
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    Submit a Ticket
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
