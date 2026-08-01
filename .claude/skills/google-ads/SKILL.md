---
name: google-ads
description: Expertise in Google Ads for this site (clubacavocat / Caroline Lubac, avocate généraliste). Use this skill whenever the user asks about Google Ads campaigns, search campaign structure, keyword research or negative keywords, ad copy (RSA/headlines/descriptions), Quality Score, bidding strategies (Smart Bidding, tCPA, tROAS, Maximize Conversions), budgets, geographic targeting, conversion tracking/Google Tag setup, landing page selection, or Google Ads reporting and performance analysis — even if they just say "les pubs Google", "campagne Ads", "je veux faire de la pub sur Google", "cibler plus large", or ask why a campagne underperforms. Also trigger for questions about advertising this law firm's offer since Google Ads for avocats is governed by specific French bar (CNB/RIN) advertising rules covered here.
---

# Google Ads for Caroline Lubac Avocate

This skill gives you working knowledge of Google Ads strategy and mechanics, applied to this specific site: a French avocate (Barreau de Paris) who pivoted to a single generalist offer, run on a small daily budget. Two things make this account unusual and should shape every recommendation:

1. **Single offer, one page, one campaign.** The site used to have five separate offers (200€ intro, audit, architecture, expérience sur mesure, contentieux BTP) on five pages. Those pages have been removed — `index.html` is now the only landing page, "Mon avocat pour 200€", positioned as a **généraliste**. Don't recreate a multi-offer campaign structure; a single, tightly-run campaign is the right shape now.
2. **Tiny budget (around 12€/jour, ~360€/mois).** Every recommendation has to respect this. Broad match, wide keyword lists, and multiple ad groups all dilute a budget this size before it generates enough data to learn from. Default to the narrowest setup that still covers the offer properly, and expand only once real cost-per-click and conversion data justify it.

## The offer

"Mon avocat pour 200€" — avocate généraliste, Barreau de Paris, cabinet à Paris mais **service 100% à distance** (téléphone, WhatsApp, visio) et **intervention partout en France**. Différenciants à pousser dans toute annonce ou extension :
- **Prix fixe et transparent** : 200€, pas de facturation à l'heure, pas de devis à rallonge.
- **Réponse en moins de 24h.**
- **Contact direct** : téléphone (06 63 56 15 41), WhatsApp, formulaire — pas de secrétariat à traverser.
- **Échange de 15 minutes offert**, sans engagement, avant tout engagement payant.

## Non-negotiable: French avocat advertising rules

Before writing ad copy or picking claims to test, read `references/avocat-advertising-rules.md`. French lawyers are bound by the RIN (Règlement Intérieur National) and CNB deontology: advertising must be honest, cannot be comparative or disparage other avocats, cannot promise results, cannot use "spécialiste" unless the certification is real (but "généraliste" is a free term, no certification needed), and must be transparent about pricing when a price is advertised. Getting this wrong is a professional discipline risk for the client, not just a marketing mistake — always sanity-check draft ad copy against that reference before finalizing.

## Campaign structure

One offer, one small budget → don't fragment it.
- **1 Search-only campaign** (no Display/Search Partners): "Avocat généraliste – 200€ – France".
- **2 ad groups max** — beyond that, a 12€/jour budget is spread too thin for Google's bidding to learn anything useful:
  1. **Prix / format** — queries centered on price and the fixed-fee structure ("avocat prix fixe", "consultation avocat pas cher", "combien coûte une consultation avocat"...).
  2. **Disponibilité / contact direct** — queries centered on speed and direct access ("avocat réponse rapide", "avocat contact direct", "avocat consultation whatsapp"...).
- Don't bid on bare practice-area keywords ("avocat divorce", "avocat droit du travail") without a price/speed qualifier attached — generic legal-need terms have high CPC (often 5-10€+ in competitive markets) and would burn the daily budget on 1-2 clicks with no signal that price or speed is what's driving the searcher's decision. Only test these combined with "pas cher"/"prix fixe" once budget grows.
- Match types: **phrase and exact only**. No broad match at this budget — one broad-match click can eat a large share of a single day's spend.

## Geographic targeting

Confirmed with the client: target **France entière** from the start, using **"Presence" targeting only** (people actually located in France), not "Presence or interest" — otherwise the account pays for clicks from people merely searching about France from elsewhere.

The reasoning worth remembering (the client asked about this directly): widening geographic targeting does **not** stretch a fixed daily budget further — Google still spends the same 12€/jour regardless of area size. The reason to go national here is that Paris intra-muros is one of the most expensive markets in France for "avocat" keywords, and this offer's differentiators (remote, phone/WhatsApp-first, no need to be physically present) don't depend on the client being near Paris. Going national can mean cheaper clicks and more volume for the same spend — not because the zone is bigger, but because the account escapes the priciest local market. Because the offer is a généraliste consult rather than court representation, geography genuinely doesn't constrain who can be served — this wouldn't hold for an offer that requires in-person court appearances.

After a few weeks live, check the **Locations report** to confirm spend isn't just being reabsorbed by Paris/Lyon/Marseille (also the most competitive cities nationally).

