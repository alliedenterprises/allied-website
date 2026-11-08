# CLAUDE.md — Allied Enterprises Website

## 1. Project Overview

Build and maintain the website for **Allied Enterprises WLL**, Doha, Qatar — a ZKTeco partner providing biometric attendance systems, access control, HRMS/payroll, IT infrastructure, and business technology solutions.

### Primary goals, in strict priority order

1. **SEO and organic search visibility**
2. Website performance and user experience
3. Qualified lead generation: quote requests, demos, phone calls, and WhatsApp enquiries
4. Maintainable, secure, reliable code

Every public-facing development decision must consider its effect on search visibility, content quality, crawlability, performance, and conversions.

The goal is to compete for relevant Google searches and achieve the strongest realistic organic visibility. Never promise a guaranteed first-place ranking.

### Target audience

- Primary market: Qatar, especially Doha.
- Language: English only.
- No Arabic, internationalization, or RTL routing unless explicitly requested.
- Target customers seeking ZKTeco products, biometric systems, attendance software, access control, and related IT solutions.

## 2. Technology Stack

- Next.js 16 App Router
- TypeScript, strict mode
- React Server Components by default
- Payload CMS 3, blank template
- PostgreSQL database: `allied_site`, configured using `DATABASE_URL`
- Tailwind CSS
- Production: AWS EC2 Windows Server
- Process manager: PM2
- Application port: 3002
- Reverse proxy: IIS
- SSL: win-acme

### Version compatibility

Before modifying code, inspect `package.json` and the installed dependencies. Read the relevant documentation under `node_modules/next/dist/docs/` before implementing Next.js features.

Do not rely blindly on older Next.js APIs or assumptions.

## 3. SEO-First Development Workflow

Before creating a page or making a significant change:

1. Inspect the existing implementation.
2. Identify the target audience, search intent, and business objective.
3. Research relevant keywords and competing search results where tools are available.
4. Map the target search intent to the correct existing or proposed URL.
5. Check for duplicate content and keyword cannibalization.
6. Plan the page content, metadata, internal links, structured data, and conversion actions.
7. Implement the solution without damaging existing functionality or search equity.
8. Validate the build, rendering, indexability, metadata, links, and performance.
9. Report what was actually tested and any remaining work.

### Decision-making principles

For every public page, ask:

- Can Google discover and crawl this page?
- Does it satisfy a genuine user search intent?
- Is the content more useful and specific than competing content?
- Does the page have a clear purpose and unique value?
- Does it preserve valuable existing URLs and backlinks?
- Does it support a relevant customer enquiry?
- Can the implementation be simpler, faster, and more reliable?

Do not sacrifice content quality, security, or correctness for an arbitrary SEO score.

## 4. Competitive Keyword Strategy — Qatar

The following keywords are initial research targets, not verified search-volume or difficulty rankings. Validate demand, intent, and competition before finalizing the keyword map.

### Priority A: ZKTeco supplier and dealer searches

- ZKTeco supplier in Qatar
- ZKTeco dealer in Qatar
- ZKTeco authorized dealer Qatar
- ZKTeco products Qatar
- ZKTeco biometric devices Doha
- Buy ZKTeco devices in Qatar

### Priority A: Biometric attendance systems

- Biometric attendance system Qatar
- Time attendance system Qatar
- Fingerprint attendance machine Qatar
- Face recognition attendance system Qatar
- Employee attendance machine Doha
- Biometric attendance system price Qatar

### Priority B: Access control

- Access control system Qatar
- Biometric access control Qatar
- ZKTeco access control Qatar
- Fingerprint door access system Qatar
- Face recognition access control system

### Priority B: Attendance software and HRMS

- Attendance management software Qatar
- ZKTeco BioTime software Qatar
- HRMS and payroll software Qatar
- Employee time tracking software Qatar
- Attendance and payroll integration

### Priority C: Other company services

- Structured cabling Qatar
- Fiber optic testing Qatar
- PABX system Qatar
- Video intercom Qatar
- Automatic gate barrier Qatar

Do not assume all these queries have equal demand or commercial value. Prioritize using actual search data, relevance to the business, competitive difficulty, and qualified lead potential.

## 5. Competitor Research Requirements

Before finalizing the website architecture or rewriting important landing pages:

