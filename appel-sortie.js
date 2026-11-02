/* Encadré de sortie / inactivité : appel direct, pages Conseil et Construction. */
(function () {
  "use strict";
  function init() {
    if (document.getElementById("exitPopupOverlay")) return; // Accueil : encadré existant
    var KEY = "exitPopupShown", ARM_DELAY_MS = 8000, INACTIVITY_MS = 45000;
    var title = /contentieux-btp/.test(window.location.pathname)
      ? "Une assignation en référé expertise ?"
      : "Une réponse juridique à vérifier ?";
    var intro = /contentieux-btp/.test(window.location.pathname)
      ? "Une audience approche ? Appelez le cabinet pour présenter votre situation et identifier les modalités d’un accompagnement."
      : "Un doute sur vos contrats, vos CGV ou une réponse obtenue avec une IA ? Appelez le cabinet pour présenter votre demande.";
    var style = document.createElement("style");
    style.textContent = ".cabinet-exit-overlay{position:fixed;inset:0;z-index:1200;display:none;align-items:center;justify-content:center;padding:18px;background:rgba(44,44,44,.55);opacity:0;transition:opacity .24s ease}.cabinet-exit-overlay.open{display:flex}.cabinet-exit-overlay.visible{opacity:1}.cabinet-exit-panel{background:#faf7f4;color:#2c2c2c;width:min(100%,440px);padding:34px 28px;border-radius:5px;box-shadow:0 20px 60px rgba(0,0,0,.22);text-align:center;position:relative;font-family:'Lato',Arial,sans-serif;line-height:1.7}.cabinet-exit-panel h2{font:400 clamp(26px,6vw,32px)/1.18 'Cormorant Garamond',Georgia,serif;margin:8px 0 16px}.cabinet-exit-panel p{font-size:16px;margin:0 0 18px}.cabinet-exit-label{color:#ad6651;font-size:13px;text-transform:uppercase;letter-spacing:.13em}.cabinet-exit-call{display:block;text-decoration:none;color:white;background:#c97a62;padding:13px 20px;min-height:48px;font-weight:700}.cabinet-exit-call:hover{background:#af624c}.cabinet-exit-close{position:absolute;top:10px;right:12px;background:transparent;border:0;color:#555;font-size:28px;line-height:1;cursor:pointer;padding:6px}.cabinet-exit-dismiss{border:0;background:transparent;color:#625b56;text-decoration:underline;padding:12px 8px 0;cursor:pointer;font:14px 'Lato',Arial,sans-serif}.cabinet-exit-call:focus-visible,.cabinet-exit-close:focus-visible,.cabinet-exit-dismiss:focus-visible{outline:3px solid #8e503e;outline-offset:3px}@media(max-width:600px){.cabinet-exit-panel{padding:30px 20px;max-height:80vh;overflow-y:auto}}@media(prefers-reduced-motion:reduce){.cabinet-exit-overlay{transition:none}}";
    document.head.appendChild(style);
    var overlay = document.createElement("div");
    overlay.className = "cabinet-exit-overlay";
    overlay.id = "cabinetExitOverlay";
    overlay.setAttribute("aria-hidden","true");
    overlay.innerHTML = '<div class="cabinet-exit-panel" role="dialog" aria-modal="true" aria-labelledby="cabinetExitTitle"><button type="button" class="cabinet-exit-close" aria-label="Fermer l’encadré">×</button><span class="cabinet-exit-label">Avant de partir</span><h2 id="cabinetExitTitle"></h2><p class="cabinet-exit-intro"></p><a class="cabinet-exit-call" href="tel:+33663561541">Appeler le cabinet</a><button class="cabinet-exit-dismiss" type="button">Non merci, pas maintenant</button></div>';
    overlay.querySelector("h2").textContent = title;
    overlay.querySelector(".cabinet-exit-intro").textContent = intro;
    document.body.appendChild(overlay);
    var armed = false, inactivityTimer, closeTimer, previousFocus;
    function alreadyShown() { try { return sessionStorage.getItem(KEY) === "1"; } catch(e) { return false; } }
    function markShown() { try { sessionStorage.setItem(KEY, "1"); } catch(e) {} }
    function show() {
      if (!armed || alreadyShown() || overlay.classList.contains("open")) return;
      markShown();
      previousFocus = document.activeElement;
      overlay.classList.add("open"); overlay.setAttribute("aria-hidden","false");
      requestAnimationFrame(function(){ overlay.classList.add("visible"); });
      overlay.querySelector(".cabinet-exit-close").focus();
      document.removeEventListener("mouseout", onExit);
      clearTimeout(inactivityTimer);
    }
    function hide() {
      overlay.classList.remove("visible"); overlay.setAttribute("aria-hidden","true");
      clearTimeout(closeTimer);
      closeTimer = setTimeout(function(){ overlay.classList.remove("open"); },250);
      if (previousFocus && previousFocus.focus) previousFocus.focus();
    }
    function onExit(e) { if (!e.relatedTarget && e.clientY <= 0) show(); }
    function resetInactivity() { if (!armed || alreadyShown()) return; clearTimeout(inactivityTimer); inactivityTimer = setTimeout(show,INACTIVITY_MS); }
    overlay.querySelector(".cabinet-exit-close").addEventListener("click",hide);
    overlay.querySelector(".cabinet-exit-dismiss").addEventListener("click",hide);
    overlay.querySelector(".cabinet-exit-call").addEventListener("click",hide);
    overlay.addEventListener("click",function(e){if(e.target===overlay)hide();});
    document.addEventListener("keydown",function(e){if(e.key==="Escape" && overlay.classList.contains("open"))hide();});
    if(!alreadyShown()){
      setTimeout(function() {
        if(alreadyShown())return;
        armed=true;
        if(window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches)
          document.addEventListener("mouseout",onExit);
        ["mousemove","scroll","keydown","touchstart"].forEach(function(name){document.addEventListener(name,resetInactivity,{passive:true});});
        resetInactivity();
      },ARM_DELAY_MS);
    }
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
  else init();
})();