import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { scrollToSection } from './lib/scroll'
import { isHeaderSection } from './lib/navigation'
import { SiteLayout } from './components/layout/SiteLayout'
import { HomePage } from './pages/HomePage'
import { AllProjectsPage } from './pages/AllProjectsPage'

export function App() {
  const { pathname, search, key } = useLocation()
  useEffect(() => {
    document.title = `${pathname === '/projects' ? 'All Projects' : 'Home'} | Bhargava Phaneendra Kumar Suryadevara`
    const section = new URLSearchParams(search).get('section')
    if (pathname === '/' && isHeaderSection(section)) {
      const frame = window.requestAnimationFrame(() => scrollToSection(section))
      return () => window.cancelAnimationFrame(frame)
    }
    window.scrollTo(0, 0)
  }, [pathname, search, key])

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<AllProjectsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
