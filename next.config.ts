import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    remotePatterns: [
      { hostname: 'gngrlabs.com' },
      { hostname: 'cdn.prod.website-files.com' },
      { hostname: 'www.nationaldebtrelief.com' },
      { hostname: 'logo.clearbit.com' },
    ],
  },
}

export default nextConfig
