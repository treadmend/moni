import { Metadata } from 'next'
import { EmergencyHero } from '@/components/emergency/emergency-hero'
import { EmergencyServices } from '@/components/emergency/emergency-services'
import { EmergencyCTA } from '@/components/emergency/emergency-cta'

export const metadata: Metadata = {
  title: '24/7 Emergency Electrician | VoltEdge Electrical Melbourne',
  description: 'Emergency electrical services available 24/7 across Melbourne and Victoria. Fast response times, licensed electricians, no call-out fee conditions apply.',
}

export default function EmergencyPage() {
  return (
    <>
      <EmergencyHero />
      <EmergencyServices />
      <EmergencyCTA />
    </>
  )
}
