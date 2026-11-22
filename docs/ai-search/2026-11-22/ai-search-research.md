# AI search research: alliedeprs.com, 22 November 2026

- **Bundle:** `research-pack.json` (Research Pack 1.1.0) and `query-corpus.json` sit beside this file, with the raw captures in `raw/`. Both passed the suite validators on 2026-11-22.
- **Expiry:** these observations are current until **2026-12-06** (14 days). Re-run the same 6 prompts after that.

## 1. What was tested

- **Prompts:** six buyer prompts, in English, for Qatar (see §4).
- **Google AI Mode:** all 6 prompts, signed out, `hl=en&gl=qa`, using the built-in browser on your computer.
- **ChatGPT search:** 3 prompts, signed out.
- **Perplexity:** blocked. It asked for a sign-up before answering.
- **Not run:** Google AI Overviews (a separate surface from AI Mode) and Microsoft Copilot.

Limits:
- Each prompt was run once, and AI answers change between runs.
- The browser's real location wasn't verified as Qatar.
- There is no data on how often people actually ask these prompts.
- There is no data on visits from AI tools to the site.

## 2. Results

| Prompt | Google AI Mode | ChatGPT search |
|---|---|---|
| Who is the authorized ZKTeco distributor in Qatar? | **Allied listed first**, as "authorized agent/distributor". The source was the **Google Business Profile**, not the website. | Allied listed **second**, after Adept Tech ("authorized national distributor"). Cites `/zkteco-qatar/` and the 2026 certificate. |
| Best time attendance system supplier in Qatar? | **Allied not mentioned.** Named Techspine, Microsys (zktecoqatar), Comfort IT and BARQ. Selection criteria: WPS export, local support. | **Allied recommended first** (4.9★, 236 reviews), citing `alliedeprs.com`. |
| Face recognition attendance machine price in Qatar? | Allied not mentioned. Answered with QAR prices from noon and icncqatar.com. | not run |
| Which company installs access control in Doha? | Allied not mentioned. The answer was built from Google Business Profiles (Premier Infotech, Adax, Profile, Axle Systems…). | not run |
| What does Allied Enterprises do? | Mostly right. However, it says **"authorized agents"** (old wording), calls Allied a "telecommunication contractor", **leaves out the Saturday hours**, and cites the old `/vision/` page. | not run |
| BioTime installation and support in Qatar? | Allied not mentioned. Techspine was cited for site survey, BioTime install, training, AMC and service areas. | Allied recommended first, but ChatGPT cites `/zkteco-qatar/`, **not the BioTime page**. |

**Main findings**
1. **ChatGPT already favours Allied.** It reads the website and the certificate.
2. **Google AI Mode mostly ignores the website.** For "which company" questions it builds answers from Google Business Profiles and from competitor pages that answer the question directly. That makes your **Google Business Profile** the biggest lever for Google's AI answers.
3. **Adept Tech** presents itself as the "authorized national distributor". AI engines repeat that claim, and the only proof they show for Allied is your own certificate.
4. **Old wording still circulates.** "Authorized agent" and missing Saturday hours come from older sources: most likely the Google Business Profile description and hours, old WordPress copy, and the mind42 pages.
5. **The site doesn't block AI crawlers.** `robots.ts` allows everyone except `/admin/` and `/api/`. Keep it that way. There is no evidence that `llms.txt` would help, so it is not recommended.

## 3. Recommended changes (each one tied to the results above)

### A. Google Business Profile (owner task, highest impact for Google AI Mode)
- **Description:** update it to say "Authorized ZKTeco Distributor in Qatar (2026)" and remove any "agent" wording.
- **Hours:** add the Saturday hours (08:00–13:00). They are on the site and in the JSON-LD, but AI Mode left them out.
- **Categories and services:** make sure they include time attendance, access control, biometric systems and BioTime software support. Allied was missing from the access-control installer answer even though it has 236 reviews.
- **Posts and photos:** add the certificate, the award and installation photos. Ask happy clients to name the service in their review ("access control installation", "BioTime setup"), without scripting the reviews.
- **Second office:** give the Fereej Bin Dirhem office its own profile only if it is a real, staffed location (CLAUDE.md §10).

