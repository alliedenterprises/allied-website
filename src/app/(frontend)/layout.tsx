import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import React from 'react'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { themeInitScript } from '@/components/layout/theme'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import { LocalBusinessJsonLd } from '@/components/seo/LocalBusinessJsonLd'
import { company } from '@/content/company'
import { headerCta, mainNav } from '@/content/navigation'
import { shareImage } from '@/lib/seo'
import './styles.css'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

// Defaults for any page without its own metadata. Public pages set everything through pageMetadata()
// (src/lib/seo.ts), which also builds their Open Graph / Twitter tags. Icons: src/app/icon.png and
// apple-icon.png (app root, so the 404 page gets them too).
export const metadata: Metadata = {
  metadataBase: new URL(company.domain),
  title: {
    default: 'ZKTeco Attendance & Access Control in Qatar | Allied Enterprises',
    template: '%s | Allied Enterprises',
  },
  description: company.description,
  openGraph: {
    type: 'website',
    siteName: company.shortName,
    images: [shareImage],
  },
  twitter: {
    card: 'summary_large_image',
    images: [shareImage.url],
  },
  // Google Search Console ownership (HTML tag method) for https://alliedeprs.com/.
  // Keep it: removing the tag makes Search Console drop the verification.
  verification: {
    google: 'FsKWIF972d1K5eEm_QF3r-rpW-AV8BH5UgNXnZW01Yg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the inline theme script may change data-theme before React hydrates
    <html lang="en" data-theme="light" className={outfit.variable} suppressHydrationWarning>
      <head>
        {/* Apply saved light/dark theme before first paint (no flash) */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header navItems={mainNav} cta={headerCta} />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <LocalBusinessJsonLd />
      </body>
    </html>
  )
}
