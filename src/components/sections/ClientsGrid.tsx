import Image from 'next/image'

import type { Client } from '@/content/home'
import { ClientsPager } from './ClientsPager'
import styles from './ClientsGrid.module.css'

type ClientsGridProps = {
  heading: string
  intro: string
  clients: readonly Client[]
  /** Logos per page (two rows of five on desktop) */
  pageSize?: number
}

/**
 * Client logos in white cards, shown a page at a time (10 logos), moving to the next page every few seconds.
 * All logo files share one 2:1 canvas, so every card is the same size. Every page is in the server HTML.
 */
export function ClientsGrid({ heading, intro, clients, pageSize = 10 }: ClientsGridProps) {
  const pages: Client[][] = []
  for (let i = 0; i < clients.length; i += pageSize) pages.push(clients.slice(i, i + pageSize))
  const pageLabels = pages.map((_, i) => {
    const first = i * pageSize + 1
    const last = Math.min(clients.length, first + pageSize - 1)
    return `Show clients ${first} to ${last}`
  })

  return (
    <section className={styles.section} aria-labelledby="clients-heading">
      <h2 id="clients-heading" className={styles.heading}>
        {heading}
      </h2>
      <p className={styles.intro}>{intro}</p>

      <ClientsPager pageLabels={pageLabels}>
        {pages.map((page, p) => (
          <ul key={p} className={styles.grid}>
            {page.map((client) => (
              <li key={client.name} className={styles.card}>
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={400}
                  height={200}
                  sizes="(max-width: 720px) 44vw, 230px"
                  className={styles.logo}
                />
              </li>
            ))}
          </ul>
        ))}
      </ClientsPager>
    </section>
  )
}
