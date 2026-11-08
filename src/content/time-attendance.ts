// /time-attendance-system-qatar/ copy: kept from the old WordPress page of the same URL (requested),
// split into sections. Changes: typos fixed ("ZKTECO" → "ZKTeco", "a wide of range stocks",
// "Time time attendance", "specialized" → "specializes", "modes" → "molds"), section headings added,
// and "Qatar's No 1 … providers" removed (project rule: no "number one" claims).
// The old page's two links to aussietimesheets.com.au were not carried over.
// VERIFY: "leading supplier", "cloud-based … hosted on your server or ours" and GPS mobile clocking
// are the company's own claims. "FMLA" is a US law and does not apply in Qatar.
// No pictures on this page (requested).
import type { FaqItem } from './types'

export const taHero = {
  eyebrow: 'Qatar’s leading supplier for time attendance systems',
  heading: 'Time Attendance System in Qatar',
  lead: 'Have you been looking for a reliable and efficient time and attendance system in Qatar to streamline the amount of time spent on payroll each month?',
  text: [
    'If you’re frustrated by manual time sheet systems and want to manage your workforce more effectively, it’s time to implement a time attendance system through Allied Enterprises, a time attendance system solution provider in Qatar with on site support and on shore software application programmers.',
    'No matter the size of your business or the industry you work in, if you have employees your business will benefit from a time and attendance system.',
  ],
  highlight: { value: '3000+', label: 'installations as of 2026' },
  badge: 'Authorized ZKTeco agent in Qatar',
  primary: { label: 'Request a Quote', href: '/contact-us/' },
}

export const taWhyAllied = {
  heading: 'Why Allied Enterprises as your Time Attendance System Supplier in Qatar?',
  text: [
    'ZKTeco is the leading enterprise of Biometric Workforce Management Solutions in the globe. Allied Enterprises is the authorized agent for ZKTeco products in Qatar. We have a wide range of stock and support staff in Qatar.',
    'We offer a full range of time attendance system starting with an initial consultation to ascertain your time management requirements followed by a no obligation quotation, and site visit if required, continuing on to the installation of the time management or time attendance system coupled with a demonstration of any time management software.',
    'Allied Enterprises specializes in Time and Attendance Systems and Clocking In Systems that help businesses to record employee’s attended time, manage employee absence, run a well managed flexitime scheme, store employee records, control access to secure areas and automatically transfer attendance data to their chosen payroll software.',
  ],
  links: [
    { label: 'Payroll integration', href: '/payroll-integration-qatar/' },
    { label: 'Access control systems', href: '/access-control-system-qatar/' },
  ],
}

export const taBenefits = {
  heading: 'How a time attendance system helps your business',
  text: [
    'Unlike the traditional working facet, nowadays the work flow in industries has a novel approach. The works in industries are sophisticated and knotted, for which an access of the management in all areas is a must. To make the workflow smooth and easy, the employees should be on time and even. To maintain all these possible in an industry, the ZKTeco Time attendance and access control system, give an access to the attendance of all employees and maintain the workflow in industries smoothly. With the assistance of this system, the management gets a control over the productivity of the potentiality of the employees of their enterprise.',
    'Time attendance system enables the employer to have a record of each employee working under him, the time he or she starts the work, and stops the work. Apart of this, it also gives the authorities a well managed information regarding the vacation, FMLA time and compensation time.',
    'These solutions are designed to help you monitor, record and manage your workforce attendance more effectively and save you money. Recording every aspect of your employee’s time and attendance behaviour has been proven to cut costs and streamline procedures. Our Time and Attendance System provides real time management information and combines time recording options to suit all business types.',
    'It makes the employees more productive in their area of work, as they become more cautious of their work scheme modulated by punctuality in life. Punctuality molds an individual solidly. Time attendance attractive feature is to bring in punctuality into one’s life and make him or her understand the benefits of it.',
  ],
}

export const taCloud = {
  heading: 'Cloud-based time attendance software',
  text: [
    'Sunbird Time & Attendance module is a powerful application that automates the error-prone processes related to monitoring employees time. It enables you to apply complex working policies with the utmost accuracy, and provide managers with real time data along with the tools to control cost of human resources and improve productivity.',
    'Our cloud-based Time Attendance Systems can be hosted on your server or ours.',
    'When we host the system we maintain the applications and the servers including software updates and data backups.',
    'This means that your infrastructure requirements are minimal. Our cloud-based time attendance systems feature GPS located mobile phone clocking so they are ideal for companies with a mobile workforce.',
  ],
  links: [
    { label: 'Sunbird Time & Attendance', href: '/sunbirdtime-time-management-system-qatar/' },
    { label: 'BioTime software', href: '/biotime-time-attendance-system-qatar/' },
  ],
}

export const taFaq = {
  heading: 'Time and attendance questions',
  items: [
    {
      question: 'Why is time and attendance important?',
      answer: [
        'Importance of Time and Attendance in Managing and Measuring Workforce. Time and attendance data is crucial for any organization. It helps view how the organization has deployed employees and also provides the foundation for measuring the impacts of strategic decisions they make about the talent.',
      ],
    },
    {
      question: 'Why is good attendance important in the workplace?',
      answer: [
        'Maintaining great attendance is crucial to help you do well as an employee as well as allows you to be in good standing with your employer. Being present and on time helps you strengthen your work credibility and work history.',
      ],
    },
    {
      question: 'What is the purpose of an attendance policy?',
      answer: [
        'The purpose of an attendance policy is to highlight the importance of employees being present for work on time, every day. Employees must be aware that regular attendance and punctuality optimizes productivity and any deviation will result in lower productivity levels that will cost the company money.',
      ],
    },
    {
      question: 'What is a good attendance policy?',
      answer: ['Good attendance:'],
      list: [
        'Report consistently to work.',
        'Come to work at the scheduled shift start time.',
        'Leave work at the scheduled shift end time (except when paid overtime is required).',
        'Remaining at work during working hours (excluding breaks).',
        'Take breaks that don’t exceed an expected length.',
      ],
    },
  ] as FaqItem[],
}
