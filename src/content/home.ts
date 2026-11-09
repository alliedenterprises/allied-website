/**
 * Homepage content (hardcoded, per CLAUDE.md §13).
 * Only use claims that are verified — see notes marked VERIFY.
 */

export type SlideFeature = {
  title: string
  /** Optional icon key (rendered as an inline SVG by the slider) */
  icon?: 'face' | 'shield' | 'angle' | 'speed'
}

export type BannerSlide = {
  /** Small label above the title */
  eyebrow: string
  /** Slide headline — real, crawlable text (rendered as an H2) */
  title: string
  /** Optional coloured highlight shown after the title */
  highlight?: string
  subtitle: string
  /** Optional pill next to the eyebrow, e.g. "New" */
  badge?: string
  features: SlideFeature[]
  /** "icons" = 2×2 icon grid, "list" = check-mark list, "chips" = pill tags */
  featureStyle: 'icons' | 'list' | 'chips'
  cta: { label: string; href: string }
  secondary?: { label: string; href: string }
  /** Transparent product cut-out (no text baked in) */
  image: { src: string; width: number; height: number; alt: string }
  /** Short name used for the dots / screen readers */
  label: string
}

// Order (as requested): attendance terminals → BioTime 9.5 → BioTime Cloud,
// then entrance control and vehicle control. Slide 1's image is preloaded (LCP).
export const bannerSlides: BannerSlide[] = [
  {
    eyebrow: 'Time Attendance & Access Control',
    title: 'Enhancing workplace',
    highlight: 'efficiency',
    subtitle:
      'Advanced ZKTeco terminals with face, palm, fingerprint and card recognition for accurate attendance and secure doors.',
    features: [
      { title: 'Live facial recognition', icon: 'face' },
      { title: 'High-level security', icon: 'shield' },
      { title: 'Wide pose angle (±30°)', icon: 'angle' },
      { title: 'Fast recognition speed', icon: 'speed' },
    ],
    featureStyle: 'icons',
    cta: { label: 'Explore attendance systems', href: '/time-attendance-system-qatar/' },
    secondary: { label: 'Get a quote', href: '/contact-us/' },
    image: {
      src: '/images/banners/zkteco-face-palm-attendance-terminals.webp',
      width: 1600,
      height: 777,
      alt: 'ZKTeco face recognition and palm verification time attendance terminals',
    },
    label: 'Time attendance & access control terminals',
  },
  {
    eyebrow: 'Attendance Software',
    title: 'BioTime',
    highlight: '9.5',
    subtitle: 'Web-based, centralized time and attendance software for one or many locations.',
    features: [
      { title: 'Multi-location centralized attendance' },
      { title: 'Integration with third-party ERP / HR software' },
      { title: 'Flexible shift scheduling, rosters and leave balance' },
      { title: 'Up to 31 types of attendance reports' },
      { title: 'Geofencing punches from the mobile app' },
    ],
    featureStyle: 'list',
    cta: { label: 'Book a demo', href: '/contact-us/' },
    secondary: { label: 'About BioTime', href: '/biotime-time-attendance-system-qatar/' },
    image: {
      src: '/images/banners/zkteco-biotime-9-5-software-screens.webp',
      width: 1300,
      height: 1040,
      alt: 'ZKTeco BioTime 9.5 attendance software on a desktop monitor and mobile app',
    },
    label: 'BioTime 9.5 attendance software',
  },
  {
    eyebrow: 'Cloud Attendance',
    title: 'BioTime',
    highlight: 'Cloud',
    subtitle: 'Powerful cloud-based time attendance solution, powered by AWS. Manage attendance from any device.',
    // VERIFY: the original banner advertised a 90-day free trial with no credit card.
    // Confirm the offer is available through Allied before showing this badge.
    badge: '90-day free trial',
    features: [
      { title: 'Web, tablet & mobile access' },
      { title: 'Powered by AWS' },
      { title: 'No credit card required to start' },
    ],
    featureStyle: 'chips',
    cta: { label: 'Start your free trial', href: '/contact-us/' },
    secondary: { label: 'About BioTime', href: '/biotime-time-attendance-system-qatar/' },
    image: {
      src: '/images/banners/zkteco-biotime-cloud-devices.webp',
      width: 1600,
      height: 776,
      alt: 'BioTime Cloud attendance dashboard on a computer, laptop, tablet and phone',
    },
    label: 'BioTime Cloud',
  },
  {
    eyebrow: 'Entrance Control',
    title: 'Saturn-S2000',
    highlight: 'Series',
    badge: 'New',
    subtitle: 'Swing barrier entrance control for lobbies, offices and secure areas.',
    features: [
      { title: 'Easy installation and maintenance' },
      { title: 'Acrylic or stainless-steel swing barriers' },
      { title: 'RFID, fingerprint, QR code and more' },
      { title: 'IP54 protection from water and dust' },
    ],
    featureStyle: 'list',
    cta: { label: 'View entrance control', href: '/zkteco-qatar-gate-barrier-system/' },
    secondary: { label: 'Get a quote', href: '/contact-us/' },
    image: {
      src: '/images/banners/zkteco-saturn-s2000-swing-barriers.webp',
      width: 1500,
      height: 890,
      alt: 'ZKTeco Saturn-S2000 series swing barrier gates',
    },
    label: 'Saturn-S2000 entrance control',
  },
  {
    eyebrow: 'Vehicle Control',
    title: 'Secured & allocated',
    highlight: 'parking',
    subtitle: 'ZKTeco vehicle control products for car parks, compounds and gated entrances.',
    features: [
      { title: 'Parking barrier' },
      { title: 'LPR camera' },
      { title: 'UHF reader' },
      { title: 'Parking ticket machine' },
      { title: 'Parking lock' },
    ],
    featureStyle: 'chips',
    cta: { label: 'View vehicle control', href: '/zkteco-qatar-gate-barrier-system/' },
    secondary: { label: 'Get a quote', href: '/contact-us/' },
    image: {
      src: '/images/banners/zkteco-vehicle-parking-products.webp',
      width: 2000,
      height: 551,
      alt: 'ZKTeco parking barrier, LPR camera, UHF reader, parking ticket machine and parking lock',
    },
    label: 'Vehicle & parking control',
  },
]

