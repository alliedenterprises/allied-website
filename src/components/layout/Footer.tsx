import Link from 'next/link'

import { company } from '@/content/company'
import { Logo } from './Logo'
import styles from './Footer.module.css'
import { BrandText } from '@/components/ui/BrandText'

/** Site footer — copy matches the current alliedeprs.com footer. */
export function Footer() {
  const { map } = company
  // Embed centred on the business, searching its name so the listing's pin is shown
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(map.query)}&ll=${map.lat},${map.lng}&z=17&output=embed`
  // Official Maps URL that opens the exact Google listing (reviews, directions)
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(map.name)}&query_place_id=${map.placeId}`

  return (
    <footer className={styles.wrap}>
      <div className={styles.card}>
        <div className={styles.grid}>
          {/* About */}
          <section className={styles.col} aria-labelledby="footer-about">
            <Link href="/" className={styles.logo} aria-label={`${company.shortName} home`}>
              <Logo />
            </Link>
            <h2 id="footer-about" className={styles.heading}>
              About Allied Enterprises
            </h2>
            {company.about.map((para) => (
              <p key={para} className={styles.text}>
                <BrandText text={para} />
              </p>
            ))}
            <ul className={styles.social} aria-label="Social media">
              {company.social.map((url) => {
                const network = socialNetwork(url)
                return (
                  <li key={url}>
                    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`${company.shortName} on ${network.name}`}>
                      {network.icon}
                    </a>
                  </li>
                )
              })}
            </ul>
          </section>

          {/* Location */}
          <section className={styles.col} aria-labelledby="footer-location">
            <h2 id="footer-location" className={styles.heading}>
              Our Location
            </h2>
            <div className={styles.map}>
              <iframe
                src={mapSrc}
                title={`Map showing ${map.name}, Doha, Qatar`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a href={mapLink} target="_blank" rel="noopener noreferrer" className={styles.mapLink}>
              Open in Google Maps
            </a>
          </section>

          {/* Address + hours */}
          <section className={styles.col} aria-labelledby="footer-address">
            <h2 id="footer-address" className={styles.heading}>
              Our Address
            </h2>
            <p className={styles.company}>{company.name.toUpperCase()}</p>
            {company.offices.map((office) => (
              <address key={office.streetAddress} className={styles.address}>
                {office.lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
                {office.phones.map((phone) => (
                  <span key={phone.label}>
                    {phone.label}: <a href={phone.href}>{phone.display}</a>
                  </span>
                ))}
              </address>
            ))}

            <h3 className={styles.subheading}>Business Hours</h3>
            <ul className={styles.hours}>
              {company.hours.map((h) => (
                <li key={h.text}>{h.text}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} {company.shortName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ---------- Icons ---------- */

function socialNetwork(url: string) {
  if (url.includes('facebook')) return { name: 'Facebook', icon: <FacebookIcon /> }
  if (url.includes('instagram')) return { name: 'Instagram', icon: <InstagramIcon /> }
  return { name: 'Twitter', icon: <XIcon /> }
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="0.6" fill="currentColor" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.2 2.3h3.4l-7.4 8.4 8.7 11.5h-6.8l-5.3-7-6.1 7H1.3l7.9-9L.8 2.3h7l4.8 6.4 5.6-6.4zm-1.2 17.9h1.9L7 4.2H5z" />
    </svg>
  )
}
