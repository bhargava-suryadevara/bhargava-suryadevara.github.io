import type { Project } from '../../data/projects'
import { publicAsset } from '../../lib/assets'
import { ApprovedText } from '../ui/ApprovedText'
import { Modal } from '../ui/Modal'

export function ProjectDetails({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <Modal titleId={`${project.id}-dialog-title`} closeLabel="Close project details" onClose={onClose}>
      <p className="text-xs font-semibold uppercase leading-5 tracking-wider text-accent">{project.category}</p>
      <h2 id={`${project.id}-dialog-title`} className="mt-3 font-heading text-2xl font-bold leading-snug sm:text-3xl">{project.title}</h2>
      <img src={publicAsset(project.image)} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} className="mt-6 h-auto w-full rounded-lg border border-border object-contain" />
      <div className="mt-7 space-y-7 text-secondary">
        <section aria-labelledby={`${project.id}-overview`}><h3 id={`${project.id}-overview`} className="font-heading text-lg font-bold text-primary">Overview</h3><p className="mt-3 leading-7">{project.overview}</p></section>
        <section aria-labelledby={`${project.id}-highlights`}><h3 id={`${project.id}-highlights`} className="font-heading text-lg font-bold text-primary">Key Highlights</h3><ul className="mt-3 list-disc space-y-3 pl-5 leading-7">{project.highlights.map((highlight) => <li key={highlight}><ApprovedText text={highlight} /></li>)}</ul></section>
        <section aria-labelledby={`${project.id}-technologies`}><h3 id={`${project.id}-technologies`} className="font-heading text-lg font-bold text-primary">Technologies</h3><ul className="mt-3 flex flex-wrap gap-2">{project.technologies.map((tag) => <li key={tag} className="rounded-md bg-tag px-3 py-1.5 text-xs font-medium text-accent">{tag}</li>)}</ul></section>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-primary">View GitHub Repository ↗<span className="sr-only"> (opens in a new tab)</span></a>
      </div>
    </Modal>
  )
}
