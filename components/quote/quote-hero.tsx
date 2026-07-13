'use client'

import { motion } from 'framer-motion'
import { FileText, Clock, CheckCircle } from 'lucide-react'

export function QuoteHero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Free Quote</span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Request a<br />
            <span className="text-primary">Quote</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tell us about your project and we&apos;ll provide a detailed, 
            no-obligation quote within 24 hours.
          </p>

          {/* Trust Badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <FileText className="h-5 w-5 text-primary" />
              <span>Detailed Quote</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5 text-primary" />
              <span>24hr Response</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>No Obligation</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
