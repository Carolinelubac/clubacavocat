/* Gestion des traceurs - consentement préalable, choix équivalents et retrait facile. */
(function () {
  "use strict";
  var KEY = "lubac_cookie_choice_v1";
  var SIX_MONTHS = 183 * 24 * 60 * 60 * 1000;
  var accepted = false;
  var scriptsLoaded = false;
  function readChoice() {
    try {
      var v = JSON.parse(localStorage.getItem(KEY) || "null");
      return v && typeof v.date === "number" && Date.now() - v.date < SIX_MONTHS && (v.choice === "accept" || v.choice === "reject") ? v.choice : null;
    } catch (e) { return null; }
  }
  function storeChoice(choice) {
    try { localStorage.setItem(KEY, JSON.stringify({choice: choice, date: Date.now()})); } catch(e) {}
  }
  function loadTracking() {
    if (scriptsLoaded) return;
    scriptsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", "AW-18161264737");
    var ads = document.createElement("script");
    ads.async = true;
    ads.src = "https://www.googletagmanager.com/gtag/js?id=AW-18161264737";
    document.head.appendChild(ads);
    var gtm = document.createElement("script");
    gtm.async = true;
    gtm.src = "https://www.googletagmanager.com/gtm.js?id=GTM-5997PF2J";
    document.head.appendChild(gtm);
    window.lubacAnalyticsConsent = true;
    window.dispatchEvent(new Event("lubac:consent-accepted"));
  }
  function setup() {
    var style = document.createElement("style");
    style.textContent = ".lubac-cookie-panel{position:fixed;z-index:5000;bottom:18px;left:18px;right:18px;max-width:540px;padding:20px 22px;background:#faf7f4;border:1px solid #d8c7bb;border-radius:8px;box-shadow:0 10px 42px rgba(0,0,0,.24);color:#2c2c2c;font:14px/1.6 Arial,sans-serif;text-align:left}.lubac-cookie-panel h2{font:600 20px/1.2 Georgia,serif;margin:0 0 9px}.lubac-cookie-panel p{margin:0 0 14px}.lubac-cookie-buttons{display:flex;gap:10px;flex-wrap:wrap}.lubac-cookie-buttons button{font:700 14px Arial,sans-serif;border:1px solid #b76b54;border-radius:4px;min-height:43px;padding:10px 17px;cursor:pointer;flex:1}.lubac-cookie-accept{background:#c97a62;color:#fff}.lubac-cookie-reject{background:#fff;color:#6d3b2f}.lubac-cookie-panel a{color:#8b4b3b;text-decoration:underline}@media(max-width:600px){.lubac-cookie-panel{bottom:8px;left:8px;right:8px;max-height:65vh;overflow:auto;padding:15px}.lubac-cookie-buttons{flex-direction:column}}";
    document.head.appendChild(style);
    var panel = document.createElement("aside");
    panel.className = "lubac-cookie-panel";
    panel.setAttribute("aria-label", "Préférences de cookies");
    panel.innerHTML = '<h2>Vos préférences de cookies</h2><p>Avec votre accord, nous utilisons des traceurs Google pour mesurer les visites et l’efficacité de nos publicités. Vous pouvez refuser sans perdre l’accès au site et revenir sur votre choix à tout moment.</p><div class="lubac-cookie-buttons"><button type="button" class="lubac-cookie-reject">Tout refuser</button><button type="button" class="lubac-cookie-accept">Tout accepter</button></div><p style="margin:12px 0 0;font-size:12px"><a href="rgpd.html">Politique de confidentialité</a></p>';
    panel.style.display = "none";
    document.body.appendChild(panel);
    function choice(c) {
      accepted = c === "accept";
      storeChoice(c);
      panel.style.display = "none";
      if (accepted) loadTracking();
    }
    panel.querySelector(".lubac-cookie-reject").addEventListener("click", function () { choice("reject"); });
    panel.querySelector(".lubac-cookie-accept").addEventListener("click", function () { choice("accept"); });
    document.querySelectorAll(".lubac-manage-cookies").forEach(function (link) {
      link.addEventListener("click", function (e) { e.preventDefault(); panel.style.display = "block"; });
    });
    var saved = readChoice();
    if (saved === "accept") { accepted = true; loadTracking(); }
    if (!saved) panel.style.display = "block";
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", setup);
  else setup();
})();