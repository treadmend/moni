'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactCTA() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-8 sm:p-12 lg:p-16">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium text-primary tracking-widest uppercase">Get Started</span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                Ready to Power Up Your Project?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground text-pretty">
                Whether it&apos;s a small repair or a major installation, we&apos;re here to help. 
                Get a free, no-obligation quote today.
              </p>

              {/* Contact Info */}
              <div className="mt-8 space-y-4">
                <a 
                  href="tel:1300ELECTRICITYFORYOU"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <span>1300 ELECTRICITYFORYOU</span>
                </a>
                <a 
                  href="mailto:info@voltedge.com.au"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span>info@voltedge.com.au</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Brunswick, Melbourne | Servicing All Victoria</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base h-14 glow"
              >
                <Link href="/quote" className="flex items-center justify-center gap-2">
                  Request a Free Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-border hover:bg-muted text-base h-14"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-2">
                Free quotes • No obligation • Fast response
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
