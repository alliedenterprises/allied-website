import Image from 'next/image'
import Link from 'next/link'

import type { PageImage } from '@/content/types'
import { BrandText } from '@/components/ui/BrandText'
import styles from './PageHero.module.css'

type PageHeroProps = {
  /** Small line above the H1 */
  eyebrow?: string
  heading: string
  lead: string
  text: readonly string[]
  /** Without an image the hero is one column and the two facts sit under the buttons */
  image?: PageImage
  /** `photo`: framed photo; `product`: cut-out product image on a soft glow */
  imageStyle?: 'photo' | 'product'
  highlight: { value: string; label: string }
  badge: string
  primary: { label: string; href: string }
  phone: { display: string; href: string }
}

/** Top of an inner page: the page's single H1 beside an image with two floating facts. */
export function PageHero({
  eyebrow,
  heading,
  lead,
  text,
  image,
  imageStyle = 'photo',
  highlight,
  badge,
  primary,
  phone,
}: PageHeroProps) {
  const badgeEl = (
    <p className={styles.badge}>
      <span className={styles.check} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.5 10 17 19 7" />
        </svg>
      </span>
      <BrandText text={badge} />
    </p>
  )
  const statEl = (
    <p className={styles.stat}>
      <strong className={styles.value}>{highlight.value}</strong>
      <span className={styles.label}>{highlight.label}</span>
    </p>
  )

  return (
    <section className={`${styles.section} ${image ? '' : styles.textOnly}`} aria-labelledby="page-heading">
      <div className={styles.copy}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 id="page-heading" className={styles.heading}>
          {heading}
        </h1>
        <p className={styles.lead}>{lead}</p>
        {text.map((p) => (
          <p key={p} className={styles.text}>
            <BrandText text={p} />
          </p>
        ))}

        <div className={styles.actions}>
          <Link href={primary.href} className={styles.primary}>
            {primary.label}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </Link>
          <a href={phone.href} className={styles.secondary}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
            </svg>
            {phone.display}
          </a>
        </div>

        {!image && (
          <div className={styles.facts}>
            {badgeEl}
            {statEl}
          </div>
        )}
      </div>

      {image && (
        <div className={`${styles.media} ${imageStyle === 'product' ? styles.product : ''}`}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 1000px) 92vw, 46vw"
            preload
            loading="eager"
            className={styles.image}
          />
          {badgeEl}
          {statEl}
        </div>
      )}
    </section>
  )
}
