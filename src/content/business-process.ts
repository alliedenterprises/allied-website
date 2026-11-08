// /business-process-management/ copy: kept from the old WordPress page of the same URL (requested), split
// into sections. Changes: the old copy had been machine-reworded in places, so garbled words were put back
// to their plain meaning ("enhancing a business technique" → improving a business process, "persistent
// development" → continuous improvement, "virtual transformation" → digital transformation, "Represent the
// procedure in a visible layout" → represent the process visually, and similar). No pictures (requested).
// NOTE: the BPM definitions, life cycle and three BPM types closely follow a well-known BPM software
// vendor's article; rewriting in Allied's own words, with Appian projects it has delivered, would be stronger.
// VERIFY: Appian implementation expertise and "best … in Qatar" claims are the company's own.
import { company } from './company'
import type { ContentBlock } from './types'

export const bpmHero = {
  eyebrow: 'Appian business process management',
  heading: 'Business Process Management in Qatar',
  lead: 'Business Process Management (BPM) is the discipline of improving a business process from end to end: analysing it, modelling how it works in different scenarios, executing improvements, monitoring the improved process and continually optimising it.',
  text: [
    'BPM examines the current state and identifies areas of improvement to create a more efficient and effective organisation. Each department in an organisation is responsible for taking some raw material or information and turning it into something else.',
    'Allied Enterprises has experts in implementing intelligent business process management solutions across the organisation, and we are experts in implementing Appian as a business process management solution.',
  ],
  highlight: { value: '3000+', label: 'installations as of 2026' },
  badge: 'Appian BPM implementation',
  primary: { label: 'Request a Consultation', href: '/contact-us/' },
}

export const bpmWhat = {
  heading: 'What BPM Is, and What It Isn’t',
  text: [
    'We offer business process management software in Qatar. BPM is not task management or project management. Task management is about organising certain fixed activities that arise out of a project, and these projects are often one-time and non-repeatable.',
    'We help make your business process management easier with a smart and simple interface. As an approach, BPM sees processes as crucial assets of an enterprise that need to be understood, managed, improved and developed to deliver value-added products and services to customers. This approach closely resembles total quality management and continuous improvement methodologies.',
    'BPM is an effective approach in times of crisis, to make sure processes are efficient and effective and to build a better, more cost-efficient organisation. Business process management is about formalising and institutionalising better ways for work to get done.',
  ] as ContentBlock[],
}

export const bpmBenefits = {
  heading: 'Benefits of business process management',
  items: [
    'Manage chaotic and unwieldy processes',
    'Create, map, analyse and improve business processes',
    'Run regular operations more efficiently',
    'Achieve larger organisational goals',
    'Move towards digital transformation',
    'Develop and optimise complex operations',
    'Closely track individual items as they pass through a workflow',
  ],
}

export const bpmLifecycle = {
  heading: 'The BPM Life Cycle',
  text: [
    { subheading: 'Step 1: Design' },
    'Most processes include a form to gather information and a workflow to process it. Build the form and decide who will own each task in the workflow.',
    { subheading: 'Step 2: Model' },
    'Represent the process visually. Set details such as deadlines and conditions to give a clear idea of the sequence of events and the flow of data through the system.',
    { subheading: 'Step 3: Execute' },
    'Run the process live with a small group first, then open it up to all users. Make sure you limit access to sensitive information.',
    { subheading: 'Step 4: Monitor' },
    'Watch the process as it runs through the workflow. Use the right metrics to track progress, measure efficiency and find bottlenecks.',
    { subheading: 'Step 5: Optimise' },
    'Identify any changes needed to the form or workflow to make it more efficient.',
  ] as ContentBlock[],
}

export const bpmTypes = {
  heading: 'Types of Business Process Management',
  text: [
    'BPM systems can be classified by the purpose they serve. These are the three types of business process management:',
    { subheading: 'Integration-centric BPM' },
    'This kind of BPM system handles processes that frequently move between existing systems (for example HRMS, CRM and ERP) without much human involvement. Integration-centric BPM systems have extensive connectors and API access, so you can create processes that flow quickly.',
    { subheading: 'Human-centric BPM' },
    'Human-centric BPM is for processes that are mainly carried out by people. These systems excel at a friendly user interface, easy notifications and quick tracking.',
    { subheading: 'Document-centric BPM' },
    'These BPM solutions have a document (for example a contract or agreement) at the heart of the system. They allow routing, formatting, verifying and getting the document signed as the tasks pass along the workflow.',
    'Our business process management systems in Qatar can combine elements of each of these, though each one will have a specialty.',
    'We are experts in implementing Appian as a business process management solution, and in migrating processes to Appian to enable a digitisation drive across the enterprise.',
    `To discuss your processes, call ${company.phone.display}, WhatsApp ${company.helpline.display} or email ${company.email}.`,
  ] as ContentBlock[],
  links: [
    { label: 'Enterprise resource planning', href: '/enterprise-resource-planning-qatar/' },
    { label: 'Contact our team', href: '/contact-us/' },
  ],
}
