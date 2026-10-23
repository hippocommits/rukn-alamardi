import { Check } from 'lucide-react'
import { Reveal, SectionHead } from './Primitives'

const highlights = [
  'Integrated maintenance services under one provider',
  'Residential and commercial property support',
  'Preventive and corrective maintenance',
  'Technical troubleshooting and repair',
  'Installation, replacement and refurbishment',
  'Professional workmanship and attention to safety',
  'Tailored service solutions based on client requirements',
]

export default function About() {
  return (
    <section className="section about" id="about" aria-label="About the company">
      <div className="section__inner">
        <SectionHead
          eyebrow="About"
          title="Your Trusted Partner for Building Maintenance"
        />
        <div className="about__grid">
          <div className="about__copy">
            <Reveal>
              <p className="about__intro">
                We provide integrated building maintenance, MEP engineering, technical
                installations and property improvement services across Dubai and the UAE —
                helping clients keep their buildings safe, functional, comfortable and
                efficient through planned maintenance, troubleshooting, repairs, replacements,
                installations and refurbishment works.
              </p>
            </Reveal>
            <ul className="about__list">
              {highlights.map((h) => (
                <Reveal as="li" key={h} className="about__item">
                  <Check size={16} strokeWidth={2} aria-hidden="true" className="about__check" />
                  <span>{h}</span>
                </Reveal>
              ))}
            </ul>
            <Reveal>
              <p className="about__note mono">
                Company history, trade licence details and credentials are published here once
                verified information is supplied.
              </p>
            </Reveal>
          </div>

          <div className="about__media">
            <Reveal className="about__media-main">
              <img
                src="/media/about-panel.jpg"
                alt="Electrician testing a main distribution board during scheduled electrical maintenance"
                width={1536}
                height={1024}
                loading="lazy"
              />
              <p className="about__media-caption mono">Certified MEP works</p>
            </Reveal>
            <Reveal className="about__media-secondary">
              <img
                src="/media/about-team.jpg"
                alt="Maintenance technicians reviewing a checklist in a commercial plant room"
                width={1536}
                height={1024}
                loading="lazy"
              />
              <p className="about__media-caption mono">Planned &amp; reactive maintenance</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
