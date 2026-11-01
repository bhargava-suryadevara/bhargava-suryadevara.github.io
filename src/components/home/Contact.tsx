import { useState } from 'react'
import { ArrowUpRight, Copy, Mail } from 'lucide-react'
import { SocialLinks } from '../ui/SocialLinks'
import { contactEmail, copyContactEmail } from '../../lib/contact'

export function Contact() {
  const [status, setStatus] = useState('')
  const [copying, setCopying] = useState(false)

  async function handleCopy() {
    setCopying(true)
    setStatus('')
    setStatus(await copyContactEmail())
    setCopying(false)
  }

  return (
    <section id="contact" tabIndex={-1} aria-labelledby="contact-title" className="section-spacing scroll-mt-28 border-t border-border text-center">
      <div className="section-heading-spacing border-b border-border">
        <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-accent">LET'S CONNECT</p>
        <h2 id="contact-title" className="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Let's Build Something Meaningful.</h2>
      </div>
      <p className="mx-auto mt-5 max-w-2xl leading-8 text-secondary">I'm always open to opportunities in AI, machine learning, and software engineering, as well as conversations about interesting projects and collaborations. Feel free to reach out — I'd love to connect.</p>
      <a href={`mailto:${contactEmail}`} className="content-spacing inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary"><Mail size={18} aria-hidden="true" />Get in Touch<ArrowUpRight size={16} aria-hidden="true" /></a>
      <div className="mx-auto mt-4 flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <span className="min-w-0 select-text text-sm leading-7 text-secondary [overflow-wrap:anywhere]">{contactEmail}</span>
        <button type="button" onClick={handleCopy} disabled={copying} aria-label="Copy Email" className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg text-accent hover:bg-tag disabled:opacity-50"><Copy size={18} aria-hidden="true" /></button>
      </div>
      <p role="status" aria-atomic="true" className="mx-auto min-h-6 max-w-xl text-sm leading-6 text-muted">{status}</p>
      <div className="mt-5"><SocialLinks /></div>
    </section>
  )
}
