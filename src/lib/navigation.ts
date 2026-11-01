export const headerSections = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

export type HeaderSection = typeof headerSections[number]['id']

export function isHeaderSection(value: string | null): value is HeaderSection {
  return headerSections.some((section) => section.id === value)
}

/** Keep the most recently reached navigation section active between headings. */
export function currentHeaderSection(offset: number): HeaderSection {
  let active: HeaderSection = 'home'
  for (const { id } of headerSections) {
    const section = document.getElementById(id)
    if (section && section.getBoundingClientRect().top <= offset) active = id
  }
  // The final section may be too short to reach the header before page end.
  const contact = document.getElementById('contact')
  if (contact && contact.getBoundingClientRect().top < window.innerHeight &&
      window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) return 'contact'
  return active
}
