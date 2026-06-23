import Link from 'next/link'
import { ArrowRight, ArrowUpRight, BarChart3, ChevronsRight, Clock3, Megaphone, Newspaper, Quote, Radio, Send, Share2 } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditableCategory, getEditableExcerpt, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const HERO_IMG = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1700&q=70'
const TILE_IMG = [
  'https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=1000&q=70',
  'https://images.unsplash.com/photo-1557992260-ec58e38d363c?auto=format&fit=crop&w=1000&q=70',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=70',
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=70',
]

function readTime(post: SitePost) {
  const words = getEditableExcerpt(post, 100000).split(/\s+/).filter(Boolean).length
  return `${Math.max(2, Math.round((words + 90) / 90))} min read`
}

const softCard = 'rounded-3xl bg-[var(--slot4-surface-bg)] shadow-[0_18px_50px_rgba(22,24,58,0.08)]'

/* ── 1 · Hero: full-bleed dark image + overlay, huge heading, chevron CTA, floating card ── */
export function EditableHomeHero({ primaryRoute }: HomeSectionProps) {
  const heroTitle = pagesContent.home.hero.title.join(' ') || `${SITE_CONFIG.name}: media distribution for modern business.`

  return (
    <section className="signal-on-dark px-3 sm:px-5">
      <div className="relative mx-auto mt-3 w-full max-w-[var(--editable-container)] overflow-hidden rounded-[2rem] bg-[var(--slot4-dark-bg)]">
        <img src={HERO_IMG} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,17,48,0.94),rgba(15,17,48,0.72)_55%,rgba(67,56,202,0.55))]" />
        <div className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-28">
          <span className="signal-rise inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--slot4-accent-2)]">
            <Radio className="h-3.5 w-3.5" /> {pagesContent.home.hero.badge}
          </span>
          <h1 className="signal-rise mt-6 max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">{heroTitle}</h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">{pagesContent.home.hero.description}</p>

          <div className="mt-9 inline-flex overflow-hidden rounded-xl">
            <Link href="/contact" className="inline-flex items-center bg-white px-7 py-4 text-sm font-extrabold tracking-[0.01em] text-[var(--slot4-dark-bg)] transition hover:bg-[var(--slot4-accent-2)]">Distribute a release</Link>
            <Link href="/contact" aria-label="Distribute a release" className="grid place-items-center bg-[var(--slot4-accent)] px-4 text-white transition hover:bg-[var(--slot4-accent-strong)]"><ChevronsRight className="h-5 w-5" /></Link>
          </div>

          <div className="pointer-events-none absolute bottom-6 right-6 hidden w-[22rem] lg:block">
            <Link href={primaryRoute} className="pointer-events-auto block rounded-2xl bg-[var(--slot4-surface-bg)] p-5 text-[var(--slot4-page-text)] shadow-[0_24px_60px_rgba(0,0,0,0.35)] transition hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span className="text-base font-extrabold tracking-[-0.02em]">See our coverage</span>
                <span className="flex items-center gap-2">
                  <span className="flex -space-x-2">
                    {['bg-[var(--slot4-accent)]', 'bg-[var(--slot4-accent-2)]', 'bg-[var(--slot4-accent-strong)]'].map((c, i) => (
                      <span key={i} className={`h-7 w-7 rounded-full ring-2 ring-white ${c}`} />
                    ))}
                  </span>
                  <span className="rounded-md bg-[var(--slot4-accent)] px-2 py-1 text-xs font-extrabold text-white">10+</span>
                </span>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-[var(--editable-border)] pt-4">
                <span className="max-w-[15rem] text-sm font-semibold text-[var(--slot4-muted-text)]">Releases distributed across the wire, with measurable reach.</span>
                <ArrowUpRight className="h-5 w-5 text-[var(--slot4-accent)]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── 2 · Services on dark: heading + button, 4 line-icon cards, one highlighted + tilted ── */