1. Research Google search results for the primary keyword groups in Qatar.
2. Identify relevant competitors appearing for commercial searches.
3. Analyze their page titles, headings, page structure, product coverage, technical information, and internal linking.
4. Identify genuine content gaps and useful information customers cannot easily find elsewhere.
5. Review visible trust signals, company credentials, installation services, local support, and contact options.
6. Use available keyword research tools to estimate demand and difficulty.
7. Record findings and recommendations in a maintainable project document.

Do not fabricate search volumes, keyword difficulty, traffic, rankings, backlinks, or competitor performance metrics.

Do not copy competitors' text. Use research to create more useful, original content.

### Competitive differentiation

Where factually supported, emphasize:

- Verified ZKTeco partnership or authorization.
- Actual product models and specifications.
- Local consultation and support.
- Installation and configuration services that the company genuinely provides.
- Attendance software capabilities and verified integrations.
- Accurate company experience and approved case studies.
- Clear quotations, product guidance, and implementation information.

Never invent customer testimonials, certifications, projects, awards, or claims such as "Qatar's number one supplier."

## 6. Keyword-to-URL Architecture

Use this as a proposed structure, not authorization to rename existing routes.

| Proposed page                            | Primary search intent                                                                        |
| ---------------------------------------- | -------------------------------------------------------------------------------------------- |
| Homepage                                 | Company-level ZKTeco and biometric solutions in Qatar                                        |
| `/zkteco-qatar/`                         | ZKTeco supplier, dealer, products, and local support                                         |
| `/time-attendance-system-qatar/`         | Biometric attendance devices and workforce time tracking                                     |
| `/biometric-access-control-qatar/`       | Access control and biometric security                                                        |
| `/attendance-management-software-qatar/` | Attendance software, reporting, and workforce management                                     |
| `/hrms-payroll-software-qatar/`          | HRMS and payroll solutions, where offered                                                    |
| `/products/`                             | Product catalogue                                                                            |
| `/products/[slug]/`                      | Individual product and model-specific information                                            |
| Existing service routes                  | Structured cabling, fiber testing, PABX, intercom, gate barriers, and other genuine services |

### Keyword mapping rules

- Assign one primary search intent to each important landing page.
- Give every indexable page a distinct purpose.
- Keep the homepage focused on the broad company offering.
- Use dedicated pages for genuinely distinct services and products.
- Link related products, services, industries, and guides naturally.
- Avoid near-identical pages targeting minor keyword variations.
- Do not create doorway pages or fake location pages.
- Review existing URLs and Search Console data before creating new routes.

## 7. Homepage SEO Positioning

Use these as starting drafts. Validate them against the actual search landscape before finalizing.

**Proposed title:**

`ZKTeco & Biometric Attendance Solutions in Qatar | Allied Enterprises`

**Proposed H1:**

`ZKTeco Supplier in Qatar for Biometric Attendance & Access Control`

**Proposed meta description:**

`Explore ZKTeco devices, biometric attendance systems and access control solutions in Qatar. Contact Allied Enterprises for product guidance and quotations.`

The homepage should communicate the company's primary offering clearly. Dedicated pages must target narrower search intents without duplicating the homepage.

## 8. Commercial Landing Page Requirements

Every important service or product landing page must have:

- A unique, descriptive title and meta description.
- One clear H1 as the project's heading convention.
- A useful introduction explaining the offering and its relevance to Qatar.
- Original content addressing customer needs and purchase decisions.
- Relevant products, specifications, compatibility, or implementation details where verified.
- Clear calls to action for quotations, demos, phone calls, or WhatsApp.
- Relevant FAQs based on genuine customer questions.
- Descriptive internal links to related pages.
- Accurate contact and company information.
- Appropriate images, alt text, canonical URLs, and structured data where applicable.
- A clear purpose that distinguishes it from other pages.

Avoid keyword stuffing, generic filler, repetitive headings, and unnecessary city-name variations.

## 9. Technical SEO Requirements

### Metadata

- Use the Next.js Metadata API.
- Set sensible defaults in the public root layout.
- Give every important indexable page a unique, relevant title and description.
- Use `generateMetadata` for dynamic product pages.
- Configure `metadataBase` using the verified production domain.
- Configure correct canonical URLs and Open Graph metadata.
- Provide suitable social-sharing images.
- Avoid duplicate metadata and conflicting canonical tags.
- Never apply `noindex` to important public landing pages accidentally.

Do not turn an entire page into a Client Component merely to configure metadata.

### Canonical URLs and redirects

