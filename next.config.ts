import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

const nextConfig: NextConfig = {
  // every old WordPress URL ends in a slash; they must keep their exact paths
  trailingSlash: true,
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
