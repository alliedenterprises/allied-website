# Keyword research: "ZKTeco" and "attendance system" in Qatar

**Date:** 22 November 2026
**Method:** the `seo-research` workflow from the SEO-AEO-GEO Ultimate plugin (query-opportunity protocol), applied by hand.
**Follows:** `docs/seo-audit.md` (27 October 2026) and `docs/seo-audit-2026-11-09.md`.

## 0. Limits: read first

- **The searches were not run from Qatar.** The search tool used is US-based. Google results in Doha will differ, especially the local map pack. Re-check every query from a Qatar connection, on mobile and desktop, before acting on positions.
- **There is no Search Console data.** Clicks, impressions and average position for the queries are unknown.
- **There is no keyword tool.** No search volumes or difficulty figures are claimed here.
- **These results are a single snapshot**, taken on 22 November 2026. They are not stable rankings.

## 1. Main finding: search results still show the old WordPress version

For every commercial query tested, the search results showed alliedeprs.com with the **old WordPress title and snippet**:

- **title:** "• Web-Based Time Management Software";
- **snippet text** with the old claims: "primary Zkteco dealers in Qatar" and "authorized agent for ZKTECO products".

**Correction (same day):** the domain is **already serving the Next.js site**. A request on 22 November 2026 returned `X-Powered-By: Next.js, Payload` behind IIS/ARR, with the new title "ZKTeco Attendance & Access Control in Qatar | Allied Enterprises".

So the old title is a **stale copy** held by the search index, not the live page. This item was first written up as "launch the site", which was wrong.

**The action instead:**

- In Search Console, use URL Inspection → Request indexing for `/`, `/zkteco-qatar/` and `/time-attendance-system-qatar/`.
- Make sure the sitemap is submitted.
- Re-check the snippet from Qatar in 1–2 weeks.

## 2. Queries tested and what ranked

| Query                                         | Allied present?           | Other results seen (by type)                                                                                     |
| --------------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| ZKTeco Qatar                                  | Yes (homepage)            | Shops with QAR prices (qatar.jazp.com, digitalzone.qa); axlesys.com; spam pages (mind42.com, dev.to)             |
| ZKTeco dealer in Qatar authorized distributor | Yes (homepage, first)     | jazp; mind42 "Zkteco dealer in Qatar" spam page; axlesys; UAE dealers; directories (sourcesecurity.com)          |
| ZKTeco attendance machine Doha supplier       | Yes (homepage, first)     | jazp; zkteco.com case studies (UAE, Iraq); tamyeez.odoo.com shop (for example, iClock 3000 at QR 2,950); axlesys |
| time attendance system Qatar                  | Yes (homepage, not first) | Software list articles (truein.com, yomly.com); Zoho and Zimyo software pages; axlesys category page             |
| biometric attendance system Qatar price       | Yes (homepage, first)     | Qatar Living service listing (Techspine); truein; axlesys; global price articles (mihcm.com)                     |
| face recognition attendance machine Qatar     | **No**                    | axlesys.com dedicated page (first); truein; yomly; Qatar Living                                                  |

## 3. Who we are competing with

- **axlesys.com (Axle Systems)** is the main organic competitor. It covers these topics with **dedicated pages**:
  - face recognition attendance system;
  - fingerprint attendance system;
  - employee attendance system;
  - time attendance software;
  - blog posts.

  It also sells other brands: Suprema and Matrix as well as ZKTeco.

- **Shops** (jazp, digitalzone.qa, tamyeez) win searches for **specific models** with product pages that show QAR prices.
- **Software vendors** (truein, yomly, Zoho, Zimyo) own the "best attendance software in Qatar" list-article intent.
- **Qatar Living service listings** rank for price and installation queries.
- **Spam** pages (mind42, dev.to) target "ZKTeco dealer in Qatar". Do not copy this tactic.

**Our advantages, all verified on the site:**

- the 2026 ZKTeco Authorized Distributor certificate for Qatar;
- the ZKTeco Distinguished Project Leadership Award 2025;
- 10,000+ installations;
- two Doha offices;
- 236 Google reviews.

No competitor that was seen shows proof of ZKTeco authorization.

## 4. Page ownership (one primary intent per page)

