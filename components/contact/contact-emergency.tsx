'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactEmergency() {
  return (
    <section className="py-16 sm:py-20 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-white/80 mb-2">
              <AlertTriangle className="h-5 w-5" />
              <span className="text-sm font-medium">Electrical Emergency?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              24/7 Emergency Service Available
            </h2>
            <p className="mt-2 text-white/80">
              Don&apos;t wait — call us now for immediate assistance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-8 h-14"
            >
              <a href="tel:1300ELECTRICITYFORYOU" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                1300 ELECTRICITYFORYOU
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 px-8 h-14"
            >
              <Link href="/emergency">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
