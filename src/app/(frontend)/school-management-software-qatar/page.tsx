import type { Metadata } from 'next'

import { AppShowcase } from '@/components/sections/AppShowcase'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { FaqList } from '@/components/sections/FaqList'
import { ModuleExplorer } from '@/components/sections/ModuleExplorer'
import { PageHero } from '@/components/sections/PageHero'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { UserGroupGrid } from '@/components/sections/UserGroupGrid'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'
import {
  schoolApp,
  schoolBiometric,
  schoolFaq,
  schoolHero,
  schoolModules,
  schoolUsers,
} from '@/content/school-management'

export const metadata: Metadata = {
  // absolute: the brand is already in the title, so skip the layout's "| …" suffix
  title: { absolute: 'School Management Software in Qatar | Allied Enterprises' },
  description:
    'School management software in Qatar for admissions, attendance, exams, fees, transport and HR, with a mobile app for teachers, students and parents. Book a demo.',
  alternates: { canonical: '/school-management-software-qatar/' },
}

export default function SchoolManagementPage() {
  return (
    <>
      <PageHero
        eyebrow={schoolHero.eyebrow}
        heading={schoolHero.heading}
        lead={schoolHero.lead}
        text={schoolHero.text}
        image={schoolHero.image}
        highlight={schoolHero.highlight}
        badge={schoolHero.badge}
        primary={schoolHero.primary}
        phone={company.phone}
      />
      <UserGroupGrid
        id="users-heading"
        heading={schoolUsers.heading}
        intro={schoolUsers.intro}
        items={schoolUsers.items}
      />
      <ModuleExplorer
        id="modules-heading"
        heading={schoolModules.heading}
        intro={schoolModules.intro}
        groups={schoolModules.groups}
      />
      <AppShowcase
        id="app-heading"
        heading={schoolApp.heading}
        intro={schoolApp.intro}
        features={schoolApp.features}
        highlights={schoolApp.highlights}
      />
      <SplitFeature
        id="biometric-heading"
        heading={schoolBiometric.heading}
        text={schoolBiometric.text}
        links={schoolBiometric.links}
        tinted
      />
      <FaqList heading={schoolFaq.heading} items={schoolFaq.items} />
      <CtaBanner
        eyebrow={ctaBanner.eyebrow}
        heading={ctaBanner.heading}
        text={ctaBanner.text}
        cta={ctaBanner.cta}
      />
    </>
  )
}
