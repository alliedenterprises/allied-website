import type { Metadata } from 'next'

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

export const metadata: Metadata = {
  // absolute: the brand is already in the title, so skip the layout's "| …" suffix.
  // Keeps "ZKTeco" + "Qatar" from the old ranking title; "time attendance" is left to
  // /time-attendance-system-qatar/ so the two pages don't compete.
  title: { absolute: 'About Allied Enterprises | Authorized ZKTeco Agent in Qatar' },
  description:
    'Allied Enterprises WLL is the authorized ZKTeco agent in Qatar, supplying and installing time attendance, access control and IT infrastructure from Doha.',
  alternates: { canonical: '/about-us/' },
}

export default function AboutPage() {
  return (
    <>
      <PageHero
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
