// About page copy: kept word-for-word from the old alliedeprs.com/about-us/ page (requested),
// split into sections. Only typos were fixed (e.g. "honed", "conforming", "These include:").
// Section headings were added for structure. "Authorized agent" confirmed by the company.
// "3000 installations as of 2026": year updated by the company (old page said 2020).
// VERIFY: "24/7" assistance and the "most trusted … in the world"
// wording are the company's own claims; "Projects Delivered" in companyStats should not contradict them.

import type { PageImage } from './types'

export type AboutImage = PageImage

export type AudienceIcon =
  | 'building'
  | 'government'
  | 'vendor'
  | 'startup'
  | 'home'
  | 'recreation'
  | 'person'

export const aboutHero = {
  heading: 'About Allied Enterprises',
  lead: 'Trust can only be earned by years of establishing standards and credibility. One such player holding the trust of many international firms at its bosom is “Allied Enterprises.”',
  text: [
    'Allied Enterprises is one of the leading professional vendors in the arena of security systems and construction management. Allied Enterprises is a team of passionate young individuals who are committed to making a difference in the way businesses are run.',
    'The company offers a wide array of technical solutions for various needs of homes and businesses which help get better outcomes with strong operational focus.',
  ],
  image: {
    src: '/images/about/allied-support-team-office.webp',
    width: 1536,
    height: 1024,
    alt: 'Support staff with headsets working at computers in a bright office',
  },
  highlight: { value: '3000+', label: 'installations as of 2026' },
  badge: 'Authorized ZKTeco agent in Qatar',
  primary: { label: 'Request a Quote', href: '/contact-us/' },
}

export const aboutZkteco = {
  heading: 'Authorized ZKTeco agent in Qatar',
  text: [
    'Being the authorized ZKTeco agent in Qatar, Allied has done more than 3000 installations as of 2026.',
    'The firm believes that the slightest chance of a threat should be dealt away with as soon as possible, without leaving any scope for risk or security breach.',
    'We are consultants who offer expert advice on technical and functional specifications for various constructions. IT documentation has been a challenge for many companies across domains. The use of a pair of well-versed hands to guide in decision making related to system design and implementation would be handy in developing any new project.',
    'Allied Enterprises is the authorized dealer for ZKTeco Products in Qatar mainly ZKTeco time attendance system and access control. Allied Enterprises is the authorized reseller for ZKTeco Qatar.',
  ],
  links: [
    { label: 'Time attendance systems', href: '/time-attendance-system-qatar/' },
    { label: 'Access control systems', href: '/access-control-system-qatar/' },
  ],
  image: {
    src: '/images/about/zkteco-fingerprint-terminal-installation.webp',
    width: 1536,
    height: 1024,
    alt: 'Technician installing a ZKTeco fingerprint attendance terminal on an office wall',
  },
}

export const aboutAudience = {
  heading: 'Who is our target audience?',
  intro:
    'Anybody who is in need of technical consultation regarding IT systems, construction maintenance services and security services are our clients. These include:',
  items: [
    { label: 'MNCs and organizations', icon: 'building' },
    { label: 'Government establishments', icon: 'government' },
    { label: 'Personal vendors', icon: 'vendor' },
    { label: 'Start ups', icon: 'startup' },
    { label: 'Homes and apartments', icon: 'home' },
    { label: 'Recreational facilities', icon: 'recreation' },
    { label: 'Individual persons', icon: 'person' },
  ] as { label: string; icon: AudienceIcon }[],
}

export const aboutPrinciple = {
  label: 'The principle behind Allied Enterprises is,',
  quote: 'to not wait for a security issue to arise, but to be sufficiently proactive to prevent it.',
}

export const aboutVision = {
  heading: 'Vision',
  text: [
    'Allied Enterprises has risen towards mastering the art of rendering high levels of security for homes and establishments throughout the world. The innovative research wing working behind the technicians in the company, promise on delivering high-end solutions which can prevent technical issues from hitting establishments and homes.',
    'Making the customer the central focus for all our products has helped Allied Enterprises become one of the most trusted security networks in the world. Their commitment to constantly developing and delivering innovative products and high-end solutions.',
    'Allied Enterprises focuses on providing comprehensive security solutions and networking systems under one roof to customers of various statures. This helps them to save time and money.',
    'We also focus on shareholder’s wealth and the well-being of the company’s employees and business partners who are critical to building good work culture in our workspace.',
  ],
  image: {
    src: '/images/about/zkteco-face-recognition-attendance.webp',
    width: 678,
    height: 452,
    alt: 'Employee checking in at a face recognition attendance terminal',
  },
}

export const aboutQuality = {
  heading: 'Quality Policy',
  lead: 'The business objective of the company is to attain maximum customer satisfaction, while offering quality and cost-effective services.',
  text: [
    'Allied Enterprises Quality control policy is to deliver products and services conforming to Quality plans and contract requirements.',
    'The quality plan outlines the organizational policies, which are established to ensure that all industrial services and construction activities are carried out under controlled conditions. Industrial services shall be in accordance with the specifications, and related International industrial standards.',
    'This quality assurance standard establishes the basis for the quality assurance plans implemented within Allied organization. It states the requirements, assigns the responsibilities and prescribes the principles governing activities that are the key to quality. Compliance with this standard is mandatory and applies to all company projects.',
  ],
  statement: {
    label: 'The quality policy of the company revolves around,',
    quote:
      'providing customers the best service possible, including fair and competitive pricing, top-quality service and well-trained employees who service them with high standards such as quick response time, proper initial layout and educating them of preventive mechanisms.',
    after:
      'All company personnel shall adhere to the contents of this QA/QC program and no deviations from the methods set forth herein shall be permitted.',
  },
}

export const aboutTeam = {
  heading: 'Our team',
  text: [
    'The team at Allied Enterprises consists of the best hands in the industry. This ensures that you have people with the best skillset to assist you in all your endeavors. The company employs young and vigorous people who are experts in the field of IT, marketing policy and customer service. All employees are trained and groomed in both domain knowledge and smart skills. Innovativeness and dynamism are traits which are well appreciated and nurtured within the walls of the organization.',
    'Their expertise guarantees precise execution of orders, optimal prices and services of the highest possible quality. The company is not ready to compromise on the value given to customers at any cost and will place the power of the latest technological achievements in the best interests of the customers always.',
  ],
}

export const aboutCulture = {
  heading: 'The culture of exceptional client service',
  text: [
    'The culture developed at Allied Enterprises is of exceptional customer servicing with all respect and focus given to the customer and his requirements. The team has been honed to serve the customer and assist him all throughout the life of the issue at hand. Assistance will be provided 24/7.',
  ],
  location: 'Allied Enterprises, ZKTeco Qatar – Rawadat Al Khail, Doha Qatar',
}
