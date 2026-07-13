import { Hero } from '@/components/home/hero'
import { Services } from '@/components/home/services'
import { TrustIndicators } from '@/components/home/trust-indicators'
import { FeaturedProjects } from '@/components/home/featured-projects'
import { Testimonials } from '@/components/home/testimonials'
import { AboutPreview } from '@/components/home/about-preview'
import { EmergencyBanner } from '@/components/home/emergency-banner'
import { ContactCTA } from '@/components/home/contact-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <Services />
      <FeaturedProjects />
      <AboutPreview />
      <Testimonials />
      <EmergencyBanner />
      <ContactCTA />
    </>
  )
}
