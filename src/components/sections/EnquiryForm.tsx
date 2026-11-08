'use client'

import { useState, type FormEvent } from 'react'

import styles from './EnquiryForm.module.css'

type EnquiryFormProps = {
  heading: string
  intro: string
  submit: string
  /** WhatsApp number in international format without "+" (e.g. 97433338964) */
  whatsappNumber: string
  services: readonly string[]
  messagePlaceholder: string
  email: string
}

/**
 * Enquiry form that sends nothing to our server: on submit it builds a WhatsApp message from the fields
 * and opens wa.me in a new tab, where the visitor presses Send. Native HTML validation, no libraries.
 */
export function EnquiryForm({
  heading,
  intro,
  submit,
  whatsappNumber,
  services,
  messagePlaceholder,
  email,
}: EnquiryFormProps) {
  const [sentUrl, setSentUrl] = useState<string | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // honeypot: real visitors never see or fill this field
    if (String(data.get('website') ?? '').trim()) return

    const field = (name: string) => String(data.get(name) ?? '').trim()
    // optional fields only appear in the message when filled in
    const optional = (label: string, name: string) => (field(name) ? [`${label}: ${field(name)}`] : [])
    const text = [
      'Hello Allied Enterprises, I would like to make an enquiry.',
      '',
      `Name: ${field('name')}`,
      ...optional('Company', 'company'),
      `Phone: ${field('phone')}`,
      ...optional('Email', 'email'),
      `Service: ${field('service')}`,
      '',
      field('message'),
    ].join('\n')
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`

    window.open(url, '_blank', 'noopener,noreferrer')
    setSentUrl(url)
  }

  return (
    <div>
      <h2 id="enquiry-heading" className={styles.heading}>
        {heading}
      </h2>
      <p className={styles.intro}>{intro}</p>

      <form className={styles.form} onSubmit={handleSubmit} aria-labelledby="enquiry-heading">
        <div className={styles.field}>
          <label htmlFor="enq-name">Full name</label>
          <input id="enq-name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="enq-company">
            Company <span className={styles.optional}>(optional)</span>
          </label>
          <input id="enq-company" name="company" type="text" autoComplete="organization" placeholder="Company name" />
        </div>
        <div className={styles.field}>
          <label htmlFor="enq-phone">Phone</label>
          <input id="enq-phone" name="phone" type="tel" autoComplete="tel" placeholder="+974" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="enq-email">
            Email <span className={styles.optional}>(optional)</span>
          </label>
          <input id="enq-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" />
        </div>
        <div className={`${styles.field} ${styles.full}`}>
          <label htmlFor="enq-service">Service</label>
          <select id="enq-service" name="service" defaultValue={services[0]} required>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className={`${styles.field} ${styles.full}`}>
          <label htmlFor="enq-message">Message</label>
          <textarea id="enq-message" name="message" rows={4} placeholder={messagePlaceholder} required />
        </div>

        {/* honeypot, hidden from people and assistive tech */}
        <div className={styles.trap} aria-hidden="true">
          <label htmlFor="enq-website">Website</label>
          <input id="enq-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className={`${styles.full} ${styles.actions}`}>
          <button type="submit" className={styles.submit}>
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 12 2.2a9.8 9.8 0 0 1 9.8 9.8c0 5.4-4.4 9.8-9.8 9.8zm8.4-18.2A11.8 11.8 0 0 0 1.7 17.8L0 24l6.3-1.7a11.8 11.8 0 0 0 5.7 1.4C18.5 23.7 24 18.4 24 11.9c0-3.2-1.2-6.1-3.6-8.3z" />
            </svg>
            {submit}
          </button>
          <p className={styles.note} aria-live="polite">
            {sentUrl ? (
              <>
                WhatsApp opened in a new tab: press Send there. Not opened?{' '}
                <a href={sentUrl} target="_blank" rel="noopener noreferrer">
                  Open WhatsApp
                </a>
              </>
            ) : (
              <>
                Or email <a href={`mailto:${email}`}>{email}</a>
              </>
            )}
          </p>
        </div>
      </form>
    </div>
  )
}
