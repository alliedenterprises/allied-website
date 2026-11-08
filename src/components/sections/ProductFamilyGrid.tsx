import Image from 'next/image'
import Link from 'next/link'

import type { ProductFamily } from '@/content/zkteco'
import { BrandText } from '@/components/ui/BrandText'
import styles from './ProductFamilyGrid.module.css'

type ProductFamilyGridProps = {
  id: string
  heading: string
  intro: string
  items: readonly ProductFamily[]
  /** Internal links shown under the cards */
  links?: readonly { label: string; href: string }[]
}

/** Product families as image cards; "Learn more" opens the manufacturer's page in a new tab. */
export function ProductFamilyGrid({ id, heading, intro, items, links = [] }: ProductFamilyGridProps) {
  return (
    <section className={styles.section} aria-labelledby={id}>
      <div className={styles.head}>
        <h2 id={id} className={styles.heading}>
          <BrandText text={heading} />
        </h2>
        <p className={styles.intro}>
          <BrandText text={intro} />
        </p>
      </div>

      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.href} className={styles.card}>
            <div className={styles.media}>
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
                sizes="(max-width: 640px) 80vw, (max-width: 1100px) 40vw, 28vw"
                className={styles.image}
              />
            </div>
            <div className={styles.body}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
              <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.more}>
                Learn more
                <span className={styles.srOnly}> about ZKTeco {item.title.toLowerCase()} on zkteco.com (opens in a new tab)</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
            </div>
          </li>
        ))}
      </ul>

      {links.length > 0 && (
        <nav className={styles.related} aria-label="Related solutions">
          <span className={styles.relatedLabel}>Explore our solutions:</span>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.chip}>
                  {link.label}
                  <span aria-hidden="true"> →</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </section>
  )
}
