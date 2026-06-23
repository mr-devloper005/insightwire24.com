'use client'

import { FileText, Mail, Megaphone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'

const desks = [
  { icon: FileText, title: 'Editorial desk', body: 'Send story ideas, corrections, source material, and coverage questions.' },
  { icon: Megaphone, title: 'Media partnerships', body: 'Discuss distribution, syndication, newsroom collaborations, and campaigns.' },
  { icon: Mail, title: 'General support', body: 'Reach the team for account, publishing, or platform help.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="relative overflow-hidden border-b border-[var(--editable-border)] bg-[var(--slot4-surface-bg)]">
          <div className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full bg-[var(--slot4-accent-soft)] opacity-60 blur-3xl" />
          <div className={`relative ${dc.shell.section} py-16 sm:py-20`}>
            <p className="signal-rise text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--slot4-accent)]">{pagesContent.contact.eyebrow}</p>
            <h1 className={`${dc.type.heroTitle} signal-rise mt-5 max-w-3xl`}>{pagesContent.contact.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--slot4-muted-text)]">{pagesContent.contact.description}</p>
          </div>
        </section>

        <section className={`${dc.shell.section} ${dc.shell.sectionY}`}>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <aside data-reveal className="grid content-start gap-4">
              {desks.map((desk, index) => (
                <div key={desk.title} data-reveal style={{ ['--reveal-delay' as string]: `${index * 80}ms` }} className={`${dc.surface.card} p-6`}>
                  <div className="flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[var(--slot4-accent-soft)] text-[var(--slot4-accent)]"><desk.icon className="h-5 w-5" /></div>
                    <span className="text-xs font-extrabold text-[var(--slot4-soft-muted-text)]">0{index + 1}</span>
                  </div>
                  <h2 className="mt-5 text-xl font-extrabold tracking-[-0.02em]">{desk.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[var(--slot4-muted-text)]">{desk.body}</p>
                </div>
              ))}
            </aside>

            <div data-reveal="right" className={`${dc.surface.card} p-7 sm:p-10`}>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Send a message</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em]">{pagesContent.contact.formTitle}</h2>
              <EditableContactLeadForm />
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
