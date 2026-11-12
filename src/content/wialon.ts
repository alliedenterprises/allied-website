// /wialon-plaftform-for-gps-tracking/ copy: kept from the old WordPress page of the same URL (requested),
// split into sections. The slug's "plaftform" typo is kept (CLAUDE.md §14A); the visible name is spelled
// correctly. Changes: removed "its user interface looks clunky and outdated and is not for non-technical
// users" and the "almost 100 percent uptime" line next to it (a third-party review's wording that works
// against the sale); removed out-of-date facts ("131 [units] at the beginning of July 2010", "Wialon GPS
// Tracking 1.2 is the latest version", "more than 500 varieties of supported devices", which contradicted
// the 2,300 device types above); garbled words fixed ("stationary belongings", "standard potential servers",
// "screen the work", "fuel intake", "associate corporates"). No pictures (requested).
// VERIFY with Gurtam's current figures: 2,300 device types, 2.7 million units, 130+ countries, 1,900
// partners, 600 hardware manufacturers, ~500 tracking services. Allied's own role (reseller, Wialon
// partner, installer of trackers) would be worth stating.
// 2026-11-12: page refocused on "GPS vehicle tracking system Qatar" (Google Business Profile services: "GPS
// vehicle tracking system in Qatar", "Vehicle Tracking System", "Teltonika Qatar"). URL kept. Confirmed by
// the company: supplies Teltonika trackers, installs them in vehicles, sets up and supports Wialon. Not
// confirmed, so not claimed: specific Teltonika models, fuel/temperature sensor installation.
import { company } from './company'
import type { ContentBlock, FaqItem } from './types'

export const wialonHero = {
  eyebrow: 'Teltonika trackers + Wialon platform',
  heading: 'GPS Vehicle Tracking System in Qatar',
  lead: 'We supply Teltonika GPS trackers, install them in your vehicles and set up the Wialon tracking platform, so you can see where every vehicle is, how it is driven and when it is due for service.',
  text: [
    'Wialon is a flexible fleet management system compatible with 2,300 device types. Wialon supports hardware for machinery, vehicles and stationary assets, so finding the right device for a task won’t be a problem. Additional sensors can measure weight, angle, temperature and many other tracking parameters for multi-faceted analytics.',
    'We offer GPS fleet tracking software and systems in Qatar at budget-friendly prices.',
  ],
  highlight: { value: '10,000+', label: 'installations as of 2026' },
  badge: 'GPS vehicle tracking in Qatar',
  primary: { label: 'Request a Demo', href: '/contact-us/' },
}

export const wialonService = {
  heading: 'Teltonika GPS trackers, installed and supported in Qatar',
  text: [
    'Teltonika is a European manufacturer of vehicle telematics devices, and its trackers work with the Wialon platform. We handle the whole job, so you deal with one company from the first vehicle to the last:',
    {
      list: [
        'Supply: we recommend and supply the right Teltonika tracker for each type of vehicle.',
        'Installation: our technicians fit the trackers in cars, vans, pickups, trucks and buses, all over Qatar.',
        'Setup: we create your Wialon account, add your vehicles and drivers, and set up geofences, alerts and reports.',
        'Training and support: we show your team how to use Wialon on the web and on the mobile app, and support you afterwards from Doha.',
      ],
    },
    'Typical users include delivery and logistics companies, contractors, car rental firms, transport operators and any business that runs its own vehicles.',
  ] as ContentBlock[],
}

export const wialonPlatform = {
  heading: 'Flexible GPS Monitoring Software to Grow Your Business',
  text: [
    'The Wialon platform is available in server-based and SaaS versions, has an open API to integrate with modern back-office setups, and allows custom interface white labelling.',
    { subheading: 'Wialon Hosting' },
    'The cloud-based solution reduces the costs of buying, installing and administering server hardware and software.',
    { subheading: 'Wialon Local' },
    'The server solution runs on standard servers and suits companies with anywhere from one hundred to several thousand devices.',
    { subheading: 'Mobile app' },
    'Beyond normal tracking, Wialon offers several modules. A multilingual mobile app is available for both Wialon Hosting and Wialon Local. The Wialon mobile client lets you manage your list of tracked units, giving instant insight into the activity of your assets in real time.',
  ] as ContentBlock[],
}

export const wialonFeatures = {
  heading: 'Wialon features',
  items: [
    'Real-time vehicle and asset tracking',
    'Geofences and territory management',
    'Routes with checkpoints',
    'Driver management',
    'Fuel management',
    'Maintenance and mileage tracking',
    'Alerts and notifications by SMS or e-mail',
    'Historical, template-based reports',
    'Dispatch and work order management',
  ],
}

export const wialonMore = {
  heading: 'Full Feature List and Supported Devices',
  text: [
    'Wialon features include territory management, status tracking, historical reporting, accident tracking, dispatch management, driver management, fuel management, inspection management, maintenance tracking, mileage tracking, parts management, routing, tire management, tool tracking, vehicle information, vehicle tracking, alerts and notifications, asset tracking, work order management, real-time tracking and VIN lookup.',
    'Standard functions include fuel consumption monitoring, editable template-based reports, SMS or e-mail alerts and notifications, and controllable routes with checkpoints. Wialon supports different types of maps and lets you mark any point of interest and create geofences. Fleet owners can monitor every vehicle in real time and quickly spot any deviation from the route, operating irregularities or violations.',
    'Wialon works with nearly all types of GPS device: personal GPS trackers, vehicle GPS trackers and AVL (Automatic Vehicle Locators), as well as hardware for machinery, stationary assets and people, so you can find the right telematics device for any project.',
    { subheading: 'About Wialon' },
    'Wialon is developed by Gurtam. It became international in 2010 at the CeBIT computer expo; before that it was mainly used in post-Soviet states. Wialon tracks over 2.7 million mobile and stationary units in more than 130 countries, with more than 1,900 partner companies, 600 hardware manufacturers and hundreds of Wialon-based solution developers. According to Gurtam, around 500 GPS tracking services worldwide run on the Wialon platform, which is available for both Linux and Windows.',
    `For GPS tracking in Qatar, call ${company.phone.display}, WhatsApp ${company.helpline.display} or email ${company.email}.`,
  ] as ContentBlock[],
  links: [
    { label: 'Asset tracking and management', href: '/asset-management-solution-qatar/' },
    { label: 'Contact our team', href: '/contact-us/' },
  ],
}

export const wialonFaq = {
  heading: 'GPS vehicle tracking questions',
  items: [
    {
      question: 'Do you install the GPS trackers in our vehicles?',
      answer: [
        'Yes. We supply Teltonika trackers and our technicians install them in your cars, vans, trucks and buses anywhere in Qatar, then connect each vehicle to Wialon.',
      ],
    },
    {
      question: 'Can we track our vehicles on a mobile phone?',
      answer: [
        'Yes. Wialon has a mobile app as well as the web version, so managers can see vehicle locations, trips and alerts in real time from a phone.',
      ],
    },
    {
      question: 'Is Wialon in the cloud or on our own server?',
      answer: [
        'Both are available. Wialon Hosting is the cloud version, with no server to buy or maintain. Wialon Local runs on your own server, for companies that want to keep tracking data in-house.',
      ],
    },
    {
      question: 'What can a vehicle tracking system report?',
      answer: [
        'Live location, trip history, speeding, idling, entry and exit from geofenced areas, mileage, and maintenance reminders. Reports can be emailed automatically.',
      ],
    },
  ] as FaqItem[],
}
