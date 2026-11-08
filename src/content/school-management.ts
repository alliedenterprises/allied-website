// /school-management-software-qatar/ copy (new page: no old WordPress URL; the menu and the home
// services carousel already link here).
// Source: the vendor's school ERP brochure supplied by the company, tidied for clarity.
// Modules: condensed to exactly 4 short points each and arranged in 5 groups of 4, so the cards form a
// uniform grid (agreed with the company; the full brochure lists more detail per module).
// Deliberately left out: the vendor's company/product name, its timeline, user counts, countries and
// office addresses, and K-NET (a Kuwait-only payment network).
// VERIFY: Allied's role (supply, setup, local support) and the payment options available in Qatar.
import type { FaqItem, IconCard, PageImage } from './types'

export const schoolHero = {
  eyebrow: 'School ERP · Qatar',
  heading: 'School Management Software in Qatar',
  lead: 'An all-in-one school ERP that brings admissions, academics, attendance, exams, fees, finance, transport and parent communication into one system, for schools in Doha and across Qatar.',
  text: [
    'Your office staff work from a web dashboard, while teachers, students and parents use the mobile app on iOS and Android. We can demonstrate the system, set it up for your school and support your team locally.',
  ],
  image: {
    src: '/images/services/school-management-card.webp',
    width: 960,
    height: 600,
    alt: 'School management system dashboard with student attendance, exam results and fee status',
  } as PageImage,
  highlight: { value: '20+', label: 'modules in one system' },
  badge: 'Web portal + iOS & Android app',
  primary: { label: 'Book a Demo', href: '/contact-us/' },
}

export type UserGroup = IconCard

export const schoolUsers = {
  heading: 'One system for your whole school',
  intro: 'Each group gets its own interface, so everyone sees only what they need.',
  items: [
    {
      title: 'Staff',
      text: 'Admissions, fees, finance, HR and payroll, transport and reports from the web dashboard.',
      icon: 'staff',
    },
    {
      title: 'Teachers',
      text: 'Attendance, lesson planning, exams, class notes and homework, and messages with parents.',
      icon: 'teacher',
    },
    {
      title: 'Students',
      text: 'Class notes, homework, assignments, online exams, timetables and circulars in the student portal.',
      icon: 'student',
    },
    {
      title: 'Parents',
      text: 'Attendance alerts, progress reports, fee payments, bus tracking and chat with teachers in the app.',
      icon: 'parent',
    },
  ] as UserGroup[],
}

export type SchoolModule = {
  title: string
  /** Exactly 4 short points (keeps the cards uniform) */
  items: readonly string[]
}

export type ModuleGroup = {
  /** Anchor id for the in-page menu */
  id: string
  title: string
  /** Short label for the in-page menu */
  short: string
  modules: readonly SchoolModule[]
}

export const schoolModules = {
  heading: 'Modules and features',
  intro: '20 modules that cover every part of running a school, from admissions and classes to fees, transport and reports, in one system.',
  groups: [
    {
      id: 'admissions-students',
      title: 'Admissions & students',
      short: 'Admissions',
      modules: [
        {
          title: 'Admission',
          items: [
            'Admission form on your website',
            'Bilingual forms and shortlisting',
            'Pre-admission interviews',
            'Registration and direct enrolment',
          ],
        },
        {
          title: 'Student Management',
          items: [
            'Complete student records',
            'ID cards with QR code and RFID',
            'Activities, exams and transport',
            'Attendance percentage and alerts',
          ],
        },
        {
          title: 'Parent Management',
          items: [
            'Parent–teacher messaging',
            'Progress, attendance and results',
            'Fee dues, fines and online payment',
            'School bus GPS tracking',
          ],
        },
        {
          title: 'ID Cards',
          items: [
            'Instant ID cards on enrolment',
            'Customisable card formats',
            'Direct printing by class or division',
            'Digital QR ID card in the app',
          ],
        },
      ],
    },
    {
      id: 'academics',
      title: 'Academics',
      short: 'Academics',
      modules: [
        {
          title: 'Academic Management',
          items: [
            'Lesson planning and management',
            'Continuous student evaluation',
            'Year-by-year academic records',
            'Report cards, history and alerts',
          ],
        },
        {
          title: 'Exam Management',
          items: [
            'Plan and schedule exams',
            'Question bank and exam papers',
            'Grading and certificates',
            'Class-level result analysis',
          ],
        },
        {
          title: 'Attendance',
          items: [
            'Quick attendance for teachers',
            'Instant alerts to parents',
            'Registers and custom reports',
            'Biometric device integration',
          ],
        },
        {
          title: 'Student Portal (LMS)',
          items: [
            'Class notes and homework',
            'Assignments and online exams',
            'Circulars and chat',
            'Attendance and fee payment',
          ],
        },
      ],
    },
    {
      id: 'student-life',
      title: 'Student life & transport',
      short: 'Student life',
      modules: [
        {
          title: 'House Management',
          items: ['House assignment', 'House activities', 'Winner details', 'House reports'],
        },
        {
          title: 'Behaviour & Counselling',
          items: [
            'Behaviour assessment',
            'Behaviour records by teachers',
            'Emotional monitoring',
            'Counsellor records and reports',
          ],
        },
        {
          title: 'Clinic Management',
          items: [
            'Treatment and medication records',
            'Daily and periodic nurse care',
            'Health records for special care',
            'Sickness history',
          ],
        },
        {
          title: 'Transportation',
          items: [
            'Routes, stops and boarding points',
            'Vehicle and driver details',
            'Transport fee generation',
            'Live bus tracking in the app',
          ],
        },
      ],
    },
    {
      id: 'staff-finance',
      title: 'Staff, fees & finance',
      short: 'Finance',
      modules: [
        {
          title: 'Staff Management',
          items: [
            'HR and payroll integration',
            'Leave tracking and history',
            'Salary and payment history',
            'Timetable and reminders',
          ],
        },
        {
          title: 'Fees Management',
          items: [
            'Term fees, concessions and fines',
            'Customisable fee schedule',
            'Automatic invoices and reminders',
            'Defaulter and collection reports',
          ],
        },
        {
          title: 'Finance',
          items: [
            'Chart of accounts and ledger',
            'P&L, balance sheet and payables',
            'Petty cash and bank reconciliation',
            'Multi-branch and multi-currency',
          ],
        },
        {
          title: 'Asset Management',
          items: [
            'Equipment, land and buildings',
            'Moving and non-moving assets',
            'Asset location and assignment',
            'Replacement and disposal',
          ],
        },
      ],
    },
    {
      id: 'operations-admin',
      title: 'Operations & admin',
      short: 'Operations',
      modules: [
        {
          title: 'Library Management',
          items: [
            'Barcodes on books',
            'Online book requests and receipts',
            'Issue and return register',
            'Library dashboard and dues',
          ],
        },
        {
          title: 'Inventory Management',
          items: [
            'Purchase invoices and entries',
            'Stock and sales management',
            'Class kits managed separately',
            'Student-wise purchase tracking',
          ],
        },
        {
          title: 'Administration',
          items: [
            'Rules, records and reports',
            'Database backup and restore',
            'Data synchronisation',
            'Password and user management',
          ],
        },
        {
          title: 'Reports',
          items: [
            'Reporting dashboards',
            'Academic and financial reports',
            'Excel export for every module',
            'Power BI reports',
          ],
        },
      ],
    },
  ] as ModuleGroup[],
}

