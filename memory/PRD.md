# Ayvant IT & Cybersecurity Website - PRD

## Project Overview
Website for **Ayvant IT & Cybersecurity Inc.**, an IT support and cybersecurity company based in Langley, British Columbia, serving law firms, accountants, and businesses in Vancouver and the Lower Mainland.

## Target Audience
- Law Firms
- Accounting Practices  
- Professional Service Businesses
- Vancouver & Lower Mainland Area (BC)

## Brand Guidelines
- **Colors**: Red (#E31837), White, Black
- **Logo**: Light version for navbar, dark version for footer
- **Tone**: Human-first, professional, approachable

## Contact Information
- **Phone**: (604) 239-2090
- **Email**: hello@ayvant.ca
- **Address**: 20627 Fraser Hwy, Langley, BC V3A 4G4
- **Client Portal**: https://ayvant-ca.app.clientclub.net/

---

## Implementation Status: COMPLETE ✓

### Final Deliverable
**Static HTML/CSS Website** - Ready for self-hosting

**Location**: `/app/static-html/`
**Zip Archive**: `/app/ayvant-static-html.zip` (120KB)

### Pages Created (18 total)

#### Core Pages
- [x] `index.html` - Homepage
- [x] `pages/cybersecurity.html` - Cybersecurity Services
- [x] `pages/it-support.html` - IT Support Services
- [x] `pages/it-consulting.html` - IT Consulting Services
- [x] `pages/about.html` - About Us
- [x] `pages/contact.html` - Contact Page (with GHL form)

#### Legal Pages (BC Compliant)
- [x] `pages/privacy-policy.html` - Privacy Policy
- [x] `pages/terms-of-service.html` - Terms of Service
- [x] `pages/cookie-policy.html` - Cookie Policy

#### Location-Based SEO Pages (10)
- [x] `pages/it-support-vancouver.html`
- [x] `pages/it-support-surrey.html`
- [x] `pages/it-support-langley.html`
- [x] `pages/it-support-burnaby.html`
- [x] `pages/it-support-richmond.html`
- [x] `pages/it-support-coquitlam.html`
- [x] `pages/it-support-port-moody.html`
- [x] `pages/it-support-delta.html`
- [x] `pages/it-support-abbotsford.html`
- [x] `pages/it-support-chilliwack.html`

### Features Implemented
- [x] Responsive design (mobile, tablet, desktop)
- [x] Navigation with mobile menu
- [x] Cookie consent banner
- [x] Exit-intent popup (Dark Web Scan lead magnet)
- [x] GHL Chat Widget integration
- [x] GHL Contact Form integration
- [x] GHL Newsletter Form integration
- [x] Footer with service areas & contact info
- [x] All pages interlinked

### Third-Party Integrations
- **Go High Level (GHL)**: Contact forms, Newsletter, Chat widget
  - No API keys required (embedded via iFrame/script)

---

## File Structure
```
/app/static-html/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
└── pages/
    ├── about.html
    ├── contact.html
    ├── cybersecurity.html
    ├── it-consulting.html
    ├── it-support.html
    ├── privacy-policy.html
    ├── terms-of-service.html
    ├── cookie-policy.html
    ├── it-support-vancouver.html
    ├── it-support-surrey.html
    ├── it-support-langley.html
    ├── it-support-burnaby.html
    ├── it-support-richmond.html
    ├── it-support-coquitlam.html
    ├── it-support-port-moody.html
    ├── it-support-delta.html
    ├── it-support-abbotsford.html
    └── it-support-chilliwack.html
```

---

## Hosting Instructions
The static site can be hosted on any standard web server:

1. **Extract** `ayvant-static-html.zip`
2. **Upload** all files to your web hosting
3. **Configure** `index.html` as the default document
4. No server-side processing required (Node.js/Python not needed)

Compatible with: Apache, Nginx, Netlify, Vercel, GitHub Pages, AWS S3, etc.

---

## Changelog

### February 28, 2026
- Converted React application to static HTML/CSS
- Created all 18 static pages
- Generated location-specific SEO content for 10 cities
- Included all GHL integrations in static output
- Created downloadable zip archive

### Previous Work (React Version)
- Built full-stack React/FastAPI application
- Implemented all page designs and content
- Added GHL integrations
- Created legal pages (BC compliant)
- Added cookie consent and exit-intent popup

---

## Future Considerations
- Add Google Analytics tracking code
- Set up custom domain
- Configure SSL certificate
- Add blog section for content marketing
- Consider CMS integration for easier content updates
