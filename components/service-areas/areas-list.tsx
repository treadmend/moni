'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Star } from 'lucide-react'

const areas = [
  {
    region: 'Inner Melbourne',
    description: 'Our home base and primary service area with fastest response times.',
    suburbs: [
      'Brunswick', 'Carlton', 'Fitzroy', 'Collingwood', 'Richmond',
      'South Yarra', 'Prahran', 'St Kilda', 'Port Melbourne', 'Melbourne CBD',
    ],
    response: '30-60 min',
    featured: true,
  },
  {
    region: 'Northern Suburbs',
    description: 'Comprehensive coverage across Melbourne\'s northern corridor.',
    suburbs: [
      'Coburg', 'Preston', 'Northcote', 'Thornbury', 'Reservoir',
      'Bundoora', 'Heidelberg', 'Ivanhoe', 'Eltham', 'Diamond Creek',
    ],
    response: '1-2 hours',
    featured: false,
  },
  {
    region: 'Eastern Suburbs',
    description: 'Expert electrical services throughout Melbourne\'s east.',
    suburbs: [
      'Hawthorn', 'Kew', 'Camberwell', 'Box Hill', 'Doncaster',
      'Glen Waverley', 'Mount Waverley', 'Ringwood', 'Croydon', 'Lilydale',
    ],
    response: '1-2 hours',
    featured: false,
  },
  {
    region: 'Southern Suburbs',
    description: 'Full service coverage for Melbourne\'s south and bayside.',
    suburbs: [
      'Brighton', 'Sandringham', 'Hampton', 'Moorabbin', 'Bentleigh',
      'Clayton', 'Oakleigh', 'Chadstone', 'Malvern', 'Toorak',
    ],
    response: '1-2 hours',
    featured: false,
  },
  {
    region: 'Western Suburbs',
    description: 'Reliable electrical solutions for Melbourne\'s growing west.',
    suburbs: [
      'Footscray', 'Yarraville', 'Williamstown', 'Altona', 'Werribee',
      'Point Cook', 'Sunshine', 'Caroline Springs', 'Melton', 'Moonee Ponds',
    ],
    response: '1-2 hours',
    featured: false,
  },
  {
    region: 'Regional Victoria',
    description: 'Extended service for major regional centres.',
    suburbs: [
      'Geelong', 'Ballarat', 'Bendigo', 'Mornington Peninsula',
      'Dandenong Ranges', 'Yarra Valley', 'Macedon Ranges', 'Gippsland',
    ],
    response: 'Same day/Next day',
    featured: false,
  },
]

export function AreasList() {
  return (
    <section className="py-20 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.region}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`relative p-6 sm:p-8 rounded-xl border ${
                area.featured 
                  ? 'bg-primary/5 border-primary/30' 
                  : 'bg-background border-border'
              }`}
            >
              {area.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                  <Star className="h-3 w-3" />
                  Home Base
                </div>
              )}

              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Region Info */}
                <div>
                  <div className="flex items-center gap-2 text-primary">
                    <MapPin className="h-5 w-5" />
                    <h3 className="text-xl font-semibold">{area.region}</h3>
                  </div>
                  <p className="mt-2 text-muted-foreground text-sm">
                    {area.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Response time:</span>
                    <span className="font-medium text-foreground">{area.response}</span>
                  </div>
                </div>

                {/* Suburbs */}
                <div className="lg:col-span-2">
                  <div className="flex flex-wrap gap-2">
                    {area.suburbs.map((suburb) => (
                      <span
                        key={suburb}
                        className="px-3 py-1.5 bg-muted text-muted-foreground text-sm rounded-full"
                      >
                        {suburb}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 sm:p-8 bg-background border border-border rounded-xl text-center"
        >
          <h3 className="text-xl font-semibold">Don&apos;t See Your Area?</h3>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            We service many more areas across Victoria. Contact us to confirm we can help 
            with your location. Emergency callouts available 24/7 across all service areas.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
