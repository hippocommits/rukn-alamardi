import { site } from '../config'
import { Reveal, SectionHead } from './Primitives'

export default function WhyUs() {
  return (
    <section className="section why" id="why-us" aria-label="Why choose us">
      <div className="section__inner">
        <SectionHead eyebrow="Why Choose Us" title="One Partner. Multiple Technical Solutions." />
        <ul className="why__grid">
          {site.benefits.map((b) => (
            <Reveal as="li" key={b.index} className="why__item">
              <span className="why__index mono">{b.index}</span>
              <h3 className="why__title">{b.title}</h3>
              <p className="why__text">{b.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Process() {
  return (
    <section className="section process" id="process" aria-label="How our service process works">
      <div className="section__inner">
        <SectionHead eyebrow="Process" title="Simple. Efficient. Professional." />
        <ol className="process__steps">
          {site.process.map((step) => (
            <Reveal as="li" key={step.index} className="process__step">
              <span className="process__index mono">{step.index}</span>
              <span className="process__rule" aria-hidden="true" />
              <h3 className="process__title">{step.title}</h3>
              <p className="process__text">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
