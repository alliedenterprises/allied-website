# SEO Audit — Allied Enterprises (alliedeprs.com)

**Date:** 27 October 2026
**Scope:** Audit only — no code was changed. Covers the live WordPress site, the new Next.js build, Qatar competitors, a keyword-to-URL map, and prioritized recommendations.
**Status:** Draft for review. Items marked **NEEDS DATA** require Google Search Console, a keyword tool, or company confirmation before acting.

---

## 0. Method and limits (read first)

What was done:

- Fetched and reviewed 9 live pages on alliedeprs.com (home, about, contact, time-management, time attendance, access control, BioTime, HRMS, gate barrier), plus the site navigation.
- Ran web searches for 10 keyword queries covering the CLAUDE.md §4 groups and reviewed the result lists.
- Analyzed six competitor landing pages in detail.
- Inspected the new Next.js project files and the installed Next 16.3.3 docs.

What was **not** available, so nothing below is based on it:

- **No search volumes or keyword difficulty.** No keyword tool was available; none are estimated here (CLAUDE.md §5).
- **No Google Search Console data.** Impressions, clicks, positions and backlinks are unknown.
- **The search results seen are not Google Qatar.** The search tool is not location-specific, so result order is indicative only. Treat "appears in results" as a signal, not a ranking.
- **The WordPress sitemap and robots.txt could not be fetched.** The URL inventory below is built from navigation and search results, so it may be incomplete.

---

## 1. Executive summary

1. **The biggest risk is losing existing rankings at launch, not lack of new content.** The old site already appears in results for "ZKTeco dealer Qatar" (via `/about-us/`), "time/biometric attendance system Qatar" and "ZKTeco BioTime software Qatar" (via the home page), and "gate barrier turnstile supplier Qatar" (via `/zkteco-qatar-gate-barrier-system/`). The new Next.js site currently has only a home page, and by default Next.js removes the trailing slash every old URL uses. Launching as-is would change or 404 every indexed URL.
2. **No competitor publishes real ZKTeco model pages with specs.** All six analyzed competitors list categories and claims, but none has a usable product catalogue. Model-level searches currently go to marketplaces (Microless, Shopkees). This is the clearest content gap, and the planned Payload `products` collection fits it exactly.
3. **Allied lacks a dedicated ZKTeco page.** Every major competitor has one (`/zkteco/`, `/zkteco-supplier-in-qatar`). Allied currently ranks for it with its About page, whose title ("ZKteco Qatar, Time Attendance System") does not match the page's content.
4. **Existing page content is weak and partly derivative.** Typical issues are keyword stuffing, machine-paraphrased wording, outbound links to the sites the text appears to be based on (aussietimesheets.com.au, boonedam.com.au), and no internal links in body copy. Several hub pages have about 110–130 words.
5. **Strong, underused trust assets:** a Google Business Profile with a 4.9★ rating from 236 reviews, "3,000+ installations as of 2020" (About page), ZKTeco authorization wording, two Doha offices and a real support team. Competitors largely lack verifiable proof, so this is a genuine edge if it can be backed up.

---

## 2. Current site inventory (WordPress, alliedeprs.com)

URLs are taken from site navigation and search results. **NEEDS DATA:** export the full list from the WordPress sitemap or Search Console before launch.

