// /asset-management-solution-qatar/ copy (new page: no old WordPress URL; the menu and the home
// services carousel already link here).
// Source: the feature outline of an asset management + RFID + ticketing RFQ the company received,
// rewritten as original copy. Deliberately left out: the customer's name, its user/technician/site
// counts, tag and handheld quantities, and the photos of its existing Wi-Fi/RFID hardware.
// Keyword focus (not volume-verified): primary "asset management system Qatar"; supporting
// "RFID asset tracking", "asset tagging", "fixed asset management", "asset stocktaking",
// "maintenance ticketing / helpdesk". RFID hardware (tags, readers, scanners) and tag types belong to
// /rfid-barcode-nfc-solutions-qatar/, which this page links to, so the two don't compete.
// Modules: exactly 4 short points each, 5 groups of 4, so ModuleExplorer's cards form a uniform grid.
// VERIFY with the company before launch: the software product proposed and that it covers each
// listed feature; on-premise hosting; Microsoft Dynamics 365 and Microsoft Entra ID (Azure AD)
// integration; iOS/Android app availability; and that Allied runs site surveys, tagging,
// installation, data migration and training itself.
import type { FaqItem, PageImage } from './types'
import type { ModuleGroup, UserGroup } from './school-management'
import type { ProcessStep } from './zkteco'

export const assetHero = {
  eyebrow: 'Asset Management · RFID · Ticketing',
  heading: 'Asset Management System with RFID Tracking in Qatar',
  lead: 'Know what you own, where it is and who has it. One system for your asset register, RFID and barcode tagging, stocktaking, maintenance and helpdesk tickets, for organisations in Doha and across Qatar.',
  text: [
    'Assets are tagged with active or passive RFID, QR code or barcode labels, then tracked through their whole lifecycle, from purchase and assignment to repair, transfer and disposal. We survey your sites, supply the tags, readers and handhelds, set up the software and support your team locally.',
  ],
  image: {
    src: '/images/services/asset-management-card.webp',
    width: 960,
    height: 600,
    alt: 'Asset register dashboard showing asset counts by category, a QR asset tag and a completed audit',
  } as PageImage,
  highlight: { value: '3-in-1', label: 'assets, RFID tracking & ticketing' },
  badge: 'Web portal + mobile app + RFID handhelds',
  primary: { label: 'Request a Demo', href: '/contact-us/' },
}

export const assetUsers = {
  heading: 'Built for everyone who handles your assets',
  intro: 'Each role sees only the menus and data its permissions allow.',
  items: [
    {
      title: 'Asset managers',
      text: 'Register, assign, transfer and dispose of assets, approve requests and plan stocktaking across sites.',
      icon: 'staff',
    },
    {
      title: 'Technicians',
      text: 'Scan tags with RFID handhelds, run inspections and stocktakes, and work through repair tickets, even offline.',
      icon: 'tools',
    },
    {
      title: 'Employees',
      text: 'See the assets assigned to them, acknowledge receipt, raise tickets and request returns or replacements.',
      icon: 'parent',
    },
    {
      title: 'Management & finance',
      text: 'Dashboards, audit trails and utilisation reports, with asset data shared with your ERP for accounting.',
      icon: 'teacher',
    },
  ] as UserGroup[],
}