- Use stable, descriptive URLs.
- Standardize HTTPS and the preferred production hostname.
- Keep canonical URLs consistent with the preferred route.
- Handle trailing slashes and query parameters consistently.
- Preserve existing routes where possible.
- Implement permanent redirects for approved URL changes.
- Preserve existing WordPress migration redirects.
- Avoid redirect chains, loops, irrelevant redirects, and blanket homepage redirects.

### Crawlability and indexing

- Maintain the sitemap and robots configuration using supported Next.js conventions.
- Include eligible, canonical public pages and published product pages in the sitemap.
- Exclude redirects, 404s, private pages, and non-canonical URLs.
- Ensure important pages are reachable through internal links.
- Check for accidental `noindex`, blocked crawling, broken canonical URLs, and orphan pages.
- Remember that robots.txt blocking does not itself guarantee removal from Google's index.
- Protect admin pages and private information through real access controls.

### Rendering

- Prefer Server Components and static generation for public content where appropriate.
- Use suitable caching and revalidation for Payload content.
- Use dynamic rendering when required for accurate or fresh data.
- Avoid unnecessary `cookies()`, `headers()`, and `cache: 'no-store'` usage on public pages.
- Ensure important content is available in rendered HTML and is not exclusively dependent on client-side interactions.
- Verify the actual production output rather than assuming pages are indexable.

### HTML and accessibility

- Use semantic HTML and a logical heading hierarchy.
- Maintain one clear primary H1 per page as a project convention, not a claimed Google ranking requirement.
- Use descriptive anchor text and crawlable links.
- Use meaningful alt text for informative images and empty alt text for decorative images.
- Ensure keyboard accessibility and mobile navigation work correctly.

### Structured data

- Use valid JSON-LD that accurately represents the visible page content.
- Use an appropriate LocalBusiness subtype where applicable.
- Include verified company details and opening hours.
- Represent the company's multiple office locations accurately.
- Use Product structured data for genuine product pages when appropriate.
- Add breadcrumb structured data where useful.
- Use FAQ structured data only when eligible and supported by visible content.
- Never invent reviews, ratings, prices, availability, certifications, or business facts.
- Validate structured data using suitable testing tools.

Structured data eligibility does not guarantee a Google rich result.

## 10. Local SEO — Qatar

- Maintain consistent company name, phone numbers, addresses, hours, and website information.
- Provide an accurate contact page.
- Include Qatar and Doha context naturally where relevant.
- Optimize the Google Business Profile if it exists and access is available.
- Encourage genuine customer reviews through legitimate processes.
- Seek relevant local directories, industry listings, and genuine partner references.
- Do not invent office locations or use misleading location pages.
- Distinguish local map rankings from standard organic search rankings.

## 11. Performance and Core Web Vitals

- Prefer Server Components.
- Minimize unnecessary client-side JavaScript.
- Use `next/image` with appropriate dimensions and responsive sizes.
- Use `next/font` for optimized font loading.
- Reserve image and media space to prevent layout shifts.
- Optimize the hero image and main content loading.
- Lazy-load below-the-fold media and defer nonessential scripts.
- Avoid unnecessary dependencies and heavy animation libraries.
- Load maps and third-party widgets only when needed.
- Keep Payload queries efficient.
- Avoid resource-intensive operations on the shared production server.

Target good Core Web Vitals at the 75th percentile:

- LCP: 2.5 seconds or less.
- INP: 200 milliseconds or less.
- CLS: 0.1 or less.

Use PageSpeed Insights, Lighthouse, and Search Console field data where available. Do not claim that a Lighthouse score guarantees high rankings.

## 12. Lead Generation

- Provide clear quotation, demo, phone, and WhatsApp actions where appropriate.
- Use accurate company contact information.
- Make important conversion actions easy to use on mobile.
- Use accessible forms with appropriate validation.
- Keep conversion interfaces lightweight.
- Avoid intrusive popups that obstruct content.
- Track qualified leads when analytics is configured and applicable consent requirements are met.

## 13. Core Architecture: Hardcoded vs Payload CMS

Most of the website is hardcoded in Next.js.

Only the following are managed in Payload:

| Editable in Payload       | Location                                               |
| ------------------------- | ------------------------------------------------------ |
| Company statistics        | Global `company-stats` → `src/globals/CompanyStats.ts` |
| ZKTeco products           | Collection `products` → `src/collections/Products.ts`  |
| Uploaded images and files | Collection `media`                                     |

