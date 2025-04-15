import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Github, Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "Bongani Radebe",
    role: "CEO & Founder",
    bio: "Tech innovator and visionary creator of PULSE, who is shaping the future of education technology and learning.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%285%29-YwsIIkgWzmhJK7es0wfnwg6Pc3hTJy.png",
    social: {
      instagram: "https://www.instagram.com/iambonrad/",
      linkedin: "https://www.linkedin.com/in/bonrad/",
      github: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    bio: "AI researcher and full-stack developer with a focus on adaptive learning systems.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Dr. Alicia Henderson",
    role: "Head of Education",
    bio: "PhD in Educational Psychology, specializing in personalized learning methodologies.",
    image: "https://randomuser.me/api/portraits/women/54.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "James Wilson",
    role: "Lead Designer",
    bio: "Award-winning UX designer focused on creating intuitive educational interfaces.",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Gugu Khumalo",
    role: "Product Manager",
    bio: "Former teacher turned product strategist, bridging education and technology.",
    image: "https://randomuser.me/api/portraits/women/89.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "David Kim",
    role: "Head of AI Research",
    bio: "Machine learning expert specializing in educational AI and adaptive systems.",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
]

export default function TeamPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-4 text-center">
              <Badge className="mb-4">Our Team</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Meet the People Behind PULSE
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A diverse team of educators, technologists, and innovators working to transform education.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <ScrollReveal key={member.name}>
                <Card className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="font-medium text-primary">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="mb-4 text-muted-foreground">{member.bio}</p>
                    <div className="flex justify-center gap-4">
                      <a
                        href={member.social.twitter}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href={member.social.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Team</h2>
              <p className="mt-4 text-muted-foreground">
                We're always looking for passionate individuals to join us in our mission to transform education. Check
                out our open positions and become part of something extraordinary.
              </p>
              <div className="mt-8">
                <a
                  href="/careers"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  View Open Positions
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
