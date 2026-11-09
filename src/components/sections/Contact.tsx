import Link from 'next/link'
import type { ReactNode } from 'react'

import { company } from '@/content/company'
import styles from './Contact.module.css'

type ContactSectionProps = {
  heading: string
  lead: string
  infoHeading: string
  /** Numbered "what happens next" steps shown across the full width under both columns */
  steps?: { heading: string; steps: readonly { title: string; text: string }[] }
  /** The enquiry form, shown in the white card on the right */
  children: ReactNode
}

/**
 * Contact page: heading, lead and contact details on the left (dotted pattern behind the heading),
 * the enquiry form in a white card on the right (dots beneath it). Decoration is CSS only.
 */
export function ContactSection({ heading, lead, infoHeading, steps, children }: ContactSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="page-heading">
      <div className={styles.grid}>
        <div className={styles.intro}>
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

          <h2 className={styles.infoHeading}>{infoHeading}</h2>
          {/* one row per way to reach us: call, WhatsApp, email. Office addresses and opening hours are in the
              footer on every page and in the LocalBusiness JSON-LD, so this column stays as short as the form. */}
          <dl className={styles.list}>
            <Item icon={icons.phone} label="Office phone">
              <a href={company.phone.href} className={styles.main}>
                {company.phone.display}
              </a>
            </Item>
            <Item icon={icons.whatsapp} label="Helpline & WhatsApp">
              <a href={company.helpline.href} className={styles.main}>
                {company.helpline.display}
              </a>
              <a href={company.helpline.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.subLink}>
                Chat on WhatsApp →
              </a>
            </Item>
            <Item icon={icons.mail} label="Email">
              <a href={`mailto:${company.email}`} className={styles.main}>
                {company.email}
              </a>
            </Item>
          </dl>
        </div>

        <div className={styles.formWrap}>
          <div className={styles.card}>{children}</div>
        </div>
      </div>

      {steps && (
        <div className={styles.steps}>
          <h2 id="steps-heading" className={styles.stepsHeading}>
            {steps.heading}
          </h2>
          <ol className={styles.stepList} aria-labelledby="steps-heading">
            {steps.steps.map((step, i) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  )
}

function Item({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className={styles.item}>
      <span className={styles.icon} aria-hidden="true">
        {icon}
      </span>
      <div className={styles.itemBody}>
        <dt className={styles.label}>{label}</dt>
        <dd className={styles.value}>{children}</dd>
      </div>
    </div>
  )
}

const svg = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

const icons = {
  phone: (
    <svg {...svg}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 12 2.2a9.8 9.8 0 0 1 9.8 9.8c0 5.4-4.4 9.8-9.8 9.8zm8.4-18.2A11.8 11.8 0 0 0 1.7 17.8L0 24l6.3-1.7a11.8 11.8 0 0 0 5.7 1.4C18.5 23.7 24 18.4 24 11.9c0-3.2-1.2-6.1-3.6-8.3z" />
    </svg>
  ),
  mail: (
    <svg {...svg}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  ),
}
