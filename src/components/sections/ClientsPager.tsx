'use client'

import { Children, useEffect, useState, type ReactNode } from 'react'

import styles from './ClientsGrid.module.css'

type ClientsPagerProps = {
  /** One child per page (a list of logos), rendered on the server */
  children: ReactNode
  /** Accessible names for the dot buttons, e.g. "Clients 1 to 10" */
  pageLabels: readonly string[]
  /** Time each page stays on screen (ms) */
  interval?: number
}

/**
 * Shows one page of client logos at a time and moves to the next every few seconds.
 * Every page stays in the HTML (search engines see all logos); inactive pages are hidden and inert.
 * Pauses while hovered or focused, and does not auto-advance for visitors who prefer reduced motion
 * (the dots still let them move between pages).
 */
export function ClientsPager({ children, pageLabels, interval = 1600 }: ClientsPagerProps) {
  const pages = Children.toArray(children)
  const count = pages.length
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (count < 2 || paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), interval)
    return () => window.clearInterval(id)
  }, [count, paused, interval])

  return (
    <div
      className={styles.pager}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className={styles.pages}>
        {pages.map((page, i) => (
          <div
            key={i}
            className={styles.page}
            data-active={i === index}
            aria-hidden={i !== index}
            inert={i !== index}
          >
            {page}
          </div>
        ))}
      </div>

      {count > 1 && (
        <div className={styles.dots} role="group" aria-label="Client logo pages">
          {pageLabels.map((label, i) => (
            <button
              key={label}
              type="button"
              className={styles.dot}
              aria-label={label}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
