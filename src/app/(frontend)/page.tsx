import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { ClientsGrid } from '@/components/sections/ClientsGrid'
import { CompanyStats } from '@/components/sections/CompanyStats'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { GoogleReviews } from '@/components/sections/GoogleReviews'
import { HeroSlider } from '@/components/sections/HeroSlider'
import { PartnersMarquee } from '@/components/sections/PartnersMarquee'
import { ReachMap } from '@/components/sections/ReachMap'
import { ServicesCarousel } from '@/components/sections/ServicesCarousel'
import { WhyAllied } from '@/components/sections/WhyAllied'
import { WhyChooseAllied } from '@/components/sections/WhyChooseAllied'
import { company } from '@/content/company'
import {
  bannerSlides,
  clients,
  clientsSection,
  companyStats,
  ctaBanner,
  partners,
  partnersSection,
  reachSection,
  reviews,
  reviewsSection,
  services,
  servicesSection,
  whyAllied,
  whyChooseAllied,
} from '@/content/home'

export const metadata: Metadata = pageMetadata({
  title: 'ZKTeco Attendance & Access Control in Qatar | Allied Enterprises',
  description:
    'ZKTeco biometric attendance, BioTime software and access control in Qatar. Supply, installation and local support from Allied Enterprises, Doha.',
  path: '/',
})

const googleListingUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  company.map.name,
)}&query_place_id=${company.map.placeId}`

export default function HomePage() {
  return (
    <>
      <HeroSlider slides={bannerSlides} label="ZKTeco products and solutions" />
      <WhyAllied
        highlights={whyAllied.highlights}
        heading={whyAllied.heading}
        intro={whyAllied.intro}
        moreLink={whyAllied.moreLink}
        rating={{ ...whyAllied.googleRating, href: googleListingUrl }}
        cta={whyAllied.cta.primary}
        whatsapp={{ label: 'WhatsApp us', href: company.helpline.whatsapp }}
        badge={whyAllied.badge}
        certificate={whyAllied.certificate}
      >
        <CompanyStats stats={companyStats} label="Allied Enterprises at a glance" />
      </WhyAllied>
      <PartnersMarquee heading={partnersSection.heading} partners={partners} />
      <ServicesCarousel heading={servicesSection.heading} services={services} />
      <ReachMap
        eyebrow={reachSection.eyebrow}
        heading={reachSection.heading}
        text={reachSection.text}
        map={reachSection.map}
        hub={reachSection.hub}
        destinations={reachSection.destinations}
      />
      <WhyChooseAllied
        eyebrow={whyChooseAllied.eyebrow}
        heading={whyChooseAllied.heading}
        intro={whyChooseAllied.intro}
        steps={whyChooseAllied.steps}
      />
      <ClientsGrid
        heading={clientsSection.heading}
        intro={clientsSection.intro}
        clients={clients}
      />
      <GoogleReviews
        heading={reviewsSection.heading}
        linkLabel={reviewsSection.linkLabel}
        rating={{ ...whyAllied.googleRating, href: googleListingUrl }}
        reviews={reviews}
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
