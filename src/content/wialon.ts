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
import { company } from './company'
import type { ContentBlock } from './types'

export const wialonHero = {
  eyebrow: 'GPS fleet tracking and IoT',
  heading: 'Wialon Platform for GPS Tracking in Qatar',
  lead: 'Wialon is the platform for GPS tracking and IoT, available as a cloud solution, Wialon Hosting, and a server-based solution, Wialon Local. It can be used for many purposes, including mobile and stationary asset monitoring.',
  text: [
    'Wialon is a flexible fleet management system compatible with 2,300 device types. Wialon supports hardware for machinery, vehicles and stationary assets, so finding the right device for a task won’t be a problem. Additional sensors can measure weight, angle, temperature and many other tracking parameters for multi-faceted analytics.',
    'We offer GPS fleet tracking software and systems in Qatar at budget-friendly prices.',
  ],
  highlight: { value: '3000+', label: 'installations as of 2026' },
  badge: 'GPS fleet tracking in Qatar',
  primary: { label: 'Request a Demo', href: '/contact-us/' },
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
  links: [{ label: 'Contact our team', href: '/contact-us/' }],
}
