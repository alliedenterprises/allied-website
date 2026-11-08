import Link from 'next/link'

import type { CategoryHub as CategoryHubData } from '@/content/categories'
import { company } from '@/content/company'
import { BrandText } from '@/components/ui/BrandText'
import styles from './CategoryHub.module.css'

/** Menu section page: heading band (breadcrumb, H1, intro) and a linked card for each page in the section. */
export function CategoryHub({ hub }: { hub: CategoryHubData }) {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${company.domain}/` },
      { '@type': 'ListItem', position: 2, name: hub.heading, item: `${company.domain}${hub.path}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        // static, trusted data only
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <section className={styles.band} aria-labelledby="page-heading">
        <div className={styles.bandInner}>
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-current="page">{hub.heading}</li>
            </ol>
          </nav>
          <h1 id="page-heading" className={styles.heading}>
            {hub.heading}
          </h1>
          <p className={styles.intro}>
            <BrandText text={hub.intro} />
          </p>
          <p className={styles.count}>
            <strong>{hub.items.length}</strong> {hub.items.length === 1 ? 'service' : 'services'} in this section
          </p>
        </div>
      </section>

      <section className={styles.listSection} aria-label={`${hub.heading} services`}>
        <ul className={`${styles.grid} ${hub.items.length === 4 ? styles.two : ''}`}>
          {hub.items.map((item, i) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.card}>
                <span className={styles.number} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className={styles.title}>
                  <BrandText text={item.title} />
                </h2>
                <p className={styles.text}>
                  <BrandText text={item.text} />
                </p>
                <span className={styles.more}>
                  View details
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
