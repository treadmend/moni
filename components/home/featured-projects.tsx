'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Modern Office Fit-out',
    category: 'Commercial',
    location: 'Melbourne CBD',
    image: '/projects/commercial-office.jpg',
    description: 'Complete electrical installation for a 2000sqm premium office space.',
  },
  {
    id: 2,
    title: 'Luxury Home Renovation',
    category: 'Residential',
    location: 'Brighton',
    image: '/projects/luxury-home.jpg',
    description: 'Full rewiring and smart home integration for a heritage property.',
  },
  {
    id: 3,
    title: 'EV Charging Hub',
    category: 'EV Infrastructure',
    location: 'South Yarra',
    image: '/projects/ev-chargers.jpg',
    description: 'Multi-bay commercial EV charging station installation.',
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-20 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-sm font-medium text-primary tracking-widest uppercase">Our Work</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Featured Projects
            </h2>
          </div>
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <Link href={`/projects#project-${project.id}`}>
                {/* Image Container */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                  {/* Placeholder gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/20">0{project.id}</div>
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Arrow */}
                  <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{project.category}</span>
                    <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
