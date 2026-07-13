import { Metadata } from 'next'
import { QuoteHero } from '@/components/quote/quote-hero'
import { QuoteForm } from '@/components/quote/quote-form'
import { QuoteInfo } from '@/components/quote/quote-info'

export const metadata: Metadata = {
  title: 'Get a Free Quote | VoltEdge Electrical Melbourne',
  description: 'Request a free, no-obligation quote for your electrical project. Residential, commercial, EV chargers, and more. Fast response guaranteed.',
}

export default function QuotePage() {
  return (
    <>
      <QuoteHero />
      <div className="py-20 sm:py-32 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <QuoteForm />
            </div>
            <div>
              <QuoteInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
