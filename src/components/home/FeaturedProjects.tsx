import { useState } from 'react'
import { Link } from 'react-router-dom'
import { featuredProjects } from '../../data/projects'
import type { Project } from '../../data/projects'
import { ProjectCard } from '../projects/ProjectCard'
import { ProjectDetails } from '../projects/ProjectDetails'

export function FeaturedProjects() {
  const [selected, setSelected] = useState<Project | null>(null)
  return (
    <section id="projects" aria-labelledby="featured-projects-title" className="section-heading-offset scroll-mt-28">
      <h2 id="featured-projects-title" className="section-heading-spacing border-b border-border font-heading text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
      <div className="content-spacing card-grid-spacing grid md:grid-cols-2">
        {featuredProjects.map((project, index) => <ProjectCard key={project.id} project={project} flagship={index === 0} onOpen={() => setSelected(project)} />)}
      </div>
      <div className="content-spacing flex justify-center"><Link to="/projects" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-accent hover:bg-tag">View All Projects</Link></div>
      {selected && <ProjectDetails project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
