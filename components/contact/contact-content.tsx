'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function ContactContent() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section className="py-20 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Contact Information
            </h2>
            <p className="mt-4 text-muted-foreground">
              Reach out to us through any of the following channels. 
              We typically respond within 2 business hours.
            </p>

            <div className="mt-8 space-y-6">
              <a 
                href="tel:1300VOLTEDGE"
                className="flex items-start gap-4 p-4 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Phone</div>
                  <div className="text-primary font-medium">1300 VOLT EDGE</div>
                  <div className="text-sm text-muted-foreground">24/7 for emergencies</div>
                </div>
              </a>

              <a 
                href="mailto:info@voltedge.com.au"
                className="flex items-start gap-4 p-4 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <div className="text-primary">info@voltedge.com.au</div>
                  <div className="text-sm text-muted-foreground">We reply within 2 hours</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-background border border-border rounded-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Location</div>
                  <div className="text-muted-foreground">Brunswick, Melbourne</div>
                  <div className="text-sm text-muted-foreground">Servicing All Victoria</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-background border border-border rounded-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Business Hours</div>
                  <div className="text-muted-foreground">Mon - Fri: 7am - 6pm</div>
                  <div className="text-muted-foreground">Sat: 8am - 2pm</div>
                  <div className="text-sm text-primary">24/7 Emergency Available</div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 aspect-video rounded-xl overflow-hidden bg-muted border border-border">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-transparent">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary/30 mx-auto mb-2" />
                  <div className="text-muted-foreground">Brunswick, Melbourne</div>
                  <a 
                    href="https://maps.google.com/?q=Brunswick+Melbourne" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 sm:p-8 bg-background border border-border rounded-xl">
              <h2 className="text-2xl font-bold tracking-tight">Send Us a Message</h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you shortly.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-8 text-center"
                >
                  <div className="w-16 h-16 mx-auto flex items-center justify-center bg-primary/10 rounded-full mb-4">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Message Sent!</h3>
                  <p className="mt-2 text-muted-foreground">
                    Thank you for reaching out. We&apos;ll get back to you within 2 business hours.
                  </p>
                  <Button 
                    asChild
                    className="mt-6"
                  >
                    <Link href="/" className="flex items-center gap-2">
                      Back to Home
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" name="name" required placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="Your phone number" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required placeholder="your@email.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="How can we help?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project or question..."
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Quick Link */}
            <div className="mt-6 p-6 bg-primary/5 border border-primary/20 rounded-xl text-center">
              <p className="text-muted-foreground mb-3">
                Need a detailed quote for your project?
              </p>
              <Button asChild variant="outline">
                <Link href="/quote" className="flex items-center gap-2">
                  Go to Quote Request Form
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