export const assetModules = {
  heading: 'Asset management features',
  intro: '20 modules covering the full asset lifecycle, RFID tracking, stocktaking, maintenance and helpdesk ticketing, in one system.',
  groups: [
    {
      id: 'asset-lifecycle',
      title: 'Asset register & lifecycle',
      short: 'Lifecycle',
      modules: [
        {
          title: 'Asset Register',
          items: [
            'Asset cards with custom fields',
            'Bulk import from Excel',
            'Categories, models and serial numbers',
            'RFID, QR code and barcode labels',
          ],
        },
        {
          title: 'Status & Lifecycle',
          items: [
            'Procurement to retirement',
            'In use, in stock, borrowed or in repair',
            'Custom status values',
            'Complete history for every asset',
          ],
        },
        {
          title: 'Assignment & Transfers',
          items: [
            'Assign to people, departments or locations',
            'Borrowing with expected return dates',
            'Overdue return reminders',
            'Hand-overs confirmed by tag scan',
          ],
        },
        {
          title: 'Disposal',
          items: [
            'Scrap, transfer or report as lost',
            'Single or batch disposal',
            'Approval before disposal',
            'Disposal reports by type and date',
          ],
        },
      ],
    },
    {
      id: 'rfid-tracking',
      title: 'RFID asset tracking & security',
      short: 'RFID tracking',
      modules: [
        {
          title: 'Active RFID Tracking',
          items: [
            'Battery-powered, long-range tags',
            'Zone-based asset location',
            'Real-time presence detection',
            'Low-battery alerts',
          ],
        },
        {
          title: 'Passive RFID & Gate Readers',
          items: [
            'Low-cost tags with no battery',
            'Readers at entrances and exits',
            'Automatic in and out records',
            'Last-seen location for each asset',
          ],
        },
        {
          title: 'Movement Alerts',
          items: [
            'Restricted zones for key assets',
            'Alarm on unauthorised exit',
            'Tag removal (tamper) alerts',
            'Missing and unscanned asset alerts',
          ],
        },
        {
          title: 'RFID Handhelds',
          items: [
            'Android handheld RFID readers',
            'Read many tags in one sweep',
            'Offline scanning with auto-sync',
            'Bluetooth, USB and Wi-Fi',
          ],
        },
      ],
    },
    {
      id: 'stocktaking-maintenance',
      title: 'Stocktaking & maintenance',
      short: 'Maintenance',
      modules: [
        {
          title: 'Stocktaking',
          items: [
            'Full, random and self-stocktaking',
            'Automatic counts from RFID reads',
            'Variance and missing-asset reports',
            'Export and print the results',
          ],
        },
        {
          title: 'Inspections',
          items: [
            'Inspection routes and schedules',
            'Tasks assigned to inspectors',
            'On-time completion statistics',
            'Faults raised during inspection',
          ],
        },
        {
          title: 'Maintenance & Repair',
          items: [
            'Preventive and corrective work',
            'Planned, periodic maintenance',
            'Overdue maintenance reminders',
            'Service history linked to the tag',
          ],
        },
        {
          title: 'Warranty & Contracts',
          items: [
            'Warranty expiry tracking',
            'Service contracts and vendors',
            'Renewal reminders',
            'Manuals and documents attached',
          ],
        },
      ],
    },
    {
      id: 'ticketing',
      title: 'Helpdesk & maintenance ticketing',
      short: 'Ticketing',
      modules: [
        {
          title: 'Ticket Creation',
          items: [
            'Web portal, mobile app and email',
            'Scan an asset tag to open a ticket',
            'Photos, documents and notes',
            'Incident, repair, loss and request types',
          ],
        },
        {
          title: 'Workflow & Approvals',
          items: [
            'Configurable ticket workflows',
            'Multi-level approvals',
            'Auto-routing to IT, maintenance or vendor',
            'Open, in progress, resolved, closed',
          ],
        },
        {
          title: 'SLA & Escalation',
          items: [
            'SLAs by asset type and priority',
            'Low, medium, high and critical',
            'Alerts before an SLA is breached',
            'Automatic escalation rules',
          ],
        },
        {
          title: 'Ticket Tracking',
          items: [
            'Status visible to the requester',
            'Two-way comments in each ticket',
            'Email and in-app notifications',
            'Reopen if the problem returns',
          ],
        },
      ],
    },
    {
      id: 'security-integration',
      title: 'Security, reports & integration',
      short: 'Integration',
      modules: [
        {
          title: 'Users & Roles',
          items: [
            'Role-based menus and permissions',
            'Requester, approver and resolver roles',
            'Multi-site organisation structure',
            'Single sign-on with Microsoft Entra ID',
          ],
        },
        {
          title: 'Audit Trail',
          items: [
            'Every change logged by user and time',
            'Scan logs with time and location',
            'Read-only history for users',
            'Evidence for internal and external audits',
          ],
        },
        {
          title: 'Reports & Dashboards',
          items: [
            'Asset utilisation and movement history',
            'Stocktaking accuracy reports',
            'SLA compliance and resolution times',
            'Technician and team performance',
          ],
        },
        {
          title: 'Integration',
          items: [
            'Microsoft Dynamics 365 ERP via API',
            'Excel import and export',
            'APIs for readers and handheld apps',
            'Data migration from your old system',
          ],
        },
      ],
    },
  ] as ModuleGroup[],
}

export const assetRfid = {
  heading: 'Active vs passive RFID: which tags do your assets need?',
  text: [
    'Most organisations use both. The right mix depends on what an asset is worth, how often it moves and how quickly you need to know when it does. We recommend the mix during the site survey.',
    { subheading: 'Active RFID tags' },
    {
      list: [
        'Battery-powered, with a battery life of several years',
        'Send their ID at set intervals, so assets are located by zone in real time',
        'Raise alarms when a key asset leaves its zone or a tag is removed',
        'Best for valuable or critical equipment',
      ],
    },
    { subheading: 'Passive RFID tags' },
    {
      list: [
        'No battery, low cost per tag and long-lasting',
        'Read by handhelds and by readers at entrances and exits',
        'Record each asset’s last-seen location and every in and out movement',
        'Best for high-volume assets such as furniture, IT equipment and tools',
      ],
    },
    'QR code and barcode labels work alongside RFID, so lower-value items can be tracked with a phone camera. Tags follow common standards such as EPC Gen2 (UHF RFID).',
  ],
  image: {
    src: '/images/services/rfid-barcode-nfc-card.webp',
    width: 960,
    height: 600,
    alt: 'RFID tag, QR code and barcode label being verified on a handheld device',
  } as PageImage,
}

