import { Link } from 'react-router-dom'
import { SocialLinks } from '../ui/SocialLinks'
import { backToTop } from '../../lib/scroll'

export function Footer() {
  return (
    <footer className="site-container">
      <div className="flex flex-col items-center justify-between gap-5 border-t border-border footer-spacing text-center lg:flex-row lg:text-left">
        <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-5">
          <Link to="/" aria-label="BS. — Homepage" className="font-heading text-2xl font-extrabold tracking-tight text-primary">BS.</Link>
          <p className="text-sm leading-6 text-muted">© {new Date().getFullYear()} Bhargava Suryadevara. All rights reserved.</p>
        </div>
        <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-5">
          <button type="button" onClick={backToTop} className="min-h-11 rounded-md px-2 text-sm font-medium text-accent hover:bg-tag">Back to Top ↑</button>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}
