import Link from 'next/link'

import styles from './CheckGrid.module.css'

type CheckGridProps = {
  id: string
  heading: string
  items: readonly string[]
  links?: readonly { label: string; href: string }[]
}

/** Short points (benefits, features) as a grid of cards with a check mark; a real list in the HTML. */
export function CheckGrid({ id, heading, items, links = [] }: CheckGridProps) {
  return (
    <section className={styles.section} aria-labelledby={id}>
      <h2 id={id} className={styles.heading}>
        {heading}
      </h2>
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item} className={styles.card}>
            <span className={styles.check} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.5 10 17 19 7" />
              </svg>
            </span>
            {item}
          </li>
        ))}
      </ul>
      {links.length > 0 && (
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.link}>
                {link.label}
                <span aria-hidden="true"> →</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
