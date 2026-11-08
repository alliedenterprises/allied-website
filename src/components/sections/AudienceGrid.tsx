import type { AudienceIcon } from '@/content/about'
import styles from './AudienceGrid.module.css'

type AudienceGridProps = {
  heading: string
  intro: string
  items: readonly { label: string; icon: AudienceIcon }[]
}

// simple line icons (decorative)
const icons: Record<AudienceIcon, string> = {
  building: 'M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17M3 21h18M9 7h1.5M13.5 7H15M9 11h1.5M13.5 11H15M9 15h1.5M13.5 15H15M10 21v-3h4v3',
  government: 'M3 21h18M4 10h16M12 3l9 5H3zM6 10v8M10 10v8M14 10v8M18 10v8M4 18h16',
  vendor: 'M4 9l1.5-5h13L20 9M4 9h16M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0A2.7 2.7 0 0 0 20 9M5.5 12v9h13v-9M10 21v-5h4v5',
  startup: 'M14 4.5C16.5 3 19.5 3 21 3c0 1.5 0 4.5-1.5 7L13 16.5 7.5 11zM7.5 11 4 11l3-4h4.5M13 16.5V20l4-3v-4.5M5.5 15.5C4 17 4 20 4 20s3 0 4.5-1.5',
  home: 'M3 11.5 12 4l9 7.5M5.5 9.5V20h13V9.5M10 20v-6h4v6',
  recreation: 'M12 3a4 4 0 0 1 4 4 4 4 0 0 1 1 7.5H7A4 4 0 0 1 8 7a4 4 0 0 1 4-4zM12 14.5V21M8 21h8',
  person: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5',
}

/** Who the company works with: heading + intro + a grid of icon cards (a real list in the HTML). */
export function AudienceGrid({ heading, intro, items }: AudienceGridProps) {
  return (
    <section className={styles.section} aria-labelledby="audience-heading">
      <div className={styles.top}>
        <h2 id="audience-heading" className={styles.heading}>
          {heading}
        </h2>
        <p className={styles.intro}>{intro}</p>
      </div>

      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.label} className={styles.card}>
            <span className={styles.icon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d={icons[item.icon]} />
              </svg>
            </span>
            {item.label}
          </li>
        ))}
      </ul>
    </section>
  )
}