export type WhyPoint = {
  title: string
  text: string
  href: string
  linkLabel: string
}

export type Highlight = {
  title: string
  text: string
  icon: 'award' | 'support' | 'team' | 'handshake'
}

export const whyAllied = {
  // Four short value points shown in a strip above the H1.
  // "certified professionals" was softened to "experienced": no staff certification is verified.
  highlights: [
    { title: 'Trusted Partner', text: 'Proven experience & reliable solutions', icon: 'award' },
    { title: 'End-to-End Support', text: 'Supply, installation & maintenance', icon: 'support' },
    { title: 'Expert Team', text: 'Qualified, experienced professionals', icon: 'team' },
    { title: 'Customer Focused', text: 'Solutions tailored to your needs', icon: 'handshake' },
  ] as Highlight[],
  // The page's single H1 — real text, not part of an image. CLAUDE.md §7 draft H1 (SEO audit 2026-11-09:
  // the previous H1/intro used unverifiable "leading" / "best price" claims and repeated "in Qatar").
  heading: 'ZKTeco Supplier in Qatar for Biometric Attendance & Access Control',
  intro: [
    // Facts only: distributor status per the ZKTeco 2026 certificate below; 3000+ installations as of 2026
    // and two Doha offices as stated elsewhere on the site.
    'Allied Enterprises is the authorized ZKTeco distributor in Qatar. We supply, install and support biometric time attendance machines, attendance software and access control systems for businesses across Doha and the rest of the country.',
    'Choose from face, palm, fingerprint and card terminals, with BioTime software to turn every punch into attendance, overtime and payroll reports. With more than 3000 installations as of 2026 and two offices in Doha, our team handles everything from the site survey to after-sales support.',
    'We also provide access control, GPS and vehicle tracking systems, so attendance, security and vehicles are handled by one partner in Doha.',
  ],
  // contextual link to the dedicated ZKTeco page (SEO audit: it had only one link from page content)
  moreLink: { label: 'See our ZKTeco products and services in Qatar', href: '/zkteco-qatar/' },
  // Snapshot of the Google Business Profile — update periodically.
  googleRating: {
    rating: '4.9',
    reviews: 236,
    asOf: 'October 2026',
  },
  // VERIFY: company-supplied image. Remove it if the ISO 9001:2015 certificate lapses
  // or the free trial offer ends.
  badge: {
    src: '/images/badges/iso-9001-2015-free-trial-support.webp',
    width: 146,
    height: 199,
    alt: 'ISO 9001:2015 badge and Free Trial With Support badge',
  },
  // ZKTeco Co., Ltd. certificate (company-supplied PDF, rendered to webp).
  // VERIFY: valid Jan 1 – Dec 31, 2026 only. Replace with the renewed certificate (and update
  // the year in `caption`/`alt`) in January 2027, or remove it if it is not renewed.
  certificate: {
    src: '/images/certifications/zkteco-authorized-distributor-qatar-2026.webp',
    width: 1360,
    height: 1785,
    alt: 'ZKTeco 2026 Authorized Distributor certificate issued to Allied Enterprises for the territory of Qatar',
    // two lines under the plaque
    caption: ['Authorized ZKTeco Distributor', 'Qatar · 2026'],
  },
  cta: {
    primary: { label: 'Request a Quote', href: '/contact-us/' },
  },
} as const

