import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { CheckGrid } from '@/components/sections/CheckGrid'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { FaqList } from '@/components/sections/FaqList'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import {
  biotimeAbout,
  biotimeFaq,
  biotimeFeatures,
  biotimeHero,
  biotimeRequirements,
  biotimeVersions,
} from '@/content/biotime'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'

export const metadata: Metadata = pageMetadata({
  title: 'BioTime Time Attendance Software in Qatar | Allied Enterprises',
  description:
    'ZKTeco BioTime 9.5 and BioTime Cloud attendance software in Qatar: multi-site devices, rosters, overtime, WPS payroll reports and mobile app. Installed by Allied.',
  path: '/biotime-time-attendance-system-qatar/',
})

export default function BioTimePage() {
  return (
    <>
      <PageHero
        path="/biotime-time-attendance-system-qatar/"
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
      <SplitFeature
        id="versions-heading"
        heading={biotimeVersions.heading}
        text={biotimeVersions.text}
        links={biotimeVersions.links}
        tinted
      />
      <CheckGrid id="requirements-heading" heading={biotimeRequirements.heading} items={biotimeRequirements.items} />
      <FaqList heading={biotimeFaq.heading} items={biotimeFaq.items} />
      <CtaBanner
        eyebrow={ctaBanner.eyebrow}
        heading={ctaBanner.heading}
        text={ctaBanner.text}
        cta={ctaBanner.cta}
      />
    </>
  )
}
