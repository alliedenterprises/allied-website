import styles from './AppShowcase.module.css'

type AppShowcaseProps = {
  id: string
  heading: string
  intro: string
  features: readonly string[]
  highlights: readonly { title: string; items: readonly string[] }[]
}

/** Dark navy band: app feature chips on the left, highlight cards (fees, notifications) on the right. */
export function AppShowcase({ id, heading, intro, features, highlights }: AppShowcaseProps) {
  return (
    <section className={styles.section} aria-labelledby={id}>
      <div className={styles.panel}>
        <div className={styles.copy}>
          <h2 id={id} className={styles.heading}>
            {heading}
          </h2>
          <p className={styles.intro}>{intro}</p>

          <ul className={styles.stores} aria-label="Platforms">
            <li>
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8s2 .8 3.4.8c1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.7-1-2.7-4.1zM13.9 5c.7-.9 1.2-2 1-3.2-1 0-2.3.7-3 1.6-.7.8-1.2 2-1.1 3.1 1.2.1 2.3-.6 3.1-1.5z" />
              </svg>
              App Store
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.6 2.3c-.3.3-.4.7-.4 1.2v17c0 .5.1.9.4 1.2l9.6-9.7-9.6-9.7zm10.6 10.7 2.7 2.7-11.5 6.5 8.8-9.2zm0-2L5.4 1.8l11.5 6.5-2.7 2.7zm3.7.1 3 1.7c.9.5.9 1.8 0 2.3l-3 1.7-3-2.9 3-2.8z" />
              </svg>
              Google Play
            </li>
          </ul>

          <h3 className={styles.featuresTitle}>Features in the app</h3>
          <ul className={styles.features}>
            {features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div className={styles.highlights}>
          {highlights.map((h) => (
            <article key={h.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{h.title}</h3>
              <ul className={styles.cardList}>
                {h.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
