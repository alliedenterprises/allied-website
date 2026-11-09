// /business-intelligence-qatar/ copy (old WordPress URL, same path).
// Rewritten in original words on 2026-11-09 (SEO audit): the previous opening closely followed a 2019 Infiniti
// Research press release about the transport and logistics industry. Kept from the old page: the BI offer in
// partnership with Manthan and the three benefits (lower reporting effort, fewer information bottlenecks,
// actionable real-time data).
// VERIFY: the Manthan partnership is current.
import { company } from './company'
import type { ContentBlock } from './types'

export const biHero = {
  eyebrow: 'Business intelligence and analytics',
  heading: 'Business Intelligence Solutions in Qatar',
  lead: 'Most companies already have the data they need: in their ERP, POS, attendance and accounting systems. The problem is getting it out quickly, in one place, in a form managers can act on.',
  text: [
    'Business intelligence brings that data together into dashboards and scheduled reports, so sales, operations and finance teams see the same up-to-date numbers instead of waiting for spreadsheets to be compiled.',
    'Allied, in partnership with Manthan, provides a complete solution for your needs.',
  ],
  highlight: { value: '3000+', label: 'installations as of 2026' },
  badge: 'In partnership with Manthan',
  primary: { label: 'Book a Demo', href: '/contact-us/' },
}

export const biBenefits = {
  heading: 'Benefits of Business Intelligence and Analytics',
  text: [
    { subheading: 'Less time spent building reports' },
    'Data is collected from your systems automatically, and daily, weekly or monthly reports are generated and sent on schedule. Staff no longer copy figures into spreadsheets by hand, and new reports can be designed in minutes rather than days.',
    { subheading: 'Fewer information bottlenecks' },
    'Each team gets a dashboard with the KPIs that matter to its own area. Managers can filter, compare and build their own views without asking the IT department every time, so questions are answered the same day.',
    { subheading: 'Actionable, real-time data' },
    'Everyone works from one agreed set of definitions, so reports from different departments finally match. Dashboards show what is happening now, not only last month, and users can start from a top-level figure and drill down to the branch, product or transaction behind it.',
    { subheading: 'Where it helps most' },
    {
      list: [
        'Retail and restaurants: sales by branch, product and hour',
        'Transport and logistics: fuel, routes, deliveries and costs',
        'HR: attendance, overtime and headcount trends',
        'Finance: revenue, margins and cash flow in one view',
      ],
    },
    `To see it working, call ${company.phone.display}, WhatsApp ${company.helpline.display} or email ${company.email}.`,
  ] as ContentBlock[],
  links: [
    { label: 'Enterprise resource planning', href: '/enterprise-resource-planning-qatar/' },
    { label: 'Contact our team', href: '/contact-us/' },
  ],
}
