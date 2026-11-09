import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'
import { intercomBenefits, intercomContact, intercomHero, intercomTypes } from '@/content/intercom'

export const metadata: Metadata = pageMetadata({
  title: 'Audio & Video Intercom Systems in Qatar | Allied Enterprises',
  description:
    'Audio and video intercom systems in Qatar: wired, wireless, apartment and security intercoms with door release and CCTV integration, installed in Doha.',
  path: '/audio-video-intercom-qatar/',
})

export default function IntercomPage() {
  return (
    <>
      <PageHero
        path="/audio-video-intercom-qatar/"
        eyebrow={intercomHero.eyebrow}
        heading={intercomHero.heading}
        lead={intercomHero.lead}
        text={intercomHero.text}
        highlight={intercomHero.highlight}
        badge={intercomHero.badge}
        primary={intercomHero.primary}
        phone={company.phone}
      />
      <SplitFeature id="types-heading" heading={intercomTypes.heading} text={intercomTypes.text} tinted />
      <SplitFeature
        id="benefits-heading"
        heading={intercomBenefits.heading}
        text={intercomBenefits.text}
        links={intercomBenefits.links}
      />
      <SplitFeature
        id="installation-heading"
        heading={intercomContact.heading}
        text={intercomContact.text}
        links={intercomContact.links}
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
