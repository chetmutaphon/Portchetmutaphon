// Portfolio UI kit — sections. Uses design-system primitives from the bundle.
const DS = window.ChetMutaphonDesignSystem_a09153;
const {
  Button,
  Tag,
  SectionLabel,
  GalleryCard,
  TimelineCard,
  VideoCard
} = DS;
const IMG = window.__PORTFOLIO_IMG_BASE || "../../assets/imagery/";

// ============ DATA ============
const SKILLS = ["Graphic Design", "Photography", "Videography", "Marketing Strategy", "Social Media Management", "Adobe Creative Suite", "Content Creation", "Brand Development", "Art Direction", "Motion Graphics", "Print Design", "Analytics"];
const EXPERIENCES = [{
  role: "Marketing Executive",
  company: "Company Name",
  period: "2023 — Present",
  desc: "Led integrated marketing campaigns and brand strategy across digital and print channels. Managed social media presence and content creation."
}, {
  role: "Senior Graphic Designer",
  company: "Studio Name",
  period: "2021 — 2023",
  desc: "Created visual identities, marketing materials, and digital content. Directed photoshoots and video productions for diverse clients."
}];
const ARTWORK = [{
  id: "a1",
  title: "Brand Identity System",
  label: "BRAND IDENTITY",
  hue: 260,
  img: IMG + "AW1.jpg"
}, {
  id: "a2",
  title: "Event Poster Series",
  label: "POSTER DESIGN",
  hue: 280,
  img: IMG + "AW2.jpg"
}, {
  id: "a3",
  title: "Editorial Layout",
  label: "EDITORIAL",
  hue: 240,
  img: IMG + "AW3.jpg"
}, {
  id: "a4",
  title: "Annual Report Design",
  label: "REPORT",
  hue: 220,
  img: IMG + "AW4.jpg"
}, {
  id: "a5",
  title: "Packaging Design",
  label: "PACKAGING",
  hue: 300,
  img: IMG + "AW5.jpg"
}, {
  id: "a6",
  title: "Social Media Templates",
  label: "SOCIAL KIT",
  hue: 250,
  img: IMG + "AW6.jpg"
}];
const PHOTOS = [{
  id: "p1",
  title: "Food Photography",
  label: "FOOD",
  hue: 40,
  img: IMG + "Photo3.jpg"
}, {
  id: "p2",
  title: "Lifestyle & Dining",
  label: "LIFESTYLE",
  hue: 30,
  img: IMG + "Photo1.jpg"
}, {
  id: "p3",
  title: "Café Campaigns",
  label: "SOCIAL",
  hue: 180,
  img: IMG + "So5.png"
}, {
  id: "p4",
  title: "Brand Stories",
  label: "STORY",
  hue: 200,
  img: IMG + "So6.png"
}, {
  id: "p5",
  title: "Promo Series",
  label: "PROMO",
  hue: 160,
  img: IMG + "So7.png"
}, {
  id: "p6",
  title: "Menu Artwork",
  label: "MENU",
  hue: 20,
  img: IMG + "AW7.jpg"
}];
const VIDEOS = [{
  id: "v1",
  title: "Brand Story",
  desc: "Company brand narrative",
  vimeoId: "76979871"
}, {
  id: "v2",
  title: "Product Launch",
  desc: "New product reveal campaign",
  vimeoId: "76979871"
}, {
  id: "v3",
  title: "Behind the Scenes",
  desc: "Creative process documentary",
  vimeoId: "76979871"
}, {
  id: "v4",
  title: "Event Highlight",
  desc: "Corporate event recap",
  vimeoId: "76979871"
}, {
  id: "v5",
  title: "Social Reel",
  desc: "Short-form social content",
  vimeoId: "76979871"
}, {
  id: "v6",
  title: "Client Testimonial",
  desc: "Customer success story",
  vimeoId: "76979871"
}];
const DASHBOARDS = [{
  id: "d1",
  title: "Social Media Analytics",
  label: "SOCIAL ANALYTICS",
  hue: 210
}, {
  id: "d2",
  title: "Campaign Performance",
  label: "CAMPAIGN KPI",
  hue: 150
}, {
  id: "d3",
  title: "Content Calendar",
  label: "CONTENT PLAN",
  hue: 30
}, {
  id: "d4",
  title: "Engagement Metrics",
  label: "ENGAGEMENT",
  hue: 340
}, {
  id: "d5",
  title: "ROI Dashboard",
  label: "ROI REPORT",
  hue: 120
}, {
  id: "d6",
  title: "Monthly Performance",
  label: "MONTHLY REVIEW",
  hue: 270
}];

