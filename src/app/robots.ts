import type { MetadataRoute } from 'next'

import { company } from '@/content/company'

/**
 * robots.txt. Production (alliedeprs.com on the EC2 server) allows crawling of the public site and keeps
 * crawlers out of the Payload admin and API. Any Vercel deployment (previews such as allied-web-ten.vercel.app)
 * blocks everything so preview copies never compete with the real site; set ALLOW_INDEXING=true to override
 * if production is ever hosted on Vercel. next.config.ts sends a matching X-Robots-Tag: noindex header.
 */
export default function robots(): MetadataRoute.Robots {
  const blockIndexing = process.env.VERCEL === '1' && process.env.ALLOW_INDEXING !== 'true'

  if (blockIndexing) {
    return { rules: { userAgent: '*', disallow: '/' } }
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'],
    },
    sitemap: `${company.domain}/sitemap.xml`,
  }
}
