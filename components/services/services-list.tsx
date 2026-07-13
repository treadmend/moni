'use client'

import { motion } from 'framer-motion'
import { Home, Building2, Zap, Car, Cpu, Shield, Lightbulb, Wrench, CheckCircle } from 'lucide-react'

const services = [
  {
    id: 'residential',
    icon: Home,
    title: 'Residential Electrical',
    description: 'Complete electrical solutions for your home, from minor repairs to full rewiring projects.',
    features: [
      'New home electrical installations',
      'Safety switch installations',
      'Power point and light fitting upgrades',
      'Complete house rewiring',
      'Ceiling fan installations',
      'Smoke alarm compliance',
    ],
  },
  {
    id: 'commercial',
    icon: Building2,
    title: 'Commercial Electrical',
    description: 'Professional electrical services for businesses of all sizes across Melbourne.',
    features: [
      'Office fit-outs and renovations',
      'Retail lighting solutions',
      'Industrial electrical systems',
      'Data and communications cabling',
      'Emergency lighting systems',
      'Preventive maintenance programs',
    ],
  },
  {
    id: 'switchboard',
    icon: Zap,
    title: 'Switchboard Upgrades',
    description: 'Modernise your electrical system with updated switchboards and safety switches.',
    features: [
      'Safety switch installations',
      'Switchboard replacements',
      'Meter box upgrades',
      'Surge protection',
      'Three-phase upgrades',
      'Load balancing',
    ],
  },
  {
    id: 'ev-chargers',
    icon: Car,
    title: 'EV Charger Installation',
    description: 'Future-proof your property with professional electric vehicle charging solutions.',
    features: [
      'Home EV charger installation',
      'Commercial charging stations',
      'Tesla Wall Connector certified',
      'Load management systems',
      'Solar integration options',
      'Smart charging solutions',
    ],
  },
  {
    id: 'smart-home',
    icon: Cpu,
    title: 'Smart Home Systems',
    description: 'Transform your home with intelligent automation and connected systems.',
    features: [
      'Smart lighting controls',
      'Automated climate systems',
      'Voice assistant integration',
      'Remote access solutions',
      'Energy monitoring',
      'Whole-home automation',
    ],
  },
  {
    id: 'security',
    icon: Shield,
    title: 'CCTV & Security',
    description: 'Protect your property with professional security camera and alarm installations.',
    features: [
      'HD CCTV camera systems',
      'Security alarm installations',
      'Access control systems',
      'Intercom systems',
      'Remote monitoring setup',
      'Integrated security solutions',
    ],
  },
  {
    id: 'lighting',
    icon: Lightbulb,
    title: 'Lighting Design',
    description: 'Create the perfect ambiance with professional lighting design and installation.',
    features: [
      'Architectural lighting design',
      'LED upgrades and retrofits',
      'Outdoor and landscape lighting',
      'Under-cabinet lighting',
      'Dimmer installations',
      'Feature and accent lighting',
    ],
  },
  {
    id: 'maintenance',
    icon: Wrench,
    title: 'Maintenance & Repairs',
    description: 'Fast fault finding and reliable maintenance services to keep you powered.',
    features: [
      'Emergency fault finding',
      'Electrical safety inspections',
      'Preventive maintenance',
      'Power outage resolution',
      'Appliance repairs',
      'General electrical repairs',
    ],
  },
]

export function ServicesList() {
  return (
    <section className="py-20 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className={`scroll-mt-24 grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-xl border border-primary/20">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className="h-24 w-24 text-primary/20" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="p-4 bg-card/80 backdrop-blur border border-border rounded-lg">
                      <div className="text-sm font-medium text-primary">Premium Quality</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Licensed professionals | Warranty included
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
