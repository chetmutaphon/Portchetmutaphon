// Portfolio UI kit — app root, theme switch, modal state, admin edit mode.
const THEMES = [{
  id: "",
  label: "Apple Minimal"
}, {
  id: "warm-editorial",
  label: "Warm Editorial"
}, {
  id: "cool-studio",
  label: "Cool Studio"
}, {
  id: "ink-paper",
  label: "Ink & Paper"
}];

// ---- Edit mode hook: adds contenteditable to text elements ----
function useEditMode(enabled) {
  React.useEffect(() => {
    if (!enabled) return;
    const pairs = [];
    const t = setTimeout(() => {
      const raw = [...document.querySelectorAll('.hero-name, .hero-title, .hero-tagline, .about-text, .footer-name, .footer-copy, .nav-logo'), ...document.querySelectorAll('.section-inner h1, .section-inner h2, .section-inner h3, .section-inner h4, .section-inner p')];
      const seen = new Set();
      raw.forEach((el, i) => {
        if (seen.has(el)) return;
        if (el.closest('.edit-toolbar, button, .btn, .theme-switch, .modal-overlay')) return;
        seen.add(el);
        const key = `pe_${i}_${el.tagName.toLowerCase()}`;
        const saved = localStorage.getItem(key);
        if (saved) el.innerHTML = saved;
        el.contentEditable = 'true';
        el.spellcheck = false;
        const fn = () => localStorage.setItem(key, el.innerHTML);
        el.addEventListener('blur', fn);
        pairs.push([el, fn]);
      });
      document.body.classList.add('edit-mode-active');
    }, 200);
    return () => {
      clearTimeout(t);
      pairs.forEach(([el, fn]) => {
        el.contentEditable = 'false';
        el.removeEventListener('blur', fn);
      });
      document.body.classList.remove('edit-mode-active');
    };
  }, [enabled]);
}
function App() {
  const [theme, setTheme] = React.useState(() => localStorage.getItem("portfolio_theme") || "");
  const [editMode] = React.useState(() => !!localStorage.getItem("portfolio_auth"));
  const [showLogin, setShowLogin] = React.useState(false);
  const [lightbox, setLightbox] = React.useState(null);
  const [video, setVideo] = React.useState(null);
  const active = window.useActiveSection(["about", "experience", "artwork", "photography", "videos", "dashboard"]);
  useEditMode(editMode);
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio_theme", theme);
  }, [theme]);
  const handleAuth = () => {
    if (editMode) {
      localStorage.removeItem("portfolio_auth");
      window.location.reload();
    } else {
      setShowLogin(true);
    }
  };
  const handleLogin = pwd => {
    if (pwd === "admin2026") {
      localStorage.setItem("portfolio_auth", "1");
      window.location.reload();
      return true;
    }
    return false;
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.ScrollProgress, null), /*#__PURE__*/React.createElement(window.Navigation, {
    active: active,
    loggedIn: editMode,
    onAuth: handleAuth
  }), /*#__PURE__*/React.createElement(window.HeroSection, null), /*#__PURE__*/React.createElement(window.AboutSection, null), /*#__PURE__*/React.createElement(window.ExperienceSection, null), /*#__PURE__*/React.createElement(window.ArtworkSection, {
    onOpen: setLightbox
  }), /*#__PURE__*/React.createElement(window.PhotographySection, {
    onOpen: setLightbox
  }), /*#__PURE__*/React.createElement(window.VideoSection, {
    onOpen: setVideo
  }), /*#__PURE__*/React.createElement(window.DashboardSection, {
    onOpen: setLightbox
  }), /*#__PURE__*/React.createElement(window.Footer, null), /*#__PURE__*/React.createElement(window.Lightbox, {
    item: lightbox,
    onClose: () => setLightbox(null)
  }), /*#__PURE__*/React.createElement(window.VideoModal, {
    item: video,
    onClose: () => setVideo(null)
  }), showLogin && /*#__PURE__*/React.createElement(window.LoginModal, {
    onLogin: handleLogin,
    onClose: () => setShowLogin(false)
  }), editMode && /*#__PURE__*/React.createElement(window.EditToolbar, null), /*#__PURE__*/React.createElement("div", {
    className: "theme-switch"
  }, THEMES.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: theme === t.id ? "active" : "",
    onClick: () => setTheme(t.id)
  }, t.label))));
}
window.App = App;
