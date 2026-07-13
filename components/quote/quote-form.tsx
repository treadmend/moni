'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Send, Upload, X, ArrowRight, FileImage } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const serviceOptions = [
  { value: 'residential', label: 'Residential Electrical' },
  { value: 'commercial', label: 'Commercial Electrical' },
  { value: 'emergency', label: 'Emergency Callout' },
  { value: 'switchboard', label: 'Switchboard Upgrade' },
  { value: 'ev-charger', label: 'EV Charger Installation' },
  { value: 'smart-home', label: 'Smart Home Systems' },
  { value: 'cctv', label: 'CCTV & Security' },
  { value: 'lighting', label: 'Lighting Design' },
  { value: 'maintenance', label: 'Maintenance & Repairs' },
  { value: 'other', label: 'Other' },
]

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      setUploadedFiles(prev => [...prev, ...Array.from(files)])
    }
  }

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index))
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 sm:p-12 bg-background border border-border rounded-xl text-center"
      >
        <div className="w-20 h-20 mx-auto flex items-center justify-center bg-primary/10 rounded-full mb-6">
          <Send className="h-10 w-10 text-primary" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold">Quote Request Received!</h2>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          Thank you for your interest in VoltEdge Electrical. We&apos;ve received your quote request and 
          will get back to you within 24 hours with a detailed proposal.
        </p>
        <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">What happens next?</strong><br />
            Our team will review your requirements and may call you for any clarifications. 
            You&apos;ll receive a detailed, itemized quote via email.
          </p>
        </div>
        <Button asChild className="mt-8">
          <Link href="/" className="flex items-center gap-2">
            Back to Home
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 sm:p-8 bg-background border border-border rounded-xl"
    >
      <h2 className="text-2xl font-bold tracking-tight">Project Details</h2>
      <p className="mt-2 text-muted-foreground">
        Please provide as much detail as possible for an accurate quote.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {/* Personal Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Your Information</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" name="name" required placeholder="John Smith" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" name="phone" type="tel" required placeholder="0400 000 000" />
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" name="email" type="email" required placeholder="john@email.com" />
          </div>
        </div>

        {/* Service Details */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Service Required</h3>
          <div className="space-y-2">
            <Label htmlFor="service">Type of Service *</Label>
            <select
              id="service"
              name="service"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select a service...</option>
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Location</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="suburb">Suburb *</Label>
              <Input id="suburb" name="suburb" required placeholder="Brunswick" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="postcode">Postcode *</Label>
              <Input id="postcode" name="postcode" required placeholder="3056" />
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <Label htmlFor="address">Street Address (Optional)</Label>
            <Input id="address" name="address" placeholder="123 Example Street" />
          </div>
        </div>

        {/* Project Description */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Project Details</h3>
          <div className="space-y-2">
            <Label htmlFor="message">Describe Your Project *</Label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Please describe your electrical project or issue in detail. Include information about the scope of work, any specific requirements, timeline, or budget considerations..."
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            />
          </div>
        </div>

        {/* File Upload */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Upload Images (Optional)</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Photos can help us provide a more accurate quote. Max 5 files, 10MB each.
          </p>
          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileUpload}
            className="hidden"
          />
          
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full p-6 border-2 border-dashed border-border rounded-lg hover:border-primary/50 transition-colors"
          >
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <Upload className="h-8 w-8" />
              <span>Click to upload or drag and drop</span>
              <span className="text-xs">PNG, JPG, HEIC up to 10MB</span>
            </div>
          </button>

          {/* Uploaded Files */}
          {uploadedFiles.length > 0 && (
            <div className="mt-4 space-y-2">
              {uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-muted rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <FileImage className="h-5 w-5 text-primary" />
                    <span className="text-sm truncate max-w-[200px]">{file.name}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="p-1 hover:bg-background rounded"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Preferred Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Preferred Contact Method</h3>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="contact" value="phone" defaultChecked className="text-primary" />
              <span className="text-sm">Phone</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="contact" value="email" className="text-primary" />
              <span className="text-sm">Email</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="contact" value="either" className="text-primary" />
              <span className="text-sm">Either</span>
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <Button 
            type="submit" 
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 h-14 text-base"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Submitting Request...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Submit Quote Request
                <Send className="h-5 w-5" />
              </span>
            )}
          </Button>
          <p className="mt-4 text-xs text-center text-muted-foreground">
            By submitting this form, you agree to be contacted by VoltEdge Electrical regarding your quote request.
          </p>
        </div>
      </form>
    </motion.div>
  )
}
