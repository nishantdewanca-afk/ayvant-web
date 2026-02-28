# Ayvant IT & Cybersecurity Inc. - Website PRD

## Original Problem Statement
Build a website for Managed IT & Cybersecurity for Ayvant IT & Cybersecurity Inc. based in Langley, British Columbia, serving Vancouver and Lower Mainland. Target: Law Firms, Accountants, Immigration Firms. Theme: red (#E31837), white, black.

## User Persona
- **Primary Target**: Law Firms, Accounting Firms in Vancouver/Lower Mainland
- **Secondary Target**: Immigration Consultants, Professional Service Businesses
- **Decision Makers**: Partners, Managing Directors, Office Managers

## Core Requirements (Static)
- Professional marketing website with red, white, black color scheme
- Pages: Home, Cybersecurity, IT Support, IT Consulting, About, Contact
- Primary focus on Cybersecurity services, followed by IT Support
- Human-centric, jargon-free content
- Go High Level CRM integrations

## What's Been Implemented

### Phase 1 (Initial Build)
- 6 main pages with comprehensive content
- Swiss-style high-contrast design with Chivo/Manrope typography
- Responsive layouts and mobile navigation
- Testimonials section
- Industries served (Law Firms, Accountants, Immigration Firms)

### Phase 2 (GHL Integration & SEO Pages) - December 2025
**GHL Integrations:**
- ✅ Contact Form - iframe embedded on Contact page
- ✅ Newsletter Form - iframe embedded in Footer
- ✅ Chat Widget - Global script in index.html (appears on all pages)
- ✅ Client Portal - Link updated to https://ayvant-ca.app.clientclub.net/

**Contact Info Updates:**
- ✅ Phone: (604) 239-2090
- ✅ Email: hello@ayvant.ca
- ✅ Langley Office: 20627 Fraser Hwy, Langley, BC V3A 4G4
- ✅ Surrey Office: 2677 192 St. Suite 102, Surrey, BC V3S 3X1

**10 Location-Based SEO Pages:**
1. ✅ /it-support-vancouver
2. ✅ /it-support-surrey
3. ✅ /it-support-langley
4. ✅ /it-support-burnaby
5. ✅ /it-support-richmond
6. ✅ /it-support-coquitlam
7. ✅ /it-support-port-moody
8. ✅ /it-support-delta
9. ✅ /it-support-abbotsford
10. ✅ /it-support-chilliwack

Each location page includes:
- Unique city-specific content
- Law Firms section with software tools (Clio, PCLaw, etc.)
- Accountants section with software tools (QuickBooks, Sage, TaxCycle, etc.)
- Local neighborhoods served
- Interlinks to other service areas
- SEO-optimized headings and content

## Prioritized Backlog

### P0 (Completed)
- [x] GHL contact form integration
- [x] GHL newsletter form integration
- [x] GHL chat widget integration
- [x] Client Portal link
- [x] Updated contact information
- [x] 10 location SEO pages

### P1 (Recommended)
- [ ] Add real testimonials from clients
- [ ] Add case studies/success stories page
- [ ] Meta tags for each page (SEO)
- [ ] XML sitemap generation
- [ ] Google Analytics integration

### P2 (Nice to Have)
- [ ] Add pricing calculator
- [ ] Add team member individual profiles
- [ ] Add certifications/partnerships badges
- [ ] Add blog/resources section
- [ ] Add FAQ page

## Technical Notes
- Chat widget loaded via script in /public/index.html
- GHL forms use iframe embeds
- Location pages share LocationPages.jsx component with unique data per city
- Service area links in footer for SEO internal linking
