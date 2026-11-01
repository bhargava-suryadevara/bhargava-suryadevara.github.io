import { useState } from 'react'
import { ProjectCard } from '../components/projects/ProjectCard'
import { ProjectDetails } from '../components/projects/ProjectDetails'
import type { Project } from '../data/projects'
import { projectFilters, projectsForFilter } from '../data/projectFilters'

export function AllProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selected, setSelected] = useState<Project | null>(null)
  const visibleProjects = projectsForFilter(activeFilter)

  return (
    <section aria-labelledby="projects-title">
      <h1 id="projects-title" className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">All Projects</h1>
      <p className="mt-5 max-w-2xl leading-7 text-secondary">Explore eight projects across AI, machine learning, and software development.</p>
      <div role="group" aria-label="Filter projects by category" className="content-spacing flex flex-wrap gap-2">
        {projectFilters.map(({ label }) => (
          <button key={label} type="button" aria-pressed={activeFilter === label} aria-controls="project-gallery" onClick={() => setActiveFilter(label)} className={`min-h-11 max-w-full rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${activeFilter === label ? 'border-accent bg-accent text-white' : 'border-border bg-surface text-secondary hover:bg-tag'}`}>{label}</button>
        ))}
      </div>
      <p role="status" aria-atomic="true" className="mt-5 text-sm text-muted">{visibleProjects.length} {visibleProjects.length === 1 ? 'project' : 'projects'} · {activeFilter}</p>
      <div id="project-gallery" className="mt-5 card-grid-spacing grid md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => <ProjectCard key={project.id} project={project} onOpen={() => setSelected(project)} />)}
      </div>
      {selected && <ProjectDetails project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
