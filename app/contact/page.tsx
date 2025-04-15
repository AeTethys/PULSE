import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Globe, Clock, Building2, MessagesSquare, GraduationCap, HelpCircle, ChevronRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary/5 py-16">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container relative px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Whether you're an educator, administrator, or institution - we're here to help you transform education
                with PULSE.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Contact Options */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="relative overflow-hidden">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <MessagesSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">General Inquiries</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Questions about PULSE? We'd love to hear from you.
                  </p>
                  <a href="mailto:info@pulsesmartlearning.com" className="text-primary hover:underline">
                    info@pulsesmartlearning.com
                  </a>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">Educational Partnerships</h3>
                  <p className="mb-4 text-sm text-muted-foreground">Looking to implement PULSE at your institution?</p>
                  <a href="mailto:partnerships@pulsesmartlearning.com" className="text-primary hover:underline">
                    partnerships@pulsesmartlearning.com
                  </a>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden sm:col-span-2 lg:col-span-1">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <HelpCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">Technical Support</h3>
                  <p className="mb-4 text-sm text-muted-foreground">Need help with your PULSE implementation?</p>
                  <a href="mailto:support@pulsesmartlearning.com" className="text-primary hover:underline">
                    support@pulsesmartlearning.com
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="border-t py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Contact Us</h2>
                <p className="mt-4 text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Headquarters</h3>
                      <p className="text-sm text-muted-foreground">135 West Street, Sandown, Sandton, 2196</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Global Offices</h3>
                      <p className="text-sm text-muted-foreground">
                        Johannesburg • Cape Town • Durban • Port Elizabeth
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                </div>

                <Accordion type="single" collapsible className="mt-8 w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What information do I need to get started?</AccordionTrigger>
                    <AccordionContent>
                      To get started with PULSE, we'll need basic information about your institution, the number of
                      students and teachers, and your specific educational goals.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How long does implementation typically take?</AccordionTrigger>
                    <AccordionContent>
                      Implementation time varies based on your institution's size and needs, but typically takes 2-4
                      weeks. Our team provides comprehensive support throughout the process.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Do you offer custom solutions?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we offer customized solutions tailored to your institution's specific needs. Our team will
                      work with you to understand your requirements and develop a suitable implementation plan.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <Tabs defaultValue="general" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="general">General Inquiry</TabsTrigger>
                    <TabsTrigger value="demo">Request Demo</TabsTrigger>
                  </TabsList>
                  <TabsContent value="general">
                    <form className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="first-name" className="text-sm font-medium">
                            First name
                          </label>
                          <Input id="first-name" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="last-name" className="text-sm font-medium">
                            Last name
                          </label>
                          <Input id="last-name" placeholder="Doe" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" placeholder="john.doe@example.com" type="email" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="institution" className="text-sm font-medium">
                          Institution
                        </label>
                        <Input id="institution" placeholder="School or Organization Name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="inquiry-type" className="text-sm font-medium">
                          Inquiry Type
                        </label>
                        <Select>
                          <SelectTrigger id="inquiry-type">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Information</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea className="min-h-[100px]" id="message" placeholder="How can we help you?" />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </TabsContent>
                  <TabsContent value="demo">
                    <form className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="demo-first-name" className="text-sm font-medium">
                            First name
                          </label>
                          <Input id="demo-first-name" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="demo-last-name" className="text-sm font-medium">
                            Last name
                          </label>
                          <Input id="demo-last-name" placeholder="Doe" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="demo-email" className="text-sm font-medium">
                          Work Email
                        </label>
                        <Input id="demo-email" placeholder="john.doe@institution.edu" type="email" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="demo-institution" className="text-sm font-medium">
                          Institution Name
                        </label>
                        <Input id="demo-institution" placeholder="School or Organization Name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="role" className="text-sm font-medium">
                          Your Role
                        </label>
                        <Select>
                          <SelectTrigger id="role">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="teacher">Teacher</SelectItem>
                            <SelectItem value="administrator">Administrator</SelectItem>
                            <SelectItem value="it">IT Staff</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="institution-size" className="text-sm font-medium">
                          Institution Size
                        </label>
                        <Select>
                          <SelectTrigger id="institution-size">
                            <SelectValue placeholder="Select size range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Less than 500 students</SelectItem>
                            <SelectItem value="medium">500-2000 students</SelectItem>
                            <SelectItem value="large">2000-5000 students</SelectItem>
                            <SelectItem value="xlarge">5000+ students</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="demo-message" className="text-sm font-medium">
                          Additional Information
                        </label>
                        <Textarea
                          className="min-h-[100px]"
                          id="demo-message"
                          placeholder="Tell us about your specific needs and interests"
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Request Demo
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="border-t bg-primary/5 py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight">Ready to transform education?</h2>
              <p className="mt-4 text-muted-foreground">
                Join the growing community of educational institutions using PULSE to enhance learning outcomes.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild>
                  <Link href="/pricing">
                    View Pricing <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/case-studies">
                    Read Case Studies <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
