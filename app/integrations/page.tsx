import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Check, ArrowRight } from "lucide-react"

const integrationCategories = [
  {
    title: "Learning Management Systems",
    integrations: [
      {
        name: "Canvas",
        description: "Seamlessly sync courses, assignments, and grades with Canvas LMS.",
        image: "/placeholder.svg?height=80&width=80",
        features: ["Automatic grade sync", "Course import/export", "Single sign-on"],
      },
      {
        name: "Blackboard",
        description: "Integrate PULSE features directly into your Blackboard environment.",
        image: "/placeholder.svg?height=80&width=80",
        features: ["Roster synchronization", "Assignment integration", "Gradebook sync"],
      },
      {
        name: "Moodle",
        description: "Connect PULSE with Moodle for enhanced learning experiences.",
        image: "/placeholder.svg?height=80&width=80",
        features: ["Content sharing", "User management", "Progress tracking"],
      },
    ],
  },
  {
    title: "Student Information Systems",
    integrations: [
      {
        name: "PowerSchool",
        description: "Streamline administrative tasks with PowerSchool integration.",
        image: "/placeholder.svg?height=80&width=80",
        features: ["Student data sync", "Attendance tracking", "Report generation"],
      },
      {
        name: "Infinite Campus",
        description: "Connect student information seamlessly with Infinite Campus.",
        image: "/placeholder.svg?height=80&width=80",
        features: ["Real-time updates", "Parent portal access", "Data management"],
      },
    ],
  },
  {
    title: "Communication Tools",
    integrations: [
      {
        name: "Microsoft Teams",
        description: "Enhance collaboration with Microsoft Teams integration.",
        image: "/placeholder.svg?height=80&width=80",
        features: ["Video conferencing", "Chat integration", "File sharing"],
      },
      {
        name: "Google Workspace",
        description: "Seamlessly integrate with Google Classroom and other Google tools.",
        image: "/placeholder.svg?height=80&width=80",
        features: ["Google Drive sync", "Calendar integration", "Email notifications"],
      },
      {
        name: "Slack",
        description: "Keep your team connected with Slack integration.",
        image: "/placeholder.svg?height=80&width=80",
        features: ["Channel notifications", "File sharing", "Command shortcuts"],
      },
    ],
  },
]

export default function IntegrationsPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-4 text-center">
              <Badge className="mb-4">Integrations</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Connect Your Educational Ecosystem
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                PULSE seamlessly integrates with your favorite educational tools and platforms to create a unified
                learning experience.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          {integrationCategories.map((category, index) => (
            <ScrollReveal key={category.title} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold mb-8">{category.title}</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.integrations.map((integration) => (
                  <Card
                    key={integration.name}
                    className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative h-16 w-16">
                          <Image
                            src={integration.image || "/placeholder.svg"}
                            alt={integration.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <CardTitle>{integration.name}</CardTitle>
                          <CardDescription>{integration.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {integration.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-6 group">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Need a Custom Integration?</h2>
              <p className="text-muted-foreground mb-8">
                Our team can help you build custom integrations to meet your specific needs. Get in touch to discuss
                your requirements.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-center">
                <Button size="lg">Contact Our Team</Button>
                <Button variant="outline" size="lg">
                  View API Documentation
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
