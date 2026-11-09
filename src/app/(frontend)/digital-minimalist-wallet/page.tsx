import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { CheckGrid } from '@/components/sections/CheckGrid'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { company } from '@/content/company'
import {
  walletAbout,
  walletFuzeCard,
  walletHero,
  walletProduct,
  walletSecurity,
} from '@/content/digital-wallet'
import { ctaBanner } from '@/content/home'

export const metadata: Metadata = pageMetadata({
  title: 'FuzeCard Digital Minimalist Wallet | Allied Enterprises',
  description:
    'FuzeCard digital minimalist wallet in Qatar: one credit-card-sized device for your magnetic stripe, gift and loyalty cards, with PIN lock and location tracking.',
  path: '/digital-minimalist-wallet/',
})

export default function DigitalWalletPage() {
  return (
    <>
      <PageHero
        path="/digital-minimalist-wallet/"
        eyebrow={walletHero.eyebrow}
        heading={walletHero.heading}
        lead={walletHero.lead}
        text={walletHero.text}
        highlight={walletHero.highlight}
        badge={walletHero.badge}
        primary={walletHero.primary}
        phone={company.phone}
      />
      <SplitFeature id="fuzecard-heading" heading={walletFuzeCard.heading} text={walletFuzeCard.text} tinted />
      <SplitFeature id="lost-heading" heading={walletSecurity.heading} text={walletSecurity.text} />
      <CheckGrid id="product-heading" heading={walletProduct.heading} items={walletProduct.items} />
      <SplitFeature
        id="digital-wallets-heading"
        heading={walletAbout.heading}
        text={walletAbout.text}
        links={walletAbout.links}
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