| URL | Title tag (current) | Words* | Key issues |
|---|---|---|---|
| `/` | "Allied Enterprises - Time Attendance System Qatar \| Biometric supplier in Qatar \| Zkteco dealer in Qatar \|Access control System Qatar" | long | ~130-character keyword-list title; **3 H1s**; images hot-linked from a staging domain (crazyweb.in); external link to aussietimesheets.com.au with exact-match anchor; long generic FAQ |
| `/about-us/` | "ZKteco Qatar , Time Attendance System \| Allied Enterprises" | ~850 | Title targets ZKTeco but page is "About Us"; useful facts (authorization wording, 3,000+ installs as of 2020) |
| `/contact-us/` | "Contact Us - Allied Enterprises" | short | No form; no map; no meta description |
| `/time-management/` | "Time Management - Allied Enterprises" | ~110 | Hub page with no content and no links to its child pages |
| `/time-attendance-system-qatar/` | "Time Attendance System - Allied Enterprises" | ~950 | Keyword stuffing; machine-paraphrased wording; generic HR FAQ; **no models in body**; external links to aussietimesheets.com.au; empty H2 |
| `/access-control-system-qatar/` | "Access Control System Qatar \| Entrance Control System Qatar" | ~950 | Meta description ~290 chars; no models; content leans on boonedam.com.au; CTA phone "33338694" looks like a typo of 33338964 |
| `/hrms-payroll-management-qatar/` | "HRMS & Payroll Management - Allied Enterprises" | ~130 | Thin: says nothing about HRMS/payroll features |
| `/payroll-integration-qatar/` | not fetched | — | **NEEDS DATA** |
| `/it-infrastructure-qatar/` and 6 children (cabling, intercom, fiber, PA, PABX, gate barrier) | gate barrier: "Turnstile & Flap Barrier Qatar \| Gate Barrier System Qatar" | gate: ~1,200 | Gate barrier page **does name ZKTeco models** (TS200, TS1000-Pro, FBL series…) — the best existing product content; others not fetched |
| `/applications/` and 6 children (BioTime, Sunbirdtime, wallet, BPM, Wialon, restaurant) | BioTime: "BioTime Time Attendance System - Allied Enterprises" | BioTime ~450 | BioTime page references **v8.5** (current ZKTeco release is 9.5); headings without body text; no meta description |
| `/solutions/` and 5 children (DMS, queue, ERP, BI, GIS) | not fetched | — | Off-core for the stated goals |

\*Approximate main-content words, as reported by page analysis.

**Sitewide issues on the old site**

- Footer and nav are duplicated in each page's H4s (About/Location/Address), and many pages have no H2/H3 structure.
- Phone numbers are formatted inconsistently, and one CTA number looks wrong (`33338694`).
- The Instagram link uses `instragram.com`, which is a broken domain.
- The "Allied Pro" link points to a raw IP over HTTP, and the "Login" link goes to secureserver.net.
- There is a misspelled slug, `/wialon-plaftform-for-gps-tracking/`. **Keep it.** It is an indexed URL, and renaming it gains nothing.

---

## 3. New Next.js build — current state

| Area | Status | Note |
|---|---|---|
| Routes | Only `/` exists | All menu and footer links 404 today |
| Trailing slash | **Default: Next strips slashes** (`/about/` → 308 → `/about`) | All old URLs end in `/`. See P1 |
| `sitemap.ts` / `robots.ts` | Missing | Required by CLAUDE.md §9 |
| Canonical / Open Graph | Not set | `metadataBase` is set correctly to https://alliedeprs.com |
| Title template | `'%s \| Allied Enterprises Qatar'` | Produces "…in Qatar \| Allied Enterprises Qatar" (Qatar twice). Suggest `'%s \| Allied Enterprises'` |
| Home H1 | None (removed during header work) | Needs a single H1 in the hero |
| JSON-LD | LocalBusiness with both offices, hours, socials | Good base. Consider a subtype (e.g. `ElectronicsStore`, matching the Google listing category) |
| Header/footer | Server-rendered, crawlable links, `aria-current`, skip link | Good |
| Performance basics | Static, `next/font`, SVG logo, lazy map | Good |

---

## 4. Competitor landscape (Qatar)

Domains seen most often across the 10 keyword searches:

