import type { Metadata } from 'next'

import { CheckGrid } from '@/components/sections/CheckGrid'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { company } from '@/content/company'
import {
  documentHero,
  documentOutsourcing,
  documentRecovery,
  documentServices,
} from '@/content/document-management'
import { ctaBanner } from '@/content/home'

export const metadata: Metadata = {
  // absolute: the brand is already in the title, so skip the layout's "| …" suffix
  title: { absolute: 'Document Management & Scanning in Qatar | Allied Enterprises' },
  description:
    'Document scanning, indexing and digital archiving in Qatar. Turn paper files into searchable records with secure web access and back-up. Contact Allied Enterprises.',
  alternates: { canonical: '/document-management-scanning-qatar/' },
}

export default function DocumentManagementPage() {
  return (
    <>
      <PageHero
        eyebrow={documentHero.eyebrow}
        heading={documentHero.heading}
        lead={documentHero.lead}
        text={documentHero.text}
        highlight={documentHero.highlight}
        badge={documentHero.badge}
        primary={documentHero.primary}
        phone={company.phone}
      />
      <CheckGrid id="services-heading" heading={documentServices.heading} items={documentServices.items} />
      <SplitFeature id="outsourcing-heading" heading={documentOutsourcing.heading} text={documentOutsourcing.text} />
      <SplitFeature
        id="recovery-heading"
        heading={documentRecovery.heading}
        text={documentRecovery.text}
        links={documentRecovery.links}
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
