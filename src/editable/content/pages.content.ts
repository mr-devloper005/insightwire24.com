import { slot4BrandConfig } from '@/editable/theme/brand.config'

const brand = slot4BrandConfig.siteName

export const pagesContent = {
  home: {
    metadata: {
      title: 'Media distribution, press releases, and newsroom updates',
      description: `${brand} distributes press releases and media coverage to the right channels — verified sources, real-time reach, and a clean newsroom experience.`,
      openGraphTitle: 'Media distribution and newswire updates',
      openGraphDescription: 'Distribute announcements, track coverage, and browse newsroom releases through one focused media platform.',
      keywords: ['media distribution', 'press release', 'newswire', 'press distribution', 'newsroom'],
    },
    hero: {
      badge: 'Newswire & media distribution',
      title: ['Distribute your story', 'to the channels that matter.'],
      description: `${brand} turns announcements into reach — press releases, media coverage, and public updates delivered to verified channels and discovered by the right audience.`,
      primaryCta: { label: 'Open the newsroom', href: '/updates' },
      secondaryCta: { label: 'Search the archive', href: '/search' },
      searchPlaceholder: 'Search releases, topics, sources, and categories',
      focusLabel: 'On the wire',
      featureCardBadge: 'live release rotation',
      featureCardTitle: 'The newest releases lead the wire in real time.',
      featureCardDescription: 'Fresh announcements and media coverage stay at the center of the experience the moment they are distributed.',
    },
    intro: {
      badge: 'Why the wire',
      title: 'Built for distribution, discovery, and trust across every channel.',
      paragraphs: [
        `${brand} brings press releases, media coverage, and public updates together so a single announcement can reach every relevant channel without friction.`,
        'Instead of scattering releases across disconnected feeds, the platform keeps them organized by category and source, with consistent navigation and fast discovery.',
        'Whether a reader starts with a breaking release, a category, or a search, they keep finding related coverage — and your story keeps working long after it ships.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Real-time release distribution across verified channels.',
        'Category-led newsroom organized for fast discovery.',
        'Clean, reading-first layout that keeps coverage front and center.',
        'Lightweight, premium interactions that stay fast on any device.',
      ],
      primaryLink: { label: 'Browse releases', href: '/updates' },
      secondaryLink: { label: 'Contact the desk', href: '/contact' },
    },
    cta: {
      badge: 'Start distributing',
      title: 'Get your announcement on the wire and in front of the right audience.',
      description: 'Send a press tip or distribute a release, then track coverage across one connected newsroom experience.',
      primaryCta: { label: 'Send a press tip', href: '/contact' },
      secondaryCta: { label: 'Join the readership', href: '/signup' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest releases in this channel.',
    },
  },
  about: {
    badge: 'Our story',
    title: 'A clearer, faster way to distribute and discover media.',
    description: `${brand} is built to make media distribution feel effortless — press releases, coverage, and public updates delivered and discovered through one unified newsroom.`,
    paragraphs: [
      'Instead of splitting announcements across disconnected feeds, the platform keeps releases organized by channel and category so they stay easy to find and easy to act on.',
      'Whether someone arrives through a breaking release, a category, or a search, they can keep exploring related coverage without losing context — and every story keeps working long after it ships.',
    ],
    values: [
      {
        title: 'Distribution-first',
        description: 'We prioritize reach, clarity, and speed so every release lands on the right channels and in front of the right audience.',
      },
      {
        title: 'Connected coverage',
        description: 'Releases, categories, and sources stay linked so discovery feels natural across the entire newsroom.',
      },
      {
        title: 'Verified and trusted',
        description: 'Clean structure and verified sourcing help readers and partners find credible coverage faster.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${brand}`,
    title: 'Reach the desk that fits what you are distributing.',
    description: 'Tell us what you are announcing, pitching, or launching. We route it to the right lane — editorial, distribution, or partnerships — instead of one generic inbox.',
    formTitle: 'Send a message',
  },

  search: {
    metadata: {
      title: 'Search the newsroom',
      description: 'Search press releases, media coverage, topics, and categories across the wire.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find releases, coverage, and sources faster.',
      description: 'Use keywords, categories, and channels to discover releases from every active section of the newsroom.',
      placeholder: 'Search by keyword, topic, category, or source',
    },
    resultsTitle: 'Latest across the wire',
  },
  create: {
    metadata: {
      title: 'Create a release',
      description: 'Draft and submit a new release for distribution.',
    },
    locked: {
      badge: 'Newsroom access',
      title: 'Log in to publish a release.',
      description: 'Use your account to open the publishing workspace and prepare a release for distribution across the wire.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Prepare a release for the wire.',
      description: 'Choose the channel, add the details, and prepare a clean, distribution-ready release with sources, links, summary, and body.',
    },
    formTitle: 'Release details',
    submitLabel: 'Submit release',
    successTitle: 'Release submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: `Log in to ${brand}.`,
      badge: 'Newsroom access',
      title: 'Welcome back to the wire.',
      description: 'Log in to keep browsing coverage, manage submissions, and distribute new releases from your account.',
      formTitle: 'Log in',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then log in.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: `Create your ${brand} account.`,
      badge: 'Join the wire',
      title: 'Create your account and start distributing.',
      description: 'Create an account to access the publishing workspace, save your details, and distribute releases across the newsroom.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Log in',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related releases',
      fallbackTitle: 'Release details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested releases',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit official site',
    },
  },
} as const
