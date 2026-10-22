import { ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { waHref, WHATSAPP_CONFIGURED, PHONE_CONFIGURED } from '../lib/whatsapp'
import { site } from '../config'
import { Reveal } from './Primitives'

export default function CtaBand() {
  const wa = waHref()
  return (
    <section className="cta-band" aria-label="Request maintenance">
      <img
        className="cta-band__bg"
        src="/media/cta-dubai.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
      <div className="cta-band__scrim" aria-hidden="true" />
      <div className="cta-band__inner">
        <Reveal>
          <p className="cta-band__eyebrow mono">Dubai · UAE</p>
          <h2 className="cta-band__title">Need Reliable Maintenance for Your Property?</h2>
          <p className="cta-band__text">
            From a single repair to ongoing building maintenance, tell us what you need and let
            our team help you identify the right service.
          </p>
        </Reveal>
        <Reveal className="cta-band__actions">
          <a className="btn btn--accent" href="#contact">
            Request a Quote
            <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </a>
          <a
            className="btn btn--ghost-light"
            href={wa}
            {...(WHATSAPP_CONFIGURED ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <MessageCircle size={16} strokeWidth={1.8} aria-hidden="true" />
            WhatsApp Us
          </a>
          {PHONE_CONFIGURED ? (
            <a className="btn btn--ghost-light" href={`tel:${site.company.phoneHref}`}>
              <Phone size={16} strokeWidth={1.8} aria-hidden="true" />
              Call Our Team
            </a>
          ) : (
            <a className="btn btn--ghost-light" href="#contact">
              <Phone size={16} strokeWidth={1.8} aria-hidden="true" />
              Call Our Team
            </a>
          )}
        </Reveal>
      </div>
    </section>
  )
}
