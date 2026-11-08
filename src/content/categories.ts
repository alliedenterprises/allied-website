// Menu section hub pages at the old WordPress URLs (/time-management/, /it-infrastructure-qatar/,
// /applications/, /solutions/). The old pages showed a title only; these keep that heading and add an
// intro plus a card for each page in the section, so the URL keeps its equity and is worth indexing.
// Card text is shortened from each page's own meta description: no new claims.
// Only pages that exist are listed.

export type HubCard = {
  title: string
  text: string
  href: string
}

export type CategoryHub = {
  path: string
  /** H1: the same heading the old page showed */
  heading: string
  title: string
  description: string
  intro: string
  items: HubCard[]
}

export const timeManagementHub: CategoryHub = {
  path: '/time-management/',
  heading: 'Time Management',
  title: 'Time Management Solutions in Qatar | Allied Enterprises',
  description:
    'Time attendance, access control, HRMS and payroll solutions in Qatar: ZKTeco biometric devices, attendance software and payroll integration from Allied Enterprises.',
  intro:
    'Time attendance, access control, HR and payroll solutions for businesses in Qatar, from ZKTeco biometric devices to attendance software and payroll integration.',
  items: [
    {
      title: 'Time Attendance System',
      text: 'Fingerprint and face recognition attendance devices from the authorized ZKTeco agent, with cloud software, installation and local support.',
      href: '/time-attendance-system-qatar/',
    },
    {
      title: 'Access Control System',
      text: 'Access control using cards, PIN codes, tags and biometrics, integrated with turnstiles, speed gates and security doors.',
      href: '/access-control-system-qatar/',
    },
    {
      title: 'HRMS & Payroll Management',
      text: 'Employee records, leave, WPS salary payments and attendance from ZKTeco devices via BioTime and Sunbird.',
      href: '/hrms-payroll-management-qatar/',
    },
    {
      title: 'Payroll Integration',
      text: 'Connect BioTime and Sunbird attendance data to your payroll system to reduce errors and calculate overtime, vacation and sick pay.',
      href: '/payroll-integration-qatar/',
    },
  ],
}

export const itInfrastructureHub: CategoryHub = {
  path: '/it-infrastructure-qatar/',
  heading: 'IT Infrastructure',
  title: 'IT Infrastructure Services in Qatar | Allied Enterprises',
  description:
    'Structured cabling, fiber optic testing, PABX, intercom, public address and gate barrier systems in Qatar, supplied and installed by Allied Enterprises in Doha.',
  intro:
    'Structured cabling, fiber optic testing, telephone, intercom, public address and gate barrier systems, supplied, installed and supported by our team in Doha.',
  items: [
    {
      title: 'Structured Cabling Data & Voice',
      text: 'Cat6A F/UTP, STP and fiber optic cabling for data and voice, with network cabinets, installation and testing.',
      href: '/structured-cabling-data-voice-qatar/',
    },
    {
      title: 'Audio & Video Intercom',
      text: 'Wired, wireless, apartment and security intercoms with door release and CCTV integration.',
      href: '/audio-video-intercom-qatar/',
    },
    {
      title: 'Fiber Optic Testing OTDR OLTS',
      text: 'Loss, length and fault testing with OTDR and OLTS, plus test equipment, rental and calibration.',
      href: '/fiber-optic-testing-otdl-olts-qatar/',
    },
    {
      title: 'Public Address System',
      text: 'Announcements, background music and evacuation systems with amplifiers, mixers and ceiling speakers.',
      href: '/public-address-system-qatar/',
    },
    {
      title: 'PABX System',
      text: 'PABX and IP PBX telephone systems with IVR, voicemail to email, call queue and call recording.',
      href: '/pabx-system-qatar/',
    },
    {
      title: 'Gate Barrier System',
      text: 'ZKTeco gate barriers, turnstiles and flap barriers for vehicle and pedestrian access control.',
      href: '/zkteco-qatar-gate-barrier-system/',
    },
  ],
}

