import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { CheckGrid } from '@/components/sections/CheckGrid'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { FaqList } from '@/components/sections/FaqList'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'
import { piBenefits, piFaq, piHero, piOptions, piProcess } from '@/content/payroll-integration'

export const metadata: Metadata = pageMetadata({
  title: 'Payroll & WPS Integration in Qatar | Allied Enterprises',
  description:
    'Connect ZKTeco attendance to your payroll in Qatar: export to your ERP, or use our payroll software to calculate overtime and generate the WPS SIF salary file.',
  path: '/payroll-integration-qatar/',
})

export default function PayrollIntegrationPage() {
  return (
    <>
      <PageHero
        path="/payroll-integration-qatar/"
        heading={piHero.heading}
        lead={piHero.lead}
        text={piHero.text}
        highlight={piHero.highlight}
        badge={piHero.badge}
        primary={piHero.primary}
        phone={company.phone}
      />
      <SplitFeature id="options-heading" heading={piOptions.heading} text={piOptions.text} tinted />
      <SplitFeature id="process-heading" heading={piProcess.heading} text={piProcess.text} links={piProcess.links} />
      <CheckGrid
        id="benefits-heading"
        heading={piBenefits.heading}
        items={piBenefits.items}
        links={piBenefits.links}
      />
      <FaqList heading={piFaq.heading} items={piFaq.items} />
      <CtaBanner
        eyebrow={ctaBanner.eyebrow}
        heading={ctaBanner.heading}
        text={ctaBanner.text}
        cta={ctaBanner.cta}
      />
    </>
  )
}
