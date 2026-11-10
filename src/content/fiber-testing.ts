// /fiber-optic-testing-otdl-olts-qatar/ copy (old WordPress URL; the slug's "otdl" typo is kept, CLAUDE.md §14A).
// Rewritten in original words on 2026-11-09 (SEO audit): the previous copy closely followed Wikipedia's OTDR
// article. Kept from the old page: the services (OTDR and OLTS testing, power meter and drum testing, test
// equipment sales, rental, calibration and repair, Fluke servicing) and the ISO 9001:2015 badge.
// VERIFY: test equipment sales, rental, calibration and repair, and servicing Fluke models.
import { company } from './company'
import type { ContentBlock } from './types'

export const fiberHero = {
  eyebrow: 'OTDR, OLTS, power meter and drum testing',
  heading: 'Fiber Optic Testing in Qatar: OTDR & OLTS',
  lead: 'A new fiber link is only as good as its test results. We test, certify and troubleshoot fiber optic cabling for offices, data centres, buildings and campuses across Qatar.',
  text: [
    'We measure loss, length and the quality of every connector and splice, locate breaks and bad bends, and hand over documented results for your records or your client.',
    'We also quote for new fiber optic test equipment, rental units, calibration and repair.',
  ],
  highlight: { value: '10000+', label: 'installations as of 2026' },
  badge: 'ISO 9001:2015 certified company',
  primary: { label: 'Request a Quote', href: '/contact-us/' },
}

export const fiberOtdr = {
  heading: 'What is an OTDR?',
  text: [
    'An OTDR (optical time domain reflectometer) sends short pulses of light into one end of a fiber and measures the light that comes back from each point along it. From the timing and strength of those reflections, it draws a graph of the whole link, called a trace.',
    { subheading: 'What an OTDR test shows' },
    {
      list: [
        'The total length of the fiber, and the length of each section',
        'The loss at every connector and splice, and where each one is',
        'The distance to a break, crush or tight bend',
        'How evenly the fiber loses signal along its length',
      ],
    },
    'Because it works from one end, an OTDR is the tool for finding where a problem is, for example a cable damaged during building works.',
    { subheading: 'Why keep the trace from installation' },
    'We recommend saving an OTDR trace for every fiber when it is installed. If a fault appears later, a new trace can be compared with the original to see exactly what has changed and where, which makes repairs much faster.',
    'OTDRs work best on longer links and on links with splices. For very short patch cords, and for the official loss figure of a link, an OLTS (light source and power meter) is the better tool.',
  ] as ContentBlock[],
}

export const fiberTesters = {
  heading: 'Fiber Optic Tester Types',
  text: [
    'Fiber networks are certified with two complementary types of test. Most projects need both.',
    { subheading: 'OLTS: light source and power meter' },
    'An optical loss test set puts a known light source at one end of the link and a power meter at the other, and measures exactly how much light is lost end to end. The result is compared with the loss budget for the link, so it tells you whether the link passes or fails. It needs access to both ends and does not show where a problem is.',
    { subheading: 'OTDR: one-ended trace' },
    'An OTDR needs only one end and shows every event along the link: connectors, splices, bends and breaks, with their distances. It explains why a link fails an OLTS test and where to fix it.',
    { subheading: 'Drum (reel) testing' },
    'Testing fiber on the drum before it is pulled confirms the cable was not damaged in transport or storage, before labour is spent installing it.',
    'All results are saved and supplied as test reports for handover and warranty documentation.',
  ] as ContentBlock[],
  links: [{ label: 'Structured cabling data & voice', href: '/structured-cabling-data-voice-qatar/' }],
}

export const fiberQuality = {
  heading: 'Reliability and Quality of OTDR Equipment',
  text: [
    'Not every OTDR suits every job. When choosing or renting one, these are the specifications that matter:',
    { subheading: 'Accuracy' },
    'How close the measured distance and loss are to the real values. This matters when you send a team to dig or open a duct at a reported fault location.',
    { subheading: 'Dynamic range' },
    'How much loss the instrument can see through. Long links and links with many splices need more range.',
    { subheading: 'Dead zone and resolution' },
    'How close together two events can be and still be shown separately. Short links inside buildings, with connectors close together, need a short dead zone.',
    { subheading: 'Ease of use and reporting' },
    'Automatic setup, an event map view and built-in report software help technicians who are not OTDR specialists get correct results quickly.',
    'Tell us your cable types and link lengths, and we will recommend suitable equipment to buy or rent.',
  ] as ContentBlock[],
}

export const fiberCalibration = {
  heading: 'Fiber Optic Test Equipment Calibration, Verification and Factory Service',
  text: [
    'Test results are only trustworthy if the instrument is accurate. We calibrate and verify both optical loss test sets and OTDRs, and arrange repair and factory service when needed.',
    'Models we service include Fluke.',
    `For fiber testing, test equipment, rental or calibration, call ${company.phone.display}, WhatsApp ${company.helpline.display} or email ${company.email}.`,
  ] as ContentBlock[],
  links: [{ label: 'Contact our team', href: '/contact-us/' }],
}
