// /pabx-system-qatar/ copy: kept from the old WordPress page of the same URL (requested), split into
// sections. Changes: the unfinished sentences "We deal with Panasonic——————–.products mention here" and
// "We deal with (mention products)——————." shortened to Panasonic only / dropped; two paragraphs that
// repeated earlier ones almost word for word (the PBX definition and the IVR/voicemail feature list)
// dropped; the machine-reworded "use of PBX" paragraph ("atiny low pool", "shares the road") put back to
// its plain meaning; typos fixed ("Sytem", "an PABX"); the old helpline +974 3002 9868 replaced with the
// numbers in company.ts. The old H3 section titles are now H2s. No pictures (requested).
// VERIFY: Panasonic, "certified specialists", "reputed clients list", installs "in some of the largest
// business offices and multinational organizations in Qatar" is the company's own claim. "Best"/"top" claims were reworded
// as facts on 2026-11-09 (SEO audit).
import { company } from './company'
import type { ContentBlock } from './types'

export const pabxHero = {
  eyebrow: 'Office telephone systems',
  heading: 'PABX System in Qatar',
  lead: 'PABX is a business solution for businesses that need multiple lines for in-house and outside calls. It enables companies to use a single access number which has multiple extensions. This is cheaper compared to the use of many public network connected landlines.',
  text: [
    'A business that uses either PBX or PABX has its own telephone exchange. PABX automates the switching tasks needed to connect calls between extensions.',
    'In a PABX system, there is a designated extension number for each device connected to the exchange. These devices include computer modems, desk phones and fax machines.',
  ],
  highlight: { value: '3000+', label: 'installations as of 2026' },
  badge: 'Sales, installation and support across Qatar',
  primary: { label: 'Request a Quote', href: '/contact-us/' },
}

export const pabxHow = {
  heading: 'How a PABX and IP PBX Telephone System Works',
  text: [
    'The organisation that uses a PABX also maintains and administers it. PABX is used by many call centres and major companies. Popular features include auto attendants, call conferencing, call hold and call transfer.',
    'A PBX telephone system connects the user extensions of your office to the Public Switched Telephone Network or service provider lines. It also allows a business to communicate internally, and shares a minimum number of telephone trunk lines between users. Phone systems are available in various brands and two types: traditional analog PABX and VoIP telephone systems. Using the network infrastructure to connect phones to the central unit, and sharing the same network port for both computers and telephones, significantly reduces infrastructure expense.',
    'The purpose of a PBX was to provide shared access to limited resources. For example, a business may have one, four, eight or more lines from a service provider while the number of users in the organisation is larger than the number of lines; the PBX shares those lines among all the users. Instead of providing a separate, expensive public line for every user, it lets users share a small pool of lines.',
    'A traditional PABX system links every telephone to the central unit with a separate cable to each telephone, and is limited in the versatility that modern business communication needs. A VoIP phone system (IP PBX) operates over the network and communicates using the TCP/IP protocol stack. In the business phone system, an IP PBX serves as the main telephone call switching system.',
    { subheading: 'Features of an IP telephone system' },
    'Businesses can benefit from several advantages with an IP telephone system. IVR, voicemail, call recording, voicemail to email, mobility users, call queue, conference call bridge, telephone CRM integration and remote office connectivity are standard features. With IVR and call queue you can handle more calls with fewer staff.',
    'Voicemail, voicemail to email and mobility make sure you never lose customer contact, even outside the workplace. Conference call bridge, telephone CRM integration and remote office access provide higher efficiency for companies.',
    'In a VoIP phone system, using the Local Area Network (LAN) is about more than convenience: it is what business-friendly VoIP phone system applications should offer, and the core of any advanced VoIP PBX system with built-in versatility.',
  ] as ContentBlock[],
}

export const pabxSolutions = {
  heading: 'Phone System PABX – IP Telephone System',
  text: [
    'We offer complete telephone system PABX solutions and call centre solutions in Qatar. We know that a good telecommunication system is a cornerstone of your organisation. Our telecom products and solutions make sure you are always connected to your business; besides growing with your business, they provide technical features that enhance it. We always make sure our customers get the right telephony solution, and our extensive experience and expertise in this field let us understand and meet your exact business communication needs.',
    'We bring top brands in the telecommunications industry to fulfil our customers’ major requirements. We deal with Panasonic products.',
    { subheading: 'Allied Enterprises – PABX system experts in Qatar' },
    'Allied Enterprises supplies and installs telephone systems across Qatar: PABX systems, PBX systems and IP PBX systems from reputed vendors. The right system makes sure that incoming and outgoing calls reach the right user. It also stays reliable during busy times, grows with your company and delivers technological features that upgrade your phone system.',
    'Choosing a PABX expert company in Qatar to install IP PBX systems is critical. We are certified specialists in Qatar with a reputed client list. Our sales, support and PBX installation service covers the whole of Qatar, so do not waste your time hiring an unprofessional firm for your telephone installation.',
  ] as ContentBlock[],
  links: [{ label: 'Structured cabling data & voice', href: '/structured-cabling-data-voice-qatar/' }],
}

export const pabxValue = {
  heading: 'How We Add Value to You as an Office PABX System Installer in Qatar',
  text: [
    'Our skilled, trained and certified engineers deploy creative and efficient communication networking solutions for each customer, with custom features that best fit their business telecom needs.',
    'We have installed complex IP PBX and PABX systems for enterprises and business offices across Qatar. We work with partner vendors and companies to create unique telecom solutions with stylish, high-tech devices and systems, for a seamless user experience to international telecommunication standards.',
    'Our professional engineers study and analyse each client’s case, with a clear understanding of the problems with the system currently in place. With a complete understanding of the client’s telecommunication requirements, we design the solution that fits. These designs take into account the company’s infrastructure, networking conditions and other factors that affect seamless connectivity.',
    'Our IP telecom systems have been installed and integrated in some of the largest business offices and multinational organisations in Qatar.',
    'The IP telephony systems we provide, IP PBX telephone solutions and PABX telecom systems, can improve the productivity and profitability of an organisation. Our telecom systems have helped reduce phone bills and create an easier platform for communication within organisations.',
    `Allied Enterprises offers telecommunication services in almost every area of Qatar. Call us today for a free consultation and quote on ${company.phone.display}, WhatsApp ${company.helpline.display} or email ${company.email}.`,
  ] as ContentBlock[],
  links: [
    { label: 'Audio & video intercom', href: '/audio-video-intercom-qatar/' },
    { label: 'Contact our team', href: '/contact-us/' },
  ],
}
