import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { experiences } from '../../data/experiences'
import type { Experience } from '../../data/experiences'
import { Modal } from '../ui/Modal'
import { ApprovedText } from '../ui/ApprovedText'

export function ProfessionalExperience() {
  const [selected, setSelected] = useState<Experience | null>(null)

  return (
    <section id="experience" aria-labelledby="experience-title" className="section-spacing scroll-mt-28 border-t border-border">
      <h2 id="experience-title" className="section-heading-spacing border-b border-border font-heading text-3xl font-bold tracking-tight sm:text-4xl">Professional Experience</h2>
      <ol className="divide-y divide-border border-b border-border">
        {experiences.map((experience) => (
          <li key={experience.id} className="experience-row-spacing grid gap-3 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-8">
            <p className="pt-1 text-sm leading-6 text-muted">{experience.dates}</p>
            <article aria-labelledby={`${experience.id}-role`}>
              <h3 id={`${experience.id}-role`} className="font-heading text-xl font-bold leading-relaxed sm:text-2xl">{experience.role}</h3>
              <p className="mt-1 text-base font-medium text-accent">{experience.organization}</p>
              {experience.subtitle && <p className="mt-1 text-sm leading-6 text-secondary">{experience.subtitle}</p>}
              {experience.location && <p className="mt-1 text-sm text-muted">{experience.location}</p>}
              {experience.shortDescription && <p className="mt-3 max-w-3xl leading-7 text-secondary"><ApprovedText text={experience.shortDescription} /></p>}
              {!!experience.tags?.length && <ul aria-label="Experience focus areas" className="mt-4 flex flex-wrap gap-2">{experience.tags.map((tag) => <li key={tag} className="rounded-md bg-tag px-2.5 py-1 text-xs font-medium leading-5 text-accent">{tag}</li>)}</ul>}
              <button type="button" aria-haspopup="dialog" aria-label={`View Details: ${experience.role}, ${experience.organization}`} onClick={() => setSelected(experience)} className="mt-2 inline-flex min-h-11 items-center gap-2 rounded-md px-2 text-sm font-semibold text-accent transition-colors hover:bg-tag">View Details<ArrowUpRight size={16} aria-hidden="true" /></button>
            </article>
          </li>
        ))}
      </ol>
      {selected && (
        <Modal titleId={`${selected.id}-dialog-title`} onClose={() => setSelected(null)}>
          <h2 id={`${selected.id}-dialog-title`} className="pr-2 font-heading text-2xl font-bold leading-snug sm:text-3xl">{selected.role}</h2>
          <p className="mt-3 font-medium text-accent">{selected.organization}</p>
          <p className="mt-2 text-sm text-muted">{selected.dates}</p>
          {selected.subtitle && <p className="mt-2 text-sm leading-6 text-secondary">{selected.subtitle}</p>}
          {selected.location && <p className="mt-2 text-sm text-muted">{selected.location}</p>}
          {(selected.overview || selected.keyContributions?.length || selected.technicalFocus || selected.professionalFocus) && (
            <div className="mt-7 space-y-6 border-t border-border pt-6 text-secondary">
              {selected.overview && <div><h3 className="font-heading font-bold text-primary">Overview</h3><p className="mt-2 whitespace-pre-line leading-7"><ApprovedText text={selected.overview} /></p></div>}
              {!!selected.keyContributions?.length && <div><h3 className="font-heading font-bold text-primary">Key Contributions</h3><ul className="mt-3 list-disc space-y-3 pl-5 leading-7">{selected.keyContributions.map((contribution) => <li key={contribution}><ApprovedText text={contribution} /></li>)}</ul></div>}
              {selected.technicalFocus && <div className="rounded-lg bg-tag p-5"><h3 className="font-heading font-bold text-accent">Technical Focus</h3><p className="mt-2 whitespace-pre-line leading-7">{selected.technicalFocus}</p></div>}
              {selected.professionalFocus && <div className="rounded-lg bg-tag p-5"><h3 className="font-heading font-bold text-accent">Professional Focus</h3><p className="mt-2 whitespace-pre-line leading-7">{selected.professionalFocus}</p></div>}
            </div>
          )}
        </Modal>
      )}
    </section>
  )
}
