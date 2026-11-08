import Link from 'next/link'
import type { ReactNode } from 'react'

import type { ProcessStep } from '@/content/zkteco'
import { BrandText } from '@/components/ui/BrandText'
import styles from './ProcessSteps.module.css'

type ProcessStepsProps = {
  id: string
  heading: string
  intro: string
  steps: readonly ProcessStep[]
  contact: {
    heading: string
    text: string
    primary: { label: string; href: string }
  }
  phone: { display: string; href: string }
  whatsapp: { display: string; href: string }
  email: string
}

/** Numbered steps on a connecting line, followed by a dark contact bar (matches the ZKTeco hero). */
export function ProcessSteps({ id, heading, intro, steps, contact, phone, whatsapp, email }: ProcessStepsProps) {
  return (
    <section className={styles.section} aria-labelledby={id}>
      <div className={styles.head}>
        <h2 id={id} className={styles.heading}>
          <BrandText text={heading} />
        </h2>
        <p className={styles.intro}>
          <BrandText text={intro} />
        </p>
      </div>

      <ol className={styles.steps}>
        {steps.map((step, i) => (
          <li key={step.title} className={styles.step}>
            <div className={styles.marker}>
              <span className={styles.icon} aria-hidden="true">
                {icons[step.icon]}
              </span>
              <span className={styles.number} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <h3 className={styles.title}>
              <span className={styles.srOnly}>Step {i + 1}: </span>
              {step.title}
            </h3>
            <p className={styles.text}>
              <BrandText text={step.text} />
            </p>
          </li>
        ))}
      </ol>

      <div className={styles.contact}>
        <div className={styles.contactCopy}>
          <p className={styles.contactHeading}>{contact.heading}</p>
          <p className={styles.contactText}>{contact.text}</p>
        </div>
        <div className={styles.actions}>
          <Link href={contact.primary.href} className={styles.primary}>
            {contact.primary.label}
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
          <a href={whatsapp.href} target="_blank" rel="noopener noreferrer" className={`${styles.ghost} ${styles.whatsapp}`}>
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 12 2.2a9.8 9.8 0 0 1 9.8 9.8c0 5.4-4.4 9.8-9.8 9.8zm8.4-18.2A11.8 11.8 0 0 0 1.7 17.8L0 24l6.3-1.7a11.8 11.8 0 0 0 5.7 1.4C18.5 23.7 24 18.4 24 11.9c0-3.2-1.2-6.1-3.6-8.3z" />
            </svg>
            <span>
              <span className={styles.srOnly}>WhatsApp </span>
              {whatsapp.display}
            </span>
          </a>
          <a href={`mailto:${email}`} className={styles.ghost}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 6L2 7" />
            </svg>
            {email}
          </a>
        </div>
      </div>
    </section>
  )
}

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

const icons: Record<ProcessStep['icon'], ReactNode> = {
  brief: (
    <svg {...iconProps}>
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  ),
  quote: (
    <svg {...iconProps}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 13h6M9 17h6" />
    </svg>
  ),
  install: (
    <svg {...iconProps}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  support: (
    <svg {...iconProps}>
      <path d="M3 14v-3a9 9 0 0 1 18 0v3" />
      <path d="M21 14a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2zM3 14a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2z" />
      <path d="M18 16v1a4 4 0 0 1-4 4h-2" />
    </svg>
  ),
}