export const schoolApp = {
  heading: 'Mobile app for teachers, students and parents',
  intro: 'Available on the App Store and Google Play, the app replaces the paper school diary and keeps everyone up to date.',
  features: [
    'Academic calendar',
    'Circulars',
    'School diary',
    'Class notes & homework',
    'Exam schedule',
    'Assignments',
    'Projects',
    'Chat box',
    'Online exams',
    'Bus tracking',
    'Appointment scheduler',
    'Virtual classroom',
    'Vaccination records',
    'Fee payments',
    'Timetable',
    'Leave requests',
    'Attendance report',
    'Progress report',
    'User profile',
    'Recognitions',
  ],
  highlights: [
    {
      title: 'Mobile fee payment',
      items: [
        'Easy, simple fee payment',
        'Instant alerts, so parents know what to pay and when',
        // VERIFY: available methods depend on the payment gateway set up in Qatar
        'Pay by credit card, debit card, net banking or PayPal',
      ],
    },
    {
      title: 'Mobile notifications',
      items: [
        'Never miss a notification',
        'Unlimited push notifications',
        'Effortless alert handling',
        'Replaces the paper school diary',
      ],
    },
  ],
}

export const schoolBiometric = {
  heading: 'Connect biometric attendance devices',
  text: [
    'The attendance module supports integration with biometric devices, and student ID cards can carry a QR code and RFID.',
    'As the authorized ZKTeco agent in Qatar, we also supply and install biometric attendance terminals. Ask us about connecting them to your school system, so attendance is recorded automatically and parents are alerted.',
  ],
  links: [
    { label: 'Time attendance systems', href: '/time-attendance-system-qatar/' },
    { label: 'ZKTeco products in Qatar', href: '/zkteco-qatar/' },
    { label: 'Access control systems', href: '/access-control-system-qatar/' },
  ],
}

export const schoolFaq = {
  heading: 'School management software: frequently asked questions',
  items: [
    {
      question: 'What does school management software do?',
      answer: [
        'It brings admissions, student records, attendance, exams, fees, finance, HR and payroll, transport, library and reports into one system. Office staff use a web dashboard, and teachers, students and parents use the mobile app.',
      ],
    },
    {
      question: 'Is there a mobile app for parents?',
      answer: ['Yes. The app is available on iOS and Android. Parents can:'],
      list: [
        'See attendance, progress reports and exam schedules',
        'Pay fees and get due-date reminders',
        'Track the school bus with GPS',
        'Chat with teachers and receive circulars',
      ],
    },
    {
      question: 'Can parents pay school fees online?',
      answer: [
        'Yes. Parents get instant alerts showing what to pay and when, and can pay online through the payment gateway, from the app or the portal.',
      ],
    },
    {
      question: 'Does it work with biometric attendance devices?',
      answer: [
        'Yes. The attendance module supports integration with biometric devices. We also supply and install ZKTeco biometric terminals in Qatar and can advise on connecting them to the system.',
      ],
    },
    {
      question: 'Can we manage school buses and routes?',
      answer: [
        'Yes. You can set up routes and bus stops, assign vehicles and stops to students and staff, generate transport fees, and track bus locations. Parents and transport managers can follow the bus in the mobile app.',
      ],
    },
    {
      question: 'What reports are available?',
      answer: [
        'Reporting dashboards, plus attendance, timetable, exam, library, inventory, accounting and financial reports. Reports from every module can be exported to Excel, and Power BI reports are available.',
      ],
    },
  ] as FaqItem[],
}
