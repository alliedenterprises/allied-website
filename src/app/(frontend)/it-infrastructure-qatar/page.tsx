import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { CategoryHub } from '@/components/sections/CategoryHub'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { itInfrastructureHub as hub } from '@/content/categories'
import { ctaBanner } from '@/content/home'

// Old WordPress URL (title-only page); rebuilt as the menu section's hub page
export const metadata: Metadata = pageMetadata({ title: hub.title, description: hub.description, path: hub.path })

export default function ItInfrastructurePage() {
  return (
    <>
      <CategoryHub hub={hub} />
      <CtaBanner eyebrow={ctaBanner.eyebrow} heading={ctaBanner.heading} text={ctaBanner.text} cta={ctaBanner.cta} />
    </>
  )
}