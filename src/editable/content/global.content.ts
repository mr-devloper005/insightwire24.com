import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Media distribution & newswire',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Media distribution & newswire',
    primaryLinks: [
      { label: 'Newsroom', href: '/updates' },
      { label: 'Press Releases', href: '/updates?category=press-release' },
      { label: 'Media Coverage', href: '/updates?category=news-media' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Open newsroom', href: '/updates' },
      secondary: { label: 'Send a tip', href: '/contact' },
    },
  },
  footer: {
    tagline: 'Newswire & distributed media',
    description: `${slot4BrandConfig.siteName} distributes press releases and media coverage to verified channels — real-time reach, category-led discovery, and a clean newsroom built for trust.`,
    columns: [
      {
        title: 'Newsroom',
        links: [
          { label: 'Latest Releases', href: '/updates' },
          { label: 'Press Releases', href: '/updates?category=press-release' },
          { label: 'Media Coverage', href: '/updates?category=news-media' },
          { label: 'Business News', href: '/updates?category=business' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Built for fast, verified, category-led media distribution.',
  },
  commonLabels: {
    readMore: 'Read release',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Distributed',
  },
} as const