### B. Third-party corroboration of the distributor status (owner task)
- **ZKTeco listing:** ask ZKTeco Middle East to list Allied as an authorized distributor for Qatar on zkteco.me. ChatGPT already sends people to zkteco.me to verify claims.
- **Directories:** update the Qatar directories that AI engines draw on (Qatar Living services, qataronlinedirectory, sourcesecurity) with the same name, phone and "authorized distributor" wording.
- **Old copies:** if the company controls the mind42 "allied"/"alliedattend" pages, update or remove them.

### C. Website content (code changes, each needs facts confirmed first)
| Page | Change | Why (evidence) |
|---|---|---|
| `/biotime-time-attendance-system-qatar/` | Add a **"BioTime installation & support in Qatar"** section that answers directly: what's included (site survey, install on your server or BioTime Cloud, device connection, shifts and leave rules, enrolment, training), **licensing** (device and user licences), **AMC and remote support**, **fixing or migrating an existing BioTime install**, and the areas served. | AI Mode credits Techspine with exactly these points. ChatGPT skipped this page and cited `/zkteco-qatar/`. Install and training facts already exist in `biotime.ts`; licensing and AMC terms need the company to confirm them. |
| `/time-attendance-system-qatar/` | Replace the opening question ("Have you been looking for…?") with a direct 2–3 sentence answer: who Allied is, what's included (terminals, BioTime/Sunbird, installation, **WPS payroll export**, AMC, all over Qatar). | AI Mode chose suppliers by WPS export and local support. A plain answer at the top of the page is easier to quote than a rhetorical question. This is old copy kept at the owner's request, so it needs owner approval. |
| `/time-attendance-system-qatar/` (price section) | Optional: add "from QAR …" ranges per device type (fingerprint, face, palm). | AI price answers only cite pages that show QAR prices. Without figures, the page won't be cited for price questions. Only add figures if the company approves real prices. |
| `/zkteco-qatar/` | Add one line to the existing FAQ "Is Allied Enterprises an authorized ZKTeco distributor in Qatar?": the certificate period (2026) and how to verify it with ZKTeco Middle East. | ChatGPT already reads the certificate. Inviting verification answers the competing "national distributor" claim without disputing it. |
| `/access-control-system-qatar/` | Add an "Access control installation in Doha" block: what's installed (biometric/card readers, maglocks, turnstiles), sites served, AMC, a link to the gate barrier page, and a quote call-to-action. | Allied was absent from the installer answer. The page's old copy follows Boon Edam articles (url-inventory notes) and doesn't answer "who installs". |

### D. Measurement
- **AI visits:** track visits with `utm_source=chatgpt.com` (ChatGPT adds it to every cited link) in analytics, as a segment for AI referrals.
- **Re-run:** run the same 6 prompts after 2026-12-06. If possible, also run them in AI Overviews, Copilot and signed-in Perplexity, to see whether answers moved.

## 4. Prompt map (each prompt → the page that should answer it)

| Prompt ID | Page meant to answer it | Status today |
|---|---|---|
| q-authorized-distributor | `/zkteco-qatar/` FAQ "Is Allied Enterprises an authorized…" | covered (cited by ChatGPT) |
| q-best-attendance-supplier | `/time-attendance-system-qatar/` intro | covered (not cited by Google) |
| q-face-attendance-price | `/time-attendance-system-qatar/` price section | gap (no prices) |
| q-access-control-installer | `/access-control-system-qatar/` | covered, but doesn't answer "who installs" |
| q-brand-what-do | `/about-us/` and the homepage | covered (outdated facts in AI answers) |
| q-biotime-support | `/biotime-time-attendance-system-qatar/` | overlaps with `/zkteco-qatar/` (ChatGPT cites the ZKTeco page instead) |

## 5. Gaps (also recorded in the Research Pack)
- Perplexity requires sign-up.
- Google AI Mode citation links are hidden behind redirects, so only the source titles were recorded.
- Not run: ChatGPT for 3 of the prompts, Google AI Overviews and Copilot.
- No data on visits from AI tools.
- No data on how often these prompts are asked.

No change above guarantees a mention or citation in any AI engine.
