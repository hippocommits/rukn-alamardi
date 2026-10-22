/* ============ Site content types ============ */

export interface CompanyInfo {
  /** Short brand name shown in the header. */
  name: string
  /** Full legal name shown in the footer / structured data. */
  fullName: string
  descriptor: string
  /** Named contact person, if the company wants one published. */
  contactPerson: string
  phoneDisplay: string
  /** tel: href value, digits only with country code, e.g. "+9714XXXXXXX". Empty = not configured. */
  phoneHref: string
  email: string
  address: string
  serviceArea: string
  workingHours: string
}

export interface NavItem {
  label: string
  href: string
}

export interface ServiceGroup {
  heading: string
  items: string[]
}

export interface ServiceCategory {
  /** Two-digit index shown in the catalogue, e.g. "01". */
  index: string
  /** lucide-react icon component name — mapped in components/Services.tsx */
  icon: string
  title: string
  summary: string
  groups: ServiceGroup[]
  /** Optional compliance note rendered at the foot of the expanded panel. */
  note?: string
}

export interface Industry {
  icon: string
  name: string
  blurb: string
}

export interface Benefit {
  index: string
  title: string
  text: string
}

export interface ProcessStep {
  index: string
  title: string
  text: string
}

export interface SiteConfig {
  company: CompanyInfo
  /**
   * International format WITHOUT "+" or spaces, e.g. "9715XXXXXXXX".
   * Empty string = not yet configured: WhatsApp CTAs then deep-link to the
   * contact section instead of opening a dead wa.me URL.
   */
  whatsappNumber: string
  /** Prefilled enquiry message; {service} is replaced with the chosen service. */
  whatsappMessage: string
  nav: NavItem[]
  serviceStrip: string[]
  services: ServiceCategory[]
  industries: Industry[]
  benefits: Benefit[]
  process: ProcessStep[]
  serviceOptions: string[]
  propertyTypes: string[]
  contactMethods: string[]
}