export const applicationsHub: CategoryHub = {
  path: '/applications/',
  heading: 'Applications',
  title: 'Business Applications in Qatar | Allied Enterprises',
  description:
    'Business software in Qatar from Allied Enterprises: BioTime and Sunbird attendance software, Wialon GPS tracking, business process management, restaurant POS and more.',
  intro:
    'Business software and platforms we supply and support in Qatar, from attendance and time management software to GPS tracking, process management and restaurant POS.',
  items: [
    {
      title: 'BioTime Time Attendance System',
      text: 'ZKTeco BioTime web-based attendance software with multi-location devices, rosters, overtime, WPS payroll reports and a mobile app.',
      href: '/biotime-time-attendance-system-qatar/',
    },
    {
      title: 'Sunbirdtime Time Management System',
      text: 'Cloud-based time and attendance with real-time data, GPS mobile clocking and payroll integration.',
      href: '/sunbirdtime-time-management-system-qatar/',
    },
    {
      title: 'Digital Minimalist Wallet',
      text: 'FuzeCard: one credit-card-sized device for your magnetic stripe, gift and loyalty cards, with PIN lock and location tracking.',
      href: '/digital-minimalist-wallet/',
    },
    {
      title: 'Business Process Management',
      text: 'Design, model, run and optimise your workflows with Appian, with BPM consultancy and implementation.',
      href: '/business-process-management/',
    },
    {
      title: 'Wialon Platform for GPS Tracking',
      text: 'Real-time fleet and asset tracking with geofences, fuel and driver management, alerts and reports.',
      href: '/wialon-plaftform-for-gps-tracking/',
    },
    {
      title: 'Restaurant Management Software',
      text: 'Restaurant POS for orders, tables, menus, delivery, billing, reservations and reports.',
      href: '/restaurant-management-software-qatar/',
    },
  ],
}

export const solutionsHub: CategoryHub = {
  path: '/solutions/',
  heading: 'Solutions',
  title: 'Business Solutions in Qatar | Allied Enterprises',
  description:
    'Document management, queue management, ERP, business intelligence, GIS and restaurant management solutions in Qatar from Allied Enterprises, Doha.',
  intro:
    'Business solutions for organisations in Qatar, including document management and scanning, queue management, ERP, business intelligence, GIS, asset management and RFID, barcode and NFC tracking.',
  items: [
    {
      title: 'Document Management & Scanning',
      text: 'Document scanning, indexing and digital archiving: paper files turned into searchable records with secure web access.',
      href: '/document-management-scanning-qatar/',
    },
    {
      title: 'Queue Management',
      text: 'Queue management systems, self-service kiosks, customer feedback and digital signage with customisable software.',
      href: '/queue-management-qatar/',
    },
    {
      title: 'Enterprise Resource Planning',
      text: 'ERP software connecting sales, HR, inventory, accounts and POS in one system, with cloud options and custom reports.',
      href: '/enterprise-resource-planning-qatar/',
    },
    {
      title: 'Business Intelligence',
      text: 'Automated reports, KPI dashboards and real-time, actionable data for better decisions.',
      href: '/business-intelligence-qatar/',
    },
    {
      title: 'Geographical Information Systems',
      text: 'Geospatial imaging, utility and land GIS, web GIS, spatial ETL, telecom network planning and road network data.',
      href: '/geographical-information-systems-qatar/',
    },
    {
      title: 'School Management Software',
      text: 'An all-in-one school ERP for admissions, attendance, exams, fees, transport and HR, with an app for teachers, students and parents.',
      href: '/school-management-software-qatar/',
    },
    {
      title: 'Restaurant Management Software',
      text: 'Restaurant POS for orders, tables, menus, delivery, billing, reservations and reports.',
      href: '/restaurant-management-software-qatar/',
    },
    {
      title: 'Asset Management Solution',
      text: 'RFID and barcode asset tagging and tracking, stocktaking, maintenance and helpdesk ticketing, with ERP integration.',
      href: '/asset-management-solution-qatar/',
    },
    {
      title: 'RFID, Barcode & NFC Solutions',
      text: 'RFID tags and readers, barcode scanners and printers, and NFC tags and cards, with help choosing the right type.',
      href: '/rfid-barcode-nfc-solutions-qatar/',
    },
  ],
}
