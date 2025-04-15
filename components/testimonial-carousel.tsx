"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"

const testimonials = [
  {
    content:
      "PULSE has revolutionized learning at our school. The personalized approach has helped our learners improve their matric results significantly, especially in mathematics and physical sciences.",
    author: "Thabo Molefe",
    role: "Principal, Parktown High School, Johannesburg",
    image: "https://this-person-does-not-exist.com/img/avatar-gen11a973a9ae3e0a0d404d7d5da29918e3.jpg",
  },
  {
    content:
      "As a teacher in a rural school, PULSE's offline capabilities have been game-changing. Our learners can continue learning even with limited connectivity, and the multilingual support helps bridge language barriers.",
    author: "Nomvula Dlamini",
    role: "Grade 10 Mathematics Teacher, KwaZulu-Natal",
    image: "https://this-person-does-not-exist.com/img/avatar-gen115c2c2c5ae1b5e048f3936d95b77c1f.jpg",
  },
  {
    content:
      "The affordability and scalability of PULSE made it possible for our entire district to implement it. At R75 per learner, it's an investment that's showing real returns in improved academic performance.",
    author: "Dr. Andile Nkosi",
    role: "Education District Director, Western Cape",
    image: "https://this-person-does-not-exist.com/img/avatar-gen1161f9455ae9d8d851d1e6f77e334d51.jpg",
  },
  {
    content:
      "My daughter's marks have improved dramatically since her school started using PULSE. The AI tutor helps her practice in isiZulu, which makes complex concepts much easier to understand.",
    author: "Precious Mthembu",
    role: "Parent, Durban",
    image: "https://this-person-does-not-exist.com/img/avatar-gen11f5e8c9e7e5c9c8b9d9e3b9e3b9e3b9.jpg",
  },
  {
    content:
      "PULSE's analytics have helped us identify and support struggling learners early. The system aligns perfectly with CAPS curriculum requirements while providing innovative teaching methods.",
    author: "Lerato Khumalo",
    role: "Head of Department, Cape Town High School",
    image: "https://this-person-does-not-exist.com/img/avatar-gen1176f9455ae9d8d851d1e6f77e334d51.jpg",
  },
  {
    content:
      "The integration of local content and cultural context in PULSE makes it truly unique. Our learners see themselves represented in the learning materials, which boosts engagement significantly.",
    author: "Sipho Ndlovu",
    role: "Educational Technology Coordinator, Pretoria",
    image: "https://this-person-does-not-exist.com/img/avatar-gen11a973a9ae3e0a0d404d7d5da29918e3.jpg",
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [sliding, setSliding] = useState(false)

  const goToNext = useCallback(() => {
    if (!sliding) {
      setSliding(true)
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }
  }, [sliding])

  const goToPrev = useCallback(() => {
    if (!sliding) {
      setSliding(true)
      setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
    }
  }, [sliding])

  // Reset sliding state after transition
  useEffect(() => {
    if (sliding) {
      const timer = setTimeout(() => {
        setSliding(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [sliding])

  // Auto-advance every 5 seconds, but only if not currently sliding
  useEffect(() => {
    const interval = setInterval(() => {
      if (!sliding) {
        goToNext()
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [goToNext, sliding])

  return (
    <div className="relative mx-auto max-w-4xl px-8">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="min-w-full w-full flex-shrink-0 px-6 shadow-sm md:px-10">
              <CardContent className="pt-10">
                <div className="flex justify-center">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-6 text-center text-lg font-medium leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="mt-8 flex flex-col items-center">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image || "/placeholder.svg?height=56&width=56"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                      priority={idx === activeIndex}
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.src = "/placeholder.svg?height=56&width=56"
                      }}
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <button
        onClick={goToPrev}
        className="absolute -left-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border bg-background text-muted-foreground shadow-sm hover:text-primary md:-left-5"
        aria-label="Previous testimonial"
        disabled={sliding}
      >
        <ArrowLeft className="h-5 w-5" />
      </button>

      <button
        onClick={goToNext}
        className="absolute -right-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border bg-background text-muted-foreground shadow-sm hover:text-primary md:-right-5 cursor-pointer z-10"
        aria-label="Next testimonial"
      >
        <ArrowRight className="h-5 w-5" />
      </button>

      <div className="mt-6 flex justify-center space-x-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              idx === activeIndex ? "bg-primary w-4" : "bg-muted-foreground/30 hover:bg-muted-foreground",
            )}
            onClick={() => {
              if (!sliding) {
                setSliding(true)
                setActiveIndex(idx)
              }
            }}
            aria-label={`Go to testimonial ${idx + 1}`}
            disabled={sliding}
          />
        ))}
      </div>
    </div>
  )
}
