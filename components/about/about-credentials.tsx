'use client'

import { motion } from 'framer-motion'
import { Shield, FileCheck, Award, BadgeCheck } from 'lucide-react'

const credentials = [
  {
    icon: Shield,
    title: 'Fully Licensed',
    description: 'Registered Electrical Contractor (REC) with all required Victorian licenses and certifications.',
    detail: 'REC 12345',
  },
  {
    icon: FileCheck,
    title: 'Fully Insured',
    description: 'Comprehensive public liability and professional indemnity insurance for your peace of mind.',
    detail: '$20M Coverage',
  },
  {
    icon: Award,
    title: 'Master Electricians',
    description: 'Our team holds Master Electrician certifications, the highest standard in the industry.',
    detail: 'MEA Member',
  },
  {
    icon: BadgeCheck,
    title: 'Safety Compliant',
    description: 'Full compliance with AS/NZS 3000 Wiring Rules and all Australian safety standards.',
    detail: 'OH&S Certified',
  },
]

export function AboutCredentials() {
  return (
    <section className="py-20 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Credentials</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
            Licensed, Insured & Certified
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            When you choose VoltEdge, you&apos;re choosing a contractor you can trust.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-background border border-border rounded-xl text-center"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-primary/10 rounded-full border border-primary/20">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              <div className="mt-4 inline-flex px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                {item.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
