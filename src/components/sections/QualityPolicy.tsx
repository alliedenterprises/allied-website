import styles from './QualityPolicy.module.css'

type QualityPolicyProps = {
  heading: string
  lead: string
  text: readonly string[]
  statement: { label: string; quote: string; after: string }
}

/** Long policy text: heading and objective stay in view on the left while the detail scrolls. */
export function QualityPolicy({ heading, lead, text, statement }: QualityPolicyProps) {
  return (
    <section className={styles.section} aria-labelledby="quality-heading">
      <div className={styles.aside}>
        <h2 id="quality-heading" className={styles.heading}>
          {heading}
        </h2>
        <p className={styles.lead}>{lead}</p>
      </div>

      <div className={styles.body}>
        {text.map((p) => (
          <p key={p} className={styles.text}>
            {p}
          </p>
        ))}
        <div className={styles.callout}>
          <p className={styles.calloutLabel}>{statement.label}</p>
          <p className={styles.calloutQuote}>“{statement.quote}”</p>
          <p className={styles.calloutAfter}>{statement.after}</p>
        </div>
      </div>
    </section>
  )
}