export const assetApp = {
  heading: 'Self-service portal and mobile app',
  intro: 'Employees manage their own assets and requests from the web portal or the mobile app, which cuts the emails and phone calls to your IT and facilities teams.',
  features: [
    'My assigned assets',
    'Asset details',
    'Raise a ticket',
    'Report damage',
    'Repair requests',
    'Replacement or upgrade',
    'Return an asset',
    'Transfer requests',
    'Request status',
    'Digital acknowledgement',
    'Usage policies',
    'Movement history',
    'Maintenance schedule',
    'Warranty dates',
    'Manuals & documents',
    'Notifications',
    'Search & filters',
    'Activity history',
  ],
  highlights: [
    {
      title: 'Digital asset acknowledgement',
      items: [
        'Employees confirm receipt of each asset',
        'Accept usage policies and terms in the app',
        'Every acknowledgement kept on record',
      ],
    },
    {
      title: 'For technicians on the move',
      items: [
        'Scan a tag to see the asset and open a ticket',
        'Work offline and sync when back on the network',
        'Maintenance and SLA alerts on the handheld',
      ],
    },
  ],
}

export const assetProcess = {
  heading: 'How we implement your asset management system',
  intro: 'From the first site visit to go-live, our team in Doha plans, installs and supports the full system.',
  steps: [
    {
      title: 'Site survey',
      text: 'We visit your sites, count the entrances and exits that need gate readers, and check your existing Wi-Fi and RFID infrastructure for compatibility.',
      icon: 'brief',
    },
    {
      title: 'Proposal and quotation',
      text: 'We recommend the mix of active and passive tags, readers and handhelds, and send a detailed quotation.',
      icon: 'quote',
    },
    {
      title: 'Tagging and installation',
      text: 'We install the readers, tag your assets, set up the software, connect your ERP and sign-on, and migrate your existing asset and ticket data.',
      icon: 'install',
    },
    {
      title: 'Training and support',
      text: 'We train your administrators, technicians and users, then support the system locally after go-live.',
      icon: 'support',
    },
  ] as ProcessStep[],
  contact: {
    heading: 'Planning an asset tagging project?',
    text: 'Call, WhatsApp or email our team in Doha to book a demo or a site survey.',
    primary: { label: 'Book a Site Survey', href: '/contact-us/' },
  },
}

export const assetRelated = {
  heading: 'Part of a complete security and IT setup',
  text: [
    'Gate readers for assets are often installed at the same entrances as staff access control, turnstiles and barriers, and every reader needs reliable network cabling. We supply and install all of these, so one team handles the whole project.',
    'Need to track vehicles or mobile equipment outside your buildings? GPS tracking covers assets on the road.',
  ],
  links: [
    { label: 'RFID tags, readers and barcode scanners', href: '/rfid-barcode-nfc-solutions-qatar/' },
    { label: 'Access control systems', href: '/access-control-system-qatar/' },
    { label: 'Turnstiles and gate barriers', href: '/zkteco-qatar-gate-barrier-system/' },
    { label: 'Structured cabling', href: '/structured-cabling-data-voice-qatar/' },
    { label: 'GPS tracking with Wialon', href: '/wialon-plaftform-for-gps-tracking/' },
    { label: 'ERP software', href: '/enterprise-resource-planning-qatar/' },
  ],
}

export const assetFaq = {
  heading: 'Asset management system: frequently asked questions',
  items: [
    {
      question: 'What is an asset management system?',
      answer: [
        'It is software that keeps a single register of everything your organisation owns, such as IT equipment, furniture, tools, vehicles and software licences, and tracks each asset through its lifecycle: who has it, where it is, its condition, maintenance, warranty and eventual disposal.',
      ],
    },
    {
      question: 'How does RFID asset tracking work?',
      answer: [
        'Each asset carries an RFID tag with a unique ID linked to its record. Fixed readers at entrances, exits and zones pick up tags automatically, and handheld readers scan many tags at once during stocktaking. The system records every read, updates the asset’s location and raises an alert when an asset moves without permission.',
      ],
    },
    {
      question: 'Can we use barcodes and QR codes as well as RFID?',
      answer: [
        'Yes. QR code and barcode labels work alongside RFID tags in the same system. Many organisations use RFID for valuable or frequently moved assets and printed labels for lower-value items.',
      ],
    },
    {
      question: 'How long does a stocktake take with RFID handhelds?',
      answer: [
        'Much less time than with paper lists or one-by-one barcode scanning, because a handheld reads many tags in one sweep without needing line of sight. The system compares what was found with the register and produces a variance report, listing missing and unexpected assets.',
      ],
    },
    {
      question: 'Does it integrate with Microsoft Dynamics 365 and single sign-on?',
      answer: [
        'Yes. Asset data is shared with Microsoft Dynamics 365 through APIs, so finance keeps handling depreciation in the ERP while the asset system manages the physical assets. Users can sign in with their Microsoft Entra ID (Azure AD) accounts.',
      ],
    },
    {
      question: 'Can the system run on our own servers?',
      answer: [
        'Yes. It can be deployed on-premise in your own data centre, and it supports multiple sites and organisation levels from one installation.',
      ],
    },
    {
      question: 'How many gate readers will we need?',
      answer: [
        'It depends on the number of entrances, exits and zones you want to control at each site. We carry out a site survey to count the passageways and include the exact readers in our quotation.',
      ],
    },
  ] as FaqItem[],
}
