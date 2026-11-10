import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

// Vercel deployments (previews) must never be indexed; production runs on the EC2 server.
// Set ALLOW_INDEXING=true if production is ever hosted on Vercel. Matches src/app/robots.ts.
const blockIndexing = process.env.VERCEL === '1' && process.env.ALLOW_INDEXING !== 'true'

const nextConfig: NextConfig = {
  // every old WordPress URL ends in a slash; they must keep their exact paths
  trailingSlash: true,
  experimental: {
    // branded 404 for unmatched URLs (src/app/global-not-found.tsx): the app has two root layouts
    // (public site and Payload admin), so a normal root not-found page cannot be used
    globalNotFound: true,
  },
  async headers() {
    return blockIndexing ? [{ source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }] : []
  },
  // Old WordPress URLs that will not be rebuilt, sent straight to the closest new page (permanent, one hop).
  // These three appear as Google sitelinks under the brand search (checked 2026-11-10), so they must not 404.
  // Approved by the owner 2026-11-10. Never remove a redirect; record every change in docs/url-inventory.md.
  async redirects() {
    return [
      { source: '/products/', destination: '/zkteco-qatar/', permanent: true },
      { source: '/vision/', destination: '/about-us/', permanent: true },
      { source: '/team-allied/', destination: '/about-us/', permanent: true },
    ]
  },
  images: {
    // 75 = default for normal images; 92 = high-quality homepage banners
    // (Next 16 requires every quality used by next/image to be listed here)
    qualities: [75, 92],
    localPatterns: [
      {
        pathname: '/api/media/file/**',
      },
      {
        // site images in /public/images (logo, icons, etc.)
        pathname: '/images/**',
        search: '',
      },
    ],
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  turbopack: {
    root: path.resolve(dirname),
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
