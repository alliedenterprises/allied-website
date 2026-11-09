import Image from 'next/image'
import Link from 'next/link'

import { BrandText } from '@/components/ui/BrandText'
import styles from './CtaBanner.module.css'

type CtaBannerProps = {
  eyebrow: string
  heading: string
  text: string
  cta: { label: string; href: string }
}

// Decorative background photo (Doha skyline at night, supplied by the company), shown faintly
// behind the text. It has alt text, but aria-hidden keeps screen readers on the banner text.
const background = {
  src: '/images/banners/doha-skyline-night.webp',
  width: 2400,
  height: 771,
}

/** Closing call to action: centred text on a dark band with a faint background photo. */
export function CtaBanner({ eyebrow, heading, text, cta }: CtaBannerProps) {
  return (
    <section className={styles.section} aria-labelledby="cta-banner-heading">
      <Image
        src={background.src}
        alt="Doha skyline at night across the bay, Qatar"
        aria-hidden="true"
        fill
        sizes="100vw"
        className={styles.bgImage}
      />
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
