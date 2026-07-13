import { Metadata } from 'next'
import { ServiceAreasHero } from '@/components/service-areas/service-areas-hero'
import { AreasList } from '@/components/service-areas/areas-list'
import { ServiceAreasCTA } from '@/components/service-areas/service-areas-cta'

export const metadata: Metadata = {
  title: 'Service Areas | VoltEdge Electrical Melbourne',
  description: 'VoltEdge Electrical services all of Victoria including Melbourne CBD, Brunswick, Northern Suburbs, Eastern Suburbs, Western Suburbs and regional areas.',
}

export default function ServiceAreasPage() {
  return (
    <>
      <ServiceAreasHero />
      <AreasList />
      <ServiceAreasCTA />
    </>
  )
}
