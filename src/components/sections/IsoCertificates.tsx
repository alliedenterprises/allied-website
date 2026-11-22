import Image from 'next/image'

import type { IsoCertificate } from '@/content/about'
import styles from './IsoCertificates.module.css'

type IsoCertificatesProps = {
  heading: string
  intro: string
  items: readonly IsoCertificate[]
}

/** ISO certificates: heading + intro, then one card per certificate (image opens full size). */
export function IsoCertificates({ heading, intro, items }: IsoCertificatesProps) {
  return (
    <section className={styles.section} aria-labelledby="iso-heading">
      <div className={styles.top}>
        <h2 id="iso-heading" className={styles.heading}>
          {heading}
        </h2>
        <p className={styles.intro}>{intro}</p>
      </div>

      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.standard} className={styles.card}>
            <a
              href={item.image.src}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.frame}
              aria-label={`View the ${item.standard} certificate full size`}
            >
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
                sizes="(max-width: 600px) 60vw, (max-width: 900px) 240px, 260px"
                className={styles.image}
              />
            </a>
            <div className={styles.body}>
              <h3 className={styles.title}>
                <span className={styles.standard}>{item.standard}</span>
                {item.title}
              </h3>
              <p className={styles.text}>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
