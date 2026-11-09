import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { CheckGrid } from '@/components/sections/CheckGrid'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { FaqList } from '@/components/sections/FaqList'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'
import { hrmsCovers, hrmsFaq, hrmsFlow, hrmsHero, hrmsQatarRules } from '@/content/hrms-payroll'

export const metadata: Metadata = pageMetadata({
  title: 'HRMS & Payroll Software in Qatar | Allied Enterprises',
  description:
    'HR and payroll management in Qatar: employee records, leave, WPS salary payments and attendance from ZKTeco devices via BioTime and Sunbird. Ask for a demo.',
  path: '/hrms-payroll-management-qatar/',
})

export default function HrmsPayrollPage() {
  return (
    <>
      <PageHero
        path="/hrms-payroll-management-qatar/"
        eyebrow={hrmsHero.eyebrow}
        heading={hrmsHero.heading}
        lead={hrmsHero.lead}
        text={hrmsHero.text}
        highlight={hrmsHero.highlight}
        badge={hrmsHero.badge}
        primary={hrmsHero.primary}
        phone={company.phone}
      />
      <CheckGrid id="covers-heading" heading={hrmsCovers.heading} items={hrmsCovers.items} />
      <SplitFeature id="qatar-rules-heading" heading={hrmsQatarRules.heading} text={hrmsQatarRules.text} />
      <SplitFeature
        id="flow-heading"
        heading={hrmsFlow.heading}
        text={hrmsFlow.text}
        links={hrmsFlow.links}
        tinted
      />
      <FaqList heading={hrmsFaq.heading} items={hrmsFaq.items} />
      <CtaBanner
        eyebrow={ctaBanner.eyebrow}
        heading={ctaBanner.heading}
        text={ctaBanner.text}
        cta={ctaBanner.cta}
      />
    </>
  )
}
