import type { Metadata } from 'next'

import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { company } from '@/content/company'
import {
  fiberCalibration,
  fiberHero,
  fiberOtdr,
  fiberQuality,
  fiberTesters,
} from '@/content/fiber-testing'
import { ctaBanner } from '@/content/home'

// The "otdl" typo in the path is the old WordPress URL, kept on purpose (CLAUDE.md §14A).
export const metadata: Metadata = {
  // absolute: the brand is already in the title, so skip the layout's "| …" suffix
  title: { absolute: 'Fiber Optic Testing OTDR & OLTS in Qatar | Allied Enterprises' },
  description:
    'Fiber optic testing in Qatar with OTDR and OLTS: loss, length and fault testing, plus test equipment, rental and calibration from Allied Enterprises.',
  alternates: { canonical: '/fiber-optic-testing-otdl-olts-qatar/' },
}

export default function FiberTestingPage() {
  return (
    <>
      <PageHero
        eyebrow={fiberHero.eyebrow}
        heading={fiberHero.heading}
        lead={fiberHero.lead}
        text={fiberHero.text}
        highlight={fiberHero.highlight}
        badge={fiberHero.badge}
        primary={fiberHero.primary}
        phone={company.phone}
      />
      <SplitFeature id="otdr-heading" heading={fiberOtdr.heading} text={fiberOtdr.text} tinted />
      <SplitFeature
        id="tester-types-heading"
        heading={fiberTesters.heading}
        text={fiberTesters.text}
        links={fiberTesters.links}
      />
      <SplitFeature id="quality-heading" heading={fiberQuality.heading} text={fiberQuality.text} tinted />
      <SplitFeature
        id="calibration-heading"
        heading={fiberCalibration.heading}
        text={fiberCalibration.text}
        links={fiberCalibration.links}
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
