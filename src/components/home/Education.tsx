import { GraduationCap } from 'lucide-react'
import { educationEntries } from '../../data/education'

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="section-spacing scroll-mt-28 border-t border-border">
      <h2 id="education-title" className="section-heading-spacing border-b border-border font-heading text-3xl font-bold tracking-tight sm:text-4xl">Education</h2>
      <p className="mt-5 max-w-2xl leading-7 text-secondary">My academic foundation in artificial intelligence and computer science.</p>
      <div className="content-spacing card-grid-spacing grid">
        {educationEntries.map((entry) => (
          <article key={entry.id} aria-labelledby={`${entry.id}-degree`} className="flex min-w-0 flex-col gap-5 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:gap-6 sm:p-7">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-tag text-accent"><GraduationCap size={24} aria-hidden="true" /></div>
            <div className="min-w-0">
              <p className="text-xs font-medium leading-6 tracking-wide text-muted">{entry.dates}</p>
              <h3 id={`${entry.id}-degree`} className="mt-2 font-heading text-xl font-bold leading-snug [overflow-wrap:anywhere] sm:text-2xl">{entry.degree}</h3>
              <p className="mt-3 font-medium leading-7 text-secondary">{entry.university}</p>
              <p className="mt-1 text-sm leading-6 text-muted">{entry.location}</p>
              <p className="mt-4 inline-block max-w-full rounded-md bg-tag px-3 py-1.5 text-sm font-medium leading-6 text-accent">GPA: {entry.gpa}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
