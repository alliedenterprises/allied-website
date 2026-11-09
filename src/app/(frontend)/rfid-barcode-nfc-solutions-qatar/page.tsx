import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { CheckGrid } from '@/components/sections/CheckGrid'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { FaqList } from '@/components/sections/FaqList'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { IconCardGrid } from '@/components/sections/UserGroupGrid'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'
import { rfidBasics, rfidFaq, rfidHero, rfidProducts, rfidUses } from '@/content/rfid-barcode-nfc'

// New page (no old WordPress URL); slug already used by the menu, the home services carousel and the
// access control page.
export const metadata: Metadata = pageMetadata({
  title: 'RFID, Barcode & NFC Solutions in Qatar | Allied Enterprises',
  description:
    'RFID tags and readers, barcode scanners and printers, and NFC tags and cards in Qatar, supplied, installed and supported by our team in Doha. Request a quote.',
  path: '/rfid-barcode-nfc-solutions-qatar/',
})

export default function RfidBarcodeNfcPage() {
  return (
    <>
      <PageHero
        path="/rfid-barcode-nfc-solutions-qatar/"
        eyebrow={rfidHero.eyebrow}
        heading={rfidHero.heading}
        lead={rfidHero.lead}
        text={rfidHero.text}
        image={rfidHero.image}
        highlight={rfidHero.highlight}
        badge={rfidHero.badge}
        primary={rfidHero.primary}
        phone={company.phone}
      />
      <IconCardGrid
        id="basics-heading"
        heading={rfidBasics.heading}
        intro={rfidBasics.intro}
        items={rfidBasics.items}
      />
      <CheckGrid id="products-heading" heading={rfidProducts.heading} items={rfidProducts.items} />
      <SplitFeature id="uses-heading" heading={rfidUses.heading} text={rfidUses.text} links={rfidUses.links} />
      <FaqList heading={rfidFaq.heading} items={rfidFaq.items} />
      <CtaBanner
        eyebrow={ctaBanner.eyebrow}
        heading={ctaBanner.heading}
        text={ctaBanner.text}
        cta={ctaBanner.cta}
      />
    </>
  )
}