Product fields include name, slug, category, image, short description, specifications, datasheet, and featured status.

Everything else, including page text, services, industries, FAQs, about, contact details, menus, and footer, remains hardcoded in components or `src/content/*.ts` files.

Do not add Payload collections, globals, layout builders, or CMS-driven pages unless explicitly requested.

### Payload rules

- Build presentational components that receive data through props.
- Fetch data in server pages or suitable server-side modules.
- Use the Payload Local API rather than calling our own REST API from server-rendered pages.
- Apply correct access controls to public and private data.
- Revalidate affected routes after relevant CMS changes.
- Refresh cached listings and sitemap data when required.
- Ensure drafts and unpublished products do not appear publicly or in the sitemap.
- Preserve product slug stability and implement redirects for approved slug changes.
- Run `npm run generate:types` after changing Payload configuration.

## 14. Existing Website and Migration Protection

Production domain: `https://alliedeprs.com`

Before making major changes:

1. Inventory existing public URLs.
2. Inspect existing page content and internal links.
3. Review Google Search Console data if accessible.
4. Identify valuable pages, impressions, backlinks, and existing redirects.
5. Map any changed URLs to relevant replacements.
6. Preserve existing search equity wherever possible.
7. Validate production canonical URLs, sitemap, redirects, and indexability after deployment.

Do not delete old pages or rename routes merely because a new URL seems more SEO-friendly.

## 14A. URL Migration Rules (WordPress → Next.js) — MANDATORY

The old WordPress site stays live until migration is complete. Its URLs carry our
current Google rankings. Losing them is the biggest SEO risk of this project.

### Source of truth

- `docs/url-inventory.md` lists every old WordPress URL and its status:
  `rebuilt` | `redirected → <new URL>` | `pending`.
- Before creating, renaming or deleting any route, read this file.
- After creating a page or redirect, update this file in the same change.
- If the inventory is missing or incomplete, ask for the WordPress sitemap or
  Search Console export before planning URL changes. Never guess the old URLs.

### When creating a page

1. If an old URL exists for the topic, build the new page at EXACTLY that path,
   including the trailing slash (`trailingSlash: true` in next.config.ts).
   Example: `/time-attendance-system-qatar/` — not `/time-attendance/`,
   not `/time-attendance-system-qatar` without the slash.
2. Keep old slugs even if they contain typos or look unoptimized
   (e.g. `/wialon-plaftform-for-gps-tracking/`). Do not "improve" slugs.
3. A brand-new page (no old equivalent, e.g. `/zkteco-qatar/`) must not take over
   the topic of an existing old URL. Check for keyword cannibalization first.
4. Add every new public page to `sitemap.ts`.

### When an old page will NOT be rebuilt

1. Add a permanent redirect in `next.config.ts` `redirects()` to the MOST
   relevant new page — never a blanket redirect to the homepage.
2. Redirect directly to the final URL (no chains: A → B → C).
3. Never remove an existing redirect.
4. Any decision to drop or merge a page needs human approval first.

### Before launch (switching the domain to Next.js)

Do not recommend or assist with switching the domain until ALL of these pass:

- [ ] Every URL in `docs/url-inventory.md` is `rebuilt` or `redirected`.
- [ ] A script has requested every old URL on the new build and confirmed
      200 (rebuilt) or 308/301 → a 200 page (redirected). Zero 404s.
- [ ] No redirect chains or loops.
- [ ] Canonical tags match the final URLs exactly (with trailing slash).
- [ ] `sitemap.ts` contains only live, canonical 200 pages.
- [ ] Old WordPress media/PDF URLs that receive traffic are handled.
- [ ] Results of the check are reported to the human — not assumed.

### After launch

- Submit the sitemap in Search Console (human task) and monitor 404s,
  indexing and impressions for at least 4–6 weeks.
- Keep the old URL inventory file; never delete it.

## 15. Project Structure

```text
src/
  app/
    (frontend)/
      layout.tsx
      page.tsx
      about/page.tsx
      products/page.tsx
      products/[slug]/page.tsx
      <service-slug>/page.tsx
      contact/page.tsx
      sitemap.ts
      robots.ts
    (payload)/              # Do not edit unless authorized
  components/
    layout/
    sections/
    ui/
  content/
    services.ts
    industries.ts
    faq.ts
    company.ts
  collections/
    Users.ts
    Media.ts
    Products.ts
  globals/
    CompanyStats.ts
  payload.config.ts
```