export type Partner = {
  name: string
  /** Transparent logo; width/height are the file's pixel size (used for the aspect ratio) */
  logo: { src: string; width: number; height: number }
  /** Optional lighter version for dark mode (only for logos with black / navy parts) */
  darkSrc?: string
}

// Partner brands shown in the logo strip. Only list brands the company really works with.
export const partnersSection = { heading: 'Strategic Partners' }

export const partners: Partner[] = [
  {
    name: 'ZKTeco',
    logo: { src: '/images/brand/zkteco.svg', width: 2729, height: 631 },
    darkSrc: '/images/brand/zkteco-dark.svg',
  },
  {
    name: 'Armatura',
    logo: { src: '/images/partners/armatura.webp', width: 1100, height: 220 },
    darkSrc: '/images/partners/armatura-dark.webp',
  },
  {
    name: 'Hashmato',
    logo: { src: '/images/partners/hashmato.webp', width: 1678, height: 220 },
  },
  {
    name: 'Wialon',
    logo: { src: '/images/partners/wialon.webp', width: 790, height: 220 },
    darkSrc: '/images/partners/wialon-dark.webp',
  },
  {
    name: 'Newland',
    logo: { src: '/images/partners/newland.webp', width: 669, height: 220 },
    darkSrc: '/images/partners/newland-dark.webp',
  },
  {
    name: 'Teltonika',
    logo: { src: '/images/partners/teltonika.webp', width: 1120, height: 220 },
    darkSrc: '/images/partners/teltonika-dark.webp',
  },
  {
    name: 'Zebra',
    logo: { src: '/images/partners/zebra.webp', width: 653, height: 220 },
    darkSrc: '/images/partners/zebra-dark.webp',
  },
  {
    name: 'Honeywell',
    logo: { src: '/images/partners/honeywell.webp', width: 600, height: 120 },
  },
  {
    name: 'ZK Digimax',
    logo: { src: '/images/partners/zk-digimax.webp', width: 1400, height: 206 },
  },
  {
    name: 'Zyxel',
    logo: { src: '/images/partners/zyxel.webp', width: 606, height: 220 },
    darkSrc: '/images/partners/zyxel-dark.webp',
  },
]

export type CompanyStat = {
  /** Shown large — keep it as plain text (no count-up) so crawlers see the real figure */
  value: string
  label: string
}

// VERIFY: figures supplied by the company — keep them accurate and update as they grow.
export const companyStats: CompanyStat[] = [
  // Updated 2026-11-05 at the company's request. "3000+ Projects Delivered" matches the
  // "3000+ installations as of 2026" used across the site.
  { value: '10+', label: 'Years in Business' },
  { value: '20+', label: 'Service Lines' },
  { value: '10+', label: 'Countries Served' },
  { value: '3000+', label: 'Projects Delivered' },
]

export type Service = {
  /** Small coloured label above the title, e.g. "Time attendance · Software" */
  eyebrow: string
  title: string
  description: string
  href: string
  linkLabel: string
  /** Image shown above the text (16:10); the featured card uses a portrait image beside the text */
  image: { src: string; width: number; height: number; alt: string }
  /** Lead card: twice as wide in the desktop grid, image beside the text */
  featured?: boolean
}

export const servicesSection = { heading: 'Activities we provide' }

export type MapLocation = {
  /** Country code shown small in the label */
  code: string
  name: string
  /** Position on the map image, in its own 1200×658 units */
  x: number
  y: number
  /** Which side of the point the label sits, so it stays clear of the routes */
  placement: 'top' | 'bottom' | 'left' | 'right'
}

// x/y come from real coordinates: Doha, Riyadh, Dubai and Kuwait City.
export const reachSection = {
  eyebrow: 'Our reach',
  heading: 'Based in Doha, serving the Gulf.',
  // VERIFY: countries supplied by the company; must agree with "Countries Served" in companyStats.
  // "including": the map shows the main markets only; companyStats says 10+ countries served.
  text: 'Our offices are in Doha, Qatar, and we serve customers across the Gulf and beyond, including Saudi Arabia, the UAE and Kuwait.',
  map: {
    src: '/images/map/gulf-region-map.svg',
    darkSrc: '/images/map/gulf-region-map-dark.svg',
    width: 1200,
    height: 658,
    alt: 'Map of the Gulf region with Qatar, Saudi Arabia, the UAE and Kuwait highlighted and routes from Qatar to each country',
  },
  hub: { code: 'QA', name: 'Qatar', x: 615, y: 306, placement: 'bottom' } as MapLocation,
  destinations: [
    { code: 'SA', name: 'Saudi Arabia', x: 478, y: 325, placement: 'left' },
    { code: 'AE', name: 'UAE', x: 722, y: 309, placement: 'right' },
    { code: 'KW', name: 'Kuwait', x: 514, y: 177, placement: 'top' },
  ] as MapLocation[],
}

