import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  closeLabel?: string
  titleId: string
  onClose: () => void
  children: ReactNode
}

/** Native modal dialogs provide focus containment and make the background inert. */
export function Modal({ titleId, onClose, children, closeLabel = 'Close experience details' }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current!
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    const previousPadding = document.body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${parseFloat(getComputedStyle(document.body).paddingRight) + scrollbarWidth}px`
    }
    dialog.showModal()

    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPadding
      trigger?.focus({ preventScroll: true })
    }
  }, [])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-modal="true"
      className="experience-dialog fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-[900px] overflow-y-auto overscroll-contain rounded-2xl border border-border bg-surface p-0 text-primary shadow-xl backdrop:bg-primary/45 md:w-3/4"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return
        const bounds = event.currentTarget.getBoundingClientRect()
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose()
      }}
    >
      <div className="sticky top-0 z-10 flex justify-end bg-surface px-4 pt-4 sm:px-6 sm:pt-6">
        <button type="button" autoFocus onClick={onClose} aria-label={closeLabel} className="inline-flex size-11 items-center justify-center rounded-full border border-border text-secondary transition-colors hover:bg-tag"><X size={20} aria-hidden="true" /></button>
      </div>
      <div className="px-6 pb-8 pt-2 sm:px-10 sm:pb-10">{children}</div>
    </dialog>
  )
}
