// /contact-us/ copy (old WordPress URL, rebuilt at the same path).
// Layout: heading, lead and contact details on the left; the enquiry form in a white card on the right.
// The form opens WhatsApp with the message filled in (no email server or stored form data needed).
// All contact details come from company.ts.
import { company } from './company'
import { mainNav } from './navigation'

export const contactHero = {
  heading: 'Contact Allied Enterprises in Doha',
  lead: 'Need a quotation, a demo or support? Call us, message us on WhatsApp or send an enquiry, and our team in Doha will get back to you.',
}

export const contactInfo = {
  heading: 'Get in touch',
}

// "What happens next" strip under the form. Same confirmed process as the ZKTeco page (zkteco.ts
// zktecoProcess): consultation → no-obligation quotation, site visit if required → installation → demo/support.
// No response-time promise (not confirmed by the company).
export const contactSteps = {
  heading: 'What happens after you contact us',
  steps: [
    {
      title: 'We discuss your needs',
      text: 'Our team in Doha gets back to you to understand your staff numbers, doors, sites and current system.',
    },
    {
      title: 'Free quotation',
      text: 'We recommend the right devices and software and send a no-obligation quotation, with a site visit if required.',
    },
    {
      title: 'Installation & setup',
      text: 'Our technicians install the hardware, configure the software and enrol your users.',
    },
    {
      title: 'Training & support',
      text: 'We show your team how to use the system and support you after installation.',
    },
  ],
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
