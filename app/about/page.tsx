import { Metadata } from 'next'
import { AboutHero } from '@/components/about/about-hero'
import { AboutStory } from '@/components/about/about-story'
import { AboutValues } from '@/components/about/about-values'
import { AboutCredentials } from '@/components/about/about-credentials'
import { AboutCTA } from '@/components/about/about-cta'

export const metadata: Metadata = {
  title: 'About Us | VoltEdge Electrical Melbourne',
  description: 'Learn about VoltEdge Electrical - Melbourne\'s premium electrical contractor. Licensed, insured, and committed to excellence since 2009.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutCredentials />
      <AboutCTA />
    </>
  )
}
