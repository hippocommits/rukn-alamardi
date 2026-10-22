import {
  Home,
  Building2,
  Store,
  Hotel,
  Warehouse,
  KeySquare,
  Users,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react'
import { site } from '../config'
import { Reveal, SectionHead } from './Primitives'

const ICONS: Record<string, LucideIcon> = {
  Home,
  Building2,
  Store,
  Hotel,
  Warehouse,
  KeySquare,
  Users,
  Stethoscope,
}

export default function Industries() {
  return (
    <section className="section industries" id="industries" aria-label="Industries we serve">
      <div className="section__inner">
        <SectionHead eyebrow="Sectors" title="Maintenance Solutions for Every Property" />
        <ul className="industries__grid">
          {site.industries.map((ind) => {
            const Icon = ICONS[ind.icon] ?? Building2
            return (
              <Reveal as="li" key={ind.name} className="industry">
                <Icon size={22} strokeWidth={1.5} aria-hidden="true" className="industry__icon" />
                <h3 className="industry__name">{ind.name}</h3>
                <p className="industry__blurb">{ind.blurb}</p>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
