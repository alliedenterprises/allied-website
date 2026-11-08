// /audio-video-intercom-qatar/ copy: kept from the old WordPress page of the same URL (requested),
// split into sections. Changes: grammar fixed where the old text was hard to read (the stray
// "Therefore" openings, "Subsection" → substation, "deatiled"), the "Conclusion" heading renamed to
// describe the section, and the old helpline +974 3002 9868 replaced with the numbers in company.ts.
// No pictures (requested).
import { company } from './company'
import type { ContentBlock } from './types'

export const intercomHero = {
  eyebrow: 'Audio and video intercom systems',
  heading: 'Audio & Video Intercom Systems in Qatar',
  lead: 'Are you in need of audio and video intercom systems? These modern systems provide great safety and reliability at the door: with an audio and video intercom you can easily see the person standing outside your door.',
  text: [
    'Residential areas require complete security nowadays because we cannot trust an unknown person. Use an intercom system to stop an unknown guest from entering your house, by watching them clearly through the video intercom first.',
  ],
  highlight: { value: '3000+', label: 'installations as of 2026' },
  badge: 'Installation and support in Doha',
  primary: { label: 'Request a Quote', href: '/contact-us/' },
}

export const intercomTypes = {
  heading: 'Audio and Video Intercom Systems Available in Qatar',
  text: [
    'Each type of intercom system suits a different use, and every type can be used for the security and protection of your residential area. Intercom systems also work well in hospitals, homes, offices, educational institutions and many other places, because the protection of every person is vital these days. These are the main types of intercom system:',
    { subheading: 'Wireless intercoms' },
    'This audio intercom system works wirelessly, so it does not need wires to operate. You can use it at home to avoid running cables. These systems are cost-efficient and reliable.',
    { subheading: 'Wired intercom systems' },
    'As the name suggests, this intercom system uses wires to work. It is a very professional intercom system because it offers more privacy than other systems, and it eliminates disturbing interference from other systems in the neighbourhood. Installation is easy and quick.',
    { subheading: 'Video intercoms' },
    'Intercom systems come in three forms: audio only, video only, and audio and video. An audio and video intercom lets you see the person at the door through a camera attached to the door phone. A video intercom system consists of a camera, a push button and a speaker, through which you can talk to the person standing in front of the door.',
    { subheading: 'Apartment intercoms' },
    'The door locking system can also depend on the intercom system. Apartment intercoms restrict entry by unknown visitors: the door is unlocked only for the people you choose to let in. In this way you remain protected and safe at home.',
    { subheading: 'Two-way radios' },
    'Two-way radio intercoms use a base station system for clear communication. Mobile radios make it easy to communicate over long distances.',
    { subheading: 'Security intercom systems' },
    'A security intercom system lets you maintain security from a different location. It is installed at the entrance door of a locked building and at the attended part of the building. A simple security system consists of two main parts: a master station and a substation. The master station receives communication inside the building, and the substation originates communication from outside the building.',
  ] as ContentBlock[],
}

export const intercomBenefits = {
  heading: 'Benefits of Using a Video Intercom System at the Door',
  text: [
    { subheading: 'Checking visitors' },
    'With a video intercom at the door you can instantly check the visitor standing outside your home or office. Street noise will not disturb you, and you can check the entrance at any moment without any problem.',
    { subheading: 'Access control' },
    'Intercom systems are well suited to offices because they help manage access to restricted parts of the building quickly. They can be connected with CCTV systems, so you can also check the work of other security staff.',
    { subheading: 'Crime prevention' },
    'An intercom system helps prevent crime. You can check the condition of entrance gates and restricted areas with a visual security system, which makes it much harder for intruders to get in.',
    { subheading: 'Speed of use' },
    'A video intercom makes life easier. After checking the visitor on the screen, you can open the entrance gate from inside your home with the press of a button.',
    { subheading: 'Record keeping' },
    'A video intercom system can record and save the image of the person standing outside your door, so you can view it again later if you need to.',
    { subheading: 'Security' },
    'These systems protect your property. A connected CCTV camera can make you aware of unusual situations without alerting the person at the entrance gate.',
  ] as ContentBlock[],
  links: [{ label: 'Access control systems', href: '/access-control-system-qatar/' }],
}

export const intercomContact = {
  heading: 'Intercom Installation in Qatar',
  text: [
    'Audio and video intercom systems have become an essential part of protecting homes and workplaces. Protect yourself and the people you live and work with using this advanced technology. The door phone lets you talk to the person standing outside your door quickly and easily, and the intercom can be connected with CCTV cameras and other security devices.',
    'Start the installation of your audio and video intercom system so that you can protect your loved ones from intruders.',
    `Keep connected with Allied Enterprises Qatar for detailed information on audio and video intercom systems. Call ${company.phone.display}, WhatsApp ${company.helpline.display} or email ${company.email}.`,
  ] as ContentBlock[],
  links: [
    { label: 'Public address systems', href: '/public-address-system-qatar/' },
    { label: 'Contact our team', href: '/contact-us/' },
  ],
}
