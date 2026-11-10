// /enterprise-resource-planning-qatar/ copy: kept from the old WordPress page of the same URL (requested),
// split into sections. Changes: grammar tidied; missing spaces between run-together sentences restored; the
// old "What types of ERP systems are there?" section only described cloud ERP, so its heading now says that.
// The customer story named "Mega Music"; the name is left out until the company confirms it may be used. No
// pictures (requested).
// VERIFY: which ERP product(s) Allied implements, whether on-premise ERP is offered as well as cloud, and
// permission to name the retail customer.
import { company } from './company'
import type { ContentBlock } from './types'

export const erpHero = {
  eyebrow: 'ERP business management software',
  heading: 'Enterprise Resource Planning (ERP) in Qatar',
  lead: 'An ERP system is business management software designed to integrate and streamline your business’s main activities, making them more time- and resource-efficient.',
  text: [
    'An ERP system gives businesses the ability to streamline all their workflows, with the flexibility to grow as the business expands.',
  ],
  highlight: { value: '10000+', label: 'installations as of 2026' },
  badge: 'Customised ERP for your business',
  primary: { label: 'Request a Consultation', href: '/contact-us/' },
}

export const erpOutgrow = {
  heading: 'When Your Business Outgrows Its Spreadsheets',
  text: [
    'So you’ve been in business for a while and, besides the usual start-up challenges, things have been running fairly smoothly. Your business systems have developed organically: you’re building a marketing database, you have a working HR and payroll system, and your pricing information is kept in a few spreadsheets.',
    'Then someone on your team notices that linking your sales processes to your customer relationship management would save valuable hours each month, and give your customers a much more streamlined experience. Look closer and you find that integrating a few other databases and spreadsheets would create more efficiencies.',
  ] as ContentBlock[],
}

export const erpWhat = {
  heading: 'What Is an ERP System?',
  text: [
    'ERP stands for Enterprise Resource Planning. An enterprise resource planning system is another term for a business management system. It can cover many different functions, but it is essentially software designed to integrate and streamline your business’s main activities.',
    'Businesses use ERP systems to collect, store, manage and understand information from all their internal processes. An ERP system can manage HR, inventory, sales and other functions, and gives business owners an overview of the entire business, often in real time, from a customised dashboard. Every part of the business has access to up-to-date, relevant information at all times.',
  ] as ContentBlock[],
}

export const erpCloud = {
  heading: 'Cloud-Based ERP Solutions',
  text: [
    'Cloud-based or online ERP solutions are accessed over the internet and paid for on a subscription basis. The software is not owned or licensed by the end user but provided as a service, which is why online solutions are also known as Software as a Service (SaaS).',
    'Online ERP is a good fit for many businesses because it offers enterprise-level software at an affordable monthly price, with the flexibility to scale up and down easily. Allied Enterprises provides cloud-based ERP solutions.',
  ] as ContentBlock[],
}

export const erpWho = {
  heading: 'Who Can Benefit from an ERP Solution?',
  text: [
    'Once reserved for big business, ERP is now a mainstream option for businesses of any size. Even small and medium-sized businesses have many business functions to stay on top of.',
    { subheading: 'A retail customer’s story' },
    'One of our retail customers was juggling a point-of-sale system with its accounting, as well as managing stock and transfers across three sites. It needed a more powerful system to stay in control of the business.',
    'The customer now uses our system, customised and installed to suit its unique business requirements. Its back-end system interfaces with its POS, and customised reporting helps it understand its customers’ needs better.',
    'Running a business is not easy, especially one with many different functions. An ERP system helps business owners streamline and integrate every part of the operation, from sales to HR, and make faster, better-informed decisions.',
    `To discuss your requirements, call ${company.phone.display}, WhatsApp ${company.helpline.display} or email ${company.email}.`,
  ] as ContentBlock[],
  links: [
    { label: 'Business intelligence', href: '/business-intelligence-qatar/' },
    { label: 'HRMS and payroll management', href: '/hrms-payroll-management-qatar/' },
    { label: 'Business process management', href: '/business-process-management/' },
    { label: 'Contact our team', href: '/contact-us/' },
  ],
}