// ============ SCROLL UTILITIES ============
function useScrollReveal() {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        obs.unobserve(el);
      }
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px"
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}
function ScrollReveal({
  children,
  delay = 0,
  style = {}
}) {
  const [ref, visible] = useScrollReveal();
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(36px)",
      transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      willChange: "opacity, transform",
      ...style
    }
  }, children);
}
function useActiveSection(ids) {
  const [active, setActive] = React.useState("");
  React.useEffect(() => {
    const obs = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const o = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) setActive(id);
      }, {
        threshold: 0.25,
        rootMargin: "-80px 0px -40% 0px"
      });
      o.observe(el);
      return o;
    });
    return () => obs.forEach(o => o && o.disconnect());
  }, []);
  return active;
}

// ============ CHROME ============
function ScrollProgress() {
  const [w, setW] = React.useState(0);
  React.useEffect(() => {
    const fn = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setW(max > 0 ? window.scrollY / max * 100 : 0);
    };
    window.addEventListener("scroll", fn, {
      passive: true
    });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll-progress",
    style: {
      width: w + "%"
    }
  });
}
const NAV_LINKS = [{
  id: "about",
  label: "About"
}, {
  id: "experience",
  label: "Experience"
}, {
  id: "artwork",
  label: "Artwork"
}, {
  id: "photography",
  label: "Photo"
}, {
  id: "videos",
  label: "Video"
}, {
  id: "dashboard",
  label: "Social"
}];
function Navigation({
  active,
  loggedIn,
  onAuth
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, {
      passive: true
    });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const goTo = id => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 72,
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav" + (scrolled ? " nav--scrolled" : "")
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-logo",
    onClick: () => window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, "Chet Mutaphon"), /*#__PURE__*/React.createElement("div", {
    className: "nav-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, NAV_LINKS.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    className: "nav-link" + (active === l.id ? " nav-link--active" : ""),
    onClick: () => goTo(l.id)
  }, l.label))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: onAuth
  }, loggedIn ? "Logout" : "Login")));
}
function HeroSection() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(t);
  }, []);
  const go = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 72,
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "hero",
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "hero-bg",
    shape: "rect",
    placeholder: "Drop a hero background image",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.45)",
      zIndex: 1,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-content",
    style: {
      position: "relative",
      zIndex: 2,
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(30px)",
      transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "hero-name",
    style: {
      color: "#fff"
    }
  }, "Chet Mutaphon"), /*#__PURE__*/React.createElement("p", {
    className: "hero-title",
    style: {
      color: "rgba(255,255,255,0.75)"
    }
  }, "Marketing Executive & Graphic Designer"), /*#__PURE__*/React.createElement("p", {
    className: "hero-tagline",
    style: {
      color: "rgba(255,255,255,0.6)"
    }
  }, "Crafting visual stories that connect brands with people."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go("artwork")
  }, "View works"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    href: "#footer",
    onClick: e => {
      e.preventDefault();
      go("dashboard");
    }
  }, "Contact me"))), /*#__PURE__*/React.createElement("div", {
    className: "scroll-hint",
    style: {
      position: "relative",
      zIndex: 2,
      opacity: show ? 1 : 0,
      transition: "opacity 1.2s ease 0.8s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-hint-line"
  })));
}
function AboutSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--alt",
    id: "about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-left"
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(SectionLabel, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "A creative at the intersection", /*#__PURE__*/React.createElement("br", null), "of design and marketing.")
  }, "About")), /*#__PURE__*/React.createElement(ScrollReveal, {
    delay: 0.1
  }, /*#__PURE__*/React.createElement("p", {
    className: "about-text"
  }, "With years of experience spanning graphic design, photography, videography, and marketing strategy, I bring a multidisciplinary approach to every project. From crafting brand identities to directing video content and analyzing campaign performance \u2014 I believe great design drives great results.")), /*#__PURE__*/React.createElement(ScrollReveal, {
    delay: 0.2
  }, /*#__PURE__*/React.createElement("div", {
    className: "skills-grid"
  }, SKILLS.map((s, i) => /*#__PURE__*/React.createElement(Tag, {
    key: i
  }, s))))), /*#__PURE__*/React.createElement("div", {
    className: "about-right"
  }, /*#__PURE__*/React.createElement(ScrollReveal, {
    delay: 0.15
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-portrait-wrap"
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "about-portrait",
    shape: "rect",
    placeholder: "Drop a portrait photo"
  })))))));
}
function ExperienceSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "experience"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    title: "Where I've worked."
  }, "Experience"))), /*#__PURE__*/React.createElement("div", {
    className: "timeline"
  }, EXPERIENCES.map((exp, i) => /*#__PURE__*/React.createElement(ScrollReveal, {
    key: i,
    delay: i * 0.12
  }, /*#__PURE__*/React.createElement("div", {
    className: "timeline-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "timeline-dot"
  }), /*#__PURE__*/React.createElement(TimelineCard, exp)))))));
}
function Grid({
  items,
  aspectRatio,
  columns = 3,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "gallery-grid",
    style: {
      gridTemplateColumns: `repeat(${columns}, 1fr)`
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(ScrollReveal, {
    key: it.id,
    delay: i * 0.06
  }, /*#__PURE__*/React.createElement(GalleryCard, {
    title: it.title,
    label: it.label,
    image: it.img,
    hue: it.hue,
    aspectRatio: aspectRatio,
    onClick: () => onOpen(it)
  }))));
}
function ArtworkSection({
  onOpen
}) {
  const {
    images,
    loading
  } = window.useSupabaseImages ? window.useSupabaseImages("artwork") : {
    images: [],
    loading: false
  };
  const items = images.length > 0 ? images : ARTWORK;
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--alt",
    id: "artwork"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    title: "Design work."
  }, "Artwork"))), loading ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: 40,
      color: "var(--text-secondary)"
    }
  }, "Loading...") : /*#__PURE__*/React.createElement(Grid, {
    items: items,
    aspectRatio: "3/4",
    columns: 4,
    onOpen: onOpen
  })));
}
function PhotographySection({
  onOpen
}) {
  const {
    images,
    loading
  } = window.useSupabaseImages ? window.useSupabaseImages("photography") : {
    images: [],
    loading: false
  };
  const items = images.length > 0 ? images : PHOTOS;
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "photography"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    title: "Through the lens."
  }, "Photography"))), loading ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: 40,
      color: "var(--text-secondary)"
    }
  }, "Loading...") : /*#__PURE__*/React.createElement(Grid, {
    items: items,
    aspectRatio: "3/4",
    columns: 4,
    onOpen: onOpen
  })));
}
function VideoSection({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--alt",
    id: "videos"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    title: "Video Reel."
  }, "Videographer"))), /*#__PURE__*/React.createElement("div", {
    className: "video-grid"
  }, VIDEOS.map((v, i) => /*#__PURE__*/React.createElement(ScrollReveal, {
    key: v.id,
    delay: i * 0.1
  }, /*#__PURE__*/React.createElement(VideoCard, {
    title: v.title,
    desc: v.desc,
    aspectRatio: "9/16",
    onClick: () => onOpen(v)
  }))))));
}
function DashboardSection({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "dashboard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    title: "Social media post."
  }, "Marketing"))), /*#__PURE__*/React.createElement(Grid, {
    items: DASHBOARDS,
    aspectRatio: "4/3",
    onOpen: onOpen
  })));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer",
    id: "footer"
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("div", {
    className: "footer-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "footer-name"
  }, "Chet Mutaphon"), /*#__PURE__*/React.createElement("span", {
    className: "footer-copy"
  }, "\xA9 2026 All rights reserved.")), /*#__PURE__*/React.createElement("div", {
    className: "footer-contact"
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:your.email@example.com",
    className: "footer-link"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "3",
    width: "14",
    height: "10",
    rx: "2",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 5l7 4 7-4",
    stroke: "currentColor",
    strokeWidth: "1.5"
  })), "your.email@example.com"), /*#__PURE__*/React.createElement("a", {
    href: "https://linkedin.com",
    target: "_blank",
    rel: "noopener",
    className: "footer-link"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.6 1H2.4C1.63 1 1 1.63 1 2.4v11.2c0 .77.63 1.4 1.4 1.4h11.2c.77 0 1.4-.63 1.4-1.4V2.4c0-.77-.63-1.4-1.4-1.4zM5.3 13H3.2V6.5h2.1V13zM4.25 5.6c-.69 0-1.25-.56-1.25-1.25S3.56 3.1 4.25 3.1s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zM13 13h-2.1V9.85c0-.75-.01-1.72-1.05-1.72-1.05 0-1.21.82-1.21 1.67V13H6.55V6.5h2.01v.89h.03c.28-.53.96-1.09 1.98-1.09 2.12 0 2.51 1.4 2.51 3.21V13z"
  })), "LinkedIn")))));
}
function Lightbox({
  item,
  onClose
}) {
  if (!item) return null;
  const ph = `repeating-linear-gradient(-45deg, transparent, transparent 14px, oklch(0.9 0.015 ${item.hue}) 14px, oklch(0.9 0.015 ${item.hue}) 28px), var(--card)`;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("button", {
    className: "modal-close",
    onClick: onClose
  }, "\u2715"), /*#__PURE__*/React.createElement("div", {
    className: "lightbox-content",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "lightbox-image",
    style: {
      background: item.img ? undefined : ph
    }
  }, item.img && /*#__PURE__*/React.createElement("img", {
    src: item.img,
    alt: item.title
  })), /*#__PURE__*/React.createElement("div", {
    className: "lightbox-info"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lightbox-title"
  }, item.title))));
}
function VideoModal({
  item,
  onClose
}) {
  if (!item) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay modal-overlay--dark",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("button", {
    className: "modal-close",
    onClick: onClose
  }, "\u2715"), /*#__PURE__*/React.createElement("div", {
    className: "video-modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-embed"
  }, /*#__PURE__*/React.createElement("iframe", {
    src: `https://player.vimeo.com/video/${item.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`,
    frameBorder: "0",
    allow: "autoplay; fullscreen; picture-in-picture",
    allowFullScreen: true,
    style: {
      width: "100%",
      height: "100%",
      border: "none"
    }
  })), /*#__PURE__*/React.createElement("p", {
    className: "video-modal-title"
  }, item.title)));
}

