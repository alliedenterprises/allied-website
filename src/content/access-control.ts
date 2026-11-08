// /access-control-system-qatar/ copy: kept from the old WordPress page of the same URL (requested),
// split into sections. Changes: typos fixed ("you building", "Tailgaiting"), the helpline typo
// "33338694" corrected to 33338964 (src/content/company.ts), "four objectives" (seven were listed)
// changed to "objectives", "TEAM ALLIED" written as "Team Allied", and the old heading levels
// (H3/H4 used as section titles) turned into H2s. The old page's 10 links to boonedam.com.au
// and Wikipedia were not carried over. No pictures (requested).
// NOTE: much of this copy closely follows Boon Edam articles (an entrance manufacturer); rewriting
// it in Allied's own words would be stronger for SEO.
// VERIFY: "leading … provider", "best … supplier in Qatar", and integration with CCTV, alarm systems,
// intercoms and back-to-base monitoring are the company's own claims.
import type { ContentBlock } from './types'

export const acHero = {
  eyebrow: 'Leading access control system provider in Qatar',
  heading: 'Access Control System in Qatar',
  lead: 'Access Control Systems are designed to provide a high level of security, control and convenience. Systems can be designed using swipe cards, pin codes, tags or proximity to gain access to your premises.',
  text: [
    'The great advantage of an access control system is the control of permitting or denying authorised users access into specified areas.',
    'Access control systems can be software driven that provide audit trail reports that will record the day and time authorised users accessed certain areas.',
    'They offer the convenience of changing access permissions easily and cancelling users from the system without the process of re-keying locks.',
    'We have a complete line of security access control systems that can be customised for your requirements.',
  ],
  highlight: { value: '3000+', label: 'installations as of 2026' },
  badge: 'Authorized ZKTeco agent in Qatar',
  primary: { label: 'Request a Quote', href: '/contact-us/' },
}

export const acWhatIs = {
  heading: 'What is an Access Control System?',
  text: [
    'We have come a long way since the introduction of the solid key. Access control systems have become a vital security addition for businesses and buildings worldwide. They provide reassurance and safety to millions of individuals. Integrated in physical security entrances, they create the most secure solution for granting access and mitigating unauthorised entry. The access control system grants and manages access to certain areas of your building, while the physical security entrance operates to deter, detect or prevent unauthorised access.',
    'An access control system is the method of managing access to your building, or certain areas of your building. An access control system typically consists of:',
    {
      list: [
        'access control devices, such as access cards and card readers',
        'access management dashboard',
        'hardware, such as access control panels and access control servers',
      ],
    },
    'Access control systems reduce the risk involved in data- and product theft and increase employee safety. They are commonly installed with a two-factor or multi-factor identification process. They could require a card or token and a piece of information, such as a password.',
    'An access control system determines who is allowed to enter or exit, where they are allowed to exit or enter, and when they are allowed to enter or exit. Historically, this was partially accomplished through keys and locks.',
  ] as ContentBlock[],
}

export const acNotEnough = {
  heading: 'Why an Access Control System Alone is Not Enough',
  text: [
    'Access control devices are often installed alongside swinging doors with the intention of reducing unauthorised entries. However, once open, a swinging door can allow multiple users to go through on one single credential.',
    'This is why combining electronic access control systems with physical security solutions has become increasingly popular. Integrating access control systems into speed gates and security revolving doors solves many issues concerning unauthorised access into buildings and facilities.',
    { subheading: 'What are the objectives in access control?' },
    'They are:',
    {
      list: [
        'Identification',
        'Authentication',
        'Authorization',
        'Confidentiality',
        'Integrity',
        'Availability',
        'Accountability',
      ],
    },
    'This is considered a physical access control. Identity authentication is based on a person’s physical characteristics. The most common physical access controls are used at hospitals, police stations, government offices, data centers, and any area that contains sensitive equipment and/or data.',
  ] as ContentBlock[],
}

