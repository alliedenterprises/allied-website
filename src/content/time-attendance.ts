// /time-attendance-system-qatar/ copy: kept from the old WordPress page of the same URL (requested),
// split into sections. Changes: typos fixed ("ZKTECO" → "ZKTeco", "a wide of range stocks",
// "Time time attendance", "specialized" → "specializes", "modes" → "molds"), section headings added,
// and "Qatar's No 1 … providers" removed (project rule: no "number one" claims).
// The old page's two links to aussietimesheets.com.au were not carried over.
// SEO audit 2026-11-09: "Qatar's leading supplier" eyebrow and "ZKTeco is the leading enterprise" reworded as facts;
// ZKTeco role changed from "agent" to "distributor" (2026 ZKTeco certificate); link to /zkteco-qatar/ added.
// VERIFY: "cloud-based … hosted on your server or ours" and GPS mobile clocking
// are the company's own claims. "FMLA" is a US law and does not apply in Qatar.
// No pictures on this page (requested).
// 2026-11-12: added devices, "which machine", price-factor and buyer FAQ sections. Confirmed by the company:
// supplies and installs fingerprint, face, palm and card (RFID) terminals; main model families SpeedFace
// (V5L, V4L, H5L), ProFace X, uFace, iFace, K40, iClock 9000 and Horus H1; offers free demos, AMC contracts
// and device warranty (length not stated); installs all over Qatar. Per-model features are deliberately not
// listed (they vary by variant); customers are pointed to datasheets. No prices (none supplied).
// "FMLA" (a US law) replaced with Qatar-relevant leave types.
import type { ContentBlock, FaqItem } from './types'

export const taHero = {
  eyebrow: 'Biometric time attendance supplier in Qatar',
  heading: 'Time Attendance System in Qatar',
  lead: 'Have you been looking for a reliable and efficient time and attendance system in Qatar to streamline the amount of time spent on payroll each month?',
  text: [
    'If you’re frustrated by manual time sheet systems and want to manage your workforce more effectively, it’s time to implement a time attendance system through Allied Enterprises, a time attendance system solution provider in Qatar with on site support and on shore software application programmers.',
    'No matter the size of your business or the industry you work in, if you have employees your business will benefit from a time and attendance system.',
  ],
  highlight: { value: '10,000+', label: 'installations as of 2026' },
  badge: 'Authorized ZKTeco distributor in Qatar',
  primary: { label: 'Request a Quote', href: '/contact-us/' },
}

export const taWhyAllied = {
  heading: 'Why Allied Enterprises as your Time Attendance System Supplier in Qatar?',
  text: [
    'ZKTeco is a global manufacturer of biometric workforce management solutions, and Allied Enterprises is its authorized distributor in Qatar. We have a wide range of stock and support staff in Qatar.',
    'We offer a full range of time attendance system starting with an initial consultation to ascertain your time management requirements followed by a no obligation quotation, and site visit if required, continuing on to the installation of the time management or time attendance system coupled with a demonstration of any time management software.',
    'Allied Enterprises specializes in Time and Attendance Systems and Clocking In Systems that help businesses to record employee’s attended time, manage employee absence, run a well managed flexitime scheme, store employee records, control access to secure areas and automatically transfer attendance data to their chosen payroll software.',
    'We install across Qatar, from Doha and Lusail to the Industrial Area, Al Wakrah, Mesaieed and Ras Laffan. You can see a device and the software working in a free demo before you buy, devices come with a warranty, and annual maintenance contracts (AMC) are available for devices and software.',
  ],
  links: [
    { label: 'ZKTeco products in Qatar', href: '/zkteco-qatar/' },
    { label: 'Payroll integration', href: '/payroll-integration-qatar/' },
    { label: 'Access control systems', href: '/access-control-system-qatar/' },
  ],
}

export const taDevices = {
  heading: 'Fingerprint, face, palm and card attendance machines',
  text: [
    'We supply and install ZKTeco attendance machines for every common way of clocking in. Many terminals combine several methods, so one device can serve staff who enrol a face as well as those who use a fingerprint or a card.',
    { subheading: 'Fingerprint attendance machines' },
    'The most familiar and affordable option. Each employee places a finger on the sensor, so nobody can clock in for a colleague. Fingerprint machines suit offices, shops and clinics where staff have clean, dry hands.',
    { subheading: 'Face recognition attendance systems' },
    'Quick, touchless clocking in. Visible-light face terminals recognise employees as they walk up, even with gloves or dusty hands, which makes them a good fit for construction sites, warehouses, kitchens and labour accommodation.',
    { subheading: 'Palm recognition' },
    'The terminal reads the palm without contact. It is accurate and hygienic, and works well for staff whose fingerprints are worn by manual work.',
    { subheading: 'Card (RFID) attendance readers' },
    'Employees tap an RFID card or fob. Cards are quick and suit visitors, contractors and short-term staff, but a card can be lent to someone else, so most companies combine cards with a biometric check.',
    { subheading: 'ZKTeco models we supply' },
    {
      list: [
        'SpeedFace series: SpeedFace V5L, V4L and H5L',
        'ProFace X',
        'uFace and iFace series',
        'K40 and iClock 9000',
        'Horus H1',
      ],
    },
    'Features differ between models and versions, so ask us for the datasheet of any model before you order.',
  ] as ContentBlock[],
  links: [
    { label: 'ZKTeco products in Qatar', href: '/zkteco-qatar/' },
    { label: 'BioTime attendance software', href: '/biotime-time-attendance-system-qatar/' },
  ],
}

