"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import AnimatedGradient from "./animated-gradient"
import FloatingElements from "./floating-elements"

export default function ModernHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/95 pt-20 pb-16 md:min-h-[90vh] md:pt-28 md:pb-24 flex items-center">
      {/* Background Elements */}
      <AnimatedGradient />
      <FloatingElements />

      <div className="container relative z-10">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          {/* Content Column */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Badge className="h-8 px-5 py-1.5 text-sm mb-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <span className="mr-1 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                Transforming Education with AI
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="block">Unlock Every Student's</span>
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Full Potential
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground max-w-[600px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              PULSE creates personalized learning experiences powered by AI that adapt to each student's unique needs,
              helping them excel at their own pace.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="group relative overflow-hidden h-14 px-8 text-base font-medium transition-all hover:shadow-lg hover:shadow-primary/30"
              >
                <span className="relative z-10">Get Started Today</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 transition-all duration-300 group-hover:scale-105"></span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base font-medium border-2 hover:bg-primary/5 transition-colors"
              >
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              className="pt-6 space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-sm">Personalized learning paths for every student</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-sm">Real-time feedback and progress tracking</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-sm">Trusted by 25+ schools and 15,000+ students</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.95 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 h-72 w-72 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -right-4 h-72 w-72 bg-blue-500/5 rounded-full blur-3xl"></div>

              {/* Main image with glow effect */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-blue-500/10 mix-blend-overlay"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dynamic%20Classroom%20Scene_Visual_%20A%20vibrant%20classroom%20with%20students%20of%20diverse%20backgrounds%20engaged%20in%20learning.__Students%20using%20tablets%20or%20laptops%20with%20PULSE%E2%80%99s%20interface%20visible.__A%20teacher%20guiding%20a%20small%20group%2C.jpg-A6zx1BRjfxyOHjzloonFUfHJUbpzmO.jpeg"
                  alt="Students using PULSE AI learning platform"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>

              {/* Floating stats card */}
              <motion.div
                className="absolute -bottom-6 -left-6 md:-left-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 z-20 border border-gray-100 dark:border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Improved Results</p>
                    <p className="text-2xl font-bold">
                      +32<span className="text-primary">%</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating testimonial */}
              <motion.div
                className="absolute -top-6 -right-6 md:-right-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 z-20 max-w-[200px] border border-gray-100 dark:border-gray-800"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs">
                    "PULSE transformed how our students learn. The results speak for themselves!"
                  </p>
                  <p className="text-xs font-medium">- Sarah Johnson, Principal</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden md:flex"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isLoaded ? 0.7 : 0, y: isLoaded ? 0 : 10 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <span className="text-xs text-muted-foreground mb-2">Scroll to explore</span>
          <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
            <motion.div
              className="h-1.5 w-1.5 rounded-full bg-primary"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
