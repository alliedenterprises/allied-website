import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { CheckGrid } from '@/components/sections/CheckGrid'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { FaqList } from '@/components/sections/FaqList'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'
import {
  wialonFaq,
  wialonFeatures,
  wialonHero,
  wialonMore,
  wialonPlatform,
  wialonService,
} from '@/content/wialon'

// The "plaftform" typo in the path is the old WordPress URL, kept on purpose (CLAUDE.md §14A).
export const metadata: Metadata = pageMetadata({
  title: 'GPS Vehicle Tracking System in Qatar | Allied Enterprises',
  description:
    'GPS vehicle tracking in Qatar: Teltonika trackers supplied and installed, with the Wialon platform for live location, geofences, driver reports and alerts.',
  path: '/wialon-plaftform-for-gps-tracking/',
})

export default function WialonPage() {
  return (
    <>
      <PageHero
        path="/wialon-plaftform-for-gps-tracking/"
        eyebrow={wialonHero.eyebrow}
        heading={wialonHero.heading}
        lead={wialonHero.lead}
        text={wialonHero.text}
        highlight={wialonHero.highlight}
        badge={wialonHero.badge}
        primary={wialonHero.primary}
        phone={company.phone}
      />
      <SplitFeature id="service-heading" heading={wialonService.heading} text={wialonService.text} tinted />
      <SplitFeature id="platform-heading" heading={wialonPlatform.heading} text={wialonPlatform.text} />
      <CheckGrid id="features-heading" heading={wialonFeatures.heading} items={wialonFeatures.items} />
      <SplitFeature
        id="more-heading"
        heading={wialonMore.heading}
        text={wialonMore.text}
        links={wialonMore.links}
      />
      <FaqList heading={wialonFaq.heading} items={wialonFaq.items} />
      <CtaBanner
        eyebrow={ctaBanner.eyebrow}
        heading={ctaBanner.heading}
        text={ctaBanner.text}
        cta={ctaBanner.cta}
      />
    </>
  )
}
