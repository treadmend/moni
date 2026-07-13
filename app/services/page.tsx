import { Metadata } from 'next'
import { ServicesHero } from '@/components/services/services-hero'
import { ServicesList } from '@/components/services/services-list'
import { ServicesCTA } from '@/components/services/services-cta'

export const metadata: Metadata = {
  title: 'Our Services | VoltEdge Electrical Melbourne',
  description: 'Comprehensive electrical services including residential, commercial, EV chargers, smart home systems, CCTV, and 24/7 emergency callouts across Victoria.',
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </>
  )
}
