import type { FaqItem } from '@/content/types'
import styles from './FaqList.module.css'

type FaqListProps = {
  heading: string
  items: readonly FaqItem[]
}

/**
 * Questions as native <details> (no JavaScript); answers are in the HTML even when closed,
 * so search engines read them. The first one starts open.
 */
export function FaqList({ heading, items }: FaqListProps) {
  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <h2 id="faq-heading" className={styles.heading}>
        {heading}
      </h2>
      <div className={styles.list}>
        {items.map((item, i) => (
          <details key={item.question} className={styles.item} open={i === 0}>
            <summary className={styles.question}>
              <h3 className={styles.questionText}>{item.question}</h3>
              <span className={styles.icon} aria-hidden="true" />
            </summary>
            <div className={styles.answer}>
              {item.answer.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {item.list && (
                <ul>
                  {item.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
