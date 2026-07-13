'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Clock, CheckCircle } from 'lucide-react'

const indicators = [
  {
    icon: Shield,
    title: 'Fully Licensed',
    description: 'REC registered electrical contractors',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'Workmanship warranty on all jobs',
  },
  {
    icon: Clock,
    title: 'On-Time Service',
    description: 'Punctual and professional every time',
  },
  {
    icon: CheckCircle,
    title: 'Safety First',
    description: 'Strict compliance with all standards',
  },
]

export function TrustIndicators() {
  return (
    <section className="py-12 sm:py-16 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {indicators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left"
            >
              <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg border border-primary/20">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
