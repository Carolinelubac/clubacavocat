# clubacavocat

Site vitrine de Maître Caroline Lubac, avocate au Barreau de Paris, spécialisée dans l'accompagnement juridique des fondatrices de marques (contrats fournisseurs, CGV e-commerce/B2B, protection des créations) et le contentieux BTP (référé expertise).

## Stack

Site statique HTML/CSS/JS, sans build ni framework. Déployé sur GitHub Pages (voir `.github/workflows/deploy.yml`) sous le domaine `lubacavocat.fr` (`CNAME`).

## Structure

- `index.html` — page d'accueil
- `audit.html`, `architecture.html`, `experience.html` — pages des trois offres (Audit Juridique 900€, Architecture Juridique 4500€, Expérience Sur Mesure 7000€)
- `contentieux-btp.html` — page dédiée au contentieux BTP / référé expertise
- `mentions-legales.html`, `rgpd.html`, `merci.html` — pages `noindex` (légal, confirmation de contact)
- `style.css`, `script.js` — styles et scripts partagés (chaque page a aussi des styles inline)
- `robots.txt`, `sitemap.xml` — indexation (pages `noindex` volontairement exclues du sitemap)

## Conventions

- Contenu en français, `lang="fr"` sur toutes les pages.
- Chaque page indexable a : `title`, `meta description`, `canonical`, Open Graph et Twitter Card (voir `index.html` comme référence).
- Google Tag Manager (`GTM-5997PF2J`) et Google Ads (`AW-18161264737`) présents en haut de chaque page — ne pas dupliquer ni retirer sans raison.
- Éviter les images volumineuses non optimisées (attention historique : `photo-hero.jpg` ~25 Mo, à compresser/convertir en WebP si retravaillée).
