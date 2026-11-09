import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'
import { pabxHero, pabxHow, pabxSolutions, pabxValue } from '@/content/pabx'

export const metadata: Metadata = pageMetadata({
  title: 'PABX & IP PBX Telephone System in Qatar | Allied Enterprises',
  description:
    'PABX and IP PBX telephone systems in Qatar with IVR, voicemail to email, call queue and call recording. Sales, installation and support by Allied Enterprises.',
  path: '/pabx-system-qatar/',
})

export default function PabxPage() {
  return (
    <>
      <PageHero
        path="/pabx-system-qatar/"
        eyebrow={pabxHero.eyebrow}
        heading={pabxHero.heading}
        lead={pabxHero.lead}
        text={pabxHero.text}
        highlight={pabxHero.highlight}
        badge={pabxHero.badge}
        primary={pabxHero.primary}
        phone={company.phone}
      />
      <SplitFeature id="how-heading" heading={pabxHow.heading} text={pabxHow.text} tinted />
      <SplitFeature
        id="solutions-heading"
        heading={pabxSolutions.heading}
        text={pabxSolutions.text}
        links={pabxSolutions.links}
      />
      <SplitFeature
        id="value-heading"
        heading={pabxValue.heading}
        text={pabxValue.text}
        links={pabxValue.links}
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
