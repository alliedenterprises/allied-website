import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

import type { Highlight, WhyPoint } from '@/content/home'
import styles from './WhyAllied.module.css'
import { BrandText } from '@/components/ui/BrandText'

type WhyAlliedProps = {
  /** Short value points in a strip at the top of the band, above the heading */
  highlights?: readonly Highlight[]
  heading: string
  intro: readonly string[]
  /** Text link under the intro (contextual internal link) */
  moreLink?: { label: string; href: string }
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
  highlights = [],
  heading,
  intro,
  moreLink,
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
      {highlights.length > 0 && (
        // plain text, not headings: nothing should come before the page's H1 in the outline
        <ul className={styles.highlights} aria-label="Why choose Allied Enterprises">
          {highlights.map((item) => (
            <li key={item.title} className={styles.highlight}>
              <HighlightIcon name={item.icon} />
              <span className={styles.highlightBody}>
                <strong className={styles.highlightTitle}>{item.title}</strong>
                <span className={styles.highlightText}>{item.text}</span>
              </span>
            </li>
          ))}
        </ul>
      )}
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
          {moreLink && (
            <p className={styles.text}>
              <Link href={moreLink.href} className={styles.moreLink}>
                <BrandText text={moreLink.label} /> <span aria-hidden="true">→</span>
              </Link>
            </p>
          )}

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

function HighlightIcon({ name }: { name: Highlight['icon'] }) {
  return (
    <svg
      className={styles.highlightIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === 'award' && (
        <>
          <circle cx="12" cy="8" r="6" />
          <path d="M15.5 12.9 17 22l-5-3-5 3 1.5-9.1" />
        </>
      )}
      {name === 'support' && (
        <>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </>
      )}
      {name === 'team' && (
        <>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </>
      )}
      {name === 'handshake' && (
        <>
          <path d="m11 17 2 2a1 1 0 1 0 3-3" />
          <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
          <path d="m21 3 1 11h-2" />
          <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
          <path d="M3 4h8" />
        </>
      )}
    </svg>
  )
}
