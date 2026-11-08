import styles from './PrincipleQuote.module.css'

type PrincipleQuoteProps = {
  label: string
  quote: string
}

/** A single statement set large in a brand-coloured panel. */
export function PrincipleQuote({ label, quote }: PrincipleQuoteProps) {
  return (
    <section className={styles.section} aria-label="Our principle">
      <figure className={styles.panel}>
        <svg className={styles.mark} viewBox="0 0 48 36" fill="currentColor" aria-hidden="true">
          <path d="M0 36V22C0 9.5 6.5 2 19 0l2 5.5C13.5 7.5 10.5 11.5 10 18h9v18zm27 0V22c0-12.5 6.5-20 19-22l2 5.5c-7.5 2-10.5 6-11 12.5h9v18z" />
        </svg>
        <figcaption className={styles.label}>{label}</figcaption>
        <blockquote className={styles.quote}>
          <p>“{quote}”</p>
        </blockquote>
      </figure>
    </section>
  )
}
