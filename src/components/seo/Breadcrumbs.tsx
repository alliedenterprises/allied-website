import Link from 'next/link'

import { company } from '@/content/company'
import { mainNav } from '@/content/navigation'
import styles from './Breadcrumbs.module.css'

type Crumb = { name: string; path: string }

/**
 * Home › section › page, worked out from the main menu so the trail always matches the navigation.
 * A page listed under two menu sections (restaurant software) uses the first one.
 */
export function breadcrumbTrail(path: string, fallbackName: string): Crumb[] {
  const trail: Crumb[] = [{ name: 'Home', path: '/' }]
  for (const item of mainNav) {
    if (item.href === path) return [...trail, { name: item.label, path }]
    const child = item.children?.find((c) => c.href === path)
    if (child) return [...trail, { name: item.label, path: item.href }, { name: child.label, path }]
  }
  return [...trail, { name: fallbackName, path }]
}

type BreadcrumbsProps = {
  /** Canonical path of the current page, with trailing slash */
  path: string
  /** Used when the page is not in the main menu */
  fallbackName: string
  /** Light text for dark hero panels */
  onDark?: boolean
}

/** Visible breadcrumb plus matching BreadcrumbList JSON-LD (same items, so they never disagree). */
export function Breadcrumbs({ path, fallbackName, onDark = false }: BreadcrumbsProps) {
  const trail = breadcrumbTrail(path, fallbackName)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${company.domain}${crumb.path}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        // static, trusted data only
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className={`${styles.breadcrumb} ${onDark ? styles.onDark : ''}`}>
        <ol>
          {trail.map((crumb, i) =>
            i === trail.length - 1 ? (
              <li key={crumb.path} aria-current="page">
                {crumb.name}
              </li>
            ) : (
              <li key={crumb.path}>
                <Link href={crumb.path}>{crumb.name}</Link>
              </li>
            ),
          )}
        </ol>
      </nav>
    </>
  )
}