export const taChoose = {
  heading: 'Which attendance machine suits your workplace?',
  text: [
    {
      list: [
        'Office or showroom: a fingerprint or face terminal at the entrance, connected to your network.',
        'Construction site, warehouse or factory: a touchless face or palm terminal, because dust, gloves and worn fingers make fingerprints unreliable.',
        'Labour accommodation or large workforce: a face recognition terminal that handles queues at shift change.',
        'Several branches or sites: one terminal at each site, all reporting to the same BioTime server or cloud account.',
        'Outdoor or semi-outdoor gate: a model rated for outdoor use, or a protective canopy, since sun and heat in Qatar shorten the life of indoor devices.',
      ],
    },
    'If you want staff to clock in and open a door with the same terminal, choose a model with access control and link it to your door lock or turnstile.',
  ] as ContentBlock[],
  links: [
    { label: 'Access control systems', href: '/access-control-system-qatar/' },
    { label: 'Turnstiles and gate barriers', href: '/zkteco-qatar-gate-barrier-system/' },
  ],
}

export const taPrice = {
  heading: 'What affects the price of a biometric attendance system in Qatar?',
  text: [
    'There is no single price, because every workplace is different. The main factors are:',
    {
      list: [
        'Type of terminal: fingerprint machines cost less than face or palm terminals.',
        'Number of employees and sites: this decides how many terminals you need and their user capacity.',
        'Software: BioTime on your own server, BioTime Cloud, or Sunbird with HR and payroll modules.',
        'Installation: cabling, network points, mounting, and any outdoor housing.',
        'Integration: exporting attendance to your payroll, ERP or WPS salary file.',
        'Support: an annual maintenance contract (AMC) for devices and software.',
      ],
    },
    'Tell us how many employees and sites you have and how they work, and we will recommend the right setup and send a clear quotation.',
  ] as ContentBlock[],
  links: [{ label: 'Request a quotation', href: '/contact-us/' }],
}

export const taBenefits = {
  heading: 'How a time attendance system helps your business',
  text: [
    'Unlike the traditional working facet, nowadays the work flow in industries has a novel approach. The works in industries are sophisticated and knotted, for which an access of the management in all areas is a must. To make the workflow smooth and easy, the employees should be on time and even. To maintain all these possible in an industry, the ZKTeco Time attendance and access control system, give an access to the attendance of all employees and maintain the workflow in industries smoothly. With the assistance of this system, the management gets a control over the productivity of the potentiality of the employees of their enterprise.',
    'Time attendance system enables the employer to have a record of each employee working under him, the time he or she starts the work, and stops the work. Apart of this, it also gives the authorities a well managed information regarding annual leave, sick leave and compensatory time off.',
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
      question: 'Which is better: a fingerprint or a face recognition attendance machine?',
      answer: [
        'Fingerprint machines cost less and work well in offices. Face recognition is touchless and faster, and it is the better choice where hands are dirty, gloved or worn, such as construction sites and warehouses. Many ZKTeco terminals support both, so staff can use either.',
      ],
    },
    {
      question: 'Can the attendance machine connect to our payroll?',
      answer: [
        'Yes. Attendance data can be exported to Excel or CSV, connected to your ERP or payroll software, or processed in our own payroll software, which produces the WPS salary file for your bank.',
      ],
    },
    {
      question: 'Can we see the system working before we buy?',
      answer: [
        'Yes. We offer a free demo of the devices and the attendance software, so you can check enrolment, clocking and reports first.',
      ],
    },
    {
      question: 'Do you install outside Doha?',
      answer: [
        'Yes. We install and support time attendance systems all over Qatar, including Lusail, Al Wakrah, the Industrial Area, Mesaieed and Ras Laffan.',
      ],
    },
    {
      question: 'What support do you offer after installation?',
      answer: [
        'Devices come with a warranty, and we offer annual maintenance contracts (AMC) for devices and software. Our support team works from two offices in Doha.',
      ],
    },
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
