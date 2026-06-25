// Light parallax + section entrance transitions (respects prefers-reduced-motion).
(function () {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
  }

  function initSectionTransitions() {
    const sections = document.querySelectorAll(".section[data-motion]");
    if (!sections.length) return;

    if (reduced) {
      sections.forEach((s) => s.classList.add("section--entered"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("section--entered");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    sections.forEach((s) => obs.observe(s));
  }

  function init() {
    initHeroParallax();
    initSectionTransitions();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    setTimeout(init, 300);
  }

  window.portfolioMotion = { init };
})();
