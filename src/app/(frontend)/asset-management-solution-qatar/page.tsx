import type { Metadata } from 'next'

import { AppShowcase } from '@/components/sections/AppShowcase'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { FaqList } from '@/components/sections/FaqList'
import { ModuleExplorer } from '@/components/sections/ModuleExplorer'
import { PageHero } from '@/components/sections/PageHero'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { SplitFeature } from '@/components/sections/SplitFeature'
import { UserGroupGrid } from '@/components/sections/UserGroupGrid'
import {
  assetApp,
  assetFaq,
  assetHero,
  assetModules,
  assetProcess,
  assetRelated,
  assetRfid,
  assetUsers,
} from '@/content/asset-management'
import { company } from '@/content/company'
import { ctaBanner } from '@/content/home'

// New page (no old WordPress URL); slug already used by the menu and the home services carousel.
export const metadata: Metadata = {
  // absolute: the brand is already in the title, so skip the layout's "| …" suffix
  title: { absolute: 'RFID Asset Management System in Qatar | Allied Enterprises' },
  description:
    'Asset management system in Qatar with RFID and barcode tagging, asset tracking, stocktaking, maintenance ticketing and ERP integration. Book a demo or site survey.',
  alternates: { canonical: '/asset-management-solution-qatar/' },
}

export default function AssetManagementPage() {
  return (
    <>
      <PageHero
        eyebrow={assetHero.eyebrow}
        heading={assetHero.heading}
        lead={assetHero.lead}
        text={assetHero.text}
        image={assetHero.image}
        highlight={assetHero.highlight}
        badge={assetHero.badge}
        primary={assetHero.primary}
        phone={company.phone}
      />
      <UserGroupGrid
        id="users-heading"
        heading={assetUsers.heading}
        intro={assetUsers.intro}
        items={assetUsers.items}
      />
      <ModuleExplorer
        id="modules-heading"
        heading={assetModules.heading}
        intro={assetModules.intro}
        groups={assetModules.groups}
      />
      <SplitFeature
        id="rfid-heading"
        heading={assetRfid.heading}
        text={assetRfid.text}
        image={assetRfid.image}
        imageSide="right"
        tinted
      />
      <AppShowcase
        id="app-heading"
        heading={assetApp.heading}
        intro={assetApp.intro}
        features={assetApp.features}
        highlights={assetApp.highlights}
      />
      <ProcessSteps
        id="process-heading"
        heading={assetProcess.heading}
        intro={assetProcess.intro}
        steps={assetProcess.steps}
        contact={assetProcess.contact}
        phone={company.phone}
        whatsapp={{ display: company.helpline.display, href: company.helpline.whatsapp }}
        email={company.email}
      />
      <SplitFeature
        id="related-heading"
        heading={assetRelated.heading}
        text={assetRelated.text}
        links={assetRelated.links}
        tinted
      />
      <FaqList heading={assetFaq.heading} items={assetFaq.items} />
      <CtaBanner
        eyebrow={ctaBanner.eyebrow}
        heading={ctaBanner.heading}
        text={ctaBanner.text}
        cta={ctaBanner.cta}
      />
    </>
  )
}
