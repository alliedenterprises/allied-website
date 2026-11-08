export const company = {
  name: 'Allied Enterprises WLL',
  shortName: 'Allied Enterprises',
  description:
    'Authorized ZKTeco partner in Doha, Qatar for time attendance, access control, HRMS & payroll, and IT infrastructure solutions.',
  // Footer copy — kept word-for-word from the current alliedeprs.com footer
  about: [
    'Allied Enterprises is one of the leading professional vendors in the arena of Time Attendance System, Access Control, Telecommunication contractor, and Vehicle tracking solutions.',
    'Allied Enterprises is a team of passionate young individuals who are committed to making a difference in the way businesses are run.',
    'The company offers a wide array of technical solutions for various needs of homes and businesses which help get better outcomes with a strong operational focus.',
  ],
  // Google Maps listing for "Allied Enterprises" (B Ring Road, Doha)
  map: {
    name: 'Allied Enterprises',
    query: 'Allied Enterprises, Rawdat Al-Khail Street, B Ring Road, Doha, Qatar',
    lat: 25.275252,
    lng: 51.5205542,
    placeId: 'ChIJe_uCU0nFRT4RdY1C7IZv6OU',
  },
  domain: 'https://alliedeprs.com',
  logo: '/images/allied-logo.png',
  email: 'info@alliedeprs.com',
  phone: {
    display: '+974 4471 8845',
    href: 'tel:+97444718845',
    e164: '+97444718845',
  },
  helpline: {
    display: '+974 3333 8964',
    href: 'tel:+97433338964',
    e164: '+97433338964',
    whatsapp: 'https://wa.me/97433338964',
  },
  offices: [
    {
      label: 'Retaj Business Building',
      streetAddress: '204 Retaj Business Building, B Ring Road',
      addressLocality: 'Doha',
      addressCountry: 'QA',
      // footer display (as on the current site)
      lines: ['204 Retaj Business Building B Ring Road', 'Doha Qatar'],
      phones: [
        { label: 'Tel', display: '+974 44718845', href: 'tel:+97444718845' },
        { label: 'Helpline', display: '+974 33338964', href: 'tel:+97433338964' },
      ],
    },
    {
      label: 'Fereej Bin Dirhem',
      streetAddress: '108 Fereej Bin Dirhem, B Ring Road',
      addressLocality: 'Doha',
      addressCountry: 'QA',
      lines: ['108 Fereej Bin Dirhem B Ring Road', 'Doha Qatar'],
      phones: [{ label: 'Tel', display: '+974 33338964', href: 'tel:+97433338964' }],
    },
  ],
  // `text` is shown in the footer; `dayOfWeek`/`opens`/`closes` feed the JSON-LD
  hours: [
    {
      text: 'Sunday to Thursday : 8.00 AM to 5.30 PM',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '08:00',
      closes: '17:30',
    },
    { text: 'Friday : Holiday', dayOfWeek: [], opens: null, closes: null },
    {
      text: 'Saturday : 8.00 AM to 1 PM',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '13:00',
    },
  ],
  social: [
    'https://www.facebook.com/allied.electronics.engineers/',
    'https://twitter.com/infoalliedeprs1',
    'https://www.instagram.com/allied_qatar/',
  ],
} as const
