import Image from 'next/image'
import Link from 'next/link'

import type { PageImage } from '@/content/types'
import { BrandText, ZKTeco } from '@/components/ui/BrandText'
import styles from './ZktecoHero.module.css'

type ZktecoHeroProps = {
  heading: string
  lead: string
  text: readonly string[]
  image: PageImage
  badge: string
  /** Recognition methods shown as chips under the products */
  methods: readonly string[]
  stats: readonly { value: string; label: string }[]
  primary: { label: string; href: string }
  phone: { display: string; href: string }
  whatsapp: string
}

/**
 * Showcase hero for the /zkteco-qatar/ page: a dark charcoal panel with the page's single H1,
 * the products on a lit stage and a stats strip. In the H1 "ZKTeco" is shown as the official
 * logo; the word itself stays in the HTML as visually-hidden text (same as BrandText elsewhere),
 * so the H1 still reads "Authorized ZKTeco Dealer in Qatar".
 */
export function ZktecoHero({
  heading,
  lead,
  text,
  image,
  badge,
  methods,
  stats,
  primary,
  phone,
  whatsapp,
}: ZktecoHeroProps) {
  const [before, after] = heading.split('ZKTeco')

  return (
    <section className={styles.section} aria-labelledby="page-heading">
      <div className={styles.panel}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className={styles.pill}>
              <span className={styles.check} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5 10 17 19 7" />
                </svg>
              </span>
              <BrandText text={badge} onDark />
            </p>

            <h1 id="page-heading" className={styles.heading}>
              {after === undefined ? (
                heading
              ) : (
                <>
                  {before}
                  <span className={styles.brand}>
                    <ZKTeco onDark />
                  </span>
                  {after}
                </>
              )}
            </h1>

            <p className={styles.lead}>{lead}</p>
            {text.map((p) => (
              <p key={p} className={styles.text}>
                {p}
              </p>
            ))}

            <div className={styles.actions}>
              <Link href={primary.href} className={styles.primary}>
                {primary.label}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </Link>
              <a href={phone.href} className={styles.ghost}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                </svg>
                {phone.display}
              </a>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ghost} ${styles.whatsapp}`}
                aria-label="WhatsApp us"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 12 2.2a9.8 9.8 0 0 1 9.8 9.8c0 5.4-4.4 9.8-9.8 9.8zm8.4-18.2A11.8 11.8 0 0 0 1.7 17.8L0 24l6.3-1.7a11.8 11.8 0 0 0 5.7 1.4C18.5 23.7 24 18.4 24 11.9c0-3.2-1.2-6.1-3.6-8.3z" />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.stage}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 1000px) 92vw, 48vw"
              preload
              loading="eager"
              className={styles.image}
            />
            <ul className={styles.methods} aria-label="Recognition methods">
              {methods.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </div>

        <ul className={styles.stats}>
          {stats.map((s) => (
            <li key={s.label} className={styles.stat}>
              <strong className={styles.value}>{s.value}</strong>
              <span className={styles.label}>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