| Competitor | Seen for | Notes from page analysis |
|---|---|---|
| **Techspine Qatar** (techspineqatar.com) | ZKTeco dealer, biometric, attendance machine, access control, BioTime | Tight titles and H1s; FAQ sections (WPS, cost, integration, AMC); "13+ years, 1000+ devices"; WhatsApp-first CTAs. Weak spots: no model specs, no reviews or case studies, inconsistent phone numbers |
| **Axle Systems** (axlesys.com) | time attendance, access control, turnstiles | Multi-brand (Matrix, Suprema, ZKT); feature data; strong nav. Weak spots: placeholder sections, no FAQ, brand model pages hosted on a third-party domain |
| **Microsys Networks** (microsys.qa) | ZKTeco dealer/supplier | Huge brand/product menus. Weak spots: thin copy, "best" claims, no models or FAQ |
| **STS / Synergy Technology** (stsqa.com) | ZKTeco supplier, BioTime | Client logos, BioTime 8.5 section, contact form. Weak spots: ~300 words, keyword stuffing, no models |
| **Digital Zone** (digitalzone.qa) | ZKTeco dealer/supplier | Shopify store with RFQ. Weak spots: ~70 words of copy, broken "#" links |
| Adept Tech, Digix, Startech, zktecoqatar.com, qhelp.qa | ZKTeco dealer/supplier | Not analyzed in depth |
| Shopkees, Microless | BioTime, specific models (e.g. ZKTeco U350) | Marketplaces win **model-level** searches |
| Truein, Yomly, Zimyo, Ensaantech, 247HRM, Synergia | "time attendance system Qatar", "HRMS payroll software Qatar" | SaaS vendors' listicles dominate **software** searches |

**Takeaways**

- **Search intent splits in two.** "Time attendance system Qatar" returns mostly SaaS software listicles. "Biometric attendance system / attendance machine Qatar" returns hardware suppliers, which is Allied's fit. Do not aim the main hardware page at the software intent.
- **The generic HRMS/payroll SERP is owned by SaaS vendors.** Allied's realistic angle is *BioTime + payroll/WPS integration*, not competing as an HRMS product.
- **Common competitor patterns are worth matching,** not copying: a dedicated ZKTeco page; FAQs covering cost factors, WPS, fingerprint vs face, ERP/payroll integration and AMC/support; and WhatsApp plus site-survey CTAs.
- **Gaps no competitor fills:**
  - real model pages with specs and datasheets;
  - selection guidance (which device for which site or headcount);
  - verifiable proof such as review count, installation numbers and named or approved case studies;
  - up-to-date BioTime 9.5 information.

---

## 5. Keyword-to-URL map

Keywords come from CLAUDE.md §4. Allied's visibility is what was **observed in the sample searches**, not a measured ranking. **NEEDS DATA:** confirm demand and positions with Search Console or a keyword tool.

| Keyword group | Observed intent | Allied seen? | Target URL | Action |
|---|---|---|---|---|
| ZKTeco dealer / supplier / authorized Qatar | Commercial, local supplier | Yes — `/about-us/` | **New `/zkteco-qatar/`** | Create a dedicated page; retitle About as a brand page so the two don't compete |
| ZKTeco products / buy ZKTeco Qatar, model names | Transactional, model-specific | No (marketplaces win) | **New `/products/` + `/products/[slug]/`** | Build the Payload catalogue (start with the models already named on the gate barrier page) |
| Biometric attendance system / fingerprint / face attendance machine Qatar | Commercial, hardware | Yes — home | `/time-attendance-system-qatar/` (existing) | Rewrite as the main hardware page; keep the URL |
| Time attendance system Qatar | Mixed (software listicles) | Yes — home | `/time-attendance-system-qatar/` | Cover devices + BioTime together; link to the software page |
| Attendance management software / ZKTeco BioTime Qatar | Software, product-specific | Yes — home | `/biotime-time-attendance-system-qatar/` (existing) | Update to BioTime 9.5 (verify the version Allied supplies); add real features, licensing and support details |
| Access control / biometric access control / ZKTeco access control Qatar | Commercial | Not in the sample | `/access-control-system-qatar/` (existing) | Rewrite; **do not** create `/biometric-access-control-qatar/` (cannibalization) |
| Turnstile / flap barrier / gate barrier Qatar | Commercial | Yes | `/zkteco-qatar-gate-barrier-system/` (existing) | Keep the URL; improve structure; link models to product pages |
| HRMS & payroll software Qatar | SaaS-dominated | No | `/hrms-payroll-management-qatar/` (existing) | Reposition around attendance-to-payroll/WPS; **do not** create `/hrms-payroll-software-qatar/` |
| Attendance & payroll integration | Niche | Unknown | `/payroll-integration-qatar/` (existing) | Check content; merge into HRMS if thin (needs approval and a 301) |
| Structured cabling, fiber testing, PABX, video intercom Qatar | Commercial | Not checked | Existing IT infrastructure URLs | Priority C: keep and tidy |
| Restaurant software, wallet, BPM, Wialon, DMS, queue, ERP, BI, GIS | Off-core | Not checked | Existing URLs | Keep live (preserve URLs); low investment until Search Console shows value |

