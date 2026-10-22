import { useMemo, useState, type FormEvent } from 'react'
import { MessageCircle, Phone, Mail, MapPin, Clock, Copy, Check, User } from 'lucide-react'
import { site } from '../config'
import { waLink, WHATSAPP_CONFIGURED, PHONE_CONFIGURED } from '../lib/whatsapp'
import { Reveal, SectionHead } from './Primitives'

type Status =
  | { kind: 'idle' }
  | { kind: 'error'; message: string }
  | { kind: 'ready'; message: string; wa: string | null; composed: string }

const inputId = (name: string) => `field-${name}`
const isPlaceholder = (v: string) => v.trim().startsWith('[')

export default function Contact() {
  const [services, setServices] = useState<string[]>([])
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  const [copied, setCopied] = useState(false)

  const toggleService = (s: string) =>
    setServices((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]))

  const serviceLabel = useMemo(
    () => (services.length ? services.join(', ') : 'General enquiry'),
    [services],
  )

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot — silently accept and drop spam submissions.
    if (String(data.get('website') ?? '').trim() !== '') {
      setStatus({ kind: 'ready', message: 'Thank you. Your enquiry has been received.', wa: null, composed: '' })
      form.reset()
      setServices([])
      return
    }

    const name = String(data.get('name') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const propertyType = String(data.get('propertyType') ?? '').trim()
    const location = String(data.get('location') ?? '').trim()
    const description = String(data.get('description') ?? '').trim()
    const method = String(data.get('method') ?? '').trim()

    if (!name || !phone || !propertyType || !location || !description || !method) {
      setStatus({ kind: 'error', message: 'Please complete all required fields marked with *.' })
      return
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ kind: 'error', message: 'Please enter a valid email address, or leave the email field empty.' })
      return
    }

    const lines = [
      `Hello, I would like to enquire about your MEP and property maintenance services in Dubai.`,
      ``,
      `Name: ${name}`,
      data.get('company') ? `Company: ${String(data.get('company')).trim()}` : '',
      `Phone: ${phone}`,
      email ? `Email: ${email}` : '',
      `Property type: ${propertyType}`,
      `Required service: ${serviceLabel}`,
      `Property location: ${location}`,
      `Preferred contact method: ${method}`,
      ``,
      `Issue description:`,
      description,
      ``,
      `(Sent from the website enquiry form)`,
    ].filter((l) => l !== '')

    const composed = lines.join('\n')
    const wa = waLink()
    const waWithText = wa
      ? `${wa.split('?')[0]}?text=${encodeURIComponent(composed)}`
      : null

    if (waWithText) {
      window.open(waWithText, '_blank', 'noopener,noreferrer')
      setStatus({
        kind: 'ready',
        message:
          'Your enquiry is ready — WhatsApp has opened with your message pre-filled. Press send there to reach our team.',
        wa: waWithText,
        composed,
      })
    } else {
      setStatus({
        kind: 'ready',
        message:
          'Your enquiry has been composed below. Direct form delivery is not yet connected — please send it to us via WhatsApp or phone once our contact numbers are published on this page.',
        wa: null,
        composed,
      })
    }
    form.reset()
    setServices([])
  }

  const copyComposed = async () => {
    if (status.kind !== 'ready' || !status.composed) return
    try {
      await navigator.clipboard.writeText(status.composed)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable — user can select the text manually */
    }
  }

  return (
    <section className="section contact" id="contact" aria-label="Contact">
      <div className="section__inner">
        <SectionHead
          eyebrow="Contact"
          title="Let’s Discuss Your Maintenance Requirements"
        />
        <div className="contact__grid">
          <Reveal className="contact__form-wrap">
            <form className="form" onSubmit={onSubmit} noValidate>
              {/* honeypot */}
              <div className="form__hp" aria-hidden="true">
                <label htmlFor="field-website">Website</label>
                <input id="field-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="form__row">
                <div className="form__field">
                  <label htmlFor={inputId('name')}>Full Name *</label>
                  <input id={inputId('name')} name="name" type="text" required autoComplete="name" />
                </div>
                <div className="form__field">
                  <label htmlFor={inputId('company')}>Company Name</label>
                  <input id={inputId('company')} name="company" type="text" autoComplete="organization" />
                </div>
              </div>

              <div className="form__row">
                <div className="form__field">
                  <label htmlFor={inputId('phone')}>Phone Number *</label>
                  <input id={inputId('phone')} name="phone" type="tel" required autoComplete="tel" />
                </div>
                <div className="form__field">
                  <label htmlFor={inputId('email')}>Email Address</label>
                  <input id={inputId('email')} name="email" type="email" autoComplete="email" />
                </div>
              </div>

              <div className="form__row">
                <div className="form__field">
                  <label htmlFor={inputId('propertyType')}>Property Type *</label>
                  <select id={inputId('propertyType')} name="propertyType" required defaultValue="">
                    <option value="" disabled>
                      Select property type
                    </option>
                    {site.propertyTypes.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form__field">
                  <label htmlFor={inputId('location')}>Property Location *</label>
                  <input
                    id={inputId('location')}
                    name="location"
                    type="text"
                    required
                    placeholder="e.g. Dubai Marina, Dubai"
                  />
                </div>
              </div>

              <fieldset className="form__field form__services">
                <legend>Required Service * — select one or more</legend>
                <div className="form__chips">
                  {site.serviceOptions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      className="chip"
                      data-selected={services.includes(s)}
                      aria-pressed={services.includes(s)}
                      onClick={() => toggleService(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="form__field">
                <label htmlFor={inputId('description')}>Brief Description of the Issue *</label>
                <textarea id={inputId('description')} name="description" rows={4} required />
              </div>

              <fieldset className="form__field">
                <legend>Preferred Contact Method *</legend>
                <div className="form__radios">
                  {site.contactMethods.map((m) => (
                    <label key={m} className="radio">
                      <input type="radio" name="method" value={m} required />
                      <span>{m}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {status.kind === 'error' ? (
                <p className="form__status form__status--error" role="alert">
                  {status.message}
                </p>
              ) : null}
              {status.kind === 'ready' ? (
                <div className="form__status form__status--ok" role="status">
                  <p>{status.message}</p>
                  {status.composed ? (
                    <div className="form__composed">
                      <pre>{status.composed}</pre>
                      <button type="button" className="btn btn--ghost btn--sm" onClick={copyComposed}>
                        {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
                        {copied ? 'Copied' : 'Copy enquiry text'}
                      </button>
                    </div>
                  ) : null}
                </div>
              ) : null}

              <button type="submit" className="btn btn--primary form__submit">
                Send Enquiry via WhatsApp
                <MessageCircle size={16} strokeWidth={1.8} aria-hidden="true" />
              </button>
              <p className="form__hint">
                {WHATSAPP_CONFIGURED
                  ? 'Submitting opens WhatsApp with your enquiry pre-filled — nothing is sent until you press send.'
                  : 'This form prepares your enquiry for WhatsApp. Our WhatsApp number will be published here once confirmed.'}
              </p>
            </form>
          </Reveal>

          <Reveal className="contact__info">
            <dl className="contact__list">
              {site.company.contactPerson ? (
                <div className="contact__row">
                  <dt>
                    <User size={15} strokeWidth={1.8} aria-hidden="true" /> Contact
                  </dt>
                  <dd>{site.company.contactPerson}</dd>
                </div>
              ) : null}
              {PHONE_CONFIGURED ? (
                <div className="contact__row">
                  <dt>
                    <Phone size={15} strokeWidth={1.8} aria-hidden="true" /> Phone
                  </dt>
                  <dd>
                    <a href={`tel:${site.company.phoneHref}`}>{site.company.phoneDisplay}</a>
                  </dd>
                </div>
              ) : null}
              {WHATSAPP_CONFIGURED ? (
                <div className="contact__row">
                  <dt>
                    <MessageCircle size={15} strokeWidth={1.8} aria-hidden="true" /> WhatsApp
                  </dt>
                  <dd>
                    <a href={waLink() ?? '#contact'} target="_blank" rel="noopener noreferrer">
                      {site.company.phoneDisplay}
                    </a>
                  </dd>
                </div>
              ) : null}
              {!isPlaceholder(site.company.email) ? (
                <div className="contact__row">
                  <dt>
                    <Mail size={15} strokeWidth={1.8} aria-hidden="true" /> Email
                  </dt>
                  <dd>
                    <a href={`mailto:${site.company.email}`}>{site.company.email}</a>
                  </dd>
                </div>
              ) : null}
              {!isPlaceholder(site.company.address) ? (
                <div className="contact__row">
                  <dt>
                    <MapPin size={15} strokeWidth={1.8} aria-hidden="true" /> Office
                  </dt>
                  <dd>{site.company.address}</dd>
                </div>
              ) : null}
              {!isPlaceholder(site.company.workingHours) ? (
                <div className="contact__row">
                  <dt>
                    <Clock size={15} strokeWidth={1.8} aria-hidden="true" /> Hours
                  </dt>
                  <dd>{site.company.workingHours}</dd>
                </div>
              ) : null}
            </dl>
            <p className="contact__area mono">Service area — {site.company.serviceArea}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
