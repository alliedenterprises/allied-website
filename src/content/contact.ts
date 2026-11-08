// /contact-us/ copy (old WordPress URL, rebuilt at the same path).
// Layout: one split card, navy contact-details panel on the left and an enquiry form on the right that
// opens WhatsApp with the message filled in (no email server or stored form data needed). All contact
// details come from company.ts.
import { company } from './company'
import { mainNav } from './navigation'

export const contactHero = {
  heading: 'Contact Allied Enterprises in Doha',
  lead: 'Need a quotation, a demo or support? Call us, message us on WhatsApp or send an enquiry, and our team in Doha will get back to you.',
  image: {
    src: '/images/about/allied-support-team-office.webp',
    width: 1536,
    height: 1024,
    // decorative background behind the heading
    alt: '',
  },
}

export const contactInfo = {
  heading: 'Get in touch',
  intro: 'Our team in Doha is here to help with quotations, demos and support.',
}

export const contactForm = {
  heading: 'Send us a message',
  intro: 'Fill in the form and WhatsApp opens with your message ready to send.',
  submit: 'Send enquiry on WhatsApp',
  whatsappNumber: company.helpline.e164.replace('+', ''),
  messagePlaceholder: 'For example: number of employees or doors, number of sites, and what you use today.',
}

/** Service options: every page in the main menu (deduplicated), then "Not sure yet". */
export const serviceOptions: string[] = [
  ...new Set(
    mainNav.flatMap((item) => (item.children ? item.children.map((c) => c.label) : item.href === '/zkteco-qatar/' ? ['ZKTeco products'] : [])),
  ),
  'Support for an existing system',
  'Not sure yet',
]
