'use client'

import Link from 'next/link'
import { ArrowUp, Facebook, Instagram, Linkedin, Send, Twitter } from 'lucide-react'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

const primaryTask = (SITE_CONFIG.tasks.find((task) => task.enabled)?.key || 'article') as TaskKey
const newsroomRoute = SITE_CONFIG.taskViews?.[primaryTask] || `/${primaryTask}`

const socials = [
  { icon: Twitter, label: 'X' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
]

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="signal-on-dark mt-auto overflow-hidden bg-[var(--slot4-dark-bg)] text-white">
      <div className="mx-auto w-full max-w-[var(--editable-container)] px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.8fr_0.8fr_0.9fr]">
          <div data-reveal>
            <Link href="/" className="flex items-center gap-2.5">
              <img src="/favicon.ico" alt="Logo" className="h-9 w-9 rounded-xl" />
              <span className="editorial-brand text-2xl font-extrabold tracking-[-0.04em]">{SITE_CONFIG.name}</span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">{globalContent.footer?.description || SITE_CONFIG.description}</p>
            <form action="/signup" className="mt-7 flex max-w-md overflow-hidden rounded-full border border-white/15 bg-white/[0.06] p-1">
              <input name="email" type="email" placeholder="Email for newsroom alerts" className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-white/40" />
              <button className="inline-flex items-center gap-2 rounded-full bg-[var(--slot4-accent)] px-5 py-2.5 text-sm font-bold transition hover:bg-[var(--slot4-accent-strong)]"><Send className="h-4 w-4" /> Join</button>
            </form>
          </div>

          <div data-reveal style={{ ['--reveal-delay' as string]: '60ms' }}>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-white/45">Quick links</h3>
            <div className="mt-5 grid gap-3 text-sm font-semibold">
              <Link href="/" className="text-white/75 transition hover:text-[var(--slot4-accent-2)]">Home</Link>
              <Link href={newsroomRoute} className="text-white/75 transition hover:text-[var(--slot4-accent-2)]">Newsroom</Link>
              <Link href="/about" className="text-white/75 transition hover:text-[var(--slot4-accent-2)]">About</Link>
              <Link href="/search" className="text-white/75 transition hover:text-[var(--slot4-accent-2)]">Search</Link>
            </div>
          </div>

          <div data-reveal style={{ ['--reveal-delay' as string]: '120ms' }}>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-white/45">Company</h3>
            <div className="mt-5 grid gap-3 text-sm font-semibold">
              <Link href="/contact" className="text-white/75 transition hover:text-[var(--slot4-accent-2)]">Contact</Link>
              {session ? (
                <>
                  <Link href="/create" className="text-white/75 transition hover:text-[var(--slot4-accent-2)]">Publish</Link>
                  <button onClick={logout} className="text-left text-white/75 transition hover:text-[var(--slot4-accent-2)]">Logout</button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-white/75 transition hover:text-[var(--slot4-accent-2)]">Log in</Link>
                  <Link href="/signup" className="text-white/75 transition hover:text-[var(--slot4-accent-2)]">Sign up</Link>
                </>
              )}
            </div>
          </div>

          <div data-reveal style={{ ['--reveal-delay' as string]: '180ms' }} className="flex flex-col gap-5">
            <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex w-fit items-center gap-2 rounded-xl bg-white/[0.06] px-4 py-2.5 text-sm font-bold text-white/80 transition hover:bg-white/[0.12]"><ArrowUp className="h-4 w-4" /> Back to top</button>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 py-6 text-xs font-semibold text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {SITE_CONFIG.name}. All rights reserved.</span>
          <span>{globalContent.footer?.bottomNote || 'Built for fast, verified, category-led media distribution.'}</span>
        </div>
      </div>

      <div aria-hidden className="select-none px-4 pb-6 text-center">
        <span className="block bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0))] bg-clip-text text-[18vw] font-extrabold leading-[0.8] tracking-[-0.06em] text-transparent">{SITE_CONFIG.name}</span>
      </div>
    </footer>
  )
}
