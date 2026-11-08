'use client'

import { useEffect } from 'react'

/**
 * Sets `data-scrolled` on <html> once the page is scrolled, so the header CSS can switch
 * from glass (at the top) to solid (while scrolling). Renders nothing; one passive listener,
 * and the DOM is only touched when the state actually changes.
 */
export function HeaderScrollState() {
  useEffect(() => {
    const root = document.documentElement
    let scrolled: boolean | null = null

    const update = () => {
      const next = window.scrollY > 8
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
