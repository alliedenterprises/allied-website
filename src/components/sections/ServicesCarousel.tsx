import Image from 'next/image'
import Link from 'next/link'

import { BrandText } from '@/components/ui/BrandText'
import type { Service } from '@/content/home'
import styles from './ServicesCarousel.module.css'

type ServicesCarouselProps = {
  heading: string
  services: readonly Service[]
}

/**
 * "Activities we provide": all cards visible at once in a grid.
 *
 * Each card = image on top (fading into the panel) + text on a solid dark panel, so the
 * text never sits on the picture and stays easy to read. The featured card is twice as
 * wide on desktop/tablet with the image beside the text.
 *
 * Server component, no JavaScript. SEO: each card is a list item with an H3 whose link is
 * the anchor text; a stretched link makes the whole card clickable.
 */
export function ServicesCarousel({ heading, services }: ServicesCarouselProps) {
  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <h2 id="services-heading" className={styles.heading}>
        {heading}
      </h2>

      <ul className={styles.grid}>
        {services.map((service) => (
          <li
            key={service.title}
            className={service.featured ? `${styles.item} ${styles.featured}` : styles.item}
          >
            <article className={styles.card}>
              <div className={styles.media}>
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes={
                    service.featured
                      ? '(max-width: 600px) 92vw, (max-width: 1180px) 48vw, 330px'
                      : '(max-width: 600px) 92vw, (max-width: 1180px) 46vw, 300px'
                  }
                  className={styles.image}
                />
              </div>

              <div className={styles.body}>
                <p className={styles.eyebrow}>
                  <BrandText text={service.eyebrow} onDark />
                </p>
                <h3 className={styles.title}>
                  {/* stretched link: the title is the anchor text, the whole card is clickable */}
                  <Link href={service.href} className={styles.link}>
                    <BrandText text={service.title} onDark />
                  </Link>
                </h3>
                <p className={styles.text}>
                  <BrandText text={service.description} onDark />
                </p>
                <div className={styles.footer} aria-hidden="true">
                  <span className={styles.more}>{service.linkLabel}</span>
                  <span className={styles.go}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
