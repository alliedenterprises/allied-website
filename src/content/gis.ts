// /geographical-information-systems-qatar/ copy: kept from the old WordPress page of the same URL
// (requested), split into sections. Changes: grammar tidied ("develops", "analyses it", missing full stop);
// "unparalleled" dropped as an unverifiable claim; "We do not sell software products" contradicted the
// off-the-shelf offer in the first paragraph, so it now says solutions are built around requirements.
// ArcIMS was left out of the services list: Esri retired it years ago, so it would read as out of date.
// No pictures (requested).
// VERIFY: which GIS platforms and data sources are used today (ArcGIS Server, road network data supplier).
import { company } from './company'
import type { ContentBlock } from './types'

export const gisHero = {
  eyebrow: 'GIS and mapping solutions',
  heading: 'Geographic Information Systems (GIS) in Qatar',
  lead: 'Allied Enterprises offers GIS software solutions for our clients’ specific requirements.',
  text: [
    'Whether you need a commercial off-the-shelf solution or a custom-built product that calls for our programming expertise, we provide a complete, end-to-end software development service.',
  ],
  highlight: { value: '3000+', label: 'installations as of 2026' },
  badge: 'End-to-end GIS services',
  primary: { label: 'Request a Consultation', href: '/contact-us/' },
}

export const gisServices = {
  heading: 'GIS and mapping services',
  items: [
    'Advanced geospatial imaging software for photogrammetry and remote sensing',
    'GIS applications for utilities and land management',
    'Web GIS application development for ArcGIS Server',
    'Spatial ETL software to transform data between GIS, CAD, raster and database formats',
    'Telecom network planning and engineering solutions',
    'Wireless network planning and management solutions',
    'Accurate, reliable and detailed road network data',
  ],
}

export const gisApproach = {
  heading: 'Solutions Built Around Your Requirements',
  text: [
    'We do not simply sell software products: we develop solutions that meet each customer’s unique business requirements.',
    'We pay attention to the things that matter to you, such as saving costs, product efficiency and systems interoperability, so your systems, staff and budgets always work well together.',
  ] as ContentBlock[],
}

export const gisData = {
  heading: 'Geospatial Data Collection and Analysis',
  text: [
    'We also specialise in the collection, analysis, presentation and delivery of geospatial information. We digitise the real world for business and government, from vast expanses of landscape down to individual pieces of machinery.',
    'Our resources give us the flexibility to adapt our methods to each project’s needs. We then help our clients work with the data, analyse it and get value from it.',
    'Our strength lies in our people. Our clients are our lifeblood, and our consultants are committed to developing innovative solutions that solve unique business challenges and add value.',
    `Whatever the scope of your geospatial information technology needs, call ${company.phone.display}, WhatsApp ${company.helpline.display} or email ${company.email}.`,
  ] as ContentBlock[],
  links: [
    { label: 'Wialon GPS tracking', href: '/wialon-plaftform-for-gps-tracking/' },
    { label: 'Contact our team', href: '/contact-us/' },
  ],
}
