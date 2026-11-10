// /business-process-management/ copy (old WordPress URL, same path).
// Rewritten in original words on 2026-11-09 (SEO audit): the previous definitions, life cycle and three BPM
// types closely followed a well-known BPM software vendor's article. Kept from the old page: Appian as the BPM
// platform Allied implements, the benefits list, the five-step life cycle and the three BPM types as topics.
// VERIFY: Appian implementation and process migration are services Allied provides.
import { company } from './company'
import type { ContentBlock } from './types'

export const bpmHero = {
  eyebrow: 'Appian business process management',
  heading: 'Business Process Management in Qatar',
  lead: 'Business process management (BPM) means taking the way work moves through your organisation, such as approvals, requests, onboarding and purchasing, and making it faster, clearer and measurable.',
  text: [
    'Instead of emails, paper forms and spreadsheets, each process runs in one system: the right person gets each task, nothing is lost, and managers can see where every request is and how long it took.',
    'Allied Enterprises implements Appian as a business process management platform, from mapping your current processes to building, launching and improving them.',
  ],
  highlight: { value: '10000+', label: 'installations as of 2026' },
  badge: 'Appian BPM implementation',
  primary: { label: 'Request a Consultation', href: '/contact-us/' },
}

export const bpmWhat = {
  heading: 'What BPM Is, and What It Isn’t',
  text: [
    'BPM is about processes that repeat: a leave request, a purchase approval, a customer complaint, a contract review. The same steps happen hundreds of times, so every improvement pays off again and again.',
    'That is what separates it from project or task management, which organise one-off pieces of work with a start and an end.',
    'A BPM platform lets you design each process once, with its forms, rules and approval steps, and then run it consistently. Because every step is recorded, you can see where work gets stuck and change the process without rewriting software.',
  ] as ContentBlock[],
}

export const bpmBenefits = {
  heading: 'Benefits of business process management',
  items: [
    'Replace emails, paper forms and spreadsheets with one system',
    'Create, map, analyse and improve business processes',
    'Run regular operations faster and more consistently',
    'See where every request is, and who is holding it',
    'Find and remove bottlenecks using real data',
    'Support digital transformation across departments',
    'Keep an audit trail of every decision',
  ],
}

export const bpmLifecycle = {
  heading: 'The BPM Life Cycle',
  text: [
    { subheading: 'Step 1: Design' },
    'Agree what the process should achieve, what information it needs and who is responsible for each step.',
    { subheading: 'Step 2: Model' },
    'Draw the process as a flow, with its forms, decision points, deadlines and the data that moves between steps.',
    { subheading: 'Step 3: Execute' },
    'Build it in the platform and launch it with a small pilot group, then roll it out to everyone, with access to sensitive data limited to the right roles.',
    { subheading: 'Step 4: Monitor' },
    'Track volumes, waiting times and completion rates to see how the process actually performs.',
    { subheading: 'Step 5: Optimise' },
    'Use what you measured to simplify forms, remove steps or automate decisions, and repeat the cycle.',
  ] as ContentBlock[],
}

export const bpmTypes = {
  heading: 'Types of Business Process Management',
  text: [
    'Processes differ in where most of the work happens, so BPM projects usually focus on one of three areas:',
    { subheading: 'Integration-centric BPM' },
    'Work that moves mainly between systems, such as HR, CRM and ERP, with little manual input. The focus is on connectors and APIs so data flows automatically.',
    { subheading: 'Human-centric BPM' },
    'Work done mainly by people, such as approvals and requests. The focus is on clear forms, notifications and easy tracking.',
    { subheading: 'Document-centric BPM' },
    'Work built around a document, such as a contract or agreement, that must be routed, reviewed, verified and signed.',
    'Most real processes combine all three, and Appian supports each of them on one platform.',
    'We implement Appian and migrate existing processes onto it, to support digitisation across the organisation.',
    `To discuss your processes, call ${company.phone.display}, WhatsApp ${company.helpline.display} or email ${company.email}.`,
  ] as ContentBlock[],
  links: [
    { label: 'Enterprise resource planning', href: '/enterprise-resource-planning-qatar/' },
    { label: 'Contact our team', href: '/contact-us/' },
  ],
}
