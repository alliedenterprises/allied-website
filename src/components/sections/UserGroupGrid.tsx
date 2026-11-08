import type { ReactNode } from 'react'

import type { CardIcon, IconCard } from '@/content/types'
import styles from './UserGroupGrid.module.css'

type UserGroupGridProps = {
  id: string
  heading: string
  intro: string
  items: readonly IconCard[]
}

/** Icon cards (icon, h3 title, short text) in a 4-column grid: user groups, hardware types, etc. */
export function UserGroupGrid({ id, heading, intro, items }: UserGroupGridProps) {
  return (
    <section className={styles.section} aria-labelledby={id}>
      <div className={styles.head}>
        <h2 id={id} className={styles.heading}>
          {heading}
        </h2>
        <p className={styles.intro}>{intro}</p>
      </div>
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <span className={styles.icon} aria-hidden="true">
              {icons[item.icon]}
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

/** Same component under a neutral name, for grids that are not user groups. */
export const IconCardGrid = UserGroupGrid

const p = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

const icons: Record<CardIcon, ReactNode> = {
  staff: (
    <svg {...p}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
    </svg>
  ),
  teacher: (
    <svg {...p}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M7 20h10M12 16v4M7 9h6M7 12h4" />
    </svg>
  ),
  student: (
    <svg {...p}>
      <path d="M22 10 12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
    </svg>
  ),
  parent: (
    <svg {...p}>
      <circle cx="9" cy="7" r="3.5" />
      <path d="M2 21v-1a6 6 0 0 1 12 0v1" />
      <circle cx="17.5" cy="9.5" r="2.5" />
      <path d="M16 21v-1.5a4.5 4.5 0 0 1 6-4.2" />
    </svg>
  ),
  tools: (
    <svg {...p}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  scanner: (
    <svg {...p}>
      <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M7 8v8M10 8v8M14 8v8M17 8v8" />
    </svg>
  ),
  handheld: (
    <svg {...p}>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <rect x="9" y="6" width="6" height="5" rx="1" />
      <path d="M9 15h.01M12 15h.01M15 15h.01M9 18h.01M12 18h.01M15 18h.01" />
    </svg>
  ),
  rfid: (
    <svg {...p}>
      <path d="M6 8.3a7.4 7.4 0 0 1 0 7.4M9.5 6.2a11.8 11.8 0 0 1 0 11.6M12.9 4.1a15.9 15.9 0 0 1 0 15.8M16.4 2a20 20 0 0 1 0 20" />
    </svg>
  ),
}
