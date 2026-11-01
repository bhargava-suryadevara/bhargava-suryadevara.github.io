import { allProjects } from './projects'

export const projectFilters = [
  { label: 'All', projectIds: allProjects.map((project) => project.id) },
  { label: 'Generative & Agentic AI', projectIds: ['terragpt', 'event-correlation-soc'] },
  { label: 'Machine Learning', projectIds: ['bitcoin-forecasting', 'box-office'] },
  { label: 'Deep Learning & Computer Vision', projectIds: ['image-deblurring', 'defect-detection'] },
  { label: 'Reinforcement Learning', projectIds: ['autonomous-driving'] },
  { label: 'NLP', projectIds: ['toxicity-detection'] },
] as const

export function projectsForFilter(label: string) {
  const filter = projectFilters.find((item) => item.label === label) ?? projectFilters[0]
  return allProjects.filter((project) => (filter.projectIds as readonly string[]).includes(project.id))
}
