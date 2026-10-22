import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { site } from '../config'
import { waHref, WHATSAPP_CONFIGURED } from '../lib/whatsapp'
import { useActiveSection, useScrolled } from '../hooks'

function Logo() {
  return (
    <a className="brand" href="#home" aria-label={`${site.company.fullName} — home`}>
      <img className="brand__mark" src="/media/logo.png" alt="" aria-hidden="true" />
      <span className="brand__text">
        <span className="brand__rukn">Rukn</span>
        <span className="brand__name">{site.company.name}</span>
        <span className="brand__descriptor">{site.company.descriptor}</span>
      </span>
    </a>
  )
}

export default function Header() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const active = useActiveSection(site.nav.map((n) => n.href.slice(1)))

  useEffect(() => {
    document.body.classList.toggle('overlay-open', open)
    return () => document.body.classList.remove('overlay-open')
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const wa = waHref()

  return (
    <>
      <header className="site-header" data-scrolled={scrolled}>
        <div className="site-header__inner">
          <Logo />

          <nav className="site-nav" aria-label="Primary">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="site-nav__link"
                data-active={active === item.href.slice(1)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <a
              className="icon-btn"
              href={wa}
              {...(WHATSAPP_CONFIGURED ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              aria-label="Contact us on WhatsApp"
              title="WhatsApp"
            >
              <MessageCircle size={18} strokeWidth={1.8} />
            </a>
            <a className="btn btn--primary btn--sm site-header__quote" href="#contact">
              Request a Quote
            </a>
            <button
              type="button"
              className="icon-btn site-header__burger"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay — rendered outside the header so the header's
          backdrop-filter does not become its fixed-position containing block. */}
      <div
        id="mobile-menu"
        className="mobile-menu"
        data-open={open}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <nav className="mobile-menu__nav" aria-label="Mobile">
          {site.nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-menu__link"
              style={{ transitionDelay: open ? `${60 + i * 40}ms` : '0ms' }}
              onClick={() => setOpen(false)}
            >
              <span className="mobile-menu__index">{String(i + 1).padStart(2, '0')}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__actions">
          <a
            className="btn btn--accent"
            href={wa}
            {...(WHATSAPP_CONFIGURED ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            onClick={() => setOpen(false)}
          >
            <MessageCircle size={16} strokeWidth={1.8} />
            WhatsApp Us
          </a>
          <a className="btn btn--ghost-light" href="#contact" onClick={() => setOpen(false)}>
            Request a Quote
          </a>
        </div>
      </div>
    </>
  )
}
