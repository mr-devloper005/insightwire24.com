import Link from 'next/link'
import { ArrowRight, Globe2, Radio, ShieldCheck, Sparkles } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const stats = [
  { value: 'Global', label: 'Distribution reach' },
  { value: 'Real-time', label: 'Release delivery' },
  { value: 'Verified', label: 'Editorial sources' },
  { value: 'Category-led', label: 'Newsroom structure' },
]

const valueIcons = [Radio, Globe2, ShieldCheck]

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="relative overflow-hidden border-b border-[var(--editable-border)] bg-[var(--slot4-surface-bg)]">
          <div className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full bg-[var(--slot4-accent-soft)] opacity-60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-[var(--slot4-accent-2-soft)] opacity-60 blur-3xl" />
          <div className={`relative ${dc.shell.section} py-16 sm:py-20 lg:py-24`}>
            <span className="signal-rise inline-flex items-center gap-2 rounded-full border border-[var(--editable-border)] bg-[var(--slot4-accent-soft)] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--slot4-accent-strong)]">
              <Sparkles className="h-3.5 w-3.5" /> {pagesContent.about.badge}
            </span>
            <h1 className={`${dc.type.heroTitle} signal-rise mt-6 max-w-4xl`}>{pagesContent.about.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--slot4-muted-text)]">{pagesContent.about.description}</p>
          </div>
        </section>

        <section className={`${dc.shell.section} ${dc.shell.sectionY}`}>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
            <article data-reveal className={`${dc.surface.card} p-8 sm:p-10`}>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--slot4-accent)]">About {SITE_CONFIG.name}</p>
              <div className="article-content mt-6 space-y-6">
                {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </article>
            <aside data-reveal="right" className="grid gap-4">
              {stats.map((stat, index) => (
                <div key={stat.label} data-reveal style={{ ['--reveal-delay' as string]: `${index * 70}ms` }} className="rounded-2xl border border-[var(--editable-border)] bg-[var(--slot4-surface-bg)] p-6 shadow-[0_18px_50px_rgba(22,24,58,0.08)]">
                  <p className="text-2xl font-extrabold tracking-[-0.03em] text-[var(--slot4-accent)]">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--slot4-soft-muted-text)]">{stat.label}</p>
                </div>
              ))}
            </aside>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pagesContent.about.values.map((value, index) => {
              const Icon = valueIcons[index % valueIcons.length]
              return (
                <div key={value.title} data-reveal style={{ ['--reveal-delay' as string]: `${index * 80}ms` }} className={`${dc.surface.card} p-7`}>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--slot4-accent-soft)] text-[var(--slot4-accent)]"><Icon className="h-6 w-6" /></div>
                  <h2 className="mt-5 text-xl font-extrabold tracking-[-0.02em]">{value.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{value.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className={`${dc.shell.section} pb-20`}>
          <div className="signal-on-dark relative overflow-hidden rounded-[2rem] bg-[var(--slot4-dark-bg)] px-6 py-14 text-white sm:px-12" data-reveal="zoom">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--slot4-accent)] opacity-30 blur-3xl" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-4xl">Read the releases shaping the conversation.</h2>
              <Link href="/search" className={dc.button.accent}>Explore the archive <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
