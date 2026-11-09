import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { biBenefits, biHero } from '@/content/business-intelligence'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'

export const metadata: Metadata = pageMetadata({
  title: 'Business Intelligence Solutions in Qatar | Allied Enterprises',
  description:
    'Business intelligence and analytics in Qatar: automated reports, KPI dashboards and real-time, actionable data. Allied Enterprises, in partnership with Manthan.',
  path: '/business-intelligence-qatar/',
})

export default function BusinessIntelligencePage() {
  return (
    <>
      <PageHero
        path="/business-intelligence-qatar/"
        eyebrow={biHero.eyebrow}
        heading={biHero.heading}
        lead={biHero.lead}
        text={biHero.text}
        highlight={biHero.highlight}
        badge={biHero.badge}
        primary={biHero.primary}
        phone={company.phone}
      />
      <SplitFeature
        id="benefits-heading"
        heading={biBenefits.heading}
        text={biBenefits.text}
        links={biBenefits.links}
        tinted
      />
      <CtaBanner
        eyebrow={ctaBanner.eyebrow}
        heading={ctaBanner.heading}
        text={ctaBanner.text}
        cta={ctaBanner.cta}
      />
    </>
  )
}
