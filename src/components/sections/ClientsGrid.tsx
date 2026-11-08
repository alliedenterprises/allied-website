import Image from 'next/image'

import type { Client } from '@/content/home'
import styles from './ClientsGrid.module.css'

type ClientsGridProps = {
  heading: string
  intro: string
  clients: readonly Client[]
}

/**
 * Client logos in white cards: grey until hovered, in full colour on touch screens.
 * All logo files share one 2:1 canvas, so every card is the same size.
 */
export function ClientsGrid({ heading, intro, clients }: ClientsGridProps) {
  return (
    <section className={styles.section} aria-labelledby="clients-heading">
      <h2 id="clients-heading" className={styles.heading}>
        {heading}
      </h2>
      <p className={styles.intro}>{intro}</p>

      <ul className={styles.grid}>
        {clients.map((client) => (
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
    </section>
  )
}
