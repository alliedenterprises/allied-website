import type { Metadata } from 'next'

import { company } from '@/content/company'

/** Default image for link previews (WhatsApp, LinkedIn, X, Facebook): 1200×630. */
export const shareImage = {
  url: '/images/og/allied-enterprises-share.jpg',
  width: 1200,
  height: 630,
  alt: 'Allied Enterprises — ZKTeco time attendance and access control in Qatar, Doha skyline',
}

type PageSeo = {
  /** Full title shown in search results and browser tabs (already includes the brand) */
  title: string
  description: string
  /** Canonical path with trailing slash, e.g. '/about-us/' */
  path: string
}

/**
 * Metadata for one public page: absolute title, description, canonical URL and matching
 * Open Graph / Twitter tags. Next replaces (does not merge) `openGraph` from the layout when a
 * page sets it, so every page builds the full object here, including the share image.
 */
export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: company.shortName,
      title,
      description,
      url: path,
      images: [shareImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [shareImage.url],
    },
  }
}
