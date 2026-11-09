import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { CheckGrid } from '@/components/sections/CheckGrid'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { FaqList } from '@/components/sections/FaqList'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'
import { sunbirdFaq, sunbirdHelps, sunbirdHero, sunbirdHosting, sunbirdPayroll } from '@/content/sunbird'

export const metadata: Metadata = pageMetadata({
  title: 'Sunbird Time Management System in Qatar | Allied Enterprises',
  description:
    'Sunbird Time & Attendance in Qatar: cloud-based time management with real-time data, GPS mobile clocking and payroll integration, on our server or yours.',
  path: '/sunbirdtime-time-management-system-qatar/',
})

export default function SunbirdPage() {
  return (
    <>
      <PageHero
        path="/sunbirdtime-time-management-system-qatar/"
        eyebrow={sunbirdHero.eyebrow}
        heading={sunbirdHero.heading}
        lead={sunbirdHero.lead}
        text={sunbirdHero.text}
        highlight={sunbirdHero.highlight}
        badge={sunbirdHero.badge}
        primary={sunbirdHero.primary}
        phone={company.phone}
      />
      <CheckGrid id="helps-heading" heading={sunbirdHelps.heading} items={sunbirdHelps.items} />
      <SplitFeature id="hosting-heading" heading={sunbirdHosting.heading} text={sunbirdHosting.text} />
      <SplitFeature
        id="payroll-heading"
        heading={sunbirdPayroll.heading}
        text={sunbirdPayroll.text}
        links={sunbirdPayroll.links}
        tinted
      />
      <FaqList heading={sunbirdFaq.heading} items={sunbirdFaq.items} />
      <CtaBanner
        eyebrow={ctaBanner.eyebrow}
        heading={ctaBanner.heading}
        text={ctaBanner.text}
        cta={ctaBanner.cta}
      />
    </>
  )
}
