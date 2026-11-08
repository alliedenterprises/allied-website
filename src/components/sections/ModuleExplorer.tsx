import type { CSSProperties } from 'react'

import type { ModuleGroup } from '@/content/school-management'
import styles from './ModuleExplorer.module.css'

type ModuleExplorerProps = {
  id: string
  heading: string
  intro: string
  groups: readonly ModuleGroup[]
}

/**
 * Feature modules in groups, with a sticky in-page menu of equal-width anchor links.
 * Designed for uniform content (same number of modules per group, same number of short points per
 * module) so every card in the grid is the same size. Plain HTML, no tabs: all points stay crawlable.
 */
export function ModuleExplorer({ id, heading, intro, groups }: ModuleExplorerProps) {
  return (
    <section className={styles.section} aria-labelledby={id}>
      <div className={styles.head}>
        <h2 id={id} className={styles.heading}>
          {heading}
        </h2>
        <p className={styles.intro}>{intro}</p>
      </div>

      <nav className={styles.jump} aria-label="Module groups">
        <ul style={{ '--count': groups.length } as CSSProperties}>
          {groups.map((group, gi) => (
            <li key={group.id}>
              <a href={`#${group.id}`} className={styles.chip}>
                <span className={styles.chipNumber} aria-hidden="true">
                  {String(gi + 1).padStart(2, '0')}
                </span>
                {group.short}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {groups.map((group, gi) => (
        <div key={group.id} id={group.id} className={styles.group}>
          <div className={styles.groupHead}>
            <span className={styles.groupNumber} aria-hidden="true">
              {String(gi + 1).padStart(2, '0')}
            </span>
            <h3 className={styles.groupTitle}>{group.title}</h3>
          </div>

          <div className={styles.cards}>
            {group.modules.map((mod) => (
              <article key={mod.title} className={styles.card}>
                <h4 className={styles.cardTitle}>{mod.title}</h4>
                <ul className={styles.list}>
                  {mod.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
