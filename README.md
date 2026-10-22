# Rukn Al Amardi Technical Service — single-page website

A premium, minimalist single-page site for Rukn Al Amardi Technical Service
(AL AMARDI), a Dubai-based MEP maintenance and technical services company.
React 19 + TypeScript + Vite, no backend — enquiries convert through WhatsApp
click-to-chat (+971 50 705 3498), phone, email, and an on-page enquiry form
that composes a pre-filled WhatsApp message.

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
```

## Configure (one file)

All content lives in `src/config.ts`:

- `company` — name, contact person, phone, email, address, hours.
  `workingHours` is still a placeholder — set it to the confirmed schedule and
  the Hours row appears in the contact section automatically.
- `whatsappNumber` — currently `971507053498`. Emptying it makes every
  WhatsApp CTA deep-link to the contact section instead of a dead wa.me URL.
- `whatsappMessage` — pre-filled enquiry template; `{service}` is replaced with
  the selected service.
- `services` — the 12 service categories and their full sub-service lists
- `industries`, `benefits`, `process`, form options

## Structure

```
src/
  config.ts              all content (edit this)
  lib/whatsapp.ts        wa.me link builder
  hooks.ts               reveal / sticky header / active section
  components/            Header, Hero, About, Services, Industries, WhyUs(+Process),
                         CtaBand, Contact, Footer, WhatsAppFloat
  styles/                base (tokens) / app / responsive
```

## Notes

- Brand palette follows the company card: deep navy + gold accent
  (`--accent-on-navy` for text on dark sections).
- `public/media/logo.png` / `favicon.png` were extracted from the company
  business card. Photography in `public/media/` is AI-generated placeholder;
  replace with real project photos when available.
- LocalBusiness JSON-LD in `index.html` uses only verified details; add
  `openingHours` and `geo` once confirmed.
- No statistics, testimonials or certifications are shown — add only verified ones.

