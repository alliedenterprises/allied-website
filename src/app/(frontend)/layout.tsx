import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import React from 'react'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { themeInitScript } from '@/components/layout/theme'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import { LocalBusinessJsonLd } from '@/components/seo/LocalBusinessJsonLd'
import { headerCta, mainNav } from '@/content/navigation'
import './styles.css'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://alliedeprs.com'),
  title: {
    default: 'Time Attendance & Access Control in Qatar | Allied Enterprises Qatar',
    template: '%s | Allied Enterprises Qatar',
  },
  description:
    'Authorized ZKTeco partner in Doha, Qatar for time attendance, access control, HRMS & payroll, and IT infrastructure solutions.',
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
