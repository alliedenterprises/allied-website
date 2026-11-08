import type { Metadata } from 'next'

import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'
import { cablingChoose, cablingCompany, cablingHero, cablingTypes } from '@/content/structured-cabling'

export const metadata: Metadata = {
  // absolute: the brand is already in the title, so skip the layout's "| …" suffix
  title: { absolute: 'Structured Cabling Data & Voice in Qatar | Allied Enterprises' },
  description:
    'Structured cabling in Qatar for data and voice: Cat6A F/UTP, STP and fiber optic cabling, network cabinets, installation and testing by Allied Enterprises.',
  alternates: { canonical: '/structured-cabling-data-voice-qatar/' },
}

export default function StructuredCablingPage() {
  return (
    <>
      <PageHero
        eyebrow={cablingHero.eyebrow}
        heading={cablingHero.heading}
        lead={cablingHero.lead}
        text={cablingHero.text}
        highlight={cablingHero.highlight}
        badge={cablingHero.badge}
        primary={cablingHero.primary}
        phone={company.phone}
      />
      <SplitFeature id="company-heading" heading={cablingCompany.heading} text={cablingCompany.text} tinted />
      <SplitFeature
        id="cable-types-heading"
        heading={cablingTypes.heading}
        text={cablingTypes.text}
        links={cablingTypes.links}
      />
      <SplitFeature
        id="choose-heading"
        heading={cablingChoose.heading}
        text={cablingChoose.text}
        links={cablingChoose.links}
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
