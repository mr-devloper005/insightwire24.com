'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Editable motion layer: scroll-reveal for [data-reveal] elements + a reading
 * progress bar. Mounted once in EditableSiteShell. Re-scans on every route change
 * so client-side navigations (navbar links) still reveal their content.
 */
export function EditableMotion() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    const scan = () => {
      document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => observer.observe(el))
    }

    scan()

    // Reveal late/streamed content (e.g. server-rendered lists that mount after first paint)
    const mutationObserver = new MutationObserver(() => scan())
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    // Safety net: force-reveal anything still hidden but already in the viewport
    const fallback = window.setTimeout(() => {
      document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) el.classList.add('is-visible')
      })
    }, 1600)

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
      window.clearTimeout(fallback)
    }
  }, [pathname])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const bar = document.createElement('div')
    bar.className = 'signal-progress'
    document.body.appendChild(bar)
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
      bar.style.width = `${progress}%`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      bar.remove()
    }
  }, [])

  return null
}
