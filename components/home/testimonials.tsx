'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    location: 'Brighton',
    content: 'VoltEdge completely transformed our home\'s electrical system. Their attention to detail and professionalism was outstanding. The smart home integration works flawlessly.',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Chen',
    role: 'Business Owner',
    location: 'Melbourne CBD',
    content: 'We\'ve used VoltEdge for all our commercial properties. Their team is reliable, efficient, and always delivers on time. Highly recommend for any business.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Watson',
    role: 'Property Manager',
    location: 'South Yarra',
    content: 'The emergency callout service saved us during a critical power outage. Fast response, professional service, and fair pricing. They\'re now our go-to electricians.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Michael Torres',
    role: 'Homeowner',
    location: 'Brunswick',
    content: 'Had an EV charger installed by VoltEdge. The whole process was seamless from quote to installation. Clean work, great communication, and competitive pricing.',
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Testimonials</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-background border border-border rounded-xl p-8 sm:p-12"
            >
              {/* Quote Icon */}
              <Quote className="h-10 w-10 text-primary/30 mb-6" />

              {/* Content */}
              <p className="text-xl sm:text-2xl text-foreground leading-relaxed">
                &ldquo;{testimonials[current].content}&rdquo;
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {testimonials[current].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonials[current].name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[current].role} • {testimonials[current].location}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center border border-border rounded-full hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === current ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 flex items-center justify-center border border-border rounded-full hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
