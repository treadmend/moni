import { Metadata } from 'next'
import { ProjectsHero } from '@/components/projects/projects-hero'
import { ProjectsGallery } from '@/components/projects/projects-gallery'
import { ProjectsCTA } from '@/components/projects/projects-cta'

export const metadata: Metadata = {
  title: 'Our Projects | VoltEdge Electrical Melbourne',
  description: 'Explore our portfolio of residential and commercial electrical projects across Melbourne and Victoria. Quality workmanship guaranteed.',
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGallery />
      <ProjectsCTA />
    </>
  )
}
