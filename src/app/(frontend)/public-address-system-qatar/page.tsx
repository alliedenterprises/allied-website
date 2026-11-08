import type { Metadata } from 'next'

import { CheckGrid } from '@/components/sections/CheckGrid'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'
import { paFactors, paHero, paRequirements, paSupply, paWhatIs } from '@/content/public-address'

export const metadata: Metadata = {
  // absolute: the brand is already in the title, so skip the layout's "| …" suffix
  title: { absolute: 'Public Address System in Qatar | Allied Enterprises' },
  description:
    'Public address systems in Qatar for announcements, background music and evacuation: amplifiers, mixers and ceiling speakers, designed and installed in Doha.',
  alternates: { canonical: '/public-address-system-qatar/' },
}

export default function PublicAddressPage() {
  return (
    <>
      <PageHero
        eyebrow={paHero.eyebrow}
        heading={paHero.heading}
        lead={paHero.lead}
        text={paHero.text}
        highlight={paHero.highlight}
        badge={paHero.badge}
        primary={paHero.primary}
        phone={company.phone}
      />
      <SplitFeature id="supply-heading" heading={paSupply.heading} text={paSupply.text} tinted />
      <SplitFeature id="what-is-heading" heading={paWhatIs.heading} text={paWhatIs.text} />
      <CheckGrid id="requirements-heading" heading={paRequirements.heading} items={paRequirements.items} />
      <SplitFeature
        id="factors-heading"
        heading={paFactors.heading}
        text={paFactors.text}
        links={paFactors.links}
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