**Where CLAUDE.md §6 conflicts with existing URLs**

- `/biometric-access-control-qatar/` would duplicate the existing `/access-control-system-qatar/`. **Keep the existing URL.**
- `/hrms-payroll-software-qatar/` would duplicate `/hrms-payroll-management-qatar/`. **Keep the existing URL.**
- `/attendance-management-software-qatar/` would overlap the BioTime page. **Use the BioTime page** unless Search Console shows a separate demand.
- `/zkteco-qatar/` has no existing equivalent. **Create it.**

---

## 6. Prioritized recommendations

Ordered by **impact × confidence ÷ effort**. Nothing has been implemented.

### P1 — Protect existing rankings at launch (critical, before go-live)

1. **Keep URLs identical.** Set `trailingSlash: true` in `next.config.ts` so `/time-attendance-system-qatar/` stays exactly as indexed. This is confirmed in the Next 16 docs: by default `/about/` 308-redirects to `/about`.
2. **Get a complete URL inventory** from the WordPress sitemap and Search Console (pages with impressions or backlinks). **NEEDS DATA**
3. **Build every indexed URL, or 301 it** to its closest equivalent. No blanket redirects to the home page. Also cover WordPress system URLs that may be indexed: `/feed/`, `/category/…`, `/wp-content/uploads/…` PDFs and images.
4. **Add `sitemap.ts` and `robots.ts`** listing only real, canonical pages.
5. **Set canonicals and Open Graph defaults**, and fix the title template so "Qatar" doesn't appear twice.
6. **After launch, check** status codes, canonicals and the sitemap, submit the sitemap in Search Console, and watch impressions for 4–6 weeks.

### P2 — Create the missing ZKTeco page (high impact)

- Create `/zkteco-qatar/` with one clear purpose: Allied as a ZKTeco supplier and installer in Qatar. Cover:
  - product families linking to `/products/`;
  - BioTime;
  - installation, configuration and AMC;
  - local support;
  - FAQs;
  - quote and WhatsApp CTAs.
- **Verify the authorization wording first**, ideally with a ZKTeco partner letter or certificate that can be shown on the page. **NEEDS DATA**
- Retitle `/about-us/` to a brand title, e.g. "About Allied Enterprises | ZKTeco Partner in Doha", once `/zkteco-qatar/` exists, to avoid two pages competing.

### P3 — Product catalogue (high impact, unique gap)

- Fill the Payload `products` collection with genuine models Allied sells, including specs, datasheet, category and image. Start with the models already listed on the gate barrier page and the attendance terminals Allied stocks. **NEEDS DATA** (product list)
- Product pages should use `generateMetadata`, `Product` JSON-LD **without prices, ratings or availability unless real**, and breadcrumbs.
- Link products from service pages and back.

### P4 — Rewrite the core money pages (high impact, more effort)

Rewrite `/time-attendance-system-qatar/`, `/access-control-system-qatar/`, `/biotime-time-attendance-system-qatar/` and the gate barrier page as original content:

