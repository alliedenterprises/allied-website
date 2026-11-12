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
  output: 'standalone',
  // The standalone build copies sharp's .node binary but not the libvips DLLs it loads on Windows.
  // Without them sharp fails to load and next/image silently serves every image at full size
  // (found 2026-11-12: a 1100px logo was sent for a 190px slot). On Linux this glob matches nothing.
  outputFileTracingIncludes: {
    '/*': ['./node_modules/@img/sharp-win32-x64/lib/*'],
  },
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
    // 75 = default for normal images; 80 = homepage banners and partner logos
    // 92 = no longer used, kept so image URLs in already-cached HTML keep working
    // (Next 16 requires every quality used by next/image to be listed here)
    qualities: [75, 80, 92],
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

const config = withPayload(nextConfig, { devBundleServerPackages: false })

// withPayload sends `Accept-CH`, `Critical-CH` and `Vary: Sec-CH-Prefers-Color-Scheme` on every path so the
// admin panel can open in the OS colour scheme. On the public site `Critical-CH` makes Chrome request each
// page twice on a first visit (~0.8 s on mobile in Lighthouse) for a hint nothing there reads (the site
// has its own theme script). Keep those headers on the admin panel only; everything else is unchanged.
const CLIENT_HINT_KEYS = new Set(['accept-ch', 'critical-ch', 'vary'])
const payloadHeaders = config.headers

export default {
  ...config,
  async headers() {
    const rules = (await payloadHeaders?.()) ?? []
    return rules.flatMap((rule) => {
      const isPayloadHintRule =
        rule.source === '/:path*' && rule.headers.some((h) => h.key.toLowerCase() === 'critical-ch')
      if (!isPayloadHintRule) return [rule]
      const hints = rule.headers.filter((h) => CLIENT_HINT_KEYS.has(h.key.toLowerCase()))
      const rest = rule.headers.filter((h) => !CLIENT_HINT_KEYS.has(h.key.toLowerCase()))
      return [
        ...(rest.length ? [{ ...rule, headers: rest }] : []),
        { ...rule, source: '/admin/:path*', headers: hints },
      ]
    })
  },
} satisfies NextConfig
