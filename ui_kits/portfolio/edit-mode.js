// Shared helpers for portfolio text edit mode (localStorage persistence).
(function () {
  const SELECTORS =
    ".hero-name, .hero-title, .hero-tagline, .about-text, .footer-name, .footer-copy, .nav-logo, " +
    ".section-inner h1, .section-inner h2, .section-inner h3, .section-inner h4, .section-inner p";

  function getEditableElements() {
    const raw = [...document.querySelectorAll(SELECTORS)];
    const seen = new Set();
    const result = [];
    raw.forEach((el, i) => {
      if (seen.has(el)) return;
      if (el.closest(".edit-toolbar, button, .btn, .theme-switch, .modal-overlay")) return;
      seen.add(el);
      result.push({ el, key: `pe_${i}_${el.tagName.toLowerCase()}` });
    });
    return result;
  }

  function normalizeCopyFonts(el) {
    if (!el) return;
    el.style.removeProperty("font-family");
    el.querySelectorAll("*").forEach((node) => {
      node.style.removeProperty("font-family");
      if (node.tagName === "FONT") node.removeAttribute("face");
    });
  }

  function applyPersistedEdits() {
    getEditableElements().forEach(({ el, key }) => {
      const saved = localStorage.getItem(key);
      if (!saved) return;
      el.innerHTML = saved;
      if (
        el.classList.contains("about-text") ||
        el.classList.contains("timeline-desc") ||
        el.classList.contains("timeline-company") ||
        el.classList.contains("hero-tagline") ||
        el.classList.contains("hero-title") ||
        el.classList.contains("footer-copy")
      ) {
        normalizeCopyFonts(el);
      }
    });
  }

  function saveAllEdits() {
    getEditableElements().forEach(({ el, key }) => {
      localStorage.setItem(key, el.innerHTML);
    });
  }

  window.portfolioEdit = { getEditableElements, applyPersistedEdits, saveAllEdits };
})();
