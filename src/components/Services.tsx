import { useState } from 'react'
import {
  Snowflake,
  Zap,
  Droplets,
  Flame,
  Cctv,
  HardHat,
  PaintRoller,
  LayoutGrid,
  Umbrella,
  DoorOpen,
  Hammer,
  Wrench,
  ChevronDown,
  Info,
  type LucideIcon,
} from 'lucide-react'
import { site } from '../config'
import type { ServiceCategory } from '../types'
import { SectionHead } from './Primitives'

const ICONS: Record<string, LucideIcon> = {
  Snowflake,
  Zap,
  Droplets,
  Flame,
  Cctv,
  HardHat,
  PaintRoller,
  LayoutGrid,
  Umbrella,
  DoorOpen,
  Hammer,
  Wrench,
}

function CategoryPanel({ cat }: { cat: ServiceCategory }) {
  return (
    <div className="svc__panel" id={`svc-panel-${cat.index}`} role="region">
      {cat.groups.map((g) => (
        <div className="svc__group" key={g.heading}>
          <h3 className="svc__group-title">{g.heading}</h3>
          <ul className="svc__list">
            {g.items.map((item) => (
              <li key={item} className="svc__item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {cat.note ? (
        <p className="svc__note">
          <Info size={14} strokeWidth={1.8} aria-hidden="true" />
          {cat.note}
        </p>
      ) : null}
    </div>
  )
}

function CategoryRow({
  cat,
  open,
  onToggle,
}: {
  cat: ServiceCategory
  open: boolean
  onToggle: () => void
}) {
  const Icon = ICONS[cat.icon] ?? Wrench
  return (
    <div className="svc" data-open={open}>
      <button
        type="button"
        className="svc__head"
        aria-expanded={open}
        aria-controls={`svc-panel-${cat.index}`}
        onClick={onToggle}
      >
        <span className="svc__index mono">{cat.index}</span>
        <span className="svc__icon" aria-hidden="true">
          <Icon size={20} strokeWidth={1.6} />
        </span>
        <span className="svc__headings">
          <span className="svc__title">{cat.title}</span>
          <span className="svc__summary">{cat.summary}</span>
        </span>
        <ChevronDown size={18} strokeWidth={1.8} className="svc__chevron" aria-hidden="true" />
      </button>
      <div className="svc__body" hidden={!open}>
        <CategoryPanel cat={cat} />
      </div>
    </div>
  )
}

export default function Services() {
  const [openSet, setOpenSet] = useState<ReadonlySet<string>>(new Set(['01']))

  const toggle = (index: string) =>
    setOpenSet((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })

  const allOpen = openSet.size === site.services.length

  return (
    <section className="section services" id="services" aria-label="Services">
      <div className="section__inner">
        <SectionHead
          eyebrow="Service Index — 12 Categories"
          title="Our Services"
          note="Complete building maintenance and technical services, delivered through a coordinated approach to mechanical, electrical, plumbing, ELV and civil maintenance."
        />
        <div className="services__toolbar">
          <p className="services__count mono">
            {site.services.length} categories ·{' '}
            {site.services.reduce((n, c) => n + c.groups.reduce((m, g) => m + g.items.length, 0), 0)}{' '}
            listed services
          </p>
          <button
            type="button"
            className="services__toggle-all"
            onClick={() =>
              setOpenSet(allOpen ? new Set() : new Set(site.services.map((s) => s.index)))
            }
          >
            {allOpen ? 'Collapse all' : 'Expand all'}
          </button>
        </div>
        <div className="services__list">
          {site.services.map((cat) => (
            <CategoryRow
              key={cat.index}
              cat={cat}
              open={openSet.has(cat.index)}
              onToggle={() => toggle(cat.index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
