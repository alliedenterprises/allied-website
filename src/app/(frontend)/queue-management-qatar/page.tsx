import type { Metadata } from 'next'

import { CheckGrid } from '@/components/sections/CheckGrid'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'
import { queueExperience, queueHero, queueSolutions } from '@/content/queue-management'

export const metadata: Metadata = {
  // absolute: the brand is already in the title, so skip the layout's "| …" suffix
  title: { absolute: 'Queue Management System in Qatar | Allied Enterprises' },
  description:
    'Queue management systems, self-service kiosks, customer feedback and digital signage in Qatar, with customisable software and support in Doha.',
  alternates: { canonical: '/queue-management-qatar/' },
}

export default function QueueManagementPage() {
  return (
    <>
      <PageHero
        eyebrow={queueHero.eyebrow}
        heading={queueHero.heading}
        lead={queueHero.lead}
        text={queueHero.text}
        highlight={queueHero.highlight}
        badge={queueHero.badge}
        primary={queueHero.primary}
        phone={company.phone}
      />
      <CheckGrid id="solutions-heading" heading={queueSolutions.heading} items={queueSolutions.items} />
      <SplitFeature
        id="experience-heading"
        heading={queueExperience.heading}
        text={queueExperience.text}
        links={queueExperience.links}
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
