import { Contact } from '../components/home/Contact'
import { Education } from '../components/home/Education'
import { FeaturedProjects } from '../components/home/FeaturedProjects'
import { TechnicalSkills } from '../components/home/TechnicalSkills'
import { HeroAbout } from '../components/home/HeroAbout'
import { ProfessionalExperience } from '../components/home/ProfessionalExperience'

export function HomePage() {
  return (
    <>
      <HeroAbout />
      <ProfessionalExperience />
      <FeaturedProjects />
      <TechnicalSkills />
      <Education />
      <Contact />
    </>
  )
}
