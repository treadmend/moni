'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Clock, Users, Leaf, Heart } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Strict adherence to Australian electrical standards. Your safety is our top priority on every job.',
  },
  {
    icon: Award,
    title: 'Quality Workmanship',
    description: 'Master Electrician certified team delivering work that meets the highest industry standards.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'On-time service, every time. We respect your schedule and deliver on our commitments.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Clear communication, transparent pricing, and genuine care for your satisfaction.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Promoting energy-efficient solutions and sustainable electrical practices.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Honest advice, fair pricing, and ethical business practices in everything we do.',
  },
]

export function AboutValues() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Our Values</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
            What We Stand For
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            These core values guide every decision we make and every service we provide.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg border border-primary/20">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
