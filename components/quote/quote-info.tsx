'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Clock, Shield, CheckCircle, Zap } from 'lucide-react'

const benefits = [
  'Free, no-obligation quotes',
  'Transparent, itemized pricing',
  'Licensed & insured work',
  'Workmanship guarantee',
  'Flexible scheduling',
  'Clean, professional service',
]

export function QuoteInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-6"
    >
      {/* Contact Card */}
      <div className="p-6 bg-background border border-border rounded-xl">
        <h3 className="text-lg font-semibold mb-4">Need to Talk?</h3>
        <div className="space-y-4">
          <a 
            href="tel:1300VOLTEDGE"
            className="flex items-center gap-3 text-primary hover:underline"
          >
            <Phone className="h-5 w-5" />
            <span className="font-medium">1300 VOLT EDGE</span>
          </a>
          <a 
            href="mailto:quotes@voltedge.com.au"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span>quotes@voltedge.com.au</span>
          </a>
        </div>
      </div>

      {/* Response Time */}
      <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
        <div className="flex items-center gap-3 mb-3">
          <Clock className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Fast Response</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          We respond to all quote requests within 24 hours. For urgent projects, 
          call us directly for immediate assistance.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="p-6 bg-background border border-border rounded-xl">
        <h3 className="text-lg font-semibold mb-4">Why Choose VoltEdge?</h3>
        <ul className="space-y-3">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-primary shrink-0" />
              <span className="text-sm text-muted-foreground">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Trust Badges */}
      <div className="p-6 bg-background border border-border rounded-xl">
        <h3 className="text-lg font-semibold mb-4">Credentials</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium">Fully Licensed</div>
              <div className="text-xs text-muted-foreground">REC 12345</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium">Master Electricians</div>
              <div className="text-xs text-muted-foreground">MEA Certified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Notice */}
      <div className="p-6 bg-destructive/10 border border-destructive/20 rounded-xl">
        <div className="flex items-center gap-2 text-destructive mb-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
          </span>
          <span className="font-semibold">Emergency?</span>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          For electrical emergencies, skip the form and call us directly.
        </p>
        <a 
          href="tel:1300VOLTEDGE"
          className="inline-flex items-center gap-2 text-destructive font-medium hover:underline"
        >
          <Phone className="h-4 w-4" />
          Call Now: 1300 VOLT EDGE
        </a>
      </div>
    </motion.div>
  )
}
