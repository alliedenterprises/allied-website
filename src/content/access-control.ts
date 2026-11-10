// /access-control-system-qatar/ copy (old WordPress URL, same path).
// Rewritten in original words on 2026-11-09 (SEO audit): the previous copy closely followed Boon Edam
// articles and used unverifiable "leading" / "best … supplier in Qatar" claims. Section structure, topics
// (what access control is, why doors alone are not enough, anti-tailgating / anti-passback, choosing
// readers and entrances) and contact details were kept. Facts used: ZKTeco distributor status (2026
// certificate), 10000+ installations as of 2026, products already named on the site (ZKTeco face, palm,
// fingerprint and card devices; turnstiles, flap and swing barriers on the gate barrier page).
// VERIFY: integration with CCTV, alarm systems and intercoms is the company's own statement (old page).
import { company } from './company'
import type { ContentBlock } from './types'

export const acHero = {
  eyebrow: 'Card, PIN and biometric access control',
  heading: 'Access Control System in Qatar',
  lead: 'An access control system decides who can open which door, and when. Instead of keys, people use a card, a PIN, a mobile credential or their face, palm or fingerprint, and every entry is recorded.',
  text: [
    'When someone leaves or loses a card, you remove their access in the software in seconds, with no locks to change.',
    'Allied Enterprises designs, supplies and installs access control for offices, warehouses, schools and residential buildings across Qatar, from a single door to multi-site systems connected to turnstiles and barriers.',
  ],
  highlight: { value: '10000+', label: 'installations as of 2026' },
  badge: 'Authorized ZKTeco distributor in Qatar',
  primary: { label: 'Request a Quote', href: '/contact-us/' },
}

export const acWhatIs = {
  heading: 'What is an Access Control System?',
  text: [
    'An access control system replaces keys with electronic credentials and rules. It controls entry to a building, or to particular rooms inside it, and keeps a record of who went where.',
    'A typical system has three parts:',
    {
      list: [
        'Readers at each door: card, PIN, face, palm or fingerprint',
        'A controller or panel that checks each request and releases the lock',
        'Software where you add users, set rules and view entry reports',
      ],
    },
    'Rules can depend on the person, the door and the time of day. Staff might enter the office from 7 am to 7 pm, while only the IT team can open the server room. For sensitive areas you can require two factors, such as a card and a fingerprint.',
    'Because every attempt is logged, you can see who entered an area and when, which helps with investigations, audits and health and safety.',
  ] as ContentBlock[],
}

export const acNotEnough = {
  heading: 'Why an Access Control System Alone is Not Enough',
  text: [
    'A reader on a normal door checks one person, but once the door is open anyone can follow them in. In busy lobbies and car parks this "tailgating" is the most common way people get in without permission.',
    'Combining access control with a physical entrance, such as a turnstile, flap barrier, swing barrier or vehicle barrier, makes sure one valid credential lets exactly one person or vehicle through.',
    { subheading: 'What should a good access control system achieve?' },
    {
      list: [
        'Identify each person reliably (card, PIN or biometrics)',
        'Allow only the right people into each area, at the right times',
        'Record every entry and refused attempt',
        'Make it quick to add, change or cancel access',
        'Keep working, and keep doors safe, during a power or network failure',
      ],
    },
    'Biometric readers add another layer because a face or fingerprint cannot be lent to someone else. They suit areas such as server rooms, stores, cash offices and labs.',
  ] as ContentBlock[],
}

export const acAntiTailgating = {
  heading: 'Anti-Tailgating, Anti-Loitering and Anti-Passback',
  text: [
    'These features are available when the access control system works together with a physical entrance or controller.',
    { subheading: 'Anti-tailgating' },
    'Sensors in a speed gate, flap barrier or turnstile count how many people pass for each valid credential. If a second person tries to follow, the entrance closes or raises an alarm.',
    { subheading: 'Anti-loitering' },
    'The entrance expects continuous movement. If someone stops inside the lane, the system alerts the guard instead of leaving the lane open.',
    { subheading: 'Anti-passback' },
    'A card that has been used to enter cannot be used to enter again until it has been used to exit. This stops people passing a card back to a colleague outside.',
  ] as ContentBlock[],
}

export const acWhichEntrance = {
  heading: 'What Access Control System to Integrate in which Security Entrance?',
  text: [
    'The right combination depends on your building and how much security each area needs. When we survey a site, we ask:',
    {
      list: [
        'Do you need to secure the perimeter, the building entrance, or individual rooms?',
        'How many doors, gates and lanes need control?',
        'Should access depend on job role or on the time of day?',
        'Which areas need two-factor identification?',
        'Should entries feed into time attendance or visitor management?',
      ],
    },
    'Common reader options:',
    {
      list: [
        'Keypad (PIN) readers',
        'Proximity card and RFID readers',
        'Mobile credential readers',
        'Face recognition terminals',
        'Palm and fingerprint readers',
      ],
    },
    'Entrances they can control:',
    {
      list: ['Doors with electric locks', 'Tripod turnstiles', 'Flap and swing barriers', 'Speed gates', 'Vehicle barriers and parking gates'],
    },
    'As a rule of thumb: card or face readers on office doors; flap or swing barriers with face or card readers in the main lobby; tripod or full-height turnstiles for staff entrances and sites; and vehicle barriers with UHF or number-plate readers for car parks.',
  ] as ContentBlock[],
  links: [
    { label: 'ZKTeco products in Qatar', href: '/zkteco-qatar/' },
    { label: 'Gate barrier systems', href: '/zkteco-qatar-gate-barrier-system/' },
    { label: 'RFID, barcode & NFC solutions', href: '/rfid-barcode-nfc-solutions-qatar/' },
  ],
}

export const acContact = {
  heading: 'Access Control Installation in Doha, Qatar',
  text: [
    'Not sure which readers or entrances you need? Our team will visit your site, recommend a layout and send a no-obligation quotation.',
    `Call ${company.phone.display}, WhatsApp ${company.helpline.display} or email ${company.email}.`,
    'We can connect access control with systems you already have, such as CCTV, alarm systems and intercoms, and with time attendance, so the same face or card is used for both.',
    'After installation we enrol your users, train your administrators and support the system from our offices in Doha.',
  ] as ContentBlock[],
  links: [
    { label: 'Contact our team', href: '/contact-us/' },
    { label: 'Time attendance systems', href: '/time-attendance-system-qatar/' },
  ],
}
