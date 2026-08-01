---
name: google-ads
description: Expertise in Google Ads for this site (clubacavocat / Caroline Lubac, avocate). Use this skill whenever the user asks about Google Ads campaigns, search campaign structure, keyword research or negative keywords, ad copy (RSA/headlines/descriptions), Quality Score, bidding strategies (Smart Bidding, tCPA, tROAS, Maximize Conversions), budgets, conversion tracking/Google Tag setup, landing page selection for an ad group, or Google Ads reporting and performance analysis — even if they just say "les pubs Google", "campagne Ads", "je veux faire de la pub sur Google", or ask why a campagne underperforms. Also trigger for questions about advertising this law firm's offers (audit juridique, architecture juridique, contentieux BTP, expérience sur mesure) since Google Ads for avocats is governed by specific French bar (CNB/RIN) advertising rules covered here.
---

# Google Ads for Caroline Lubac Avocate

This skill gives you working knowledge of Google Ads strategy and mechanics, applied to this specific site: a French avocate (Barreau de Paris) with several distinct offers at different price points and one litigation practice area. Treat each offer as its own potential campaign rather than lumping everything into one generic "avocat" campaign — the searcher intent, price point, and legal-advertising constraints differ a lot between them.

## The site's offers (map ad groups / landing pages to these)

| Page | Offer | Audience / intent | Price |
|---|---|---|---|
| `index.html` | "Mon avocat pour 200€" — contrats fournisseurs, CGV e-commerce/B2B, protection créations | Fondatrices de marque cherchant un premier échange rapide | 200€ (intro, échange 15 min offert) |
| `audit.html` | Audit juridique | Diagnostic complet (contrats, CGV, conformité) | 900€ HT |
| `architecture.html` | Architecture Juridique | Construire les fondations (6 semaines) | 4 500€ HT |
| `experience.html` | Expérience Sur Mesure | Accompagnement 3 mois + agent IA juridique | 7 000€ HT |
| `contentieux-btp.html` | Contentieux BTP — référé expertise | Artisans, entreprises générales, sous-traitants en procédure | Appel découverte 30 min |

Because the price points and buyer intent span a 35x range (200€ to 7 000€) and one page targets an entirely different audience (BTP professionals, not brand founders), these should never share an ad group. Match search intent precisely: someone searching "avocat référé expertise BTP" is not a prospect for the 200€ offer, and vice versa.

## Non-negotiable: French avocat advertising rules

Before writing ad copy or picking claims to test, read `references/avocat-advertising-rules.md`. French lawyers are bound by the RIN (Règlement Intérieur National) and CNB deontology: advertising must be honest, cannot be comparative or disparage other avocats, cannot promise results, cannot use "spécialiste" unless the certification is real, and must be transparent about pricing when a price is advertised. Getting this wrong is a professional discipline risk for the client, not just a marketing mistake — always sanity-check draft ad copy against that reference before finalizing.

## Campaign structure

Default to **one campaign per offer** (5 campaigns matching the table above), each with 2-4 tightly themed ad groups by keyword intent (e.g. within contentieux-btp: "référé expertise", "assignation entreprise BTP", "avocat sous-traitant litige"). Tight ad groups (SKAG-adjacent, a handful of closely related keywords) keep Quality Score high because headline/landing page relevance is easier to nail per group.

Match type guidance:
- Start with **phrase match** for coverage with control, add **exact match** for proven top performers once you have data.
- Avoid broad match early — for a niche, high-intent legal practice, broad match burns budget on irrelevant traffic (e.g. "droit du travail", "avocat gratuit") before Smart Bidding has enough conversion data to compensate.
- Build a shared **negative keyword list** across all campaigns: `gratuit`, `emploi`, `stage`, `formation`, `cours`, `pdf`, `modèle` (people looking for free templates, not a lawyer), `urssaf` (unless specifically targeted), `avis` alone (research phase, low intent) unless paired with the firm's name.

## Keyword research

Anchor research in the searcher's job-to-be-done, not just legal terminology:
- Brand-founder offers: mix legal terms ("avocat CGV e-commerce", "protection propriété intellectuelle marque") with founder-language terms ("comment protéger ma marque juridiquement", "avocat pour créateurs de bijoux").
- BTP litigation: procedural terms carry strong intent ("référé expertise judiciaire BTP", "assignation en référé entreprise") — these searchers usually already know they're in a dispute and need counsel now, so prioritize these over generic "avocat BTP paris".
- Use Google Ads Keyword Planner search volume plus the site's own page copy (meta descriptions above) as a source of authentic phrasing already validated by the client.
- Always check keyword intent against the map above before assigning it to an ad group — a keyword like "avocat contrat" is ambiguous between the 200€ offer and Architecture Juridique; let the landing page and CTA in each ad decide which one it maps to, and don't fight over the same keyword in two campaigns (that just bids against yourself).

