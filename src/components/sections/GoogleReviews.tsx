import type { CSSProperties } from 'react'

import type { CustomerReview } from '@/content/home'
import styles from './GoogleReviews.module.css'

type GoogleReviewsProps = {
  heading: string
  linkLabel: string
  rating: { rating: string; reviews: number; href: string }
  reviews: readonly CustomerReview[]
}

// avatar colours, picked from the name so each person keeps the same one
const tones = ['#2f5bd3', '#13307a', '#0f8a6c', '#b4541c', '#7a3fb8', '#1d7fa8']
const toneFor = (name: string) => tones[[...name].reduce((sum, c) => sum + c.charCodeAt(0), 0) % tones.length]

function GoogleLogo({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.5 5.5 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8z" />
      <path fill="#34A853" d="M12 24c3.2 0 6-1.1 7.9-2.9l-3.9-3c-1 .7-2.4 1.2-4 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1A12 12 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6h-4a12 12 0 0 0 0 10.8l4-3.1z" />
      <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8L20 3.1A12 12 0 0 0 1.3 6.6l4 3.1c.9-2.8 3.6-4.9 6.7-4.9z" />
    </svg>
  )
}

function Stars() {
  return (
    <span className={styles.stars} role="img" aria-label="Rated 5 out of 5">
      ★★★★★
    </span>
  )
}

/**
 * Wall of real Google reviews (CSS columns, so cards of any length pack together),
 * ending with a card that links to the full listing.
 */
export function GoogleReviews({ heading, linkLabel, rating, reviews }: GoogleReviewsProps) {
  return (
    <section className={styles.section} aria-labelledby="reviews-heading">
      <div className={styles.top}>
        <h2 id="reviews-heading" className={styles.heading}>
          {heading}
        </h2>
        <p className={styles.summary}>
          <GoogleLogo className={styles.summaryLogo} />
          <strong>{rating.rating}</strong>
          <Stars />
          <span>from {rating.reviews} Google reviews</span>
        </p>
      </div>

      {/* up to 4 columns, never more than there are cards (reviews + the closing card) */}
      <ul className={styles.wall} style={{ '--cols': Math.min(4, reviews.length + 1) } as CSSProperties}>
        {reviews.map((review) => (
          <li key={review.name} className={styles.card}>
            <figure className={styles.figure}>
              <figcaption className={styles.author}>
                <span className={styles.avatar} style={{ background: toneFor(review.name) }} aria-hidden="true">
                  {review.name.charAt(0).toUpperCase()}
                </span>
                <span className={styles.who}>
                  <span className={styles.name}>{review.name}</span>
                  <span className={styles.detail}>{review.detail ?? 'Google review'}</span>
                </span>
                <GoogleLogo className={styles.source} />
              </figcaption>
              <Stars />
              <blockquote className={styles.quote}>
                {review.text.split('\n').map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </blockquote>
            </figure>
          </li>
        ))}

        <li className={`${styles.card} ${styles.cta}`}>
          <a href={rating.href} target="_blank" rel="noopener noreferrer" className={styles.ctaLink}>
            <span className={styles.ctaRating}>
              {rating.rating}
              <span className={styles.ctaStars} aria-hidden="true">
                ★★★★★
              </span>
            </span>
            <span className={styles.ctaText}>
              {rating.reviews} reviews from customers in Qatar
            </span>
            <span className={styles.ctaLabel}>
              {linkLabel}
              <span aria-hidden="true"> ↗</span>
            </span>
          </a>
        </li>
      </ul>
    </section>
  )
}
