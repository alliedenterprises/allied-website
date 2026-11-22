# SEO implementation, 22 November 2026

Source: `Claude outputs/alliedeprs-seo-research.md` (same day), checked against CLAUDE.md and the code before any change.

## Changed

| Change | Files | Why |
| --- | --- | --- |
| 308 redirect `/?p=65` → `/access-control-system-qatar/` | `next.config.ts`, `docs/url-inventory.md` | Old WordPress shortlink for the access control page, still listed by Google with the old title. The new site served the homepage there (canonical `/`). Query strings pass through (Next docs, `redirects.md`), so the target is `/access-control-system-qatar/?p=65`, which canonicalises to the clean URL. |
| Inline ZKTeco logo images now use `alt=""` (they are already `aria-hidden`; the word "ZKTeco" stays as visually-hidden text) | `src/components/ui/BrandText.tsx` | Text extractors read the alt text into every heading that mentions ZKTeco, e.g. the home H1 came out as "ZKTeco ZKTeco logo ZKTeco logo Supplier in Qatar…". Visible output is unchanged. |

## Checked: already done in the code (research doc was wrong)

- **Structured data exists.** `LocalBusinessJsonLd` (WebSite + LocalBusiness with both offices, hours, certifications) in the layout, plus breadcrumb JSON-LD. The research tool strips `<script>` tags, so it reported "no JSON-LD". No change needed.
- **Social links** already have accessible names (`aria-label="Allied Enterprises on Facebook"`).

## Not done, on purpose (needs an owner decision or conflicts with CLAUDE.md)

| Research item | Reason |
| --- | --- |
| Re-scope the homepage title/H1 away from "ZKTeco" | CLAUDE.md §6–§7 sets the homepage to "company-level ZKTeco" with the current H1. Possible overlap with `/zkteco-qatar/`: monitor in Search Console (query → page) before changing. |
| Rename `/wialon-plaftform-for-gps-tracking/` | CLAUDE.md §14A: keep old slugs, including typos. |
| Arabic pages / hreflang | CLAUDE.md §1: English only. |
| Sitemap `lastModified` | No reliable per-page modification date (pages are hardcoded). Build-time or invented dates would make lastmod untrustworthy. Revisit if a real source is added. |
| Replace the 4 generic time-attendance FAQs | That is old WordPress copy kept at the owner's request. Removing it from a ranking URL is a content decision. Suggested replacements need confirmed facts (warranty length, install time). |
| "Restaurant Management Software" listed under both Applications and Solutions | Information-architecture decision; the duplicate link is harmless for SEO. |

## Verification

- `npx tsc --noEmit`: passed.
- `eslint` on the two files: timed out in the Linux VM (not a lint failure). Run `npm run lint` on Windows.
- Redirect not exercised: the dev server could not start in the Linux VM (`node_modules` holds Windows binaries; the SWC download was blocked). **To check on Windows:** `npm run dev`, then `curl -I "http://localhost:3000/?p=65"` should return `308` with `Location: /access-control-system-qatar/?p=65`, while `/` and `/?p=12` still return `200`.
- Not deployed. After deploying: repeat the curl against https://alliedeprs.com, then in Search Console inspect `/?p=65` and review Pages → Not found for other old `?p=` / `?page_id=` URLs.

## Rollback

Revert the three edited files (`git checkout -- next.config.ts src/components/ui/BrandText.tsx docs/url-inventory.md`). Per CLAUDE.md, a redirect that is already live should not be removed without approval.

## Round 2: AI-search content changes (same day)

Source: `docs/ai-search/2026-11-22/ai-search-research.md` §3C. Only facts already confirmed in the repo were used.

| Page | Change | File |
| --- | --- | --- |
| `/biotime-time-attendance-system-qatar/` | New section "BioTime installation and support in Qatar" after "BioTime 9.5 or BioTime Cloud?": free demo, install on your server or choose Cloud, connect devices, shift/overtime/leave rules, enrolment and training, AMC with support from two Doha offices, coverage across Qatar. Links to the contact page and payroll integration. | `src/content/biotime.ts`, `page.tsx` |
| `/zkteco-qatar/` | Link to the BioTime page relabelled "BioTime software installation & support". FAQ "Is Allied … authorized?" gets one sentence: the certificate covers 2026, status can be confirmed with ZKTeco Middle East, or ask for a copy. | `src/content/zkteco.ts` |
| `/time-attendance-system-qatar/` | Hero lead is now a direct answer (authorized distributor; fingerprint/face/palm/card machines; BioTime or Sunbird; payroll + WPS salary file; AMC; all over Qatar). The old WordPress lead question is kept as the first paragraph below it. | `src/content/time-attendance.ts` |
| `/access-control-system-qatar/` | "Access Control Installation in Doha" section now names the equipment installed (ZKTeco face, palm, fingerprint and card readers; turnstiles, flap and swing barriers) and links to the gate barrier page. | `src/content/access-control.ts` |

Not done (needs company input): BioTime licence types and counts, fixing or migrating existing BioTime installs, "from QAR" prices.

Verification: every changed file parses with the TypeScript compiler. The new section uses the same `ContentBlock[]`/links shape as the other `SplitFeature` sections. The full `tsc --noEmit` timed out (over 175 s) in the Linux VM, and so did lint. **Run `npx tsc --noEmit`, `npm run lint` and `npm run dev` on Windows, and check the four pages visually before deploying.**
