import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { company } from '@/content/company'
import { gateBoom, gateFlap, gateFlapFeatures, gateHero, gateTurnstiles } from '@/content/gate-barrier'
import { ctaBanner } from '@/content/home'

export const metadata: Metadata = pageMetadata({
  title: 'Gate Barrier, Turnstile & Flap Barrier Qatar | Allied Enterprises',
  description:
    'ZKTeco gate barriers, turnstiles and flap barriers in Qatar for vehicle and pedestrian access control. Supply, installation and maintenance in Doha.',
  path: '/zkteco-qatar-gate-barrier-system/',
})

export default function GateBarrierPage() {
  return (
    <>
      <PageHero
        path="/zkteco-qatar-gate-barrier-system/"
        eyebrow={gateHero.eyebrow}
        heading={gateHero.heading}
        lead={gateHero.lead}
        text={gateHero.text}
        highlight={gateHero.highlight}
        badge={gateHero.badge}
        primary={gateHero.primary}
        phone={company.phone}
      />
      <SplitFeature id="boom-heading" heading={gateBoom.heading} text={gateBoom.text} tinted />
      <SplitFeature
        id="turnstiles-heading"
        heading={gateTurnstiles.heading}
        text={gateTurnstiles.text}
        links={gateTurnstiles.links}
      />
      <SplitFeature id="flap-heading" heading={gateFlap.heading} text={gateFlap.text} tinted />
      <SplitFeature
        id="flap-features-heading"
        heading={gateFlapFeatures.heading}
        text={gateFlapFeatures.text}
        links={gateFlapFeatures.links}
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
