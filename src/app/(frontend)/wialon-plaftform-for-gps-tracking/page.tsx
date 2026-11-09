import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { CheckGrid } from '@/components/sections/CheckGrid'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'
import { wialonFeatures, wialonHero, wialonMore, wialonPlatform } from '@/content/wialon'

// The "plaftform" typo in the path is the old WordPress URL, kept on purpose (CLAUDE.md §14A).
export const metadata: Metadata = pageMetadata({
  title: 'Wialon GPS Tracking Platform in Qatar | Allied Enterprises',
  description:
    'Wialon GPS tracking in Qatar for fleets and assets: real-time tracking, geofences, fuel and driver management, alerts and reports, in the cloud or on-premise.',
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
      <SplitFeature id="platform-heading" heading={wialonPlatform.heading} text={wialonPlatform.text} tinted />
      <CheckGrid id="features-heading" heading={wialonFeatures.heading} items={wialonFeatures.items} />
      <SplitFeature
        id="more-heading"
        heading={wialonMore.heading}
        text={wialonMore.text}
        links={wialonMore.links}
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
