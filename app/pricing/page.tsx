"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  // Calculate discounted annual pricing (20% off)
  const getPrice = (monthlyPrice: number) => {
    // Convert USD to ZAR (approximate exchange rate: 18.5)
    const zarPrice = monthlyPrice * 18.5
    if (billingCycle === "annual") {
      return (zarPrice * 0.8).toFixed(0)
    }
    return zarPrice.toFixed(0)
  }

  const features = {
    starter: [
      { name: "Up to 30 students", included: true },
      { name: "Basic analytics dashboard", included: true },
      { name: "Core learning modules", included: true },
      { name: "Email support", included: true },
      { name: "Parent communication portal", included: true },
      { name: "Advanced analytics", included: false },
      { name: "Custom learning paths", included: false },
      { name: "API access", included: false },
      { name: "White labeling", included: false },
      { name: "Dedicated account manager", included: false },
    ],
    school: [
      { name: "Unlimited students", included: true },
      { name: "Advanced analytics dashboard", included: true },
      { name: "All learning modules", included: true },
      { name: "Priority support", included: true },
      { name: "Parent communication portal", included: true },
      { name: "Custom learning paths", included: true },
      { name: "Teacher training", included: true },
      { name: "API access", included: false },
      { name: "White labeling", included: false },
      { name: "Dedicated account manager", included: false },
    ],
    district: [
      { name: "Unlimited students", included: true },
      { name: "Enterprise analytics dashboard", included: true },
      { name: "All learning modules", included: true },
      { name: "24/7 priority support", included: true },
      { name: "Parent communication portal", included: true },
      { name: "Custom learning paths", included: true },
      { name: "Comprehensive teacher training", included: true },
      { name: "API access", included: true },
      { name: "White labeling", included: true },
      { name: "Dedicated account manager", included: true },
    ],
  }

  const faqs = [
    {
      question: "How is pricing calculated?",
      answer:
        "Our pricing is based on the number of students using the platform. For the Starter and School plans, we charge a per-student fee in South African Rand (ZAR). For District plans, we offer custom pricing based on your specific needs and scale.",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll have immediate access to the new features. When downgrading, the changes will take effect at the start of your next billing cycle.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 30-day free trial for all plans. During the trial, you'll have access to all features of the plan you're interested in, allowing you to fully evaluate if PULSE is right for your institution.",
    },
    {
      question: "Do you offer discounts for educational institutions?",
      answer:
        "Yes, we offer special pricing for public schools, non-profit educational institutions, and schools in underserved communities. Contact our sales team to learn more about our education discounts.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, purchase orders from educational institutions, and bank transfers for annual plans. All payments are processed securely through our payment partners.",
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "We offer a 30-day money-back guarantee for all new subscriptions. If you're not completely satisfied with PULSE within the first 30 days, contact our support team for a full refund.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <ScrollReveal>
                <Badge className="mb-4">Pricing</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Simple, Transparent Pricing
                </h1>
                <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Choose the plan that's right for your school or district. All plans include our core features.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Pricing Toggle */}
        <section className="w-full py-6">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <ScrollReveal>
                <Tabs
                  defaultValue="monthly"
                  className="w-[300px]"
                  onValueChange={(value) => setBillingCycle(value as "monthly" | "annual")}
                >
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="annual">
                      Annual
                      <Badge variant="outline" className="ml-2 bg-primary/20 text-primary">
                        Save 20%
                      </Badge>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="w-full py-6 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
              {/* Starter Plan */}
              <ScrollReveal delay={0.1}>
                <Card className="relative overflow-hidden" id="starter">
                  <CardHeader>
                    <CardTitle>Starter</CardTitle>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-3xl font-bold">R{getPrice(4)}</span>
                      <span className="ml-1 text-muted-foreground">/student/month</span>
                    </div>
                    <CardDescription className="mt-2">Perfect for small classrooms</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {features.starter.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          {feature.included ? (
                            <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                          ) : (
                            <X className="mr-2 h-5 w-5 shrink-0 text-muted-foreground/70" />
                          )}
                          <span className={feature.included ? "" : "text-muted-foreground/70"}>{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/contact?plan=starter">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </ScrollReveal>

              {/* School Plan */}
              <ScrollReveal delay={0.2}>
                <Card className="relative overflow-hidden border-primary" id="school">
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <Badge className="bg-primary text-white">Most Popular</Badge>
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle>School</CardTitle>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-3xl font-bold">R{getPrice(3)}</span>
                      <span className="ml-1 text-muted-foreground">/student/month</span>
                    </div>
                    <CardDescription className="mt-2">Best for entire schools</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {features.school.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          {feature.included ? (
                            <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                          ) : (
                            <X className="mr-2 h-5 w-5 shrink-0 text-muted-foreground/70" />
                          )}
                          <span className={feature.included ? "" : "text-muted-foreground/70"}>{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/contact?plan=school">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </ScrollReveal>

              {/* District Plan */}
              <ScrollReveal delay={0.3}>
                <Card className="relative overflow-hidden" id="district">
                  <CardHeader>
                    <CardTitle>District</CardTitle>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-3xl font-bold">Custom</span>
                    </div>
                    <CardDescription className="mt-2">For school districts & networks</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {features.district.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          {feature.included ? (
                            <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                          ) : (
                            <X className="mr-2 h-5 w-5 shrink-0 text-muted-foreground/70" />
                          )}
                          <span className={feature.included ? "" : "text-muted-foreground/70"}>{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact?plan=district">Contact Sales</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <ScrollReveal className="mx-auto mb-12 max-w-[58rem] text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-muted-foreground">Find answers to common questions about our pricing and plans</p>
            </ScrollReveal>

            <ScrollReveal className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
              <ScrollReveal>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
                <p className="mt-4 text-primary-foreground/90">
                  Join thousands of schools already using PULSE to deliver personalized education that drives better
                  outcomes for every student.
                </p>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Link href="/contact">Schedule a Demo</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </div>
              </ScrollReveal>
              <ScrollReveal className="flex items-center justify-center lg:justify-end" delay={0.2}>
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                  <div className="text-lg font-medium">Need a custom solution?</div>
                  <p className="mt-2 text-primary-foreground/90">
                    Our team can create a tailored plan that meets your specific requirements and budget.
                  </p>
                  <Button asChild className="mt-4 bg-white text-primary hover:bg-white/90">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