Follow the actual repository structure if it differs. Do not move or rename routes simply to match this example.

## 16. SEO Audit and Release Checklist

Before marking a major SEO task complete, verify applicable items.

### Content

- [ ] Clear search intent and primary topic.
- [ ] Original, accurate, useful content.
- [ ] Unique page purpose and relevant internal links.
- [ ] No unnecessary duplicate or doorway pages.
- [ ] Clear next steps for potential customers.

### Technical SEO

- [ ] Unique metadata on important indexable pages.
- [ ] Correct canonical URLs and production domain.
- [ ] Correct indexing and robots directives.
- [ ] Sitemap contains eligible public pages.
- [ ] No broken internal links or redirect chains.
- [ ] Correct response status codes.
- [ ] Important content available in rendered HTML.
- [ ] Appropriate, valid structured data.
- [ ] Responsive design and accessible images.

### Performance and code

- [ ] Production build passes.
- [ ] TypeScript checks pass.
- [ ] Relevant lint and tests pass.
- [ ] Mobile navigation works.
- [ ] No obvious layout shifts or unnecessary scripts.
- [ ] Performance results reviewed where available.

### External verification

- [ ] Search Console configured, if access is available.
- [ ] Sitemap submitted, if access is available.
- [ ] Important URLs inspected for indexing eligibility.
- [ ] Google Business Profile reviewed, if applicable.

Never claim that Google has indexed a page, accepted a sitemap, verified a business profile, or improved rankings unless the result was actually confirmed.

## 17. Monitoring and Continuous Improvement

When Search Console or analytics data is available:

- Monitor impressions, clicks, click-through rate, and average position by query and page.
- Identify relevant queries generating impressions but weak click-through rates.
- Investigate indexing problems and declining organic visibility.
- Improve pages based on actual search intent and user behavior.
- Investigate keyword cannibalization.
- Track qualified leads, not only traffic.
- Review Core Web Vitals and crawl/indexing reports regularly.
- Prioritize changes by impact, evidence, confidence, and effort.

Do not invent analytics data or imply that rankings can be controlled directly.

## 18. Company Details

Source of truth: `src/content/company.ts`

- Name: Allied Enterprises WLL
- Phone: +974 4471 8845
- Helpline/WhatsApp: +974 3333 8964
- Email: [info@alliedeprs.com](mailto:info@alliedeprs.com)
- Office 1: 204 Retaj Business Building, B Ring Road, Doha, Qatar
- Office 2: 108 Fereej Bin Dirhem, B Ring Road, Doha, Qatar
- Hours: Sunday–Thursday, 8:00 AM–5:30 PM; Saturday, 8:00 AM–1:00 PM; Friday closed
- Domain: [https://alliedeprs.com](https://alliedeprs.com)

Verify facts against the existing source of truth before changing public information.

## 19. Code Conventions and Production Safety

- TypeScript strict mode; avoid `any`.
- Use generated types from `src/payload-types.ts`.
- Follow existing component naming and export conventions.
- Keep components small and reusable.
- Do not add dependencies without asking first.
- Do not edit `src/app/(payload)/` unless explicitly authorized.
- Preserve existing backend functionality and production configuration.
- Never expose `.env` values, credentials, or private information.
- The production server also runs the company ERP using SQL Server and a Java service. Avoid heavy CPU and memory usage.
- Prefer development-machine builds where possible.
- Do not modify unrelated files during SEO tasks.

## 20. Required Claude Code Behavior

Before substantial work:

1. Read this file and inspect relevant project files.
2. Read applicable documentation for the installed Next.js version.
3. Audit current behavior before making changes.
4. Present a prioritized plan for significant SEO or architecture changes.
5. Implement in small, reviewable steps.
6. Run relevant tests and report actual results.
7. Identify tasks requiring external access or human approval.

For SEO work, explicitly consider search intent, keyword mapping, metadata, indexing, internal linking, performance, conversion potential, and migration risks.

Do not guarantee first-place rankings. Do not use cloaking, hidden keyword text, fake reviews, manipulative link schemes, or doorway pages.

## 21. Next.js Agent Rules — Preserve This Block

\<!-- BEGIN\:nextjs-agent-rules -->

This is NOT the Next.js you know.

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

\<!-- END\:nextjs-agent-rules -->

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
