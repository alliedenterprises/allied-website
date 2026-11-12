import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { CtaBanner } from '@/components/sections/CtaBanner'
import { FaqList } from '@/components/sections/FaqList'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'
import {
  taBenefits,
  taChoose,
  taCloud,
  taDevices,
  taFaq,
  taHero,
  taPrice,
  taWhyAllied,
} from '@/content/time-attendance'

export const metadata: Metadata = pageMetadata({
  title: 'Time Attendance System in Qatar | Allied Enterprises',
  description:
    'Fingerprint, face and palm attendance machines in Qatar from the authorized ZKTeco distributor, with BioTime software, payroll export, installation and support.',
  path: '/time-attendance-system-qatar/',
})

export default function TimeAttendancePage() {
  return (
    <>
      <PageHero
        path="/time-attendance-system-qatar/"
        eyebrow={taHero.eyebrow}
        heading={taHero.heading}
        lead={taHero.lead}
        text={taHero.text}
        highlight={taHero.highlight}
        badge={taHero.badge}
        primary={taHero.primary}
        phone={company.phone}
      />
      <SplitFeature
        id="why-allied-heading"
        heading={taWhyAllied.heading}
        text={taWhyAllied.text}
        links={taWhyAllied.links}
        tinted
      />
      <SplitFeature id="devices-heading" heading={taDevices.heading} text={taDevices.text} links={taDevices.links} />
      <SplitFeature
        id="choose-heading"
        heading={taChoose.heading}
        text={taChoose.text}
        links={taChoose.links}
        tinted
      />
      <SplitFeature id="price-heading" heading={taPrice.heading} text={taPrice.text} links={taPrice.links} />
      <SplitFeature id="benefits-heading" heading={taBenefits.heading} text={taBenefits.text} tinted />
      <SplitFeature id="cloud-heading" heading={taCloud.heading} text={taCloud.text} links={taCloud.links} />
      <FaqList heading={taFaq.heading} items={taFaq.items} />
      <CtaBanner
        eyebrow={ctaBanner.eyebrow}
        heading={ctaBanner.heading}
        text={ctaBanner.text}
        cta={ctaBanner.cta}
      />
    </>
  )
}
