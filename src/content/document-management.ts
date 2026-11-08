// /document-management-scanning-qatar/ copy: kept from the old WordPress page of the same URL (requested),
// split into sections. Changes: grammar tidied ("develops" → "develop", missing full stops); "guarantee you
// will have continued access" softened to "keep access", since a guarantee is a contractual claim. No pictures
// (requested).
// VERIFY: the archive targets (CD, office servers, internet), secure web hosting, ERP integration and the
// disaster-recovery set-up (cloud and co-location) are services the company provides today.
import { company } from './company'
import type { ContentBlock } from './types'

export const documentHero = {
  eyebrow: 'Document scanning and digitisation',
  heading: 'Document Management & Scanning Services in Qatar',
  lead: 'We convert your paper into digital documents, making information easy to retrieve and freeing up valuable workspace by archiving your paper files to CD, office servers or the internet.',
  text: [
    'Instead of searching through filing cabinets and stacks of folders, you can run keyword searches that bring the information you need to your fingertips.',
  ],
  highlight: { value: '3000+', label: 'installations as of 2026' },
  badge: 'Scanning, indexing and secure access',
  primary: { label: 'Request a Quote', href: '/contact-us/' },
}

export const documentServices = {
  heading: 'Our document management services',
  items: [
    'Document management services',
    'Preparing the documents',
    'Document scanning services',
    'Processing',
    'Verification and validation',
    'Web-based document access',
    'Document indexing',
    'Custom database design',
    'Quality assurance',
    'Secure web hosting',
    'ERP integration',
  ],
}

export const documentOutsourcing = {
  heading: 'Why Outsource Document Scanning and Indexing',
  text: [
    'Outsourcing your document scanning and indexing lets you focus on your core business, and frees your organisation’s resources for more mission-critical activities.',
    'We digitise your documents automatically, transforming streams of forms and documents of any structure and complexity into business-ready data, with precise, knowledge-based search by meaning.',
    'Outsourcing to us means the latest technology and techniques are used on your project. This is our core business and we stay up to date with it; keeping up with the same technology in-house would be a burden for most companies. To cut costs and drive new efficiencies, businesses of every kind need to convert paper documents into electronic records.',
  ] as ContentBlock[],
}

export const documentRecovery = {
  heading: 'Back-up, Disaster Recovery and Cost Savings',
  text: [
    { subheading: 'Fail-safe redundancy and back-up' },
    'We make sure your company has fail-safe redundancy and back-up services. In the event of a natural disaster, accident or technical crisis, our disaster recovery procedures and back-up plans, including cloud storage and co-location redundancy, help you keep access to your records.',
    { subheading: 'Lower operating costs' },
    'You save on operating expenses such as staff, payroll, administration, utilities and rent. When comparing with in-house document scanning and indexing, remember the hidden costs of wasted time, overtime and employee turnover.',
    'Outsourcing lets you budget your document scanning costs accurately, instead of facing unknown personnel and equipment expenses for in-house processing. You gain greater operating efficiency, with no hiring, training or managing of additional staff.',
    `To discuss a scanning project, call ${company.phone.display}, WhatsApp ${company.helpline.display} or email ${company.email}.`,
  ] as ContentBlock[],
  links: [
    { label: 'Enterprise resource planning', href: '/enterprise-resource-planning-qatar/' },
    { label: 'Contact our team', href: '/contact-us/' },
  ],
}
