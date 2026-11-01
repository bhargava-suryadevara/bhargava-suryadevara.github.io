import type { Project } from '../../data/projects'
import { publicAsset } from '../../lib/assets'

export function ProjectCard({ project, flagship = false, onOpen }: { project: Project; flagship?: boolean; onOpen: () => void }) {
  return (
    <article className={`min-w-0 ${flagship ? 'md:col-span-2' : ''}`}>
      <button type="button" onClick={onOpen} aria-haspopup="dialog" aria-labelledby={`${project.id}-card-title ${project.id}-action`} className={`group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-surface text-left shadow-sm transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-md ${flagship ? 'lg:grid lg:grid-cols-2' : ''}`}>
        <span className={`flex w-full items-center justify-center border-b border-border bg-background p-3 ${flagship ? 'lg:border-b-0 lg:border-r lg:p-4' : 'aspect-[16/8] shrink-0'}`}>
          <img src={publicAsset(project.image)} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} loading="lazy" decoding="async" className={`h-auto w-full object-contain ${flagship ? '' : 'max-h-full'}`} />
        </span>
        <span className={`flex min-w-0 w-full flex-1 flex-col p-5 ${flagship ? 'justify-center sm:p-7' : 'sm:p-6'}`}>
          <span className="text-xs font-semibold uppercase leading-5 tracking-wider text-accent">{project.category}</span>
          <span id={`${project.id}-card-title`} role="heading" aria-level={3} className={`mt-3 font-heading font-bold leading-snug text-primary ${flagship ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>{project.title}</span>
          <span className="mt-3 text-sm leading-7 text-secondary">{project.shortDescription}</span>
          <span className="mt-4 flex flex-wrap gap-2">{project.cardTags.map((tag) => <span key={tag} className="rounded-md bg-tag px-2.5 py-1 text-xs font-medium leading-5 text-accent">{tag}</span>)}</span>
          <span id={`${project.id}-action`} className="mt-auto pt-5 text-sm font-semibold text-accent">Explore Project ↗</span>
        </span>
      </button>
    </article>
  )
}
