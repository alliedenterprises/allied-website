// /public-address-system-qatar/ copy: kept from the old WordPress page of the same URL (requested),
// split into sections. Changes: the unfinished brand sentence ("We represent prestigious PA brands such
// as — ——— Address System") rewritten without the missing names; garbled phrases fixed ("Relax the magic
// of surround sound", "Remove the appearance of hidden speakers", "sound intensification", the
// selection-factor bullets); the stray "Core Terms." dropped; the old helpline +974 3002 9868 replaced
// with the numbers in company.ts. No pictures (requested).
// VERIFY: the PA brands Allied represents (naming them would help), home theatre and HDMI products,
// "leading … installer" / "the best" / "guarantee" were reworded as facts on 2026-11-09 (SEO audit).
import { company } from './company'
import type { ContentBlock } from './types'

export const paHero = {
  eyebrow: 'Public address and sound systems',
  heading: 'Public Address System in Qatar',
  lead: 'A public address system, or PA system, is an important component of any building, school or office. Its main purposes are public announcements, background music and, most importantly, emergency evacuation.',
  text: [
    'A sound system should not be confused with a public address system: a sound system is for live music, whereas a PA system reproduces recorded music and speech in buildings and institutions.',
    'With so many different products on the market, buying a PA system can be a tough choice for a first-time buyer, and the decision becomes harder still if you don’t understand the technical terms and requirements that manufacturers use.',
  ],
  highlight: { value: '3000+', label: 'installations as of 2026' },
  badge: 'Design, supply and installation in Doha',
  primary: { label: 'Request a Quote', href: '/contact-us/' },
}

export const paSupply = {
  heading: 'Public Address Systems and Sound Systems in Qatar',
  text: [
    'Public address systems remain one of the most efficient means of communicating with the general public and staff. A public address system for small and large venues, such as school auditoriums, malls, restaurants, and train, metro, airport and bus terminals, is very important and often mandatory. In simple terms, a public address system is required to make announcements in public, institutional and commercial buildings.',
    'Allied Enterprises is a reliable provider of sound systems and public address systems in Qatar, with accessories that include audio power amplifiers, audio amplifiers, sound mixers, portable PA systems, PA amplifiers, public address wall amplifiers, PA power speakers, public address driver units and PA stands. Choose from a diverse sound system range in Qatar, including home theatre systems, speaker systems, loudspeakers, home audio systems, music systems, ceiling speakers and high-quality HDMI cables that enhance the audio experience with high-quality surround sound.',
    'As a public address system installer in Qatar, we work with high-quality audio brands to get clear, even sound from every speaker in the system. Enjoy the magic of surround sound as it resounds through the entire house, and hidden speakers without cluttered, messy wires give you a smooth, elegant finish.',
    'We represent reliable PA brands that manufacture a full range of PA equipment, including mixers, amplifiers and ceiling speakers. We can serve your PA needs whether your requirement is a digital PA system or a conventional system.',
    'We install at a competitive and affordable price to meet the different needs of industry applications. Our aim is to provide innovative products and top-notch services that meet and exceed our customers’ expectations.',
  ] as ContentBlock[],
}

export const paWhatIs = {
  heading: 'What is a PA System?',
  text: [
    'Allied Enterprises Qatar offers modern technology in public address systems. A PA system is an electronic sound amplification and distribution system that uses an amplifier, microphones and loudspeakers to let a person address a large audience, and helps groups enjoy gatherings, events and music concerts.',
    'Simple PA systems are often used in small environments such as school auditoriums, government service centres and small business workplaces. In public, institutional and commercial buildings, and in crowded places such as airports, PA systems with many speakers are widely used to make announcements. Some PA systems let occupants respond to announcements using a microphone provided in the room.',
    'The quality of a public address system installed for a specific purpose is of utmost importance. The right technology, the right hardware and the right people to install it are the key points to keep in mind.',
    'Looking for flexible, enjoyable and credible built-in public address equipment for your new construction? Our public address system range is designed for public addressing and emergency purposes, and these fully digital systems play an important part in small and medium-sized applications.',
    'PA systems come in many shapes and sizes, from very complex installations in large stadiums to a basic microphone connected to a home stereo system. Public address systems are also used to play light music at airports, hospitals, factories, showrooms and colleges.',
  ] as ContentBlock[],
}

export const paRequirements = {
  heading: 'Requirements of a public address system',
  items: [
    'Avoid acoustic feedback',
    'Distribute sound intensity uniformly',
    'Reduce reverberation',
    'Use proper speaker orientation',
    'Select proper microphones and loudspeakers',
    'Create a sense of direction',
    'Match loudspeaker impedances properly',
    'Provide proper grounding',
    'Use a closed ring connection for loudspeakers',
  ],
}

export const paFactors = {
  heading: 'Factors to Consider When Selecting a PA System',
  text: [
    {
      list: [
        'The power output of the P.A. system should be sufficient for the application.',
        'The number of microphones that can be connected at the input.',
        'Provision for connecting a recorder or CD player at the input.',
        'A tone control or graphic equalizer circuit.',
        'The ability to operate the P.A. system on DC batteries in case of a power failure.',
        'Separate volume control for each microphone input.',
        'The number of speakers the P.A. system can drive.',
        'Support for wireless microphones.',
        'Size, weight and quality.',
        'Reliable operation and after-sales service.',
      ],
    },
    'We keep up with the latest developments in the field and recommend what suits your building.',
    `Contact our sales engineers and they’ll work with you to custom design the right business audio system for your application, needs and budget. Call ${company.phone.display}, WhatsApp ${company.helpline.display} or email ${company.email}.`,
  ] as ContentBlock[],
  links: [
    { label: 'Audio & video intercom', href: '/audio-video-intercom-qatar/' },
    { label: 'Structured cabling', href: '/structured-cabling-data-voice-qatar/' },
    { label: 'Contact our team', href: '/contact-us/' },
  ],
}
