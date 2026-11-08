import type { Metadata } from 'next'

import { CtaBanner } from '@/components/sections/CtaBanner'
import { FaqList } from '@/components/sections/FaqList'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'
import { taBenefits, taCloud, taFaq, taHero, taWhyAllied } from '@/content/time-attendance'

export const metadata: Metadata = {
  // absolute: the brand is already in the title, so skip the layout's "| …" suffix
  title: { absolute: 'Time Attendance System in Qatar | Allied Enterprises' },
  description:
    'Biometric time attendance systems in Qatar from the authorized ZKTeco agent: fingerprint and face devices, cloud software, installation and local support.',
  alternates: { canonical: '/time-attendance-system-qatar/' },
}

export default function TimeAttendancePage() {
  return (
    <>
      <PageHero
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
      <SplitFeature id="benefits-heading" heading={taBenefits.heading} text={taBenefits.text} />
      <SplitFeature
        id="cloud-heading"
        heading={taCloud.heading}
        text={taCloud.text}
        links={taCloud.links}
        tinted
      />
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
