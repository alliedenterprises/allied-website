import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

import type { WhyPoint } from '@/content/home'
import styles from './WhyAllied.module.css'
import { BrandText } from '@/components/ui/BrandText'

type WhyAlliedProps = {
  heading: string
  intro: readonly string[]
  points?: readonly WhyPoint[]
  rating?: { rating: string; reviews: number; href: string }
  cta: { label: string; href: string }
  whatsapp: { label: string; href: string }
  /** Shown to the right of the intro, below it on smaller screens */
  badge?: { src: string; width: number; height: number; alt: string }
  /** Partner certificate shown as a framed plaque beside the intro (badge sits to its left); opens full size */
  certificate?: { src: string; width: number; height: number; alt: string; caption: readonly string[] }
  /** Rendered inside the same band, below the intro (e.g. the company stats strip) */
  children?: ReactNode
}

/** Intro section carrying the page's single H1 (real, crawlable text). */
export function WhyAllied({
  heading,
  intro,
  points = [],
  rating,
  cta,
  whatsapp,
  badge,
  certificate,
  children,
}: WhyAlliedProps) {
  const cardClass = [
    styles.card,
    points.length === 0 && styles.single,
    (badge || certificate) && styles.withBadge,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={styles.section} aria-labelledby="why-allied-heading">
      <div className={cardClass}>
        <div className={styles.copy}>
          <h1 id="why-allied-heading" className={styles.heading}>
            <BrandText text={heading} />
          </h1>
          {intro.map((p) => (
            <p key={p} className={styles.text}>
              <BrandText text={p} />
            </p>
          ))}

          <div className={styles.actions}>
            <Link href={cta.href} className={styles.primary}>
              {cta.label}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </Link>
            <a
              href={whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 12 2.2a9.8 9.8 0 0 1 9.8 9.8c0 5.4-4.4 9.8-9.8 9.8zm8.4-18.2A11.8 11.8 0 0 0 1.7 17.8L0 24l6.3-1.7a11.8 11.8 0 0 0 5.7 1.4C18.5 23.7 24 18.4 24 11.9c0-3.2-1.2-6.1-3.6-8.3z" />
              </svg>
              {whatsapp.label}
            </a>
          </div>

          {rating && (
            <a
              href={rating.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.rating}
            >
              <span className={styles.stars} aria-hidden="true">
                ★★★★★
              </span>
              <span>
                <strong>{rating.rating}</strong> on Google · {rating.reviews} reviews
              </span>
            </a>
          )}
        </div>

        {certificate ? (
          <div className={styles.credentials}>
            {badge && (
              <Image
                src={badge.src}
                alt={badge.alt}
                width={badge.width}
                height={badge.height}
                className={`${styles.badge} ${styles.badgeSide}`}
              />
            )}
            <a
              href={certificate.src}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certificate}
            >
              <span className={styles.frame}>
                <Image
                  src={certificate.src}
                  alt={certificate.alt}
                  width={certificate.width}
                  height={certificate.height}
                  sizes="(max-width: 600px) 180px, 220px"
                  className={styles.certImage}
                />
              </span>
              <span className={styles.certCaption}>
                {certificate.caption.map((line) => (
                  <span key={line}>
                    <BrandText text={line} />
                  </span>
                ))}
              </span>
            </a>
          </div>
        ) : (
          badge && (
            <Image
              src={badge.src}
              alt={badge.alt}
              width={badge.width}
              height={badge.height}
              className={styles.badge}
            />
          )
        )}

        {points.length > 0 && (
          <ul className={styles.points}>
            {points.map((point) => (
              <li key={point.title} className={styles.point}>
                <h2 className={styles.pointTitle}>
                  <BrandText text={point.title} />
                </h2>
                <p className={styles.pointText}>
                  <BrandText text={point.text} />
                </p>
                <Link href={point.href} className={styles.pointLink}>
                  <BrandText text={point.linkLabel} />
                  <span aria-hidden="true"> →</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      {children}
    </section>
  )
}
