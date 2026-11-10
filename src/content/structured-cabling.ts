// /structured-cabling-data-voice-qatar/ copy: kept from the old WordPress page of the same URL (requested),
// split into sections. Changes: the old copy had been machine-reworded in places, so garbled words were
// put back to their plain meaning ("un protected bent pair" → unshielded twisted pair, "protected contorted
// pair" → shielded twisted pair, "data focuses" → data centres, "forestalls outsider crosstalk through a
// link shield" → prevents alien crosstalk through a cable shield, and similar); typos fixed ("Allieds",
// "Iso"); the old helpline +974 3002 9868 replaced with the numbers in company.ts. No pictures (requested).
// VERIFY: ISO 9001 certification, fibre optic certified staff, "100%" and "top/best" claims are the
// company's own; product warranties depend on the item.
import { company } from './company'
import type { ContentBlock } from './types'

export const cablingHero = {
  eyebrow: 'Well-planned solutions and quality work from start to end',
  heading: 'Structured Cabling Data & Voice in Qatar',
  lead: 'Network cables are used to connect network supported gadgets or devices and transfer data and information between exchanges, data storage, IP phones and other network products and solutions.',
  text: [
    'Allied Enterprises is an end-to-end network cabling supplier with the resources to plan and develop structured cabling in Qatar. Providing a network cabling service throughout a business involves cable laying, installation of connectors and faceplates, network cabinets and testing of cables.',
    'Depending on the requirement, the cable will be unshielded twisted pair (UTP), screened (foil) unshielded twisted pair (F/UTP), shielded twisted pair (STP), or multimode or single mode fiber optics.',
  ],
  highlight: { value: '10000+', label: 'installations as of 2026' },
  badge: 'ISO 9001:2015 certified company',
  primary: { label: 'Request a Quote', href: '/contact-us/' },
}

export const cablingCompany = {
  heading: 'Structured Cabling Company in Qatar',
  text: [
    'Allied Enterprise is one of the top structured cabling companies in Qatar. We offer solid connectivity designed for your company that allows proper data transfer. We consistently use good quality cables from structured cabling brands in Qatar, and we make sure your data cabling is effective in terms of cable quality and project management. Voice cabling and data cabling are the basic components of your network, and as a structured cabling company in Qatar, you can always depend on our commitment.',
    'Allied Enterprise Qatar offers outstanding structured cabling solutions in Qatar. We have expertise in the design and installation of structured cabling systems, with an emphasis on new construction and corporate relocations. Whether your network is ten PCs or ten buildings on a campus, Allied Qatar can provide the fiber and copper network cabling needed to connect data and voice over the Local Area Network. Our structured cabling technicians have broad hands-on knowledge of large-scale corporate installation, construction, corporate relocation and expansion.',
    'Our structured cabling service specialises in making business and industrial information mobility systems available. It offers a wide range of products and services that can be delivered anywhere in the country. We provide state-of-the-art cabling infrastructure and after sales services, from the design of the structured cabling system to testing, installation and documentation.',
    'Our company is ISO 9001 certified, and our staff and engineers are highly qualified, with fiber optic certified capabilities and a wealth of experience in technical and mechanical solutions. Our certified and trained technicians and installers are on the ground to supervise the setup and installation of your cabling network to ensure there are no errors or inconsistencies.',
    'We are fully capable of providing data, voice and video cabling services for consistent, clear communication and transfer of data and information, with cabling systems that reach desktops, data centres and other destinations.',
    'You can have confidence in the quality of our products, as they are state of the art and up to industry standards. Our staff are highly trained and are continually updated on the advances and improvements in the data transmission industry. Our cables and wiring systems are covered by specific warranties, which vary depending on the product and other details.',
  ] as ContentBlock[],
}

export const cablingTypes = {
  heading: 'Cable Types and our Structured Cabling Installation',
  text: [
    'The most commonly used types of network cable are twisted pair cables. Twisted pair cable is used for connectivity in many Ethernet networks. Fiber optic cabling is used where high bandwidth is required, or where the cable length needed is beyond what UTP cable can handle. Fiber cabling is used mostly in data centre environments, where bandwidth is essential. Banks, hospitals, large campuses and airports are typical examples of where fiber cabling is used.',
    { subheading: 'Screened Unshielded Twisted Pair Wiring' },
    'Category 6A F/UTP data cabling prevents alien crosstalk through a cable shield. These screened data cable designs resist deformation and allow less restrictive installation practices. The smaller cable diameter offers a greater pathway fill density. Connectors and patch panels in screened data cabling are designed with earthing as a main priority.',
    { subheading: 'Shielded with Foil Twisted Pair Wiring' },
    'SFTP cables are copper cables better suited to network wiring in buildings that are subject to high electrical interference or frequent radio transmissions. These cables largely eliminate crosstalk between pairs and between cables.',
    { subheading: 'Fiber Optic Cabling' },
    'Fiber optic network cabling is considered the general network connection method for data centres. Fiber optic cabling is available in single mode and multimode forms. Multimode fiber allows multiple modes of light; multimode core sizes are commonly 50 µm and 62.5 µm. Single mode fiber allows just one pathway of light to travel inside the fiber.',
  ] as ContentBlock[],
  links: [{ label: 'Fiber optic testing (OTDR & OLTS)', href: '/fiber-optic-testing-otdl-olts-qatar/' }],
}

export const cablingChoose = {
  heading: 'Choosing a Data Cabling Company in Qatar',
  text: [
    'Some structured cabling companies try to compete in a fast-moving market by looking only for financial benefit, without regard to work quality and ethics. The outcome for their clients can be poor. In this scenario Allied Enterprises stands out: our experienced professionals will give you complete satisfaction by giving 100% from our side, bringing the communication and connectivity of your peripherals to a higher bandwidth.',
    'We take structured cabling and networking to another level with forefront services. Our data cabling and structured cabling solutions in Qatar are designed with high calibre and today’s business bandwidth requirements in mind. We have networking products to support all connectivity methods, including voice and data, and we offer the greatest flexibility for every business specialty or customisation requirement. Allied Enterprises Qatar provides an excellent structured cabling installation service across Qatar.',
    'Allied Enterprises has already served major industries including hospitality, transportation, retail, logistics, health care and education. Our objective is to make your peripherals and infrastructure produce an optimum result and to minimise risks.',
    `Contact Allied Enterprise Qatar today for your data cabling needs or for purchasing products in Qatar. Call ${company.phone.display}, WhatsApp ${company.helpline.display} or email ${company.email}.`,
  ] as ContentBlock[],
  links: [
    { label: 'PABX & IP telephone systems', href: '/pabx-system-qatar/' },
    { label: 'Contact our team', href: '/contact-us/' },
  ],
}
