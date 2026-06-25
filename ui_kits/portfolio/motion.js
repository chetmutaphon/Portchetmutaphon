// Light parallax + section entrance transitions (respects prefers-reduced-motion).
(function () {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let sectionObserver = null;

  function initHeroParallax() {
    if (reduced) return;

    const hero = document.getElementById("hero");
    const layer = hero && hero.querySelector(".hero-parallax-layer");
    if (!layer) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = hero.getBoundingClientRect();
      if (rect.bottom <= 0 || rect.top >= window.innerHeight) return;
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)));
      layer.style.transform = `translate3d(0, ${progress * 48}px, 0) scale(1.06)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.removeEventListener("scroll", layer.__parallaxScroll || onScroll);
    layer.__parallaxScroll = onScroll;
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
  }

  function markVisibleSections() {
    const sections = document.querySelectorAll(".section[data-motion]");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        section.classList.add("section--entered");
      }
    });
  }

  function initSectionTransitions() {
    const sections = document.querySelectorAll(".section[data-motion]");
    if (!sections.length) return;

    if (reduced) {
      sections.forEach((s) => s.classList.add("section--entered"));
      return;
    }

    if (sectionObserver) {
      sectionObserver.disconnect();
    }

    sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("section--entered");
          sectionObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -4% 0px" }
    );

    sections.forEach((s) => {
      if (!s.classList.contains("section--entered")) {
        sectionObserver.observe(s);
      }
    });

    markVisibleSections();
  }

  function init() {
    initHeroParallax();
    initSectionTransitions();
  }

  window.portfolioMotion = { init };

  function scheduleInit() {
    init();
    setTimeout(init, 400);
    setTimeout(markVisibleSections, 1200);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scheduleInit);
  } else {
    scheduleInit();
  }
})();
