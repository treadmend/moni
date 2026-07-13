'use client'

import { motion } from 'framer-motion'
import { Phone, AlertCircle, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function EmergencyBanner() {
  return (
    <section className="py-16 sm:py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </div>
              <span className="text-sm font-medium text-white/90 tracking-widest uppercase">
                Emergency Service
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              24/7 Emergency Electrical Callouts
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl">
              Power outage? Sparking wires? Electrical emergency? Our licensed electricians are 
              available around the clock across Melbourne and Victoria.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Fast Response Times</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                <span>No Call-Out Fee*</span>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 h-14 shadow-xl"
            >
              <a href="tel:1300VOLTEDGE" className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                1300 VOLT EDGE
              </a>
            </Button>
            <span className="text-sm text-white/60">*Terms and conditions apply</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