// ============ LOGIN MODAL ============
function LoginModal({
  onLogin,
  onClose
}) {
  const [pwd, setPwd] = React.useState("");
  const [err, setErr] = React.useState(false);
  const submit = () => {
    if (onLogin(pwd)) {/* parent handles reload */} else {
      setErr(true);
      setPwd("");
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "login-modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 20,
      marginBottom: 6,
      color: "var(--text)"
    }
  }, "Admin Login"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)",
      marginBottom: 24
    }
  }, "Enter password to enable text editing."), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: pwd,
    placeholder: "Password",
    autoFocus: true,
    onChange: e => {
      setPwd(e.target.value);
      setErr(false);
    },
    onKeyDown: e => e.key === "Enter" && submit(),
    style: {
      width: "100%",
      padding: "12px 16px",
      fontSize: 15,
      borderRadius: "var(--radius)",
      border: `1.5px solid ${err ? "oklch(0.55 0.2 25)" : "var(--border)"}`,
      background: "var(--bg)",
      color: "var(--text)",
      outline: "none",
      fontFamily: "var(--font-body)",
      boxSizing: "border-box",
      marginBottom: err ? 8 : 24
    }
  }), err && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "oklch(0.55 0.2 25)",
      marginBottom: 20
    }
  }, "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: submit
  }, "Login"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: onClose
  }, "Cancel"))));
}

