export interface EducationEntry {
  id: string
  dates: string
  degree: string
  university: string
  location: string
  gpa: string
}

// Exact approved Education V2.1 content; GPA strings must not be rounded.
export const educationEntries: readonly EducationEntry[] = [
  {
    id: 'masters',
    dates: 'AUG 2024 – MAY 2026',
    degree: 'Master of Science in Artificial Intelligence',
    university: 'San José State University',
    location: 'San José, California',
    gpa: '3.736 / 4.00',
  },
  {
    id: 'bachelors',
    dates: 'AUG 2020 – MAY 2024',
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    university: 'Vellore Institute of Technology',
    location: 'India',
    gpa: '3.78 / 4.00',
  },
]
