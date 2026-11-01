import { Code2, BrainCircuit, Bot, ScanEye, Cloud, Database } from 'lucide-react'
import { skillCategories } from '../../data/skills'

const categoryIcons = [Code2, BrainCircuit, Bot, ScanEye, Cloud, Database] as const

export function TechnicalSkills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section-spacing scroll-mt-28 border-t border-border">
      <h2 id="skills-title" className="section-heading-spacing border-b border-border font-heading text-3xl font-bold tracking-tight sm:text-4xl">Technical Skills</h2>
      <p className="mt-5 max-w-2xl leading-7 text-secondary">Technologies, frameworks, and tools I work with across AI, machine learning, and software engineering.</p>
      <div className="content-spacing card-grid-spacing grid md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = categoryIcons[index]
          return (
            <article key={category.id} aria-labelledby={category.id} className="min-w-0 rounded-2xl border border-border bg-surface p-6">
              <div className="mb-5 inline-flex size-10 items-center justify-center rounded-lg bg-tag text-accent"><Icon size={20} aria-hidden="true" /></div>
              <h3 id={category.id} className="font-heading text-lg font-bold leading-7 [overflow-wrap:anywhere]">{category.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => <li key={skill} className="max-w-full rounded-md bg-tag px-2.5 py-1 text-xs font-medium leading-5 text-accent [overflow-wrap:anywhere]">{skill}</li>)}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}
