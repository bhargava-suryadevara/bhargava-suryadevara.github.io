import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { publicAsset } from '../../lib/assets'
import { currentHeaderSection, headerSections } from '../../lib/navigation'
import type { HeaderSection } from '../../lib/navigation'

export function Header() {
  const { pathname, key } = useLocation()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<HeaderSection>('home')
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => { setOpen(false) }, [key])

  useEffect(() => {
    if (pathname !== '/') return
    let frame = 0
    const update = () => {
      const height = headerRef.current?.getBoundingClientRect().height ?? 80
      setActive(currentHeaderSection(height + 48))
    }
    const schedule = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggleRef.current?.focus() }
    }
    const onOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 768px)')
    const onDesktop = () => { if (desktop.matches) setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onOutside)
    desktop.addEventListener('change', onDesktop)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onOutside)
      desktop.removeEventListener('change', onDesktop)
    }
  }, [open])

  const current = pathname === '/projects' ? 'projects' : active
  return (
    <header ref={headerRef} className="sticky top-0 z-10 border-b border-border bg-background">
      <div className="site-container relative flex min-h-20 items-center justify-between gap-4 py-4">
        <Link to="/" onClick={() => setOpen(false)} aria-label="BS. — Homepage" className="font-heading text-2xl font-extrabold tracking-tight text-accent">BS.</Link>
        <button ref={toggleRef} type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="header-navigation" onClick={() => setOpen((value) => !value)} className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-accent md:hidden">{open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}</button>
        <nav id="header-navigation" aria-label="Main navigation" className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] flex-col gap-1 overflow-y-auto border-b border-border bg-background px-6 py-4 text-sm font-medium shadow-sm md:static md:flex md:max-h-none md:flex-row md:items-center md:gap-6 md:overflow-visible md:border-0 md:p-0 md:shadow-none`}>
          {headerSections.map(({ id, label }) => <Link key={id} to={`/?section=${id}`} onClick={() => setOpen(false)} aria-current={current === id ? 'location' : undefined} className={`nav-link flex min-h-11 items-center ${current === id ? 'text-accent underline decoration-2 underline-offset-8' : ''}`}>{label}</Link>)}
          <a href={publicAsset('resume/resume.pdf')} download="resume.pdf" onClick={() => setOpen(false)} className="nav-link flex min-h-11 items-center">Resume</a>
        </nav>
      </div>
    </header>
  )
}
