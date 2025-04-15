"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Brain, BarChart3, MessageSquare, Sparkles, Zap, Users } from "lucide-react"

const features = [
  {
    id: "ai-learning",
    icon: Brain,
    title: "AI-Powered Learning Paths",
    description:
      "Our advanced algorithms create personalized learning journeys based on each student's strengths, weaknesses, and learning style.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/futuristic-portrait-young-girl-with-high-tech.jpg-pudKRNt2mmcRBHI32xr8sahqs5alDY.jpeg",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Comprehensive Analytics",
    description:
      "Gain deep insights into student performance with real-time data visualization and predictive analytics.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Teacher%20Empowerment_Visual_%20A%20teacher%20using%20PULSE%E2%80%99s%20dashboard%20to%20track%20class%20performance.__The%20screen%20shows%20analytics%2C%20student%20progress%2C%20and%20lesson%20plans.__Background_%20A%20modern%2C%20well-organized%20classroom%20with%20st.jpg-y1sBxyxPDMxlVWntYJPCats8NK5Cae.jpeg",
  },
  {
    id: "communication",
    icon: MessageSquare,
    title: "Seamless Communication",
    description:
      "Connect teachers, students, and parents through our integrated messaging platform with translation support.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Multi-stakeholder%20Communication___A%20split-screen%20image%20showing%20the%20same%20information%20being%20viewed%20simultaneously%20by%20a%20teacher%20at%20a%20desk%2C%20a%20parent%20on%20a%20phone%2C%20and%20a%20student%20on%20a%20tablet%2C%20with%20visual%20elements%20conne.jpg-gcAq3jb84PwVzMRN6eXcoUosNrCVqk.jpeg",
  },
  {
    id: "engagement",
    icon: Sparkles,
    title: "Gamified Engagement",
    description:
      "Keep students motivated with achievement badges, progress tracking, and interactive learning challenges.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gamified%20Engagement___A%20vibrant%20screen%20showing%20PULSE%20student%27s%20personal%20achievement%20dashboard%20with%20a%20collection%20of%20earned%20badges%20arranged%20in%20categories%20%28subjects%2C%20skills%2C%20behaviors%29.%20Progress%20bars%20as%20skills%20%281%29.jpg-uVUObzOFyooWMZrMO2i1VIdhDhSY5z.jpeg",
  },
  {
    id: "automation",
    icon: Zap,
    title: "Automated Workflows",
    description: "Save time with automated grading, assignment distribution, and administrative tasks.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%283%29-Q1oEm0rwE3MMgJSbfDgZu3gpg4s29k.png",
  },
  {
    id: "collaboration",
    icon: Users,
    title: "Collaborative Learning",
    description: "Foster teamwork with group projects, peer reviews, and collaborative problem-solving activities.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Collaborative%20Learning___A%20realistic%20overhead%20view%20of%20virtual%20collaboration%20spaces%20where%20students%20gather%20around%20shared%20digital%20workspaces.%20Different%20collaboration%20zones%20show%20various%20activities_%20a%20group%20writ%20%281%29.jpg-LxBfi620f9YvVCeBIu9uKPd8ZWflec.jpeg",
  },
]

export default function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(features[0])

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className={`cursor-pointer ${activeFeature.id === feature.id ? "border-primary bg-primary/5" : ""}`}
              onClick={() => setActiveFeature(feature)}
            >
              <CardContent className="flex flex-col items-center p-4 text-center">
                <div
                  className={`mb-2 mt-2 rounded-full p-2 ${
                    activeFeature.id === feature.id ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                  }`}
                >
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-medium">{feature.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold">{activeFeature.title}</h3>
          <p className="text-muted-foreground">{activeFeature.description}</p>
          <Button asChild>
            <Link href="/features">Learn More</Link>
          </Button>
        </div>
      </div>

      <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg border bg-background">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={activeFeature.image || "/placeholder.svg"}
              alt={activeFeature.title}
              fill
              className="object-cover rounded-lg"
              priority={activeFeature.id === features[0].id}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
