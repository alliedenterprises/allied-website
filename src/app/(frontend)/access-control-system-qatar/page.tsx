import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import {
  acAntiTailgating,
  acContact,
  acHero,
  acNotEnough,
  acWhatIs,
  acWhichEntrance,
} from '@/content/access-control'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'

export const metadata: Metadata = pageMetadata({
  title: 'Access Control System in Qatar | Allied Enterprises',
  description:
    'Access control systems in Qatar using cards, PIN codes, tags and biometrics, integrated with turnstiles, speed gates and security doors. Installed in Doha.',
  path: '/access-control-system-qatar/',
})

export default function AccessControlPage() {
  return (
    <>
      <PageHero
        path="/access-control-system-qatar/"
        eyebrow={acHero.eyebrow}
        heading={acHero.heading}
        lead={acHero.lead}
        text={acHero.text}
        highlight={acHero.highlight}
        badge={acHero.badge}
        primary={acHero.primary}
        phone={company.phone}
      />
      <SplitFeature id="what-is-heading" heading={acWhatIs.heading} text={acWhatIs.text} tinted />
      <SplitFeature id="not-enough-heading" heading={acNotEnough.heading} text={acNotEnough.text} />
      <SplitFeature
        id="anti-tailgating-heading"
        heading={acAntiTailgating.heading}
        text={acAntiTailgating.text}
        tinted
      />
      <SplitFeature
        id="which-entrance-heading"
        heading={acWhichEntrance.heading}
        text={acWhichEntrance.text}
        links={acWhichEntrance.links}
      />
      <SplitFeature
        id="contact-heading"
        heading={acContact.heading}
        text={acContact.text}
        links={acContact.links}
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
