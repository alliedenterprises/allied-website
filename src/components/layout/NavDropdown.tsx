'use client'

import { useState, type MouseEvent, type ReactNode } from 'react'

import styles from './Header.module.css'

/**
 * Desktop menu item with a dropdown. The dropdown itself opens with CSS (hover / keyboard focus);
 * this only closes it after a link inside is clicked. The header stays mounted across client-side
 * navigation, so without this the menu would stay open over the new page while the pointer is still on it.
 * It re-opens normally once the pointer leaves or keyboard focus comes back.
 */
export function NavDropdown({ children }: { children: ReactNode }) {
  const [closed, setClosed] = useState(false)

  function handleClick(event: MouseEvent<HTMLLIElement>) {
    if (!(event.target instanceof Element) || !event.target.closest('a')) return
    setClosed(true)
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur()
  }

  return (
    <li
      className={closed ? `${styles.hasDropdown} ${styles.dropdownClosed}` : styles.hasDropdown}
      onClick={handleClick}
      onMouseLeave={() => setClosed(false)}
      onFocus={() => setClosed(false)}
    >
      {children}
    </li>
  )
}