// How we work, condensed from the company's "Why Allied Enterprises" copy. Keep it different
// from the intro at the top of the page (whyAllied). Links support internal linking.
export const whyChooseAllied = {
  eyebrow: 'Why Allied',
  heading: 'Your time attendance system in Qatar, from first visit to first payroll.',
  intro:
    'Our stock and support staff are here in Qatar, so help is close when you need it. This is how we work with you.',
  steps: [
    {
      title: 'Consultation',
      text: 'We look at how your teams work and what you need to record, from hours and absence to flexitime.',
      href: '/time-attendance-system-qatar/',
      linkLabel: 'Time attendance systems',
    },
    {
      title: 'Quotation',
      text: 'You get a no-obligation quotation, with a site visit if required.',
      href: '/contact-us/',
      linkLabel: 'Request a quotation',
    },
    {
      title: 'Installation and demo',
      text: 'We install the system and demonstrate the attendance software to your team.',
      href: '/sunbirdtime-time-management-system-qatar/',
      linkLabel: 'Sunbird Time & Attendance',
    },
    {
      title: 'Payroll',
      text: 'Attendance data transfers automatically to your chosen payroll software.',
      href: '/payroll-integration-qatar/',
      linkLabel: 'Payroll integration',
    },
  ] as WhyPoint[],
}

export type Client = {
  name: string
  /** All files share a 400×200 white canvas, scaled to the same visual size */
  logo: string
}

export const clientsSection = {
  heading: 'Trusted by leading organizations',
  intro: 'A selection of the organizations we have worked with in Qatar.',
}

// VERIFY: logos supplied by the company; confirm each client is happy to be listed.
export const clients: Client[] = [
  { name: 'Ministry of Labour', logo: '/images/clients/ministry-of-labour.webp' },
  { name: 'Qatar Financial Centre', logo: '/images/clients/qatar-financial-centre.webp' },
  { name: 'Mannai Corporation', logo: '/images/clients/mannai-corporation.webp' },
  { name: 'Al Shaqab', logo: '/images/clients/al-shaqab.webp' },
  { name: 'Altrad', logo: '/images/clients/altrad.webp' },
  { name: 'Zad Holding Company', logo: '/images/clients/zad-holding.webp' },
  { name: "Papa John's", logo: '/images/clients/papa-johns.webp' },
  { name: 'Gulf Asia', logo: '/images/clients/gulf-asia.webp' },
  { name: 'IMAR', logo: '/images/clients/imar.webp' },
  { name: 'Rotary', logo: '/images/clients/rotary.webp' },
]

export type CustomerReview = {
  name: string
  /** Shown under the name: the reviewer's company or Google badge, if any */
  detail?: string
  text: string
}

export const reviewsSection = {
  heading: 'What our customers say',
  linkLabel: 'Read all reviews on Google',
}

// Real Google reviews of the company's own listing, copied word for word on 2026-11-02.
// A reviewer's sign-off ("From <company>") is shown under their name instead of in the text.
// Add more the same way; never edit the wording.
// No Review structured data: Google ignores self-published reviews of a business.
// Order chosen so the wall's columns end at similar heights (desktop and tablet).
export const reviews: CustomerReview[] = [
  {
    name: 'Dave Jacob',
    text: 'We have been their client for years now, and We like their services, especially their support. They have been very helpful in every way every time we need them. I hope they continue with the high end support we are getting from them, leading on weather hardware or even custom software when it comes to the attendance system. Their system truly helps us progress in the business industry.',
  },
  {
    name: 'Arshad Poyil Purath',
    text: 'Allied has Excellent service, product quality are good. Happy with their engineers.',
  },
  {
    name: 'Muhammed Samil',
    text: 'Great experience with the installation team! Very professional and efficient. I’m truly happy with the service provided. Thank you, Allied!',
  },
  {
    name: 'Hrrozana',
    text: 'provides excellent service and always responds on time. The team is professional, supportive, and efficient. Highly recommended for reliable service and quick communication.',
  },
  {
    name: 'Shahir KT',
    detail: 'Five Designer Technologies',
    text: 'I’m thoroughly impressed with the solutions provided by Allied Enterprises. Their expertise in telecommunications and GIS is remarkable. They offer advanced systems that are easy to integrate and manage. The team is friendly, knowledgeable, and always willing to go the extra mile. Fantastic experience overall!',
  },
  {
    name: 'Nanikaji Kshetri',
    detail: 'Al Suwaidi Technical Centre',
    text: 'Excellent work. thanks for your fast service and supporting.',
  },
  {
    name: 'John Paul',
    detail: 'First Step Family Sports Center',
    text: 'Excellent service!\nThe Device materials are good quality!\nGood customer service!\nMaintenance and technical team always available for incause of any trouble shoots!\nThe Management team is friendly with us!\nThanks for your service!',
  },
]

