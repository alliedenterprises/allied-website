// /rfid-barcode-nfc-solutions-qatar/ copy (new page: no old WordPress URL; the menu, the home services
// carousel and the access control page already link here).
// Kept deliberately short and plain (requested): what each technology is in a sentence or two, what we
// supply, where it helps, a few FAQs. No technical deep-dive.
// Keyword focus (not volume-verified): primary "RFID solutions Qatar"; supporting "barcode scanner /
// barcode printer Qatar", "NFC tags Qatar", "RFID tags and readers". The asset management page owns
// "asset management system"; this page links there for the software.
// Brands: Zebra, Honeywell and Newland are on the home page's partner strip (home.ts).
// VERIFY with the company: each product in rfidProducts is actually supplied, and card compatibility
// with the ZKTeco readers sold.
import type { ContentBlock, FaqItem, IconCard, PageImage } from './types'

export const rfidHero = {
  eyebrow: 'Auto-ID · Tracking · Qatar',
  heading: 'RFID, Barcode & NFC Solutions in Qatar',
  lead: 'Tags, labels, scanners and readers that help you identify and track stock, assets and people quickly and accurately.',
  text: [
    'We supply, install and support RFID, barcode and NFC products in Doha, from brands including Zebra, Honeywell and Newland.',
  ],
  image: {
    src: '/images/services/rfid-barcode-nfc-card.webp',
    width: 960,
    height: 600,
    alt: 'RFID tag, QR code and barcode label being verified by NFC on a smartphone',
  } as PageImage,
  highlight: { value: '3', label: 'technologies, one local supplier' },
  badge: 'Zebra · Honeywell · Newland hardware',
  primary: { label: 'Request a Quote', href: '/contact-us/' },
}

export const rfidBasics = {
  heading: 'RFID, barcode and NFC in simple terms',
  intro: 'Each one gives an item a unique ID that can be scanned. The difference is how it is read.',
  items: [
    {
      title: 'RFID',
      text: 'Tags read by radio, without scanning items one by one. A reader can count hundreds of items in seconds, even inside boxes.',
      icon: 'rfid',
    },
    {
      title: 'Barcode & QR code',
      text: 'Printed labels read by a scanner or phone camera. The simplest, lowest-cost way to label products, files and assets.',
      icon: 'scanner',
    },
    {
      title: 'NFC',
      text: 'Tags and cards that work with a tap. Used for staff ID and access cards, and readable by most smartphones.',
      icon: 'handheld',
    },
    {
      title: 'We help you choose',
      text: 'Not sure which one you need? We recommend the right option, supply and install it, and support you locally.',
      icon: 'tools',
    },
  ] as IconCard[],
}

export const rfidProducts = {
  heading: 'RFID, barcode and NFC products we supply',
  items: [
    'Barcode and QR code scanners',
    'Barcode and label printers',
    'RFID tags and labels',
    'RFID readers and handhelds',
    'NFC tags, cards and key fobs',
    'Labels and printer ribbons',
  ],
}

export const rfidUses = {
  heading: 'Where it helps',
  text: [
    'RFID, barcodes and NFC save time and cut errors wherever items need to be counted, tracked or checked:',
    {
      list: [
        'Asset tracking and stocktaking',
        'Warehouse and inventory control',
        'Retail stock and point of sale',
        'Staff ID cards, access control and attendance',
        'Vehicle and parking access',
      ],
    },
  ] as ContentBlock[],
  links: [
    { label: 'Asset management system', href: '/asset-management-solution-qatar/' },
    { label: 'Access control systems', href: '/access-control-system-qatar/' },
    { label: 'Time attendance systems', href: '/time-attendance-system-qatar/' },
    { label: 'Gate barriers and parking', href: '/zkteco-qatar-gate-barrier-system/' },
  ],
}

export const rfidFaq = {
  heading: 'RFID, barcode and NFC: frequently asked questions',
  items: [
    {
      question: 'Which is better, RFID or barcodes?',
      answer: [
        'Barcodes cost less and suit most needs. RFID saves time when you count many items often, because it reads many tags at once without pointing at each one.',
      ],
    },
    {
      question: 'Can I read NFC tags with my phone?',
      answer: [
        'Yes. Most modern Android phones and iPhones read NFC tags. Other RFID tags need an RFID reader or handheld.',
      ],
    },
    {
      question: 'Do you supply cards for ZKTeco attendance and access control?',
      answer: [
        'Yes. We supply proximity and smart cards and key fobs. Tell us your device model and we will confirm the right card.',
      ],
    },
    {
      question: 'How much does an RFID or barcode system cost?',
      answer: [
        'It depends on the number of items and the hardware you need. Contact our team in Doha for a quotation.',
      ],
    },
  ] as FaqItem[],
}
