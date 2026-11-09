import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { CheckGrid } from '@/components/sections/CheckGrid'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { bpmBenefits, bpmHero, bpmLifecycle, bpmTypes, bpmWhat } from '@/content/business-process'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'

export const metadata: Metadata = pageMetadata({
  title: 'Business Process Management (BPM) in Qatar | Allied Enterprises',
  description:
    'Business process management in Qatar: design, model, run and optimise your workflows with Appian. BPM consultancy and implementation by Allied Enterprises.',
  path: '/business-process-management/',
})

export default function BusinessProcessPage() {
  return (
    <>
      <PageHero
        path="/business-process-management/"
        eyebrow={bpmHero.eyebrow}
        heading={bpmHero.heading}
        lead={bpmHero.lead}
        text={bpmHero.text}
        highlight={bpmHero.highlight}
        badge={bpmHero.badge}
        primary={bpmHero.primary}
        phone={company.phone}
      />
      <SplitFeature id="what-heading" heading={bpmWhat.heading} text={bpmWhat.text} />
      <CheckGrid id="benefits-heading" heading={bpmBenefits.heading} items={bpmBenefits.items} />
      <SplitFeature id="lifecycle-heading" heading={bpmLifecycle.heading} text={bpmLifecycle.text} />
      <SplitFeature
        id="types-heading"
        heading={bpmTypes.heading}
        text={bpmTypes.text}
        links={bpmTypes.links}
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