// ============ EDIT TOOLBAR ============
function EditToolbar() {
  const applyColor = c => {
    document.execCommand("styleWithCSS", false, true);
    document.execCommand("foreColor", false, c);
  };
  const resetAll = () => {
    if (!confirm("รีเซ็ตข้อความทั้งหมดกลับค่าเดิม?")) return;
    Object.keys(localStorage).filter(k => k.startsWith("pe_")).forEach(k => localStorage.removeItem(k));
    window.location.reload();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "edit-toolbar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "edit-toolbar-label"
  }, "\u270F Edit Mode"), /*#__PURE__*/React.createElement("span", {
    className: "edit-toolbar-sep"
  }), /*#__PURE__*/React.createElement("label", {
    className: "edit-toolbar-color"
  }, "\u0E2A\u0E35\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23", /*#__PURE__*/React.createElement("input", {
    type: "color",
    defaultValue: "#000000",
    onChange: e => applyColor(e.target.value)
  })), /*#__PURE__*/React.createElement("span", {
    className: "edit-toolbar-sep"
  }), /*#__PURE__*/React.createElement("button", {
    className: "edit-toolbar-btn",
    onClick: resetAll
  }, "Reset All"));
}
Object.assign(window, {
  ScrollProgress,
  Navigation,
  HeroSection,
  AboutSection,
  ExperienceSection,
  ArtworkSection,
  PhotographySection,
  VideoSection,
  DashboardSection,
  Footer,
  Lightbox,
  VideoModal,
  useActiveSection,
  LoginModal,
  EditToolbar
});
