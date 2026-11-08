import type { Metadata } from 'next'

import { ContactHero, ContactPanel } from '@/components/sections/Contact'
import { EnquiryForm } from '@/components/sections/EnquiryForm'
import { company } from '@/content/company'
import { contactForm, contactHero, contactInfo, serviceOptions } from '@/content/contact'

// Old WordPress URL, rebuilt at the same path. LocalBusiness JSON-LD (address, phones, hours) is already
// in the layout, so only the breadcrumb is added here.
export const metadata: Metadata = {
  // absolute: the brand is already in the title, so skip the layout's "| …" suffix
  title: { absolute: 'Contact Us | Allied Enterprises, Doha, Qatar' },
  description:
    'Contact Allied Enterprises in Doha for ZKTeco attendance, access control and IT solutions. Call +974 4471 8845, WhatsApp +974 3333 8964 or visit our B Ring Road offices.',
  alternates: { canonical: '/contact-us/' },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${company.domain}/` },
    { '@type': 'ListItem', position: 2, name: 'Contact Us', item: `${company.domain}/contact-us/` },
  ],
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // static, trusted data only
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <ContactHero heading={contactHero.heading} lead={contactHero.lead} image={contactHero.image} />
      <ContactPanel heading={contactInfo.heading} intro={contactInfo.intro}>
        <EnquiryForm
          heading={contactForm.heading}
          intro={contactForm.intro}
          submit={contactForm.submit}
          whatsappNumber={contactForm.whatsappNumber}
          services={serviceOptions}
          messagePlaceholder={contactForm.messagePlaceholder}
          email={company.email}
        />
      </ContactPanel>
    </>
  )
}
