"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { Book, CalendarCheck, Check, Star, ArrowRight, MousePointer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScheduleDemoForm } from "@/components/schedule-demo-form"

export default function EnhancedHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)
  const isInView = useInView(heroRef, { once: false, amount: 0.3 })
  const controls = useAnimation()

  // Handle parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Calculate mouse position as percentage of screen
      const x = clientX / innerWidth
      const y = clientY / innerHeight

      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Trigger animations when component mounts
  useEffect(() => {
    setIsLoaded(true)

    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const floatingVariants = {
    initial: { y: 0 },
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90 pt-20 pb-16 md:min-h-[90vh] md:pt-28 md:pb-24 flex items-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient background */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-blue-500/5 opacity-70"
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          }}
        />

        {/* Animated circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[100px]"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
      </div>

      <div className="container relative z-10">
        <motion.div
          className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Content Column */}
          <div className="flex flex-col justify-center space-y-6">
            <motion.div variants={itemVariants}>
              <Badge className="h-8 px-5 py-1.5 text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <motion.span
                  className="mr-1 h-2 w-2 rounded-full bg-primary inline-block"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <Star className="mr-1 h-3.5 w-3.5" />
                Trusted by over 25 schools
              </Badge>
            </motion.div>

            <motion.h1
              className="text-3xl font-bold leading-[1.25] tracking-tighter text-foreground md:text-4xl lg:text-5xl pb-1.5"
              variants={itemVariants}
            >
              <span className="block">AI-Powered Learning That Adapts to</span>
              <span className="relative">
                <span className="text-primary relative z-10">Every</span>
                <motion.span
                  className="absolute bottom-0 left-0 h-3 bg-primary/20 w-full -z-10"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>
              <span> Student</span>
            </motion.h1>

            <motion.p className="text-xl font-medium text-primary/90 mt-2 mb-6" variants={itemVariants}>
              Every Student. Every Dream. Every Step of the Way.
            </motion.p>

            <motion.p className="max-w-[600px] text-lg text-muted-foreground" variants={itemVariants}>
              PULSE Smart Learning uses AI to create a customized learning experience for every student—helping them
              master subjects faster, get personalized support, and reach their full potential.
            </motion.p>

            <motion.div className="flex flex-col gap-3 sm:flex-row" variants={itemVariants}>
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden h-12 px-6 transition-all hover:shadow-lg hover:shadow-primary/30"
              >
                <Link href="/features">
                  <span className="relative z-10 flex items-center">
                    See PULSE in Action
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90 transition-all duration-300 group-hover:scale-105"></span>
                </Link>
              </Button>
              <ScheduleDemoForm />
            </motion.div>

            <motion.div className="mt-6 space-y-2" variants={fadeInVariants}>
              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-sm">AI-Powered Learning – Adapts to each student's strengths & challenges</span>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-sm">
                  Boosts Academic Performance – Smarter, faster learning, delivering 30% faster mastery of core concepts
                </span>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-sm">Proven Success – Trusted by 25+ schools for smarter education</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Image Column */}
          <motion.div className="relative flex items-center justify-center" variants={imageVariants}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 h-72 w-72 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -right-4 h-72 w-72 bg-blue-500/5 rounded-full blur-3xl"></div>

              {/* Main image with interactive hover effect */}
              <div
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10 group"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 5 - 2.5}deg) rotateY(${mousePosition.x * -5 + 2.5}deg)`,
                  transition: "transform 0.2s ease-out",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-blue-500/10 mix-blend-overlay group-hover:opacity-70 transition-opacity"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dynamic%20Classroom%20Scene_Visual_%20A%20vibrant%20classroom%20with%20students%20of%20diverse%20backgrounds%20engaged%20in%20learning.__Students%20using%20tablets%20or%20laptops%20with%20PULSE%E2%80%99s%20interface%20visible.__A%20teacher%20guiding%20a%20small%20group%2C.jpg-A6zx1BRjfxyOHjzloonFUfHJUbpzmO.jpeg"
                  alt="Diverse students using PULSE tablets in classroom with teacher and AI assistant"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Interactive overlay elements */}
                <motion.div
                  className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 rounded-lg shadow-lg p-3 backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: [0, 1, 1, 0], y: [-10, 0, 0, -10] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
                >
                  <div className="flex items-center gap-2">
                    <Book className="h-4 w-4 text-primary" />
                    <span className="text-xs font-medium">Personalized Learning Paths</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-900/90 rounded-lg shadow-lg p-3 backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, 10] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5, delay: 2 }}
                >
                  <div className="flex items-center gap-2">
                    <CalendarCheck className="h-4 w-4 text-primary" />
                    <span className="text-xs font-medium">Real-time Progress Tracking</span>
                  </div>
                </motion.div>
              </div>

              {/* Floating stats card */}
              <motion.div
                className="absolute -bottom-6 -left-6 md:-left-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 z-20 border border-gray-100 dark:border-gray-800"
                variants={floatingVariants}
                initial="initial"
                animate="float"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Grade Improvement</p>
                    <p className="text-2xl font-bold">
                      +32<span className="text-primary">%</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating testimonial */}
              <motion.div
                className="absolute -top-6 -right-6 md:-right-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 z-20 max-w-[200px] border border-gray-100 dark:border-gray-800"
                variants={floatingVariants}
                initial="initial"
                animate="float"
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.svg
                        key={star}
                        className="h-4 w-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          delay: star * 0.2,
                        }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
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
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden md:flex"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
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

        {/* Interactive cursor hint */}
        <motion.div
          className="absolute bottom-8 right-8 hidden lg:flex items-center gap-2 text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.7, 0.7, 0] }}
          transition={{ duration: 4, times: [0, 0.2, 0.8, 1], repeat: Number.POSITIVE_INFINITY, repeatDelay: 10 }}
        >
          <MousePointer className="h-3 w-3" />
          <span>Move cursor to interact</span>
        </motion.div>
      </div>
    </section>
  )
}
