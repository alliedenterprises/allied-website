import type { Metadata } from 'next'

import { CheckGrid } from '@/components/sections/CheckGrid'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { company } from '@/content/company'
import { gisApproach, gisData, gisHero, gisServices } from '@/content/gis'
import { ctaBanner } from '@/content/home'

export const metadata: Metadata = {
  // absolute: the brand is already in the title, so skip the layout's "| …" suffix
  title: { absolute: 'GIS – Geographic Information Systems in Qatar | Allied Enterprises' },
  description:
    'GIS software and mapping solutions in Qatar: geospatial imaging, utility and land GIS, web GIS, spatial ETL, telecom network planning and road network data.',
  alternates: { canonical: '/geographical-information-systems-qatar/' },
}

export default function GisPage() {
  return (
    <>
      <PageHero
        eyebrow={gisHero.eyebrow}
        heading={gisHero.heading}
        lead={gisHero.lead}
        text={gisHero.text}
        highlight={gisHero.highlight}
        badge={gisHero.badge}
        primary={gisHero.primary}
        phone={company.phone}
      />
      <CheckGrid id="services-heading" heading={gisServices.heading} items={gisServices.items} />
      <SplitFeature id="approach-heading" heading={gisApproach.heading} text={gisApproach.text} />
      <SplitFeature id="data-heading" heading={gisData.heading} text={gisData.text} links={gisData.links} tinted />
      <CtaBanner
        eyebrow={ctaBanner.eyebrow}
        heading={ctaBanner.heading}
        text={ctaBanner.text}
        cta={ctaBanner.cta}
      />
    </>
  )
}
