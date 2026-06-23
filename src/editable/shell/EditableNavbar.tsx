'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, LogOut, Menu, UserRound, X } from 'lucide-react'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

const primaryTask = (SITE_CONFIG.tasks.find((task) => task.enabled)?.key || 'article') as TaskKey
const newsroomRoute = SITE_CONFIG.taskViews?.[primaryTask] || `/${primaryTask}`

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Newsroom', href: newsroomRoute },
  { label: 'About', href: '/about' },
  { label: 'Archive', href: '/search' },
  { label: 'Contact', href: '/contact' },
]

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const firstName = session?.name?.trim().split(/\s+/)[0] || session?.email?.split('@')[0] || 'Member'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="mx-auto w-full max-w-[var(--editable-container)]">
        <div className={`signal-shrink flex items-center justify-between gap-6 rounded-2xl border border-[var(--editable-border)] bg-[var(--slot4-surface-bg)]/90 px-4 backdrop-blur-xl sm:px-5 ${scrolled ? 'py-2.5 shadow-[0_16px_40px_rgba(22,24,58,0.14)]' : 'py-3.5 shadow-[0_10px_30px_rgba(22,24,58,0.08)]'}`}>
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/favicon.ico" alt="Logo" className="h-9 w-9 rounded-xl" />
            <span className="editorial-brand max-w-[42vw] truncate text-lg font-extrabold tracking-[-0.04em] text-[var(--slot4-page-text)] sm:text-xl">{SITE_CONFIG.name}</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => {
              const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href.split('?')[0])
              return (
                <Link key={link.label} href={link.href} data-active={active} className="signal-underline text-sm font-bold text-[var(--slot4-page-text)]/75 transition hover:text-[var(--slot4-accent)] data-[active=true]:text-[var(--slot4-accent)]">
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            {session ? (
              <div className="hidden items-center gap-2 sm:flex">
                <Link href="/create" className="inline-flex items-center gap-2 rounded-xl bg-[var(--slot4-accent-soft)] px-4 py-2.5 text-sm font-bold text-[var(--slot4-accent-strong)] transition hover:-translate-y-0.5"><UserRound className="h-4 w-4" /> {firstName}</Link>
                <button type="button" onClick={logout} className="inline-flex items-center gap-2 rounded-xl border border-[var(--editable-border)] px-4 py-2.5 text-sm font-bold transition hover:border-[var(--slot4-accent)] hover:text-[var(--slot4-accent)]"><LogOut className="h-4 w-4" /> Logout</button>
              </div>
            ) : (
              <Link href="/login" className="hidden rounded-xl px-3 py-2.5 text-sm font-bold text-[var(--slot4-page-text)] transition hover:text-[var(--slot4-accent)] sm:block">Log in</Link>
            )}
            <Link href={session ? '/create' : '/contact'} className="hidden items-center gap-2 rounded-xl bg-[var(--slot4-dark-bg)] px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[var(--slot4-accent-strong)] sm:inline-flex">
              {session ? 'Publish' : 'Get in touch'} <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--editable-border)] lg:hidden" aria-label="Toggle navigation">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="mt-2 rounded-2xl border border-[var(--editable-border)] bg-[var(--slot4-surface-bg)] p-3 shadow-[0_16px_40px_rgba(22,24,58,0.14)] lg:hidden">
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-bold text-[var(--slot4-page-text)] transition hover:bg-[var(--slot4-accent-soft)] hover:text-[var(--slot4-accent-strong)]">{link.label}</Link>
              ))}
            </div>
            <div className="mt-2 grid gap-2 border-t border-[var(--editable-border)] pt-2">
              {session ? (
                <>
                  <Link href="/create" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--slot4-accent-soft)] px-4 py-3 text-sm font-bold text-[var(--slot4-accent-strong)]"><UserRound className="h-4 w-4" /> {firstName}</Link>
                  <button type="button" onClick={() => { logout(); setOpen(false) }} className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--editable-border)] px-4 py-3 text-sm font-bold"><LogOut className="h-4 w-4" /> Logout</button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={() => setOpen(false)} className="rounded-xl border border-[var(--editable-border)] px-4 py-3 text-center text-sm font-bold">Log in</Link>
                  <Link href="/contact" onClick={() => setOpen(false)} className="rounded-xl bg-[var(--slot4-dark-bg)] px-4 py-3 text-center text-sm font-bold text-white">Get in touch</Link>
                </>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}