export const ctaBanner = {
  eyebrow: 'Supply · Installation · Support',
  heading: 'Put the right system to work.',
  text: 'Start with attendance, access control or IT infrastructure. Our Doha team will help you choose the right setup and plan the installation.',
  cta: { label: 'Talk to our team', href: '/contact-us/' },
} as const

// Order as requested; all seven show at once in a grid.
export const services: Service[] = [
  {
    eyebrow: 'Time attendance · Software',
    title: 'BioTime Time Attendance System',
    description:
      'Web-based ZKTeco BioTime software for shifts, rosters, leave and up to 31 attendance reports across every branch.',
    href: '/biotime-time-attendance-system-qatar/',
    linkLabel: 'Learn more',
    featured: true,
    image: {
      src: '/images/services/biotime-time-attendance-card.webp',
      width: 960,
      height: 1200,
      alt: 'ZKTeco BioTime 9.5 time attendance software on a desktop monitor and mobile app',
    },
  },
  {
    eyebrow: 'Security · Access control',
    title: 'Access Control Systems',
    description:
      'Face, fingerprint and card readers that secure doors, lobbies and restricted areas, with a record of every entry.',
    href: '/access-control-system-qatar/',
    linkLabel: 'Learn more',
    image: {
      src: '/images/services/access-control-card.webp',
      width: 554,
      height: 346,
      alt: 'Employee tapping an access card on a ZKTeco door access control terminal',
    },
  },
  {
    eyebrow: 'Education · Software',
    title: 'School Management System',
    description:
      'Students, classes, exams, fees, attendance and notices for parents, managed together in one system.',
    href: '/school-management-software-qatar/',
    linkLabel: 'Learn more',
    image: {
      src: '/images/services/school-management-card.webp',
      width: 960,
      height: 600,
      alt: 'School management system dashboard with student attendance, exam results and fee status',
    },
  },
  {
    eyebrow: 'Hospitality · POS',
    title: 'Restaurant Management Software',
    description:
      'Touchscreen POS for orders, billing, menus and kitchen tickets, made for busy restaurants and cafés.',
    href: '/restaurant-management-software-qatar/',
    linkLabel: 'Learn more',
    image: {
      src: '/images/services/restaurant-pos-card.webp',
      width: 960,
      height: 600,
      alt: 'Restaurant staff taking an order on a touchscreen POS system',
    },
  },
  {
    eyebrow: 'Assets · Tracking',
    title: 'Asset Management',
    description:
      'Track equipment, devices, software and licences across your company from one dashboard, on desktop or mobile.',
    href: '/asset-management-solution-qatar/',
    linkLabel: 'Learn more',
    image: {
      src: '/images/services/asset-management-card.webp',
      width: 960,
      height: 600,
      alt: 'Asset management register with a QR asset tag, device categories and audit status',
    },
  },
  {
    eyebrow: 'Identification · Tracking',
    title: 'RFID, Barcode & NFC Solutions',
    description:
      'Tags, labels, readers and scanners for tracking stock, assets and people quickly and accurately.',
    href: '/rfid-barcode-nfc-solutions-qatar/',
    linkLabel: 'Learn more',
    image: {
      src: '/images/services/rfid-barcode-nfc-card.webp',
      width: 960,
      height: 600,
      alt: 'RFID tag, NFC phone verification and a barcode label being scanned',
    },
  },
  {
    eyebrow: 'Networking · Cabling',
    title: 'Structured Cabling (Data & Voice)',
    description:
      'Neatly routed, labelled and tested copper and fibre cabling for offices, server rooms and whole buildings.',
    href: '/structured-cabling-data-voice-qatar/',
    linkLabel: 'Learn more',
    image: {
      src: '/images/services/structured-cabling-card.webp',
      width: 706,
      height: 441,
      alt: 'Network rack with colour-coded structured cabling and patch panels',
    },
  },
]
