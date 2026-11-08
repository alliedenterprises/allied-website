'use client'

import { useEffect, useRef, type CSSProperties } from 'react'

import styles from './CountUp.module.css'

type CountUpProps = {
  /** Final value as shown, e.g. "15+", "100+", "4" */
  value: string
  /** Wait before this figure starts rolling (ms), for a stagger between figures */
  delay?: number
}

/** Each digit spins through 0–9 this many times before landing on its value */
const LOOPS = 2
/** Extra start delay per digit, left to right (ms) */
const DIGIT_STAGGER = 70
/** Roll duration in CountUp.module.css (ms) — the suffix appears near the end */
const ROLL_MS = 2000

/**
 * Rolling (odometer-style) counter, shown the first time the figure scrolls into view.
 *
 * SEO / accessibility:
 * - The page text is always exactly the value ("15+"): the server HTML shows the real
 *   digits, and the spinning 0–9 strips are CSS generated content, not DOM text, so
 *   crawlers never see "0123456789…".
 * - Once the roll finishes, the real digits are shown again (data-roll="done").
 * - No animation for visitors who prefer reduced motion.
 */
export function CountUp({ value, delay = 0 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const chars = [...value]
  let digitIndex = 0

  useEffect(() => {
    const el = ref.current
    if (!el || !/\d/.test(value)) return
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    // park every digit on 0 (and hide the suffix) until the figure is on screen
    el.dataset.roll = 'ready'
    let frame = 0
    let timer: ReturnType<typeof setTimeout> | undefined
    const digits = (value.match(/\d/g) ?? []).length
    const total = delay + digits * DIGIT_STAGGER + ROLL_MS + 100

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        observer.disconnect()
        // two frames so the "ready" position is painted before the roll starts
        frame = requestAnimationFrame(() => {
          frame = requestAnimationFrame(() => {
            el.dataset.roll = 'run'
            // swap the strips back for the real digits once they have landed
            timer = setTimeout(() => {
              el.dataset.roll = 'done'
            }, total)
          })
        })
      },
      { threshold: 0.6 },
    )
    observer.observe(el)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      if (timer) clearTimeout(timer)
      delete el.dataset.roll
    }
  }, [value, delay])

  const digitCount = chars.filter((ch) => /\d/.test(ch)).length

  return (
    <span
      ref={ref}
      className={styles.root}
      style={
        {
          '--affix-delay': `${delay + digitCount * DIGIT_STAGGER + ROLL_MS * 0.55}ms`,
        } as CSSProperties
      }
    >
      <span className={styles.visual}>
        {chars.map((ch, i) => {
          if (!/\d/.test(ch)) {
            return (
              <span key={i} className={styles.affix}>
                {ch}
              </span>
            )
          }
          const style = {
            '--pos': LOOPS * 10 + Number(ch),
            '--delay': `${delay + digitIndex++ * DIGIT_STAGGER}ms`,
          } as CSSProperties
          return (
            <span key={i} className={styles.digit} style={style}>
              <span className={styles.face}>{ch}</span>
            </span>
          )
        })}
      </span>
    </span>
  )
}
