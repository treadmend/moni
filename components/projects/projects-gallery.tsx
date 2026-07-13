'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, MapPin, Building2, Home, Car, Lightbulb, Shield } from 'lucide-react'

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'ev', label: 'EV Charging' },
  { id: 'lighting', label: 'Lighting' },
  { id: 'security', label: 'Security' },
]

const projects = [
  {
    id: 1,
    title: 'Modern Office Fit-out',
    category: 'commercial',
    location: 'Melbourne CBD',
    description: 'Complete electrical installation for a 2000sqm premium office space including smart lighting systems and data infrastructure.',
    icon: Building2,
    stats: { size: '2000sqm', duration: '8 weeks' },
  },
  {
    id: 2,
    title: 'Heritage Home Renovation',
    category: 'residential',
    location: 'Brighton',
    description: 'Full rewiring and smart home integration for a heritage-listed property, preserving character while adding modern functionality.',
    icon: Home,
    stats: { size: '450sqm', duration: '6 weeks' },
  },
  {
    id: 3,
    title: 'Commercial EV Hub',
    category: 'ev',
    location: 'South Yarra',
    description: 'Multi-bay commercial EV charging station with load management and payment integration for a corporate car park.',
    icon: Car,
    stats: { chargers: '12 bays', power: '350kW' },
  },
  {
    id: 4,
    title: 'Restaurant Lighting Design',
    category: 'lighting',
    location: 'Fitzroy',
    description: 'Architectural lighting design and installation for a premium restaurant, featuring automated scenes and dimming control.',
    icon: Lightbulb,
    stats: { fixtures: '200+', scenes: '8' },
  },
  {
    id: 5,
    title: 'Retail Security System',
    category: 'security',
    location: 'Chapel Street',
    description: 'Comprehensive CCTV and access control system for a multi-level retail complex with remote monitoring capabilities.',
    icon: Shield,
    stats: { cameras: '48', access: '12 doors' },
  },
  {
    id: 6,
    title: 'Luxury Apartment Complex',
    category: 'residential',
    location: 'Docklands',
    description: 'Electrical fit-out for 24 luxury apartments including individual smart home systems and common area lighting.',
    icon: Building2,
    stats: { units: '24', duration: '16 weeks' },
  },
  {
    id: 7,
    title: 'Residential EV Charger',
    category: 'ev',
    location: 'Toorak',
    description: 'Tesla Wall Connector installation with solar integration and load management for a private residence.',
    icon: Car,
    stats: { power: '22kW', solar: 'Integrated' },
  },
  {
    id: 8,
    title: 'Warehouse Conversion',
    category: 'commercial',
    location: 'Collingwood',
    description: 'Electrical infrastructure for warehouse-to-office conversion, including three-phase upgrade and LED lighting throughout.',
    icon: Building2,
    stats: { size: '1200sqm', duration: '10 weeks' },
  },
  {
    id: 9,
    title: 'Landscape Lighting',
    category: 'lighting',
    location: 'Kew',
    description: 'Extensive garden and facade lighting for a luxury estate, with automated timing and scene control.',
    icon: Lightbulb,
    stats: { fixtures: '85', zones: '6' },
  },
]

export function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section className="py-20 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background border border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                id={`project-${project.id}`}
                className="group relative bg-background border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
              >
                {/* Image Area */}
                <div className="relative aspect-[4/3] bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="h-16 w-16 text-primary/30" />
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-full">
                      <ArrowUpRight className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    {project.location}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  {/* Stats */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <span
                        key={key}
                        className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded"
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
