'use client'

import { motion } from 'framer-motion'
import { Zap, Flame, AlertTriangle, Droplets, Power, Plug } from 'lucide-react'

const emergencies = [
  {
    icon: Power,
    title: 'Power Outages',
    description: 'Complete loss of power to your home or business. We\'ll diagnose and restore your electricity fast.',
  },
  {
    icon: Flame,
    title: 'Burning Smells',
    description: 'Electrical burning odors can indicate serious hazards. Turn off power and call us immediately.',
  },
  {
    icon: Zap,
    title: 'Sparking & Arcing',
    description: 'Visible sparks from outlets, switches, or appliances require urgent professional attention.',
  },
  {
    icon: Droplets,
    title: 'Water & Electrical',
    description: 'Flooding or water damage near electrical systems. Do not touch - call for emergency service.',
  },
  {
    icon: AlertTriangle,
    title: 'Tripping Circuits',
    description: 'Constantly tripping safety switches or circuit breakers indicate underlying issues.',
  },
  {
    icon: Plug,
    title: 'Dead Outlets',
    description: 'Non-working power points, especially multiple at once, need professional diagnosis.',
  },
]

const tips = [
  {
    title: 'Stay Safe First',
    description: 'Never attempt to fix electrical issues yourself. If in doubt, turn off the power at the main switch.',
  },
  {
    title: 'Call Us Immediately',
    description: 'Our emergency line is available 24/7. Describe the issue and we\'ll dispatch an electrician.',
  },
  {
    title: 'Keep Clear',
    description: 'Keep family members and pets away from any suspected electrical hazards until help arrives.',
  },
]

export function EmergencyServices() {
  return (
    <section className="py-20 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Common Emergencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">We Handle</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
            Common Electrical Emergencies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            If you&apos;re experiencing any of these issues, call us immediately.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {emergencies.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-6 bg-background border border-border rounded-xl"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-destructive/10 rounded-lg border border-destructive/20">
                <item.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Safety Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 bg-primary/5 border border-primary/20 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-center mb-8">What To Do In An Emergency</h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <div key={tip.title} className="text-center">
                <div className="w-10 h-10 mx-auto flex items-center justify-center bg-primary text-primary-foreground rounded-full text-lg font-bold mb-4">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-foreground">{tip.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{tip.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
