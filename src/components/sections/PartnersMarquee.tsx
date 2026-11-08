import Image from 'next/image'
import type { CSSProperties } from 'react'

import type { Partner } from '@/content/home'
import styles from './PartnersMarquee.module.css'

type PartnersMarqueeProps = {
  heading: string
  partners: readonly Partner[]
}

// Every logo sits in the same slot and gets the same visual area, so wide logos
// (Hashmato) and compact ones (Zyxel) look equally big instead of equally tall.
const SLOT_W = 190
const SLOT_H = 60
const AREA = 5400

function logoSize(width: number, height: number) {
  const ratio = width / height
  let h = Math.sqrt(AREA / ratio)
  let w = h * ratio
  const k = Math.min(1, SLOT_W / w, SLOT_H / h)
  w = Math.round(w * k)
  h = Math.round(h * k)
  return { w, h }
}

function LogoList({ partners, hidden }: { partners: readonly Partner[]; hidden?: boolean }) {
  return (
    // The second copy only exists to make the loop seamless: hidden from screen readers
    // and given empty alt text so each brand is announced once.
    <ul className={styles.group} aria-hidden={hidden || undefined}>
      {partners.map((partner) => {
        const { w, h } = logoSize(partner.logo.width, partner.logo.height)
        return (
          <li
            key={partner.name}
            className={partner.darkSrc ? `${styles.item} ${styles.hasDark}` : styles.item}
            style={{ '--logo-w': `${w}px` } as CSSProperties}
          >
            <Image
              src={partner.logo.src}
              alt={hidden ? '' : partner.name}
              width={w}
              height={h}
              quality={92}
              // logos slide in from off-screen, so lazy loading would make them pop in late;
              // load them up front but after everything important (low priority)
              loading="eager"
              fetchPriority="low"
              className={`${styles.logo} ${styles.light}`}
            />
            {partner.darkSrc && (
              <Image
                src={partner.darkSrc}
                alt=""
                aria-hidden="true"
                width={w}
                height={h}
                quality={92}
                loading="eager"
                fetchPriority="low"
                className={`${styles.logo} ${styles.dark}`}
              />
            )}
          </li>
        )
      })}
    </ul>
  )
}

/** Continuously scrolling partner logo strip (CSS-only animation, no JavaScript). */
export function PartnersMarquee({ heading, partners }: PartnersMarqueeProps) {
  return (
    <section className={styles.section} aria-labelledby="partners-heading">
      <h2 id="partners-heading" className={styles.heading}>
        {heading}
      </h2>

      <div
        className={styles.marquee}
        style={{ '--duration': `${partners.length * 1.8}s` } as CSSProperties}
      >
        <LogoList partners={partners} />
        <LogoList partners={partners} hidden />
      </div>
    </section>
  )
}
