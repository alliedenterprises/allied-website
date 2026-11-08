import Link from 'next/link'

import { company } from '@/content/company'
import type { NavLink, NavItem } from '@/content/navigation'
import { HeaderScrollState } from './HeaderScrollState'
import { MobileMenu } from './MobileMenu'
import { ActiveLink } from './ActiveLink'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'
import { TopBar } from './TopBar'
import styles from './Header.module.css'
import { BrandText } from '@/components/ui/BrandText'

type HeaderProps = {
  navItems: NavItem[]
  cta: NavLink
}

export function Header({ navItems, cta }: HeaderProps) {
  return (
    <div className={styles.wrap}>
      <HeaderScrollState />
      {/* contact strip joined to the top of the header card; folds away once the page is scrolled */}
      <TopBar />
      <header className={styles.header}>
        <Link href="/" className={styles.logo} aria-label={`${company.shortName} home`}>
          <Logo />
        </Link>

        <nav aria-label="Main" className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navItems.map((item) =>
              item.children ? (
                <li key={item.href} className={styles.hasDropdown}>
                  <ActiveLink
                    href={item.href}
                    className={styles.navLink}
                    childPaths={item.children.map((c) => c.href)}
                  >
                    <BrandText text={item.label} />
                    <ChevronIcon className={styles.chev} />
                  </ActiveLink>
                  <ul className={styles.dropdown}>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <ActiveLink href={child.href} className={styles.dropdownLink}>
                          <BrandText text={child.label} />
                        </ActiveLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <ActiveLink href={item.href} className={styles.navLink}>
                    <BrandText text={item.label} />
                  </ActiveLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        {/* phone and email are in the TopBar strip above */}
        <div className={styles.actions}>
          <ThemeToggle />

          <Link href={cta.href} className={styles.cta}>
            {cta.label}
            <ArrowIcon />
          </Link>

          <MobileMenu navItems={navItems} cta={cta} />
        </div>
      </header>
    </div>
  )
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}