const services = [
  { icon: Megaphone, title: ['Press Release', 'Distribution'], body: 'We distribute publication-ready announcements to verified channels, reliably and fast.' },
  { icon: Newspaper, title: ['Media Coverage', 'Tracking'], body: 'Surface coverage and editorial pickups, organized by category for quick discovery.' },
  { icon: Share2, title: ['Newswire', 'Syndication'], body: 'Syndicate every release to partner feeds so one story reaches every audience.' },
  { icon: BarChart3, title: ['Reach &', 'Analytics'], body: 'Track distribution performance and discovery across the newsroom in real time.' },
]

export function EditableStoryRail({ primaryRoute }: HomeSectionProps) {
  return (
    <section className="signal-on-dark mt-4 px-3 sm:px-5">
      <div className="mx-auto w-full max-w-[var(--editable-container)] rounded-[2rem] bg-[var(--slot4-dark-bg)] px-6 py-16 text-white sm:px-10 lg:px-14 lg:py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" data-reveal>
          <h2 className="max-w-xl text-4xl font-extrabold leading-[1.04] tracking-[-0.03em] sm:text-5xl">Media solutions built for business</h2>
          <div className="shrink-0">
            <p className="mb-4 max-w-[14rem] text-sm leading-6 text-white/55">Verified distribution for global reach and discovery.</p>
            <Link href={primaryRoute} className="inline-flex overflow-hidden rounded-xl">
              <span className="inline-flex items-center bg-white px-6 py-3.5 text-sm font-extrabold text-[var(--slot4-dark-bg)]">Open newsroom</span>
              <span className="grid place-items-center bg-[var(--slot4-accent)] px-3.5"><ChevronsRight className="h-5 w-5" /></span>
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const highlight = index === 2
            return (
              <div
                key={service.title.join(' ')}
                data-reveal
                style={{ ['--reveal-delay' as string]: `${index * 80}ms` }}
                className={`group rounded-3xl p-7 transition duration-300 ${highlight ? 'bg-white text-[var(--slot4-dark-bg)] shadow-[0_30px_70px_rgba(79,70,229,0.45)] lg:-rotate-3 lg:hover:rotate-0' : 'bg-white/[0.05] text-white hover:bg-white/[0.09]'}`}
              >
                <service.icon className={`h-9 w-9 ${highlight ? 'text-[var(--slot4-accent)]' : 'text-white'}`} strokeWidth={1.5} />
                <h3 className="mt-8 text-2xl font-extrabold leading-[1.05] tracking-[-0.02em]">{service.title[0]}<br />{service.title[1]}</h3>
                <p className={`mt-6 text-sm leading-7 ${highlight ? 'text-[var(--slot4-muted-text)]' : 'text-white/55'}`}>{service.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── 3 · "What We Do?" — centered eyebrow + heading, 2×2 image tiles with overlay + chevron ── */
const tiles = [
  { n: '1', kicker: 'Announcements', title: 'Press Releases' },
  { n: '2', kicker: 'Coverage', title: 'Media Pickups' },
  { n: '3', kicker: 'Distribution', title: 'Newswire' },
  { n: '4', kicker: 'Reach', title: 'Public Updates' },
]

export function EditableMagazineSplit({ primaryRoute }: HomeSectionProps) {
  return (
    <section className="bg-[var(--slot4-page-bg)]">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <p className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--slot4-page-text)]">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--slot4-accent)]" /> What we do
          </p>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-5xl">Smart media distribution solutions</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {tiles.map((tile, index) => (
            <Link
              key={tile.n}
              href={primaryRoute}
              data-reveal
              style={{ ['--reveal-delay' as string]: `${(index % 2) * 90}ms` }}
              className="signal-zoom group relative block aspect-[16/11] overflow-hidden rounded-[1.75rem] bg-[var(--slot4-media-bg)]"
            >
              <img src={TILE_IMG[index]} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,17,48,0)_38%,rgba(15,17,48,0.88))]" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <div className="text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">{tile.n}. {tile.kicker}</p>
                  <h3 className="mt-1.5 text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl">{tile.title}</h3>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-[var(--slot4-dark-bg)] transition group-hover:bg-[var(--slot4-accent)] group-hover:text-white"><ChevronsRight className="h-5 w-5" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 4 · Testimonials + image-free "Latest releases" post grid ── */
const testimonials = [
  { quote: 'Our announcements now reach the right desks the same day. The newsroom view makes coverage effortless to follow.', name: 'Communications Lead', role: 'Technology firm' },
  { quote: 'Clean distribution, verified sourcing, and real-time tracking — exactly what a modern press operation needs.', name: 'PR Director', role: 'Consumer brand' },
  { quote: 'A single release now works across every channel without the usual friction. Discovery is fast and organized.', name: 'Head of Media', role: 'Public agency' },
]

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = collected.length ? collected : posts
  const news = source.slice(0, 6)

  return (
    <>
      <section className="bg-[var(--slot4-surface-bg)]">
        <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
          <div className="mx-auto max-w-2xl text-center" data-reveal>
            <p className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--slot4-page-text)]"><span className="h-2.5 w-2.5 rounded-full bg-[var(--slot4-accent)]" /> Trusted voices</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-5xl">What press teams say</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <figure key={item.name} data-reveal style={{ ['--reveal-delay' as string]: `${index * 80}ms` }} className={`${softCard} flex h-full flex-col p-7`}>
                <Quote className="h-8 w-8 text-[var(--slot4-accent)]" />
                <blockquote className="mt-5 flex-1 text-base leading-8 text-[var(--slot4-page-text)]">“{item.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-[var(--editable-border)] pt-5">
                  <p className="text-sm font-extrabold tracking-[-0.01em]">{item.name}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--slot4-soft-muted-text)]">{item.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {news.length ? (
        <section className="bg-[var(--slot4-page-bg)]">
          <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
            <div className="flex items-end justify-between gap-6" data-reveal>
              <div>
                <p className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--slot4-page-text)]"><span className="h-2.5 w-2.5 rounded-full bg-[var(--slot4-accent)]" /> From the newsroom</p>
                <h2 className="mt-4 text-4xl font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-5xl">Latest releases</h2>
              </div>
              <Link href={primaryRoute} className="hidden items-center gap-2 text-sm font-bold text-[var(--slot4-accent)] hover:gap-3 sm:inline-flex">View all <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {news.map((post, index) => (
                <Link
                  key={post.id}
                  href={postHref(primaryTask, post, primaryRoute)}
                  data-reveal
                  style={{ ['--reveal-delay' as string]: `${(index % 3) * 80}ms` }}
                  className={`${softCard} group flex flex-col p-7 transition duration-300 hover:-translate-y-1.5`}
                >
                  <div className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[var(--slot4-soft-muted-text)]">
                    <span className="rounded-full bg-[var(--slot4-accent-soft)] px-3 py-1 text-[var(--slot4-accent-strong)]">{getEditableCategory(post)}</span>
                    <span className="inline-flex items-center gap-1"><Clock3 className="h-3 w-3" /> {readTime(post)}</span>
                  </div>
                  <h3 className="mt-5 line-clamp-3 text-xl font-extrabold leading-[1.12] tracking-[-0.025em]">{post.title}</h3>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-[var(--slot4-muted-text)]">{getEditableExcerpt(post, 140)}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--slot4-accent)]">Read release <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}

/* ── 5 · CTA banner ── */
export function EditableHomeCta() {
  return (
    <section className="bg-[var(--slot4-surface-bg)]">
      <div className={`${dc.shell.section} pb-20`}>
        <div className="signal-on-dark relative overflow-hidden rounded-[2rem] bg-[var(--slot4-dark-bg)] px-6 py-16 text-center text-white sm:px-12 lg:py-20" data-reveal="zoom">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--slot4-accent)] opacity-30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[var(--slot4-accent-2)] opacity-20 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <p className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--slot4-accent-2)]"><span className="h-2.5 w-2.5 rounded-full bg-[var(--slot4-accent-2)]" /> Let&apos;s collaborate</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-5xl">Put your story on the wire.</h2>
            <p className="mt-5 text-base leading-8 text-white/65">Send a press tip or distribute a release, then track coverage across one focused newsroom.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className={dc.button.accent}><Send className="h-4 w-4" /> Send a press tip</Link>
              <Link href="/signup" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[var(--slot4-dark-bg)]">Join the readership</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
