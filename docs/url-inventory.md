# Old WordPress URL inventory

Source of truth for the WordPress → Next.js migration (see CLAUDE.md §14A). Never delete this file.

Taken from the live Yoast sitemaps on 2026-11-02 (`sitemap_index.xml`: page, post, project, category and author sitemaps), 39 URLs. Search Console data and WordPress media/PDF URLs are not included yet.

Status values: `rebuilt` | `redirected → <new URL>` | `dropped (404)` | `pending`. Any decision to drop or merge a page needs human approval first.

| Old URL | Status | Notes |
| --- | --- | --- |
| `/` | rebuilt | |
| `/about-us/` | rebuilt | Starter page; ranks for ZKTeco searches today (see `docs/seo-audit.md`) |
| `/contact-us/` | rebuilt | Heading, lead and contact details (call, WhatsApp, email, both offices, map link, hours from `company.ts`) on the left; enquiry form in a card on the right that opens WhatsApp with the message filled in (nothing stored or emailed). Breadcrumb JSON-LD; LocalBusiness JSON-LD comes from the layout |
| `/time-management/` | rebuilt | Old page had a title only; now the menu section hub (H1 + intro + cards linking its 4 pages) |
| `/time-attendance-system-qatar/` | rebuilt | Old copy kept; "No 1" claim and outbound links to aussietimesheets.com.au dropped |
| `/access-control-system-qatar/` | rebuilt | Old copy kept (closely follows Boon Edam articles; rewrite recommended); 10 outbound links dropped |
| `/biotime-time-attendance-system-qatar/` | rebuilt | Old copy kept; "BioTime 8.5" made version-neutral (home shows 9.5); old support number replaced |
| `/sunbirdtime-time-management-system-qatar/` | rebuilt | Old page had a title only; new original content from facts already on the site (company to confirm Sunbird details) |
| `/hrms-payroll-management-qatar/` | rebuilt | Old page had a title only; new original content (company to confirm HRMS features) |
| `/payroll-integration-qatar/` | rebuilt | Old copy kept; thin (about 200 words) |
| `/it-infrastructure-qatar/` | rebuilt | Old page had a title only; now the menu section hub (H1 + intro + cards linking its 6 pages) |
| `/structured-cabling-data-voice-qatar/` | rebuilt | Old copy kept; machine-reworded wording corrected; old helpline +974 3002 9868 replaced |
| `/audio-video-intercom-qatar/` | rebuilt | Old copy kept; grammar tidied; old helpline replaced |
| `/fiber-optic-testing-otdl-olts-qatar/` | rebuilt | Keep the "otdl" typo in the slug. Old copy kept (follows Wikipedia's OTDR article; rewrite recommended); unfinished "Fluke, and____" sentence shortened |
| `/public-address-system-qatar/` | rebuilt | Old copy kept; unfinished PA brand sentence rewritten without names; old helpline replaced |
| `/pabx-system-qatar/` | rebuilt | Old copy kept; "Panasonic——products mention here" placeholders and two repeated paragraphs dropped; old helpline replaced |
| `/zkteco-qatar-gate-barrier-system/` | rebuilt | Old copy kept; "100% security", "global leader" claims removed; title keeps "Turnstile & Flap Barrier" |
| `/applications/` | rebuilt | Menu section hub (H1 + intro + cards linking its 6 pages) |
| `/digital-minimalist-wallet/` | rebuilt | Old copy kept (FuzeCard); other brands' leather-wallet sentences dropped |
| `/business-process-management/` | rebuilt | Old copy kept; machine-reworded wording corrected (follows a BPM vendor's article; rewrite recommended) |
| `/wialon-plaftform-for-gps-tracking/` | rebuilt | Keep the typo in the slug. Old copy kept; "clunky and outdated" review line and out-of-date 2010 figures removed |
| `/restaurant-management-software-qatar/` | rebuilt | Old copy kept; machine-reworded wording corrected |
| `/solutions/` | rebuilt | Menu section hub (H1 + intro + cards linking its 9 pages) |
| `/document-management-scanning-qatar/` | rebuilt | Old copy kept; grammar tidied; "guarantee" of record access softened |
| `/queue-management-qatar/` | rebuilt | Old copy kept; "unrivaled" claim and unsourced "research has shown" removed (company to confirm product brand) |
| `/enterprise-resource-planning-qatar/` | rebuilt | Old copy kept; customer name "Mega Music" left out until approved (company to confirm ERP product) |
| `/business-intelligence-qatar/` | rebuilt | Old copy kept; outbound businesswire.com link dropped (opening follows a 2019 press release; rewrite recommended; Manthan partnership to confirm) |
| `/geographical-information-systems-qatar/` | rebuilt | Old copy kept; "unparalleled" claim removed; retired ArcIMS dropped from services list |
| `/products/` | dropped (404) | Old page was an empty placeholder (heading only, checked 2026-11-09). Owner decided 2026-11-09: no page and no redirect |
| `/team-allied/` | dropped (404) | Empty placeholder (heading only). Owner decided 2026-11-09: no redirect |
| `/support/` | dropped (404) | Empty placeholder (heading only). Owner decided 2026-11-09: no redirect |
| `/downloads/` | dropped (404) | Empty placeholder (heading only, no files). Owner decided 2026-11-09: no redirect |
| `/vision/` | dropped (404) | Empty placeholder (heading only). Owner decided 2026-11-09: no redirect |
| `/quality-policy/` | dropped (404) | Empty placeholder (heading only). Owner decided 2026-11-09: no redirect |
| `/blog/` | dropped (404) | Empty WordPress blog listing. Owner decided 2026-11-09: no redirect |
| `/hello-world/` | dropped (404) | WordPress sample post. Owner decided 2026-11-09: no redirect |
| `/project/` | dropped (404) | Empty theme archive ("No Results Found"). Owner decided 2026-11-09: no redirect |
| `/category/uncategorized/` | dropped (404) | Empty WordPress category archive. Owner decided 2026-11-09: no redirect |
| `/author/admin/` | dropped (404) | WordPress author archive (exposed the admin user name). Owner decided 2026-11-09: no redirect |

## New pages (no old WordPress URL)

| New URL | Notes |
| --- | --- |
| `/zkteco-qatar/` | Dedicated ZKTeco page (seo-audit P2). Title "Authorized ZKTeco Distributor in Qatar" (wording from the 2026 ZKTeco certificate, shown on the page; changed from "dealer/agent" on 2026-11-09). `/about-us/` retitled to a brand title on 2026-11-09 so the two don't compete. |
| `/school-management-software-qatar/` | School ERP page; no school page existed in the old sitemap. Slug already used by the menu and home services carousel. Content from the vendor's brochure, vendor name and company details left out. |
| `/asset-management-solution-qatar/` | Asset management + RFID tracking + ticketing page; no asset page existed in the old sitemap. Slug already used by the menu and home services carousel. Content outlined from a customer RFQ, customer name and quantities left out. Targets "asset management system Qatar" / RFID asset tracking; RFID hardware (tags, readers, scanners) is left to `/rfid-barcode-nfc-solutions-qatar/` to avoid cannibalization. Feature claims marked VERIFY in `src/content/asset-management.ts`. |
| `/rfid-barcode-nfc-solutions-qatar/` | RFID, barcode & NFC technologies and hardware page; no such page existed in the old sitemap. Slug already used by the menu, home services carousel and access control page. Short, plain-language page (requested): what each technology is, products supplied (Zebra, Honeywell, Newland from the home partner strip), where it helps, 4 FAQs. Targets "RFID solutions Qatar", barcode scanners/printers and NFC tags; links to the asset management page for the software. Hardware claims marked VERIFY in `src/content/rfid-barcode-nfc.ts`. |
