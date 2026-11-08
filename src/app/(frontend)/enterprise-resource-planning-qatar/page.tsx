import type { Metadata } from 'next'

import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { company } from '@/content/company'
import { erpCloud, erpHero, erpOutgrow, erpWhat, erpWho } from '@/content/erp'
import { ctaBanner } from '@/content/home'

export const metadata: Metadata = {
  // absolute: the brand is already in the title, so skip the layout's "| …" suffix
  title: { absolute: 'Enterprise Resource Planning (ERP) in Qatar | Allied Enterprises' },
  description:
    'ERP software in Qatar to connect sales, HR, inventory, accounts and POS in one system, with cloud options and customised reporting. Talk to Allied Enterprises.',
  alternates: { canonical: '/enterprise-resource-planning-qatar/' },
}

export default function ErpPage() {
  return (
    <>
      <PageHero
        eyebrow={erpHero.eyebrow}
        heading={erpHero.heading}
        lead={erpHero.lead}
        text={erpHero.text}
        highlight={erpHero.highlight}
        badge={erpHero.badge}
        primary={erpHero.primary}
        phone={company.phone}
      />
      <SplitFeature id="outgrow-heading" heading={erpOutgrow.heading} text={erpOutgrow.text} />
      <SplitFeature id="what-heading" heading={erpWhat.heading} text={erpWhat.text} tinted />
      <SplitFeature id="cloud-heading" heading={erpCloud.heading} text={erpCloud.text} />
      <SplitFeature id="who-heading" heading={erpWho.heading} text={erpWho.text} links={erpWho.links} tinted />
      <CtaBanner
        eyebrow={ctaBanner.eyebrow}
        heading={ctaBanner.heading}
        text={ctaBanner.text}
        cta={ctaBanner.cta}
      />
    </>
  )
}
