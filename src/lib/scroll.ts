export function preferredScrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
}

export function scrollToSection(id: string) {
  const section = document.getElementById(id)
  if (!section) return
  const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 80
  const top = section.getBoundingClientRect().top + window.scrollY - headerHeight - 24
  // Programmatic focus makes cross-page section navigation useful to keyboard users.
  if (!section.hasAttribute('tabindex')) {
    section.setAttribute('tabindex', '-1')
    section.addEventListener('blur', () => section.removeAttribute('tabindex'), { once: true })
  }
  section.focus({ preventScroll: true })
  window.scrollTo({ top: Math.max(0, top), behavior: preferredScrollBehavior() })
}

export function scrollToContact() {
  scrollToSection('contact')
}

export function backToTop() {
  document.getElementById('main-content')?.focus({ preventScroll: true })
  window.scrollTo({ top: 0, behavior: preferredScrollBehavior() })
}