export const acAntiTailgating = {
  heading: 'Anti-Tailgating, Anti-Loitering and Anti-Passback',
  text: [
    'Access control systems combined with physical entrance solutions provide a better way to manage, monitor and control access points in a building.',
    { subheading: 'Anti-tailgating' },
    'Most automated access control systems alone cannot detect how many people at one time are entering. Integrate them into physical security entrances and they offer anti-tailgating technology. The access control system will then be able to detect you when you approach the entryway and if you have successfully passed through it.',
    'Depending on the security entrance, the product will either give off a signal or deny access to someone trying to gain unauthorised access.',
    'In busy environments, poor people flow can cause access problems. Tailgating technology helps by letting you pass without interruption, while denying access to unauthorised users.',
    { subheading: 'Anti-loitering' },
    'Accompanying anti-tailgating is anti-loitering technology. Anti-loitering technology monitors your progress through the entryway – ensuring continued movement.',
    { subheading: 'Anti-passback' },
    'Finally, anti-passback technology allows access cards and keys to be monitored. If the system detects a second entry of the same card or key within a small timeframe, access will be denied to the second user. Access cards cannot be “passed back” to other users.',
  ] as ContentBlock[],
}

export const acWhichEntrance = {
  heading: 'What Access Control System to Integrate in which Security Entrance?',
  text: [
    'The best combination of access control system and security entrance is based upon your specific needs. Think about the following:',
    {
      list: [
        'Do you need perimeter security?',
        'How many points of access do you have?',
        'Should there be different authorisation rules based upon job role?',
        'Should there be different time-based authorisation rules?',
        'Are there any rooms or areas where you require an extra layer of security?',
        'Is two factor authentication enough, or do you need multi factor authentication?',
      ],
    },
    'Depending on your need and level of security, there are various access control devices and security entrances you can consider. A few of the possible access control devices are:',
    {
      list: [
        'Keypad readers',
        'Proximity card- or badge readers',
        'RFID readers',
        'Mobile phone based readers',
        'StereoVision',
        'Biometric devices',
      ],
    },
    'For each of these, you need to consider in what type of security entrance you will integrate your chosen access control system. Compatible products are:',
    {
      list: [
        'Access Gates',
        'Tripod Turnstiles',
        'Full Height Turnstiles',
        'Speed Gates',
        'High Security Doors',
        'Revolving Doors',
      ],
    },
    'Perimeter security is mostly taken care of by installing full height turnstiles in combination with proximity cards. Access to your office building can be managed by installing a bank of speed gates in combination with proximity readers, RFID access control systems or biometric devices. For the highest level of security, you will need high security doors and a combination of different access control systems.',
  ] as ContentBlock[],
  links: [
    { label: 'Gate barrier systems', href: '/zkteco-qatar-gate-barrier-system/' },
    { label: 'RFID, barcode & NFC solutions', href: '/rfid-barcode-nfc-solutions-qatar/' },
  ],
}

export const acContact = {
  heading: 'Delivering the Best Access Control Solutions in Doha Qatar',
  text: [
    'Do you need help in determining the best access control solution for your security entrance?',
    'Please contact us on email : info@alliedeprs.com or call us on 33338964',
    'Enjoy the confidence that comes from choosing Team Allied as your preferred access control systems provider and best access control systems supplier in Qatar. You’ll rest easy knowing that you’re getting the leading access control installation services for your home or business.',
    'Team Allied looks forward to hearing what your requirements are and working with you to develop an effective access control solution that ticks all the boxes and meets your specific needs. Contact us on 44718845 or 33338964 today to learn more.',
    'Team Allied access control installation specialists in Qatar have the capability to integrate our systems with other already established security measures in place to reinforce your overall security system. These might include CCTV, alarm systems, intercoms and back to base monitoring, among other options.',
  ] as ContentBlock[],
  links: [
    { label: 'Contact our team', href: '/contact-us/' },
    { label: 'Time attendance systems', href: '/time-attendance-system-qatar/' },
  ],
}
