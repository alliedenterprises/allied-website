import type { Metadata } from 'next'

import { CategoryHub } from '@/components/sections/CategoryHub'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { timeManagementHub as hub } from '@/content/categories'
import { ctaBanner } from '@/content/home'

// Old WordPress URL (title-only page); rebuilt as the menu section's hub page
export const metadata: Metadata = {
  title: { absolute: hub.title },
  description: hub.description,
  alternates: { canonical: hub.path },
}

export default function TimeManagementPage() {
  return (
    <>
      <CategoryHub hub={hub} />
      <CtaBanner eyebrow={ctaBanner.eyebrow} heading={ctaBanner.heading} text={ctaBanner.text} cta={ctaBanner.cta} />
    </>
  )
}