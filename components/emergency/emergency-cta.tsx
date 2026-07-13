'use client'

import { motion } from 'framer-motion'
import { Phone, Clock, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function EmergencyCTA() {
  return (
    <section className="py-20 sm:py-32 bg-destructive">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 text-sm text-white/80 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Operators Standing By
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Call Now for Emergency Service
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Don&apos;t wait with electrical emergencies. Our team is ready to help 24 hours a day, 7 days a week.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-destructive hover:bg-white/90 text-xl px-12 h-16 shadow-xl"
            >
              <a href="tel:1300VOLTEDGE" className="flex items-center gap-3">
                <Phone className="h-6 w-6" />
                1300 VOLT EDGE
              </a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>Usually under 60 min response</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>All Melbourne & Victoria</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
