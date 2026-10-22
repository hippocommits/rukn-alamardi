import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { waHref, WHATSAPP_CONFIGURED } from '../lib/whatsapp'

/* Floating WhatsApp shortcut — fixed bottom-right, above content, below overlays. */
export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      className="wa-float"
      href={waHref()}
      {...(WHATSAPP_CONFIGURED ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      aria-label="Chat with us on WhatsApp"
      data-visible={visible}
    >
      <MessageCircle size={22} strokeWidth={1.8} aria-hidden="true" />
      <span className="wa-float__label">WhatsApp</span>
    </a>
  )
}
