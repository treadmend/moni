'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

export function ServiceAreasHero() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-8">
            <MapPin className="h-4 w-4" />
            Based in Brunswick, Melbourne
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Servicing All of<br />
            <span className="text-primary">Victoria</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            From Melbourne CBD to regional Victoria, our licensed electricians 
            are ready to help with your electrical needs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
