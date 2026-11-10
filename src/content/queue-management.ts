// /queue-management-qatar/ copy: kept from the old WordPress page of the same URL (requested), split into
// sections. Changes: grammar tidied ("they even willing", "It is clearly that", "mouth-to-mouth marketing"
// → word-of-mouth); "unrivaled range" dropped as an unverifiable claim; "Research has shown" removed because
// no source was given. No pictures (requested).
// VERIFY: the product/brand behind the queue system, kiosk, feedback and digital signage solutions.
import { company } from './company'
import type { ContentBlock } from './types'

export const queueHero = {
  eyebrow: 'Queue management and customer experience',
  heading: 'Queue Management Systems in Qatar',
  lead: 'We offer a range of customer touch points designed to automate transactions and move front-line activities into digital channels, for higher efficiency and a better customer experience.',
  text: [
    'Our solutions include a Queue Management System, Self-Service Kiosks, a Customer Feedback System and Digital Signage.',
  ],
  highlight: { value: '10000+', label: 'installations as of 2026' },
  badge: 'Setup and support in Doha',
  primary: { label: 'Book a Demo', href: '/contact-us/' },
}

export const queueSolutions = {
  heading: 'Customer experience solutions',
  items: [
    'Queue management system',
    'Self-service kiosk',
    'Customer feedback system',
    'Digital signage solution',
  ],
}

export const queueExperience = {
  heading: 'Customer Experience as a Brand Differentiator',
  text: [
    'In an era where customer experience has become a key brand differentiator, businesses compete to implement the most effective customer experience solutions as a marketing strategy that increases the bottom line.',
    'Customers are more loyal to organisations that make them feel understood, and many are willing to spend more for a reliably good experience. A positive customer experience helps your company improve customer satisfaction, strengthen word-of-mouth marketing and generate more revenue.',
    { subheading: 'More than managing queues' },
    'Our product aims to help organisations improve their performance across different business areas. Its role is not only to manage customer queues and provide general information, but also to support sales. Its customisable software interface lets us respond to your unique business needs.',
    `To see it working, call ${company.phone.display}, WhatsApp ${company.helpline.display} or email ${company.email}.`,
  ] as ContentBlock[],
  links: [{ label: 'Contact our team', href: '/contact-us/' }],
}
