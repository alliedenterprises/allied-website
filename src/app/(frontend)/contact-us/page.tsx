import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { ContactSection } from '@/components/sections/Contact'
import { EnquiryForm } from '@/components/sections/EnquiryForm'
import { company } from '@/content/company'
import { contactForm, contactHero, contactInfo, contactSteps, serviceOptions } from '@/content/contact'

// Old WordPress URL, rebuilt at the same path. LocalBusiness JSON-LD (address, phones, hours) is already
// in the layout, so only the breadcrumb is added here.
export const metadata: Metadata = pageMetadata({
  title: 'Contact Us | Allied Enterprises, Doha, Qatar',
  description:
    'Contact Allied Enterprises in Doha for ZKTeco attendance, access control and IT solutions. Call +974 4471 8845, WhatsApp +974 3333 8964 or visit our B Ring Road offices.',
  path: '/contact-us/',
})

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
      <ContactSection
        heading={contactHero.heading}
        lead={contactHero.lead}
        infoHeading={contactInfo.heading}
        steps={contactSteps}
      >
        <EnquiryForm
          heading={contactForm.heading}
          intro={contactForm.intro}
          submit={contactForm.submit}
          whatsappNumber={contactForm.whatsappNumber}
          services={serviceOptions}
          messagePlaceholder={contactForm.messagePlaceholder}
          email={company.email}
        />
      </ContactSection>
    </>
  )
}
