import Link from 'next/link'

import { BrandText } from '@/components/ui/BrandText'
import styles from './CtaBanner.module.css'

type CtaBannerProps = {
  eyebrow: string
  heading: string
  text: string
  cta: { label: string; href: string }
}

/** Closing call to action: centred text on a dark band (CSS-only background, no image). */
export function CtaBanner({ eyebrow, heading, text, cta }: CtaBannerProps) {
  return (
    <section className={styles.section} aria-labelledby="cta-banner-heading">
      <div className={styles.content}>
        <p className={styles.eyebrow}>
          <BrandText text={eyebrow} onDark />
        </p>
        <h2 id="cta-banner-heading" className={styles.heading}>
          <BrandText text={heading} onDark />
        </h2>
        <p className={styles.text}>
          <BrandText text={text} onDark />
        </p>
        <Link href={cta.href} className={styles.button}>
          {cta.label}
        </Link>
      </div>
    </section>
  )
}
