import { Metadata } from 'next'
import { ContactHero } from '@/components/contact/contact-hero'
import { ContactContent } from '@/components/contact/contact-content'
import { ContactEmergency } from '@/components/contact/contact-emergency'

export const metadata: Metadata = {
  title: 'Contact Us | VoltEdge Electrical Melbourne',
  description: 'Get in touch with VoltEdge Electrical. Phone, email, or visit us in Brunswick. 24/7 emergency service available across Melbourne and Victoria.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactContent />
      <ContactEmergency />
    </>
  )
}
