import type { ReactNode } from 'react'
import { useReveal } from '../hooks'

/* Wrapper that fades/slides content in once, on scroll. */
export function Reveal({
  children,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'li' | 'span'
}) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <Tag ref={ref as never} className={`reveal ${className}`} data-visible={visible}>
      {children}
    </Tag>
  )
}

/* Editorial section header: mono eyebrow + hairline rule + display title. */
export function SectionHead({
  eyebrow,
  title,
  note,
  id,
}: {
  eyebrow: string
  title: string
  note?: string
  id?: string
}) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <div className="section-head" ref={ref} data-visible={visible} id={id}>
      <div className="section-head__line">
        <p className="section-head__eyebrow">{eyebrow}</p>
        <span className="section-head__rule" aria-hidden="true" />
      </div>
      <h2 className="section-head__title">{title}</h2>
      {note ? <p className="section-head__note">{note}</p> : null}
    </div>
  )
}
