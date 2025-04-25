"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "Dr. Bombara's expertise in Parkinson's therapy has made a tremendous difference in my mobility. I'm more confident and stable than I've been in years.",
    name: "Robert M.",
    age: 72,
    location: "Parkland",
  },
  {
    id: 2,
    quote:
      "Having therapy in my home has been a game-changer. No more stressful trips to the clinic, and the quality of care is exceptional.",
    name: "Eleanor S.",
    age: 85,
    location: "Coral Springs",
  },
  {
    id: 3,
    quote:
      "As a Geriatric Clinical Specialist, Dr. Bombara truly understands the unique challenges we seniors face. His personalized approach has helped me regain my independence.",
    name: "Margaret J.",
    age: 78,
    location: "Boca Raton",
  },
  {
    id: 4,
    quote:
      "After my hip replacement, I was worried about recovery. The in-home therapy was convenient and effective - I'm back to my garden in record time!",
    name: "Thomas W.",
    age: 69,
    location: "Deerfield Beach",
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrevious = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  return (
    <section className="py-20 bg-teal-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h2>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Hear from seniors who have experienced the benefits of our specialized physical therapy services
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white/10 backdrop-blur-sm border-none">
                    <CardContent className="p-8 text-center">
                      <Quote className="h-10 w-10 mx-auto mb-6 text-teal-300 opacity-50" />
                      <p className="text-xl mb-6 italic">"{testimonial.quote}"</p>
                      <div>
                        <p className="font-semibold">
                          {testimonial.name}, {testimonial.age}
                        </p>
                        <p className="text-teal-200">{testimonial.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-teal-700 rounded-full p-2 shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-teal-700 rounded-full p-2 shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setActiveIndex(index)
                }}
                className={`h-2 w-2 rounded-full ${index === activeIndex ? "bg-white" : "bg-white/30"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
