'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Home, Building2, Zap, Car, Cpu, Shield, Lightbulb, Wrench } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residential Electrical',
    description: 'Complete home electrical solutions from repairs to full rewiring.',
    href: '/services#residential',
  },
  {
    icon: Building2,
    title: 'Commercial Electrical',
    description: 'Powering Melbourne businesses with reliable electrical systems.',
    href: '/services#commercial',
  },
  {
    icon: Zap,
    title: 'Switchboard Upgrades',
    description: 'Modern safety switches and upgraded electrical panels.',
    href: '/services#switchboard',
  },
  {
    icon: Car,
    title: 'EV Charger Installation',
    description: 'Future-proof your property with electric vehicle charging.',
    href: '/services#ev-chargers',
  },
  {
    icon: Cpu,
    title: 'Smart Home Systems',
    description: 'Automated lighting, climate, and security integration.',
    href: '/services#smart-home',
  },
  {
    icon: Shield,
    title: 'CCTV & Security',
    description: 'Professional security camera and alarm installations.',
    href: '/services#security',
  },
  {
    icon: Lightbulb,
    title: 'Lighting Design',
    description: 'Architectural and ambient lighting solutions.',
    href: '/services#lighting',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Repairs',
    description: 'Fast fault finding and reliable maintenance services.',
    href: '/services#maintenance',
  },
]

export function Services() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">What We Do</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Expert Electrical Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From simple repairs to complex installations, we deliver premium electrical solutions 
            tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link 
                href={service.href}
                className="group block h-full p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