- Remove the derivative text and the outbound links to the source sites.
- Use one H1 and a logical H2/H3 outline.
- Explain device types: fingerprint, face, card, palm.
- Give selection guidance by site size.
- Cover BioTime and payroll/WPS integration, and the installation process.
- Add FAQs based on real customer questions (FAQ JSON-LD only where the questions are visible on the page).
- Add contextual internal links and clear CTAs: quote, site survey, WhatsApp, phone.

### P5 — Home page positioning (medium-high)

- Use a single H1 and a concise title. The CLAUDE.md §7 draft ("ZKTeco & Biometric Attendance Solutions in Qatar | Allied Enterprises") is reasonable. However, the home page currently surfaces for "time attendance system Qatar", so keep "time attendance" wording in the H1 or intro and strengthen the dedicated page before changing focus. **Validate with Search Console before switching.**
- Use self-hosted, optimized images (the old site hot-links from crazyweb.in).

### P6 — Trust and conversion (medium, low effort)

- Show the Google rating as a link to the Google listing. **Do not** add self-serving `AggregateRating` schema for the business.
- Update "3,000+ installations (2020)" to a current, verifiable figure. **NEEDS DATA**
- Fix the contact page: add an accessible form, the map and correct numbers. Fix the `33338694` typo and the Instagram domain.
- Add approved client logos or case studies only if the company has permission. **NEEDS DATA**

### P7 — Hub and thin pages (medium)

- `/time-management/`, `/it-infrastructure-qatar/`, `/applications/` and `/solutions/` should become short, useful hubs that summarize and link to their child pages, not 110-word placeholders.
- Thin, off-core pages (wallet, restaurant, BPM, etc.): keep them live, improve minimally, and decide on consolidation **only** with Search Console data. Any merge needs a 301.

### P8 — Local SEO (medium, outside the codebase)

- Keep the name, phone and address consistent: the Google listing shows "Allied Enterprises", +974 4471 8845, B Ring Road/Rawdat Al-Khail Street.
- Make sure the Google Business Profile website link points to the new home page.
- Keep asking for genuine reviews. Add relevant Qatar directories (e.g. qhelp.qa, where competitors are listed).

---

## 7. Open questions for the company

1. Can Allied provide proof of ZKTeco authorization (certificate or partner listing)?
2. Which ZKTeco models does Allied actually stock or supply? Are datasheets available?
3. Which BioTime version is supplied today (8.5 or 9.5)?
4. What is the current installation or client count? Are any client names or case studies approved for publication?
5. Is **alliedsouq.com** (an "Allied time attendance" shop in the search results) operated by the company? If so, it competes with alliedeprs.com for the same searches, and its role should be decided. It couldn't be checked because the site blocks automated access.
6. Is the access control CTA number `33338694` a typo of `33338964`?
7. Can the team grant Search Console access, or export the queries and pages report and the WordPress URL list?

---

## 8. Sources

Live Allied pages reviewed: alliedeprs.com — `/`, `/about-us/`, `/contact-us/`, `/time-management/`, `/time-attendance-system-qatar/`, `/access-control-system-qatar/`, `/biotime-time-attendance-system-qatar/`, `/hrms-payroll-management-qatar/`, `/zkteco-qatar-gate-barrier-system/`.

Competitor pages analyzed:

- https://techspineqatar.com/zkteco/
- https://techspineqatar.com/time-attendance-machine-qatar/
- https://www.microsys.qa/zkteco-supplier-in-qatar
- https://www.stsqa.com/zkteco-supplier-in-qatar/
- https://axlesys.com/products/time-attendance-systems/
- https://digitalzone.qa/pages/zkteco

Other references:

- Google Maps listing "Allied Enterprises" (place ID ChIJe_uCU0nFRT4RdY1C7IZv6OU): 4.9★, 236 reviews, +974 4471 8845 (at the time of this audit)
- BioTime 9.5 product page: https://www.zkteco.me/product-details/biotime-95
- Next.js 16.3.3 docs (installed): `trailingSlash.md`, `redirects.md` (permanent redirects use 308)
