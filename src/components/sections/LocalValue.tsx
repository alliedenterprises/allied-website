import Image from 'next/image'

import type { PageImage } from '@/content/types'
import styles from './LocalValue.module.css'

type LocalValueProps = {
  eyebrow: string
  heading: string
  text: readonly string[]
  image: PageImage
}

/** In-Country Value band: certification logo on a white badge, beside a short statement. */
export function LocalValue({ eyebrow, heading, text, image }: LocalValueProps) {
  return (
    <section className={styles.section} aria-labelledby="icv-heading">
      <div className={styles.band}>
        <div className={styles.badge}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 600px) 240px, 280px"
            className={styles.image}
          />
        </div>
        <div>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id="icv-heading" className={styles.heading}>
            {heading}
          </h2>
          {text.map((paragraph) => (
            <p key={paragraph} className={styles.text}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
