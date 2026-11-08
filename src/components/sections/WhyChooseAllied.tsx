import Link from 'next/link'

import type { WhyPoint } from '@/content/home'
import styles from './WhyChooseAllied.module.css'

type WhyChooseAlliedProps = {
  eyebrow: string
  heading: string
  intro: string
  steps: readonly WhyPoint[]
}

/**
 * "Why Allied": how we work, as a numbered timeline (no cards).
 * Horizontal on desktop, vertical on small screens. Each step links to a related page.
 */
export function WhyChooseAllied({ eyebrow, heading, intro, steps }: WhyChooseAlliedProps) {
  return (
    <section className={styles.section} aria-labelledby="why-choose-heading">
      <div className={styles.top}>
        <div>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id="why-choose-heading" className={styles.heading}>
            {heading}
          </h2>
        </div>
        <p className={styles.intro}>{intro}</p>
      </div>

      <ol className={styles.steps}>
        {steps.map((step, i) => (
          <li key={step.title} className={styles.step}>
            <span className={styles.number} aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className={styles.node} aria-hidden="true" />
            <div className={styles.body}>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.text}>{step.text}</p>
              <Link href={step.href} className={styles.link}>
                {step.linkLabel}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
