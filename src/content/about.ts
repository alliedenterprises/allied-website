// About page copy: kept word-for-word from the old alliedeprs.com/about-us/ page (requested),
// split into sections. Only typos were fixed (e.g. "honed", "conforming", "These include:").
// Section headings were added for structure. ZKTeco role: "authorized distributor" per the 2026 ZKTeco
// certificate (changed from "agent" on 2026-11-09). SEO audit 2026-11-09: the ZKTeco section heading no longer
// repeats the /zkteco-qatar/ page's target phrase, and links to that page instead (avoids cannibalization);
// "one of the leading professional vendors" and similar unverifiable claims were reworded as facts.
// "10000 installations as of 2026": figure updated by the company on 2026-11-10 (was 3000; old page said 3000 as of 2020).
// VERIFY: "24/7" assistance and the "most trusted … in the world"
// wording are the company's own claims; "Installations" in companyStats (home.ts) should not contradict them.

import type { PageImage } from './types'

export type AboutImage = PageImage

export type AudienceIcon =
  'building' | 'government' | 'vendor' | 'startup' | 'home' | 'recreation' | 'person'

export const aboutHero = {
  heading: 'About Allied Enterprises',
  lead: 'Trust can only be earned by years of establishing standards and credibility. One such player holding the trust of many international firms at its bosom is “Allied Enterprises.”',
  text: [
    'Allied Enterprises is a professional vendor of security systems and construction management services in Qatar. Allied Enterprises is a team of passionate young individuals who are committed to making a difference in the way businesses are run.',
    'The company offers a wide array of technical solutions for various needs of homes and businesses which help get better outcomes with strong operational focus.',
  ],
  image: {
    src: '/images/about/allied-support-team-office.webp',
    width: 1536,
    height: 1024,
    alt: 'Support staff with headsets working at computers in a bright office',
  },
  highlight: { value: '10000+', label: 'installations as of 2026' },
  badge: 'Authorized ZKTeco distributor in Qatar',
  primary: { label: 'Request a Quote', href: '/contact-us/' },
}

// In-Country Value (ICV) band, above the ISO certificates (added 2026-11-22). Logo and wording supplied by the
// company (logo cropped from their design screenshot; replace with the original artwork if available).
// Tawteen is QatarEnergy's In-Country Value programme.
// VERIFY: ICV certificate issuer, score and expiry date were not supplied; do not add them until confirmed.
export const aboutIcv = {
  eyebrow: 'Local value',
  heading: 'Committed to Qatar.',
  text: [
    'Supporting local value through the products, services and expertise we bring to our customers.',
  ],
  image: {
    src: '/images/certifications/icv-tawteen-in-country-value-certified.webp',
    width: 432,
    height: 216,
    alt: 'Tawteen In-Country Value (ICV) certified logo',
  },
}

// ISO certificates (added 2026-11-16). Facts only from the three company-supplied certificates (PDFs rendered
// to webp): issued by Globus Certifications Private Limited (GCPL), accredited by United Accreditation
// Foundation Inc. (UAF); issued to "Allied Enterprises Trading and Services", Office No. 204, Doha; scope
// "Trading in Computers & their Accessories, Maintenance of software and designing web pages and IT Networking";
// issued 29 Oct 2026, valid period 29 Oct 2026 – 28 Oct 2029, subject to yearly surveillance audits.
// Do not widen the scope wording beyond what the certificates state.
// VERIFY: the next surveillance audit is due on or before 28 Oct 2027. Remove a certificate that lapses.
export type IsoCertificate = {
  standard: string
  title: string
  text: string
  image: PageImage
}

// Card notes (added 2026-11-22 for SEO, on request) describe what each standard covers in general terms;
// they make no claim beyond holding the certificate.
export const aboutIso = {
  heading: 'ISO certified for quality, environment and safety',
  intro:
    'Allied Enterprises has been independently assessed and certified to three international management system standards: ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018.',
  items: [
    {
      standard: 'ISO 9001:2015',
      title: 'Quality Management System',
      text: 'Sets out how we manage quality, from understanding customer requirements to supply, support and continual improvement.',
      image: {
        src: '/images/certifications/iso-9001-2015-certificate-allied-enterprises.webp',
        width: 1200,
        height: 1696,
        alt: 'ISO 9001:2015 Quality Management System certificate of registration issued to Allied Enterprises, Doha, Qatar',
      },
    },
    {
      standard: 'ISO 14001:2015',
      title: 'Environmental Management System',
      text: 'Covers how we identify, control and reduce the environmental impact of our operations and meet applicable requirements.',
      image: {
        src: '/images/certifications/iso-14001-2015-certificate-allied-enterprises.webp',
        width: 1200,
        height: 1696,
        alt: 'ISO 14001:2015 Environmental Management System certificate of registration issued to Allied Enterprises, Doha, Qatar',
      },
    },
    {
      standard: 'ISO 45001:2018',
      title: 'Occupational Health & Safety Management System',
      text: 'Covers how we manage health and safety risks for our staff, including technicians working on customer sites.',
      image: {
        src: '/images/certifications/iso-45001-2018-certificate-allied-enterprises.webp',
        width: 1200,
        height: 1696,
        alt: 'ISO 45001:2018 Occupational Health and Safety Management System certificate of registration issued to Allied Enterprises, Doha, Qatar',
      },
    },
  ] as IsoCertificate[],
  // The Reg. No. lines and the issuer / validity paragraph were removed on request (2026-11-16); those details remain
  // readable on the certificate images. Card notes were added back on 2026-11-22;
  // the certified-scope sentence was removed again on request the same day.
}

export const aboutZkteco = {
  heading: 'Our ZKTeco partnership',
  text: [
    'As the authorized ZKTeco distributor in Qatar, Allied has done more than 10000 installations as of 2026.',
    'The firm believes that the slightest chance of a threat should be dealt away with as soon as possible, without leaving any scope for risk or security breach.',
    'We are consultants who offer expert advice on technical and functional specifications for various constructions. IT documentation has been a challenge for many companies across domains. The use of a pair of well-versed hands to guide in decision making related to system design and implementation would be handy in developing any new project.',
    'Allied Enterprises supplies and installs ZKTeco products across Qatar as a distributor and dealer, mainly ZKTeco time attendance and access control systems.',
  ],
  links: [
    { label: 'ZKTeco products and services in Qatar', href: '/zkteco-qatar/' },
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
  quote:
    'to not wait for a security issue to arise, but to be sufficiently proactive to prevent it.',
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
    'The team at Allied Enterprises brings hands-on experience in time attendance, access control and IT infrastructure, so you have people with the right skills to assist you in all your endeavors. The company employs young and energetic people with expertise in IT, marketing and customer service. All employees are trained and groomed in both domain knowledge and smart skills. Innovativeness and dynamism are traits which are well appreciated and nurtured within the walls of the organization.',
    'Their expertise helps us execute orders precisely, at fair prices and to a high standard of service. The company does not compromise on the value given to customers, and always puts the latest technology to work in their interest.',
  ],
}

export const aboutCulture = {
  heading: 'The culture of exceptional client service',
  text: [
    'The culture developed at Allied Enterprises is of exceptional customer servicing with all respect and focus given to the customer and his requirements. The team has been honed to serve the customer and assist him all throughout the life of the issue at hand. Assistance will be provided 24/7.',
  ],
  location: 'Allied Enterprises, ZKTeco Qatar – Rawadat Al Khail, Doha Qatar',
}
