import { CountUp } from '@/components/ui/CountUp'
import type { CompanyStat } from '@/content/home'
import styles from './CompanyStats.module.css'

type CompanyStatsProps = {
  stats: readonly CompanyStat[]
  /** Accessible name for the section (no visible heading in this design) */
  label: string
}

/**
 * Key company figures. Server-rendered: the real numbers are in the initial HTML, and
 * only the count-up animation runs in the browser. A description list pairs each figure
 * with its label, so screen readers read "Years in Business, 15+".
 */
export function CompanyStats({ stats, label }: CompanyStatsProps) {
  return (
    <section className={styles.section} aria-label={label}>
      <dl className={styles.grid}>
        {stats.map((stat, i) => (
          <div key={stat.label} className={styles.item}>
            <dt className={styles.label}>{stat.label}</dt>
            <dd className={styles.value}>
              {/* counts up on first view; the real figure is in the HTML either way */}
              <CountUp value={stat.value} delay={i * 150} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
