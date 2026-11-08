import type { Metadata } from 'next'

import { CheckGrid } from '@/components/sections/CheckGrid'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageHero } from '@/components/sections/PageHero'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'
import { piBenefits, piHero } from '@/content/payroll-integration'

export const metadata: Metadata = {
  // absolute: the brand is already in the title, so skip the layout's "| …" suffix
  title: { absolute: 'Payroll Integration System in Qatar | Allied Enterprises' },
  description:
    'Connect BioTime and Sunbird time attendance data to your payroll system in Qatar to reduce payroll errors and calculate overtime, vacation and sick pay.',
  alternates: { canonical: '/payroll-integration-qatar/' },
}

export default function PayrollIntegrationPage() {
  return (
    <>
      <PageHero
        heading={piHero.heading}
        lead={piHero.lead}
        text={piHero.text}
        highlight={piHero.highlight}
        badge={piHero.badge}
        primary={piHero.primary}
        phone={company.phone}
      />
      <CheckGrid
        id="benefits-heading"
        heading={piBenefits.heading}
        items={piBenefits.items}
        links={piBenefits.links}
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
