import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

import { company } from '@/content/company'
import type { PageImage } from '@/content/types'
import styles from './Contact.module.css'

type ContactHeroProps = {
  heading: string
  lead: string
  image: PageImage
}

/** Contact page heading band: photo behind a navy overlay, breadcrumb, the page's single H1 and a lead. */
export function ContactHero({ heading, lead, image }: ContactHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="page-heading">
      <div className={styles.heroInner}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 1440px) 100vw, 1344px"
          preload
          loading="eager"
          className={styles.heroImage}
        />
        <div className={styles.heroCopy}>
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-current="page">Contact Us</li>
            </ol>
          </nav>
          <h1 id="page-heading" className={styles.heading}>
            {heading}
          </h1>
          <p className={styles.lead}>{lead}</p>
        </div>
      </div>
    </section>
  )
}

type ContactPanelProps = {
  heading: string
  intro: string
  /** The enquiry form */
  children: ReactNode
}

/** One split card: navy contact-details panel on the left, the enquiry form (children) on the right. */
export function ContactPanel({ heading, intro, children }: ContactPanelProps) {
  const { map } = company
  // same Google listing link as the footer
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(map.name)}&query_place_id=${map.placeId}`

  return (
    <section className={styles.body} aria-label="Contact details and enquiry form">
      <div className={styles.card}>
        <aside className={styles.info} aria-labelledby="info-heading">
          <h2 id="info-heading" className={styles.infoHeading}>
            {heading}
          </h2>
          <p className={styles.infoIntro}>{intro}</p>

          <ul className={styles.list}>
            <InfoRow icon={icons.phone} label="Office">
              <a href={company.phone.href}>{company.phone.display}</a>
            </InfoRow>
            <InfoRow icon={icons.whatsapp} label="Helpline & WhatsApp">
              <a href={company.helpline.href}>{company.helpline.display}</a>
              <a href={company.helpline.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.subLink}>
                Chat on WhatsApp
              </a>
            </InfoRow>
            <InfoRow icon={icons.mail} label="Email">
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </InfoRow>
            <InfoRow icon={icons.pin} label="Offices">
              {company.offices.map((office) => (
                <address key={office.streetAddress} className={styles.address}>
                  {office.streetAddress}, {office.addressLocality}
                </address>
              ))}
              <a href={mapLink} target="_blank" rel="noopener noreferrer" className={styles.subLink}>
                Open in Google Maps
              </a>
            </InfoRow>
            <InfoRow icon={icons.clock} label="Business hours">
              {company.hours.map((h) => (
                <span key={h.text} className={styles.hoursLine}>
                  {h.text.replace(' : ', ': ')}
                </span>
              ))}
            </InfoRow>
          </ul>
        </aside>

        <div className={styles.formSide}>{children}</div>
      </div>
    </section>
  )
}

function InfoRow({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <li className={styles.row}>
      <span className={styles.icon} aria-hidden="true">
        {icon}
      </span>
      <div className={styles.rowBody}>
        <span className={styles.label}>{label}</span>
        {children}
      </div>
    </li>
  )
}

const p = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

const icons = {
  phone: (
    <svg {...p}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 12 2.2a9.8 9.8 0 0 1 9.8 9.8c0 5.4-4.4 9.8-9.8 9.8zm8.4-18.2A11.8 11.8 0 0 0 1.7 17.8L0 24l6.3-1.7a11.8 11.8 0 0 0 5.7 1.4C18.5 23.7 24 18.4 24 11.9c0-3.2-1.2-6.1-3.6-8.3z" />
    </svg>
  ),
  mail: (
    <svg {...p}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  ),
  pin: (
    <svg {...p}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  clock: (
    <svg {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
}
