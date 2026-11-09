import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { CheckGrid } from '@/components/sections/CheckGrid'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { FaqList } from '@/components/sections/FaqList'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { ProductFamilyGrid } from '@/components/sections/ProductFamilyGrid'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { ZktecoHero } from '@/components/sections/ZktecoHero'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'
import {
  zktecoCertificate,
  zktecoFaq,
  zktecoHero,
  zktecoProcess,
  zktecoProducts,
  zktecoWhy,
} from '@/content/zkteco'

export const metadata: Metadata = pageMetadata({
  title: 'Authorized ZKTeco Distributor in Qatar | Allied Enterprises',
  description:
    'Authorized ZKTeco distributor and dealer in Qatar: attendance terminals, BioTime, access control and barriers, installed and supported by Allied Enterprises in Doha.',
  path: '/zkteco-qatar/',
})

export default function ZktecoPage() {
  return (
    <>
      <ZktecoHero
        path="/zkteco-qatar/"
        heading={zktecoHero.heading}
        lead={zktecoHero.lead}
        text={zktecoHero.text}
        image={zktecoHero.image}
        badge={zktecoHero.badge}
        methods={zktecoHero.methods}
        stats={zktecoHero.stats}
        primary={zktecoHero.primary}
        phone={company.phone}
        whatsapp={company.helpline.whatsapp}
      />
      <ProductFamilyGrid
        id="products-heading"
        heading={zktecoProducts.heading}
        intro={zktecoProducts.intro}
        items={zktecoProducts.items}
        links={zktecoProducts.links}
      />
      <SplitFeature
        id="certificate-heading"
        heading={zktecoCertificate.heading}
        text={zktecoCertificate.text}
        links={zktecoCertificate.links}
        image={zktecoCertificate.image}
        imageStyle="document"
        tinted
      />
      <CheckGrid id="why-heading" heading={zktecoWhy.heading} items={zktecoWhy.items} links={zktecoWhy.links} />
      <ProcessSteps
        id="process-heading"
        heading={zktecoProcess.heading}
        intro={zktecoProcess.intro}
        steps={zktecoProcess.steps}
        contact={zktecoProcess.contact}
        phone={company.phone}
        whatsapp={{ display: company.helpline.display, href: company.helpline.whatsapp }}
        email={company.email}
      />
      <FaqList heading={zktecoFaq.heading} items={zktecoFaq.items} />
      <CtaBanner
        eyebrow={ctaBanner.eyebrow}
        heading={ctaBanner.heading}
        text={ctaBanner.text}
        cta={ctaBanner.cta}
      />
    </>
  )
}
