export type NavLink = {
  label: string
  href: string
}

export type NavItem = NavLink & {
  children?: NavLink[]
}

// Slugs match the old WordPress URLs so existing SEO is kept.
export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us/' },
  { label: 'ZKTeco', href: '/zkteco-qatar/' },
  {
    label: 'Time Management',
    href: '/time-management/',
    children: [
      { label: 'Time Attendance System', href: '/time-attendance-system-qatar/' },
      { label: 'Access Control System', href: '/access-control-system-qatar/' },
      { label: 'HRMS & Payroll Management', href: '/hrms-payroll-management-qatar/' },
      { label: 'Payroll Integration', href: '/payroll-integration-qatar/' },
    ],
  },
  {
    label: 'IT Infrastructure',
    href: '/it-infrastructure-qatar/',
    children: [
      { label: 'Structured Cabling Data & Voice', href: '/structured-cabling-data-voice-qatar/' },
      { label: 'Audio & Video Intercom', href: '/audio-video-intercom-qatar/' },
      { label: 'Fiber Optic Testing OTDR OLTS', href: '/fiber-optic-testing-otdl-olts-qatar/' },
      { label: 'Public Address System', href: '/public-address-system-qatar/' },
      { label: 'PABX System', href: '/pabx-system-qatar/' },
      { label: 'Gate Barrier System', href: '/zkteco-qatar-gate-barrier-system/' },
    ],
  },
  {
    label: 'Applications',
    href: '/applications/',
    children: [
      { label: 'BioTime Time Attendance System', href: '/biotime-time-attendance-system-qatar/' },
      { label: 'Sunbirdtime Time Management System', href: '/sunbirdtime-time-management-system-qatar/' },
      { label: 'Digital Minimalist Wallet', href: '/digital-minimalist-wallet/' },
      { label: 'Business Process Management', href: '/business-process-management/' },
      { label: 'Wialon Platform for GPS Tracking', href: '/wialon-plaftform-for-gps-tracking/' },
      { label: 'Restaurant Management Software', href: '/restaurant-management-software-qatar/' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions/',
    children: [
      { label: 'Document Management & Scanning', href: '/document-management-scanning-qatar/' },
      { label: 'Queue Management', href: '/queue-management-qatar/' },
      { label: 'Enterprise Resource Planning', href: '/enterprise-resource-planning-qatar/' },
      { label: 'Business Intelligence', href: '/business-intelligence-qatar/' },
      { label: 'Geographical Information Systems', href: '/geographical-information-systems-qatar/' },
      { label: 'School Management Software', href: '/school-management-software-qatar/' },
      { label: 'Restaurant Management Software', href: '/restaurant-management-software-qatar/' },
      { label: 'Asset Management Solution', href: '/asset-management-solution-qatar/' },
      { label: 'RFID, Barcode & NFC Solutions', href: '/rfid-barcode-nfc-solutions-qatar/' },
    ],
  },
]

export const headerCta: NavLink = { label: 'Contact Us', href: '/contact-us/' }

