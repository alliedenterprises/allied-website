import Link from 'next/link'

import { company } from '@/content/company'
import { Logo } from './Logo'
import { socialNetwork } from './SocialIcons'
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
