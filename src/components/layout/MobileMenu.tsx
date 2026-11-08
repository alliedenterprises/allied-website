'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import type { NavLink, NavItem } from '@/content/navigation'
import styles from './Header.module.css'
import { BrandText } from '@/components/ui/BrandText'

type MobileMenuProps = {
  navItems: NavItem[]
  cta: NavLink
}

export function MobileMenu({ navItems, cta }: MobileMenuProps) {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const pathname = usePathname()
  // compare without the trailing slash (nav hrefs have one; usePathname may not)
  const strip = (p: string) => (p.length > 1 ? p.replace(/\/+$/, '') : p)
  const current = (href: string) => (strip(pathname ?? '/') === strip(href) ? 'page' : undefined)

  // Close the menu after navigating to a new page (reset during render, not in an effect)
  const [lastPath, setLastPath] = useState(pathname)
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setOpen(false)
    setExpanded(null)
  }

  return (
    <>
      <button
        type="button"
        className={`${styles.iconBtn} ${styles.burger}`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className={styles.mobileNav}>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                {item.children ? (
                  <>
                    <div className={styles.mobileRow}>
                      <Link href={item.href} className={styles.mobileLink} aria-current={current(item.href)}>
                        <BrandText text={item.label} />
                      </Link>
                      <button
                        type="button"
                        className={styles.iconBtn}
                        aria-label={`Show ${item.label} links`}
                        aria-expanded={expanded === item.href}
                        onClick={() => setExpanded((cur) => (cur === item.href ? null : item.href))}
                      >
                        <svg
                          className={`${styles.chev} ${expanded === item.href ? styles.chevOpen : ''}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          aria-hidden="true"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                    </div>
                    {expanded === item.href && (
                      <ul className={styles.mobileSub}>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} className={styles.dropdownLink} aria-current={current(child.href)}>
                              <BrandText text={child.label} />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className={styles.mobileLink} aria-current={current(item.href)}>
                    <BrandText text={item.label} />
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link href={cta.href} className={`${styles.cta} ${styles.mobileCta}`}>
            {cta.label}
          </Link>
        </nav>
      )}
    </>
  )
}
