import { site } from '../config'

/**
 * Build a wa.me click-to-chat URL with a URL-encoded, source-identifying
 * message. Returns null while the WhatsApp number is still a placeholder,
 * so callers can fall back to the on-page contact section instead of
 * rendering a dead link.
 */
export function waLink(service?: string): string | null {
  const number = site.whatsappNumber.trim()
  if (!number) return null
  const message = site.whatsappMessage.replace('{service}', service?.trim() || 'General enquiry')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

/** href for WhatsApp CTAs: wa.me when configured, otherwise the contact section. */
export function waHref(service?: string): string {
  return waLink(service) ?? '#contact'
}

export const WHATSAPP_CONFIGURED = site.whatsappNumber.trim().length > 0
export const PHONE_CONFIGURED = site.company.phoneHref.trim().length > 0