## Ad copy (Responsive Search Ads)

- Provide 10-15 headlines and 3-4 descriptions per ad group, pinning at most 1-2 headlines (position 1) if a specific claim must always show — over-pinning defeats RSA's own optimization.
- Lead with the concrete, checkable facts on each page rather than generic lawyer marketing language: exact price ("900€ HT"), concrete duration ("6 semaines", "3 mois"), concrete offer ("Échange 15 min offert", "Appel découverte 30 min"). These are more compliant (verifiable, not puffery) and typically outperform vague claims like "meilleur avocat".
- Always include the qualifier "Avocate au Barreau de Paris" somewhere in the ad — it's a genuine trust/compliance signal, not filler.
- Never write "garantie de résultat", "gagnez votre procès", or comparative claims against other avocats — see the compliance reference.
- Use sitelinks and callout extensions for adjacent offers (e.g. a BTP ad can sitelink to the discovery call, not to the 200€ brand-founder offer — audiences don't overlap).

## Quality Score

Quality Score is a symptom, not a lever — improve it by fixing the three inputs directly:
1. **Expected CTR**: tighter ad groups + specific ad copy matching the exact keyword theme.
2. **Ad relevance**: keyword should appear naturally in headline or description.
3. **Landing page experience**: send each ad group to the specific offer page, not the homepage — `contentieux-btp.html` for BTP keywords, `audit.html` for audit keywords, etc. Mixing traffic (e.g. sending "audit juridique" clicks to `index.html`) tanks landing page relevance even if the site is fast and mobile-friendly.

## Bidding strategy

- Start new campaigns/ad groups on **Maximize Clicks** or manual CPC with a modest daily budget until you have ~30 conversions per campaign (Google's rule of thumb for Smart Bidding to have enough signal).
- Move to **Maximize Conversions** or **tCPA** once conversion volume supports it. Given the wide price spread across offers, do NOT share a single tCPA/tROAS target across all 5 campaigns — a 200€ offer and a 7 000€ offer have very different acceptable cost-per-lead.
- For low-volume, high-value offers (Architecture, Expérience Sur Mesure), consider **Maximize Conversion Value** with value rules once value tracking is set up, since a handful of leads at 4 500-7 000€ justifies a higher CPA than the 200€ offer.

## Conversion tracking

Before spending meaningfully, confirm each meaningful action is tracked as a distinct conversion in Google Ads via Google Tag / GA4 linkage:
- Form submission on `merci.html` (thank-you page load = conversion) — check whether this is the current tracking approach in `script.js`.
- "Appel découverte" / "échange" booking (if via Calendly or similar, track via a click event or the third-party's own conversion pixel).
- Phone clicks (`tel:` links) if the site has click-to-call.
- Treat these as **separate conversion actions** since a form-fill is a different funnel stage than a completed appointment; if Smart Bidding optimizes toward "any conversion" without distinguishing, it can over-index on the cheapest, lowest-intent action (e.g. a newsletter signup) instead of the offers that actually generate revenue.
- Look for a `gtag`/`dataLayer` snippet in the HTML `<head>` or `script.js` before assuming tracking exists — verify, don't assume.

## Reporting and analysis

When asked to review performance, look at (in this order): conversion rate by landing page/ad group before CTR (a high-CTR, low-conversion ad group usually means a landing page or offer mismatch, not an ad copy problem); cost-per-conversion by offer against that offer's price point and typical close rate; search terms report for negative-keyword candidates; and Quality Score components (not just the number) to diagnose underperformers. Present findings as a short table plus 2-3 concrete next actions, not a wall of metrics.

## Google Ads scripts / API

For repetitive account-management tasks (bulk negative keyword updates, automated rules, custom alerts), Google Ads Scripts (JavaScript, run inside the Ads UI) are the lightest-weight option and need no OAuth setup — reach for this first. Only recommend the Google Ads API (requires a developer token and OAuth) if the user needs to manage the account programmatically from outside the Ads UI (e.g. syncing with an external CRM).
