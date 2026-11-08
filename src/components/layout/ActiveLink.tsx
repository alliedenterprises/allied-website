'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ComponentProps } from 'react'

type ActiveLinkProps = ComponentProps<typeof Link> & {
  href: string
  /** Child routes that should highlight this link (used for dropdown parents). */
  childPaths?: readonly string[]
}

function normalize(path: string) {
  return path.length > 1 ? path.replace(/\/+$/, '') : path
}

/** next/link that marks the current page with aria-current for SEO/accessibility. */
export function ActiveLink({ href, childPaths, ...props }: ActiveLinkProps) {
  const pathname = normalize(usePathname() ?? '/')
  const isCurrent = pathname === normalize(href)
  const isSectionActive = !isCurrent && !!childPaths?.some((p) => normalize(p) === pathname)

  return (
    <Link
      href={href}
      aria-current={isCurrent ? 'page' : undefined}
      data-active={isSectionActive ? 'true' : undefined}
      {...props}
    />
  )
}
