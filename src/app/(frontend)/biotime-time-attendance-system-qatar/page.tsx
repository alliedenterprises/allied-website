import type { Metadata } from 'next'

import { CheckGrid } from '@/components/sections/CheckGrid'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { biotimeAbout, biotimeFeatures, biotimeHero } from '@/content/biotime'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'

export const metadata: Metadata = {
  // absolute: the brand is already in the title, so skip the layout's "| …" suffix
  title: { absolute: 'BioTime Time Attendance Software in Qatar | Allied Enterprises' },
  description:
    'ZKTeco BioTime web-based time attendance software in Qatar: multi-location devices, rosters, overtime, WPS payroll reports, mobile app and geofencing.',
  alternates: { canonical: '/biotime-time-attendance-system-qatar/' },
}

export default function BioTimePage() {
  return (
    <>
      <PageHero
        eyebrow={biotimeHero.eyebrow}
        heading={biotimeHero.heading}
        lead={biotimeHero.lead}
        text={biotimeHero.text}
        highlight={biotimeHero.highlight}
        badge={biotimeHero.badge}
        primary={biotimeHero.primary}
        phone={company.phone}
      />
      <CheckGrid id="features-heading" heading={biotimeFeatures.heading} items={biotimeFeatures.items} />
      <SplitFeature id="why-heading" heading={biotimeAbout.heading} text={biotimeAbout.text} links={biotimeAbout.links} />
      <CtaBanner
        eyebrow={ctaBanner.eyebrow}
        heading={ctaBanner.heading}
        text={ctaBanner.text}
        cta={ctaBanner.cta}
      />
    </>
  )
}