## Keyword research

Anchor research in the searcher's job-to-be-done:
- Price/format angle: "avocat prix fixe", "avocat forfait 200 euros", "consultation avocat pas cher", "combien coûte une consultation avocat", "tarif avocat première consultation", "avocat sans devis à rallonge".
- Availability/directness angle: "avocat disponible rapidement", "avocat réponse rapide", "avocat contact direct", "avocat consultation whatsapp", "avocat généraliste", "avocat toutes affaires".
- Since targeting is national, don't bake a city name into most keywords — geo targeting already handles location. Keep "avocat barreau de paris" as its own keyword since it's a genuine trust/search signal people use regardless of where they live, not a location qualifier to replicate across the list.

## Negative keywords

Maintain a shared negative list at the campaign level: `gratuit`, `gratuite`, `aide juridictionnelle`, `commis d'office`, `emploi`, `recrutement`, `stage`, `formation`, `cours`, `diplôme`, `devenir avocat`, `salaire avocat`, `pdf`, `modèle`, `annuaire`, `classement`, `forum`, bare `avis` (unless paired with the firm's name). Check with the client whether to also exclude `garde à vue` / urgent criminal-defense terms — those typically don't fit a fixed-fee, non-urgent généraliste consult model unless she confirms she wants that traffic.

## Ad copy (Responsive Search Ads)

- Provide 10-15 headlines and 3-4 descriptions, pinning at most 1-2 headlines (position 1) — over-pinning defeats RSA's own optimization.
- Lead with concrete, verifiable facts rather than generic lawyer marketing language: "200€", "réponse sous 24h", "échange de 15 min offert", "avocate au Barreau de Paris". These are both more compliant (verifiable, not puffery) and typically outperform vague superlatives.
- Since targeting is now national, include at least one headline/description signaling remote reach explicitly (e.g. "Partout en France, à distance") — a Paris-barred lawyer needs to reassure searchers elsewhere in France that she can actually help them.
- Never write "garantie de résultat", "imparable", "meilleur", or comparative claims against other avocats — see the compliance reference. "Pas de secrétaire" should stay a factual description of her own solo practice, not a jab at other cabinets.
- Extensions: call extension (06 63 56 15 41), sitelinks (avis Google, appeler, WhatsApp, Calendly), callouts ("Réponse sous 24h", "Contact direct", "Tarif fixe 200€").

## Quality Score

Quality Score is a symptom, not a lever — improve it by fixing the three inputs directly:
1. **Expected CTR**: tight ad groups + ad copy matching the exact keyword theme (price vs. availability).
2. **Ad relevance**: keyword should appear naturally in a headline or description.
3. **Landing page experience**: `index.html` is the only landing page now, so this mostly comes down to keeping its copy — title, meta description, hero, FAQ — aligned with the généraliste/200€/24h positioning used in the ads. If the site copy ever drifts back toward a niche framing while the ads stay generalist, Quality Score and conversion rate both suffer.

## Bidding strategy

- Start on **Maximize Clicks with a max CPC cap (~2,50€)** or manual CPC, to keep control of the tiny budget from day one.
- Only move to Maximize Conversions / tCPA once conversions accumulate — with 12€/jour this will likely take several weeks. Don't switch early; Smart Bidding needs real conversion volume (Google's rule of thumb is ~30 conversions) to bid well.

## Conversion tracking

The site already carries the Google Ads tag (`AW-18161264737`) via gtag.js. What's set up vs. what needs configuring in the Ads UI:
- `merci.html` (the form's thank-you redirect) is the simplest conversion action to create — a page-load/destination-URL conversion, no code changes needed.
- Click-to-call (`tel:+33663561541`) and WhatsApp (`wa.me/33663561541`) links are **not currently tracked** — they're plain anchor tags with no `gtag('event', 'conversion', …)` call. Flag this if the client wants call/WhatsApp clicks measured; it needs a small script addition, not just an Ads UI change.
- Treat form submission, call clicks, and WhatsApp clicks as separate conversion actions rather than one blended "any conversion" — otherwise Smart Bidding can over-index on whichever is cheapest to trigger, not whichever actually produces paying clients.

## Reporting and analysis

Look at, in this order: conversion rate by ad group (a high-CTR, low-conversion ad group usually signals a landing-page or message mismatch, not an ad-copy problem); cost-per-conversion against the 200€ price point and the client's own sense of close rate; the search terms report for negative-keyword candidates; the Locations report (see geographic targeting above) to check spend isn't concentrating in the most expensive cities; and Quality Score components (not just the number). Present findings as a short table plus 2-3 concrete next actions.

## Google Ads scripts / API

For repetitive account-management tasks (bulk negative keyword updates, automated rules, custom alerts), Google Ads Scripts (JavaScript, run inside the Ads UI) are the lightest-weight option and need no OAuth setup — reach for this first. Only recommend the Google Ads API (requires a developer token and OAuth) if the client needs to manage the account programmatically from outside the Ads UI (e.g. syncing with an external CRM).
