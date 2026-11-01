import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export function SiteLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <a href="#main-content" onClick={(event) => {
        event.preventDefault()
        document.getElementById('main-content')?.focus()
      }} className="skip-link">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1} className="site-container page-spacing flex-1"><Outlet /></main>
      <Footer />
    </div>
  )
}