| Query family                                                                 | Owner page                                        | Notes                                                                                                                                                              |
| ---------------------------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ZKTeco Qatar / dealer / distributor / supplier                               | `/zkteco-qatar/`                                  | Today the homepage ranks. After launch, watch whether Google switches to `/zkteco-qatar/` or keeps the homepage. Both are fine. Do not change the homepage's topic |
| Time attendance system / biometric attendance machine Qatar, including price | `/time-attendance-system-qatar/`                  | Old URL with existing rankings. Keep it                                                                                                                            |
| Face, fingerprint and palm attendance machine Qatar                          | `/time-attendance-system-qatar/` (device section) | Covered as H3 subsections. Build separate pages only if Search Console shows real demand after launch (doorway risk)                                               |
| BioTime software Qatar                                                       | `/biotime-time-attendance-system-qatar/`          |                                                                                                                                                                    |
| Best attendance software Qatar (list articles)                               | none: off-page                                    | Seek a listing in the existing roundups rather than writing our own list                                                                                           |
| Specific models (SpeedFace V5L, ProFace X…)                                  | none: gap                                         | The owner declined `/products/` (9 November). See §5 B3                                                                                                            |

## 5. Opportunity slate

### A. Head-term leadership track

**Targets:** "ZKTeco Qatar" and "time attendance system Qatar".

**Aim:** a top-3 position, with #1 as a stretch goal. Neither is guaranteed.

| #   | Work                                                                                                                                                                                                       | Lane            | Priority | Owner       |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | -------- | ----------- |
| A1  | The site is already live on Next.js (see §1). In Search Console, request indexing of `/`, `/zkteco-qatar/` and `/time-attendance-system-qatar/` so Google drops the stale WordPress title                  | Strategic build | **Now**  | Dev + owner |
| A2  | Ask ZKTeco (zkteco.me / ZKTeco Middle East) to list Allied as the Qatar distributor **with a link** to `/zkteco-qatar/`. ZKTeco's own website is the strongest source of trust for "ZKTeco Qatar" searches | Authority       | **Now**  | Owner       |
| A3  | Google Business Profile: website set to `https://alliedeprs.com/`, ZKTeco and attendance services listed, photos of installations, keep asking for genuine reviews                                         | Local           | Now      | Owner       |
| A4  | Write genuine case studies, approved by the clients, for example a multi-site attendance setup. These are pages that competitors don't have                                                                | Content         | Next     | Owner + dev |

### B. Nearer-term track (on-page, in this codebase)

| #   | Work                                                                                                                                                                                                                                                                                                                                                                                                                                          | Lane            | Priority                |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ----------------------- |
| B1  | `/time-attendance-system-qatar/`: replace the generic old WordPress filler with content buyers can use. The filler is the "How a time attendance system helps your business" section and the 4 generic HR FAQs ("Why is good attendance important…"). Replacements: WPS salary file export, shift and overtime reports, multi-site setup, outdoor and heat considerations. The company asked to keep the old copy, so **this needs approval** | Content quality | Now                     |
| B2  | Make the device types on the time-attendance page (face, fingerprint, palm, card) easier to find. Mention them in the page intro and link to them from the device section of `/zkteco-qatar/`. This covers "face recognition attendance machine Qatar", where we were absent, without creating thin pages                                                                                                                                     | Coverage        | Next                    |
| B3  | A table of the models we supply (SpeedFace V5L/V4L/H5L, ProFace X, uFace, iFace, K40, iClock 9000, Horus H1). It would show recognition methods and user capacity **taken from ZKTeco's official datasheets**, with a link to each datasheet. It serves model searches without the product catalogue the owner declined                                                                                                                       | Coverage gap    | Next (needs datasheets) |
| B4  | After launch, review Search Console for 4–6 weeks. Look for queries where we get impressions but sit in positions 5–20, and improve the titles and snippets of those pages                                                                                                                                                                                                                                                                    | Near win        | Later                   |

### Declined

- **Location doorway pages** (for example "attendance system Lusail" as separate pages): fake local pages are not allowed (CLAUDE.md §6).
- **Spam links** (mind42, dev.to style) or bought links.
- **Our own "best attendance software in Qatar" list article:** we would be ranking ourselves in our own list, which is a conflict of interest and a weak fit.
- **Publishing prices**: none have been supplied by the company.

## 6. Re-check

Re-run these queries from Qatar:

- 2 weeks after launch;
- monthly after that;
- straight away if Search Console shows a drop.
