'use client'

import { motion } from 'framer-motion'
import { Phone, AlertTriangle, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function EmergencyHero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-destructive/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Emergency Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 border border-destructive/30 rounded-full text-sm text-destructive mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
            </span>
            Available Now
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            <span className="text-destructive">24/7</span> Emergency<br />
            Electrical Service
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Power outage? Electrical emergency? Our licensed electricians are standing by 
            around the clock to help you across Melbourne and Victoria.
          </p>

          {/* Emergency CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-col items-center gap-4"
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-destructive hover:bg-destructive/90 text-white text-lg px-10 h-16 shadow-xl"
            >
              <a href="tel:1300VOLTEDGE" className="flex items-center gap-3">
                <Phone className="h-6 w-6" />
                1300 VOLT EDGE
              </a>
            </Button>
            <span className="text-sm text-muted-foreground">
              Call now for immediate assistance
            </span>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            <div className="flex flex-col items-center p-4 bg-card border border-border rounded-lg">
              <Clock className="h-6 w-6 text-primary mb-2" />
              <div className="font-semibold">Fast Response</div>
              <div className="text-sm text-muted-foreground">Usually under 60 mins</div>
            </div>
            <div className="flex flex-col items-center p-4 bg-card border border-border rounded-lg">
              <AlertTriangle className="h-6 w-6 text-primary mb-2" />
              <div className="font-semibold">All Emergencies</div>
              <div className="text-sm text-muted-foreground">No job too big or small</div>
            </div>
            <div className="flex flex-col items-center p-4 bg-card border border-border rounded-lg">
              <Phone className="h-6 w-6 text-primary mb-2" />
              <div className="font-semibold">24/7 Available</div>
              <div className="text-sm text-muted-foreground">Day, night & weekends</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
