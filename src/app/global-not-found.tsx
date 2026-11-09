import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Link from 'next/link'

import './(frontend)/styles.css'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { themeInitScript } from '@/components/layout/theme'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import { company } from '@/content/company'
import { headerCta, mainNav } from '@/content/navigation'
import styles from './global-not-found.module.css'

// Branded 404 for any URL that matches no route (enabled by experimental.globalNotFound in next.config.ts).
// It bypasses the root layouts, so it brings its own styles, font, theme script, header and footer.
// Next adds <meta name="robots" content="noindex"> automatically and the response status stays 404.

const outfit = Outfit({ subsets: ['latin'], display: 'swap', variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Page not found | Allied Enterprises',
  description: 'The page you are looking for does not exist. Find ZKTeco time attendance, access control and IT services from Allied Enterprises, Doha.',
}

const popular = [
  { label: 'ZKTeco products in Qatar', href: '/zkteco-qatar/' },
  { label: 'Time attendance systems', href: '/time-attendance-system-qatar/' },
  { label: 'Access control systems', href: '/access-control-system-qatar/' },
  { label: 'BioTime attendance software', href: '/biotime-time-attendance-system-qatar/' },
  { label: 'IT infrastructure', href: '/it-infrastructure-qatar/' },
  { label: 'About us', href: '/about-us/' },
]

export default function GlobalNotFound() {
  return (
    <html lang="en" data-theme="light" className={outfit.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <Header navItems={mainNav} cta={headerCta} />
        <main id="main-content" className={styles.main}>
          <p className={styles.code}>404</p>
          <h1 className={styles.heading}>Sorry, this page could not be found</h1>
          <p className={styles.text}>
            The page may have moved, or the link may be out of date. Try one of these pages, or contact our team in
            Doha and we will help you find what you need.
          </p>
          <ul className={styles.links}>
            {popular.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className={styles.actions}>
            <Link href="/" className={styles.primary}>
              Go to the homepage
            </Link>
            <Link href="/contact-us/" className={styles.secondary}>
              Contact us
            </Link>
            <a href={company.helpline.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.secondary}>
              WhatsApp {company.helpline.display}
            </a>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
