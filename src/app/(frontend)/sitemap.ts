import type { MetadataRoute } from 'next'

import { company } from '@/content/company'

// Live, canonical pages only: add each new page here, with its trailing slash.
const paths = [
  '/',
  '/about-us/',
  '/contact-us/',
  '/zkteco-qatar/',
  '/time-management/',
  '/it-infrastructure-qatar/',
  '/applications/',
  '/solutions/',
  '/time-attendance-system-qatar/',
  '/access-control-system-qatar/',
  '/hrms-payroll-management-qatar/',
  '/payroll-integration-qatar/',
  '/structured-cabling-data-voice-qatar/',
  '/audio-video-intercom-qatar/',
  '/fiber-optic-testing-otdl-olts-qatar/',
  '/public-address-system-qatar/',
  '/pabx-system-qatar/',
  '/zkteco-qatar-gate-barrier-system/',
  '/biotime-time-attendance-system-qatar/',
  '/sunbirdtime-time-management-system-qatar/',
  '/digital-minimalist-wallet/',
  '/business-process-management/',
  '/wialon-plaftform-for-gps-tracking/',
  '/restaurant-management-software-qatar/',
  '/document-management-scanning-qatar/',
  '/queue-management-qatar/',
  '/enterprise-resource-planning-qatar/',
  '/business-intelligence-qatar/',
  '/geographical-information-systems-qatar/',
  '/school-management-software-qatar/',
  '/asset-management-solution-qatar/',
  '/rfid-barcode-nfc-solutions-qatar/',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `${company.domain}${path}` }))
}
