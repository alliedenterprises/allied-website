'use client'

import { useEffect } from 'react'

// Two thresholds (hysteresis). When the TopBar folds away, the sticky header gets 42px shorter, so the page
// content moves up and the browser's scroll anchoring lowers scrollY by about the same amount. With a single
// threshold that pushed scrollY back below it, the bar unfolded, scrollY rose again, and the bar flickered.
// The gap between the two thresholds (72px) is larger than the bar's height, so one fold can't undo itself.
const FOLD_AFTER = 80
const UNFOLD_BEFORE = 8

/**
 * Sets `data-scrolled` on <html> once the page is scrolled, so the header CSS can switch
 * from glass (at the top) to solid (while scrolling) and fold the TopBar away. Renders nothing;
 * one passive listener, and the DOM is only touched when the state actually changes.
 */
export function HeaderScrollState() {
  useEffect(() => {
    const root = document.documentElement
    let scrolled: boolean | null = null

    const update = () => {
      const y = window.scrollY
      const next = scrolled ? y > UNFOLD_BEFORE : y > FOLD_AFTER
      if (next !== scrolled) {
        scrolled = next
        root.toggleAttribute('data-scrolled', next)
      }
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      root.removeAttribute('data-scrolled')
    }
  }, [])

  return null
}
