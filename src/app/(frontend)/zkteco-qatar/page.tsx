import type { Metadata } from 'next'

import { CheckGrid } from '@/components/sections/CheckGrid'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { FaqList } from '@/components/sections/FaqList'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { ProductFamilyGrid } from '@/components/sections/ProductFamilyGrid'
import { ZktecoHero } from '@/components/sections/ZktecoHero'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'
import { zktecoFaq, zktecoHero, zktecoProcess, zktecoProducts, zktecoWhy } from '@/content/zkteco'

export const metadata: Metadata = {
  // absolute: the brand is already in the title, so skip the layout's "| …" suffix.
  // "Dealer"/"agent" is the confirmed wording; do not change to "distributor" without proof.
  title: { absolute: 'Authorized ZKTeco Dealer in Qatar | Allied Enterprises' },
  description:
    'Allied Enterprises is the authorized ZKTeco dealer in Qatar, supplying a wide range of ZKTeco products and solutions with installation and support in Doha.',
  alternates: { canonical: '/zkteco-qatar/' },
}

export default function ZktecoPage() {
  return (
    <>
      <ZktecoHero
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
