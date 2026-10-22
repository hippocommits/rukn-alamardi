import { ArrowRight, MessageCircle } from 'lucide-react'
import { site } from '../config'
import { waHref, WHATSAPP_CONFIGURED } from '../lib/whatsapp'
import { Reveal } from './Primitives'

export default function Hero() {
  const wa = waHref()
  return (
    <section className="hero" id="home" aria-label="Introduction">
      <div className="hero__inner">
        <div className="hero__copy">
          <Reveal>
            <p className="hero__eyebrow">
              {site.company.descriptor} — Dubai, UAE
            </p>
          </Reveal>
          <Reveal>
            <h1 className="hero__title">
              Complete <em>MEP &amp; Property Maintenance</em> Solutions in Dubai
            </h1>
          </Reveal>
          <Reveal>
            <p className="hero__lede">
              From HVAC and electrical systems to plumbing, ELV, civil works, painting, roofing
              and flooring, we deliver reliable maintenance and technical solutions for
              residential, commercial and industrial properties.
            </p>
          </Reveal>
          <Reveal className="hero__ctas">
            <a className="btn btn--primary" href="#contact">
              Request a Free Quote
              <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a className="btn btn--ghost" href="#services">
              Explore Our Services
            </a>
          </Reveal>
          <Reveal>
            <a
              className="hero__wa"
              href={wa}
              {...(WHATSAPP_CONFIGURED ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <MessageCircle size={16} strokeWidth={1.8} aria-hidden="true" />
              Need maintenance assistance? Contact us on WhatsApp.
            </a>
          </Reveal>
        </div>

        <Reveal className="hero__media">
          <figure className="hero__figure">
            <img
              src="/media/hero-mep.jpg"
              alt="MEP technician servicing rooftop HVAC chiller units on a commercial building in Dubai"
              width={2048}
              height={1152}
              fetchPriority="high"
            />
            <figcaption className="hero__caption">
              <span className="mono">DXB — MEP / HVAC / ELV / Civil</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <div className="service-strip" aria-label="Core service areas">
        <ul className="service-strip__list">
          {site.serviceStrip.map((s) => (
            <li key={s} className="service-strip__item">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
