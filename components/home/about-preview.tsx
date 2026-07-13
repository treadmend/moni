'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const highlights = [
  '15+ years of industry experience',
  'Fully licensed and insured',
  'Master Electrician certified team',
  'Transparent pricing, no hidden costs',
  'Workmanship guarantee on all jobs',
  'Sustainable and energy-efficient solutions',
]

export function AboutPreview() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              {/* Abstract visual placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-card to-background" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-bold text-primary/20">VE</div>
                  <div className="mt-4 text-sm text-muted-foreground tracking-widest uppercase">Est. 2009</div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-8 left-8 w-20 h-20 border border-primary/30 rounded-lg" />
              <div className="absolute bottom-8 right-8 w-32 h-32 border border-primary/20 rounded-full" />
            </div>
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-6 -right-6 sm:bottom-6 sm:right-6 p-6 bg-card border border-border rounded-lg shadow-xl"
            >
              <div className="text-4xl font-bold text-primary">5000+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-medium text-primary tracking-widest uppercase">About Us</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Melbourne&apos;s Premium Electrical Contractor
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              Based in Brunswick and serving all of Victoria, VoltEdge Electrical has built a reputation 
              for exceptional craftsmanship, reliability, and customer service. We combine traditional 
              expertise with cutting-edge technology to deliver electrical solutions that exceed expectations.
            </p>

            {/* Highlights */}
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10">
              <Button asChild variant="outline" className="group">
                <Link href="/about" className="flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
