import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Log in', description: pagesContent.auth.login.metadataDescription })
}

const perks = [
  'Distribute releases across verified channels',
  'Track coverage from one connected newsroom',
  'Save sources and manage every submission',
]

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className={`${dc.shell.section} grid items-stretch gap-8 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20`}>
          <div className="signal-on-dark signal-rise relative flex flex-col justify-center overflow-hidden rounded-[2rem] bg-[var(--slot4-dark-bg)] p-10 text-white sm:p-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--slot4-accent)] opacity-30 blur-3xl" />
            <div className="relative">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--slot4-accent-2)]">{pagesContent.auth.login.badge}</p>
              <h1 className="mt-5 max-w-md text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">{pagesContent.auth.login.title}</h1>
              <p className="mt-5 max-w-md text-base leading-8 text-white/65">{pagesContent.auth.login.description}</p>
              <ul className="mt-9 grid gap-3">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm font-semibold text-white/80"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--slot4-accent-2)]" /> {perk}</li>
                ))}
              </ul>
            </div>
          </div>

          <div data-reveal="right" className={`${dc.surface.card} flex flex-col justify-center p-8 sm:p-12`}>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--slot4-accent)]">{SITE_CONFIG.name}</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em]">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-6 border-t border-[var(--editable-border)] pt-6 text-sm text-[var(--slot4-muted-text)]">New here? <Link href="/signup" className="font-bold text-[var(--slot4-accent)] underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
