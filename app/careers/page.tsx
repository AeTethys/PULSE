import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Building2, Clock, Globe2, GraduationCap, HeartHandshake, Laptop } from "lucide-react"

const benefits = [
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Continuous learning opportunities and professional development programs.",
  },
  {
    icon: Globe2,
    title: "Remote-First",
    description: "Work from anywhere with flexible hours and unlimited PTO.",
  },
  {
    icon: HeartHandshake,
    title: "Comprehensive Benefits",
    description: "Full health, dental, and vision coverage for you and your family.",
  },
  {
    icon: Building2,
    title: "Modern Office",
    description: "Beautiful office spaces for those who prefer in-person collaboration.",
  },
  {
    icon: Laptop,
    title: "Equipment Allowance",
    description: "Annual budget for your workspace setup and technology needs.",
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible scheduling and generous paid time off policies.",
  },
]

const openings = [
  {
    department: "Engineering",
    positions: [
      {
        title: "Senior Full Stack Engineer",
        location: "Remote",
        type: "Full-time",
        experience: "5+ years",
      },
      {
        title: "Machine Learning Engineer",
        location: "Remote",
        type: "Full-time",
        experience: "3+ years",
      },
      {
        title: "Frontend Developer",
        location: "Remote",
        type: "Full-time",
        experience: "2+ years",
      },
    ],
  },
  {
    department: "Product & Design",
    positions: [
      {
        title: "Product Manager",
        location: "Remote",
        type: "Full-time",
        experience: "4+ years",
      },
      {
        title: "UX/UI Designer",
        location: "Remote",
        type: "Full-time",
        experience: "3+ years",
      },
    ],
  },
  {
    department: "Education",
    positions: [
      {
        title: "Curriculum Developer",
        location: "Remote",
        type: "Full-time",
        experience: "4+ years",
      },
      {
        title: "Educational Content Writer",
        location: "Remote",
        type: "Contract",
        experience: "2+ years",
      },
    ],
  },
]

export default function CareersPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-4 text-center">
              <Badge className="mb-4">Careers</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Join Us in Transforming Education
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Be part of a team that's revolutionizing how the world learns. We're looking for passionate individuals
                to help us shape the future of education.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Why Join PULSE?</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {benefits.map((benefit) => (
                  <Card key={benefit.title} className="group relative overflow-hidden transition-all hover:shadow-lg">
                    <CardHeader>
                      <benefit.icon className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>{benefit.title}</CardTitle>
                      <CardDescription>{benefit.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Open Positions</h2>
              <div className="grid gap-8">
                {openings.map((department) => (
                  <div key={department.department}>
                    <h3 className="text-2xl font-bold mb-6">{department.department}</h3>
                    <div className="grid gap-4">
                      {department.positions.map((position) => (
                        <Card
                          key={position.title}
                          className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
                        >
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                              <div>
                                <h4 className="text-xl font-bold mb-2">{position.title}</h4>
                                <div className="flex flex-wrap gap-2">
                                  <Badge variant="secondary">{position.location}</Badge>
                                  <Badge variant="secondary">{position.type}</Badge>
                                  <Badge variant="secondary">{position.experience}</Badge>
                                </div>
                              </div>
                              <Button className="w-full md:w-auto">Apply Now</Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Don't See Your Perfect Role?</h2>
              <p className="text-muted-foreground mb-8">
                We're always looking for talented individuals to join our team. Send us your resume and let us know how
                you can contribute to our mission.
              </p>
              <Button size="lg">Submit Your Resume</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
