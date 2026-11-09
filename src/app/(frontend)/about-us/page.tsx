import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { AudienceGrid } from '@/components/sections/AudienceGrid'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageHero } from '@/components/sections/PageHero'
import { PrincipleQuote } from '@/components/sections/PrincipleQuote'
import { QualityPolicy } from '@/components/sections/QualityPolicy'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { TeamCulture } from '@/components/sections/TeamCulture'
import {
  aboutAudience,
  aboutCulture,
  aboutHero,
  aboutPrinciple,
  aboutQuality,
  aboutTeam,
  aboutVision,
  aboutZkteco,
} from '@/content/about'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'

export const metadata: Metadata = pageMetadata({
  title: 'About Allied Enterprises | IT & Security Solutions in Doha',
  description:
    'Allied Enterprises WLL is the authorized ZKTeco distributor in Qatar, supplying and installing time attendance, access control and IT infrastructure from Doha.',
  path: '/about-us/',
})

export default function AboutPage() {
  return (
    <>
      <PageHero
        path="/about-us/"
        heading={aboutHero.heading}
        lead={aboutHero.lead}
        text={aboutHero.text}
        image={aboutHero.image}
        highlight={aboutHero.highlight}
        badge={aboutHero.badge}
        primary={aboutHero.primary}
        phone={company.phone}
      />
      <SplitFeature
        id="zkteco-heading"
        heading={aboutZkteco.heading}
        text={aboutZkteco.text}
        image={aboutZkteco.image}
        links={aboutZkteco.links}
        tinted
      />
      <AudienceGrid
        heading={aboutAudience.heading}
        intro={aboutAudience.intro}
        items={aboutAudience.items}
      />
      <PrincipleQuote label={aboutPrinciple.label} quote={aboutPrinciple.quote} />
      <SplitFeature
        id="vision-heading"
        heading={aboutVision.heading}
        text={aboutVision.text}
        image={aboutVision.image}
        imageSide="right"
        tinted
      />
      <QualityPolicy
        heading={aboutQuality.heading}
        lead={aboutQuality.lead}
        text={aboutQuality.text}
        statement={aboutQuality.statement}
      />
      <TeamCulture team={aboutTeam} culture={aboutCulture} />
      <CtaBanner
        eyebrow={ctaBanner.eyebrow}
        heading={ctaBanner.heading}
        text={ctaBanner.text}
        cta={ctaBanner.cta}
      />
    </>
  )
}
