import { BrandText } from '@/components/ui/BrandText'
import styles from './TeamCulture.module.css'

type TeamCultureProps = {
  team: { heading: string; text: readonly string[] }
  culture: { heading: string; text: readonly string[]; location: string }
}

/** Two cards side by side: the team (light) and client service culture (brand colour). */
export function TeamCulture({ team, culture }: TeamCultureProps) {
  return (
    <div className={styles.wrap}>
      <section className={styles.card} aria-labelledby="team-heading">
        <h2 id="team-heading" className={styles.heading}>
          {team.heading}
        </h2>
        {team.text.map((p) => (
          <p key={p} className={styles.text}>
            {p}
          </p>
        ))}
      </section>

      <section className={`${styles.card} ${styles.brand}`} aria-labelledby="culture-heading">
        <h2 id="culture-heading" className={styles.heading}>
          {culture.heading}
        </h2>
        {culture.text.map((p) => (
          <p key={p} className={styles.text}>
            {p}
          </p>
        ))}
        <p className={styles.location}>
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
          </svg>
          <span>
            <BrandText text={culture.location} onDark />
          </span>
        </p>
      </section>
    </div>
  )
}
