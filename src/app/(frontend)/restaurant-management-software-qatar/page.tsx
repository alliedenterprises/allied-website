import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { CheckGrid } from '@/components/sections/CheckGrid'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'
import {
  restaurantHandles,
  restaurantHero,
  restaurantReservations,
  restaurantWhy,
} from '@/content/restaurant'

export const metadata: Metadata = pageMetadata({
  title: 'Restaurant Management Software in Qatar | Allied Enterprises',
  description:
    'Restaurant management and POS software in Qatar for orders, tables, menus, delivery, billing, reservations and reports, with setup and support in Doha.',
  path: '/restaurant-management-software-qatar/',
})

export default function RestaurantPage() {
  return (
    <>
      <PageHero
        path="/restaurant-management-software-qatar/"
        eyebrow={restaurantHero.eyebrow}
        heading={restaurantHero.heading}
        lead={restaurantHero.lead}
        text={restaurantHero.text}
        highlight={restaurantHero.highlight}
        badge={restaurantHero.badge}
        primary={restaurantHero.primary}
        phone={company.phone}
      />
      <CheckGrid id="handles-heading" heading={restaurantHandles.heading} items={restaurantHandles.items} />
      <SplitFeature id="all-in-one-heading" heading={restaurantWhy.heading} text={restaurantWhy.text} />
      <SplitFeature
        id="reservations-heading"
        heading={restaurantReservations.heading}
        text={restaurantReservations.text}
        links={restaurantReservations.links}
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
