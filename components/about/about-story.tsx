'use client'

import { motion } from 'framer-motion'

export function AboutStory() {
  return (
    <section className="py-20 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl font-bold text-primary/30">15+</div>
                  <div className="text-xl text-muted-foreground mt-2">Years of Excellence</div>
                </div>
              </div>
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:right-6 p-6 bg-card border border-border rounded-lg shadow-xl">
              <div className="text-3xl font-bold text-primary">5000+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary tracking-widest uppercase">Our Story</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
              Built on Expertise, Driven by Quality
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                VoltEdge Electrical was founded in 2009 with a simple mission: to provide 
                Melbourne with electrical services that exceed expectations. What started as 
                a small team of passionate electricians has grown into one of Victoria&apos;s 
                most respected electrical contractors.
              </p>
              <p>
                Based in Brunswick, we&apos;ve built our reputation on three core principles: 
                exceptional craftsmanship, unwavering safety standards, and genuine customer 
                care. Every project, from a simple repair to a complex commercial installation, 
                receives the same level of attention and professionalism.
              </p>
              <p>
                Our team of Master Electricians brings decades of combined experience to every 
                job. We invest heavily in ongoing training and the latest technology, ensuring 
                we&apos;re always at the forefront of the industry.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
