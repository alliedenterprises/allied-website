// /business-intelligence-qatar/ copy: kept from the old WordPress page of the same URL (requested), split into
// sections. Changes: grammar tidied ("in very less time", "look out for"); the outbound businesswire.com
// tracking link on "transport and logistics industry" dropped. No pictures (requested).
// NOTE: the opening paragraph closely follows a 2019 Infiniti Research press release; rewriting it in
// Allied's own words would be stronger.
// VERIFY: the Manthan partnership is current.
import { company } from './company'
import type { ContentBlock } from './types'

export const biHero = {
  eyebrow: 'Business intelligence and analytics',
  heading: 'Business Intelligence Solutions in Qatar',
  lead: 'Growing competitive pressure is making it difficult for companies in the transport and logistics industry to sustain their profitability, deliver a consistent brand experience and stay competitive on price.',
  text: [
    'Increasing compliance complexity, volatile fuel costs and constantly changing customer demands have created the need for solutions that help companies excel in a competitive market. Rising material and labour costs, together with market volatility, are leading companies to use business intelligence solutions to develop effective growth strategies.',
    'Allied, in partnership with Manthan, provides a complete solution for your needs.',
  ],
  highlight: { value: '3000+', label: 'installations as of 2026' },
  badge: 'In partnership with Manthan',
  primary: { label: 'Book a Demo', href: '/contact-us/' },
}

export const biBenefits = {
  heading: 'Benefits of Business Intelligence and Analytics',
  text: [
    { subheading: 'Reduces labour costs' },
    'Automated data collection reduces manual effort by cutting the time spent extracting data into spreadsheets. It also reduces training time, as reports can be generated automatically on a daily, weekly or monthly basis without Excel or Word. Business intelligence tools also make it easy to design reports in very little time.',
    { subheading: 'Reduces information bottlenecks' },
    'Business intelligence solutions let users build individual, operation-specific dashboards relevant to their own area, with the KPIs and other vital information they need. They can even let businesses generate reports and analyse data on their own, without IT assistance. This reduces information blockages and improves efficiency.',
    { subheading: 'Provides actionable data' },
    'Many companies employ a considerable number of people to work on reports in various formats. Such reports take a large amount of resources and are often delivered long after they were most needed, which demotivates staff and shows the need to make data useful and purposeful.',
    'Business intelligence solutions give companies actionable data models that prevent conflicting definitions and incomparable report data. They provide real-time information on the current state of the business rather than only a historical view, and make data actionable by letting users spot issues and drill down into detail from the top down.',
    `To see it working, call ${company.phone.display}, WhatsApp ${company.helpline.display} or email ${company.email}.`,
  ] as ContentBlock[],
  links: [
    { label: 'Enterprise resource planning', href: '/enterprise-resource-planning-qatar/' },
    { label: 'Contact our team', href: '/contact-us/' },
  ],
}
