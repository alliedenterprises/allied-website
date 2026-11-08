import { company } from '@/content/company'

const businessId = `${company.domain}/#business`

function postalAddress(office: (typeof company.offices)[number]) {
  return {
    '@type': 'PostalAddress',
    streetAddress: office.streetAddress,
    addressLocality: office.addressLocality,
    addressCountry: office.addressCountry,
  }
}

const [mainOffice, ...otherOffices] = company.offices

const business = {
  '@type': 'LocalBusiness',
  '@id': businessId,
  name: company.name,
  alternateName: company.shortName,
  description: company.description,
  url: company.domain,
  logo: `${company.domain}${company.logo}`,
  image: `${company.domain}${company.logo}`,
  email: company.email,
  telephone: company.phone.e164,
  address: postalAddress(mainOffice),
  areaServed: { '@type': 'Country', name: 'Qatar' },
  openingHoursSpecification: company.hours
    .filter((h) => h.opens && h.closes)
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: company.helpline.e164,
      email: company.email,
      areaServed: 'QA',
      availableLanguage: ['English'],
    },
  ],
  department: otherOffices.map((office) => ({
    '@type': 'LocalBusiness',
    name: `${company.name} – ${office.label}`,
    telephone: company.helpline.e164,
    address: postalAddress(office),
    parentOrganization: { '@id': businessId },
  })),
  sameAs: company.social,
}

// WebSite node: tells Google the site name to show above the URL in results ("Allied Enterprises")
const website = {
  '@type': 'WebSite',
  '@id': `${company.domain}/#website`,
  url: `${company.domain}/`,
  name: company.shortName,
  alternateName: company.name,
  publisher: { '@id': businessId },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [website, business],
}

/** Site-wide WebSite + LocalBusiness structured data (rendered once in the root layout). */
export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      // `<` is escaped to prevent breaking out of the script tag
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
    />
  )
}
