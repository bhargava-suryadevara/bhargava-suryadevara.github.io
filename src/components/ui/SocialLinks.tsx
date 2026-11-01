const socialLinks = [
  { label: 'GitHub Profile', href: 'https://github.com/bhargava-suryadevara' },
  { label: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/bhargava-suryadevara/' },
] as const

export function SocialLinks() {
  const icons = [
<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.38c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.31c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" /></svg>,
<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.4-.76 1.36-1.56 2.8-1.56 3 0 3.57 1.98 3.57 4.55v5.26Z" /></svg>,
  ]
  return <div className="flex items-center justify-center gap-3">{socialLinks.map((link, index) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="inline-flex size-11 items-center justify-center rounded-full border border-border text-accent transition-colors hover:bg-tag">{icons[index]}</a>)}</div>
}
