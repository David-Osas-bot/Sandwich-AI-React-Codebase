import React, { useEffect, useRef, useState } from "react";

const NAV_DATA = [
  {
    key: "products",
    label: "Products",
    eyebrow: "15+ modules, one real-time ledger — all live in production",
    groups: [
      {
        heading: "Operations",
        links: [
          "Procurement & Purchase Orders",
          "Inventory & Stock Control",
          "Supplier Management",
          "Recipe Management & AI Yield Calc",
          "Kitchen, Central Production & KDS",
          "Inter-Branch Transfers & Logistics",
        ],
      },
      {
        heading: "Money & Growth",
        links: [
          "Accounting & Finance",
          "Budgets & Cost Analytics",
          "AI Forecasting & Predictive Ordering",
          "Payments & Wallets",
          "Reports & Business Intelligence",
        ],
      },
      {
        heading: "Front of House & People",
        links: [
          "POS & Table Management",
          "Online Ordering & Aggregators",
          "CRM, Loyalty & Gift Cards",
          "Team Chat, RBAC & Custom Roles",
          "Branches & Multi-Location",
        ],
      },
    ],
  },
  {
    key: "solutions",
    label: "Solutions",
    eyebrow: "One platform, two experiences",
    groups: [
      {
        heading: "Mobile App",
        sub: "Offline-first, for every staff role on the floor — every shift.",
        links: ["Procurement", "Inventory", "Kitchen & Processing", "Customer Service", "Custom Roles"],
      },
      {
        heading: "Web Dashboard",
        sub: "Full-screen oversight, from any browser, any device.",
        links: ["Super Admin", "Branch Manager", "Finance Officer", "HR"],
      },
    ],
  },
  {
    key: "resources",
    label: "Resources",
    eyebrow: "Learn Sandwich, your way",
    groups: [
      {
        heading: "Video Tutorials",
        sub: "Walkthroughs of every module.",
        links: [],
      },
      {
        heading: "Setup Guides",
        sub: "Onboard your team in a day.",
        links: [],
      },
      {
        heading: "Help Center",
        sub: "Setup, billing & integrations.",
        links: [],
      },
    ],
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const panelRef = useRef(null);
  const toggleRef = useRef(null);

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (menuOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [menuOpen]);

  // Escape closes drawer; return focus to toggle
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      setOpenAccordion(null);
      toggleRef.current?.focus();
    } else {
      panelRef.current?.querySelector("a,button")?.focus();
    }
  }, [menuOpen]);

  const toggleAccordion = (key) => {
    setOpenAccordion((prev) => (prev === key ? null : key));
  };

  return (
    <header className="site">
      <style>{`
        /* Hamburger trigger & Broken style */
        .hamburger { display: none; position: relative; width: 44px; height: 44px; padding: 0; background: transparent; border: none; cursor: pointer; z-index: 60; -webkit-tap-highlight-color: transparent; align-items: center; justify-content: center; }
        .hamburger-box { position: relative; display: block; width: 22px; height: 16px; margin: 0 auto; }
        .hamburger-line { position: absolute; left: 0; height: 2.5px; border-radius: 2px; background: #dc2626; transition: transform 0.35s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.25s ease, top 0.35s cubic-bezier(0.65, 0, 0.35, 1), width 0.35s cubic-bezier(0.65, 0, 0.35, 1); }
        
        /* Staggered / Broken Initial Lengths */
        .line-top { top: 0; width: 22px; }
        .line-mid { top: 7px; width: 14px; left: 8px; }
        .line-bottom { top: 14px; width: 18px; }

        /* Open State (Forms clean X) */
        .hamburger.is-open .line-top { top: 7px; width: 22px; transform: rotate(45deg); }
        .hamburger.is-open .line-mid { opacity: 0; width: 0; left: 11px; }
        .hamburger.is-open .line-bottom { top: 7px; width: 22px; transform: rotate(-45deg); }
        .hamburger:focus-visible { outline: 2px solid #dc2626; outline-offset: 4px; border-radius: 8px; }

        /* Scrim & Panel Drawer */
        .mobile-scrim { position: fixed; inset: 0; background: rgba(20, 18, 16, 0.38); backdrop-filter: blur(2px); opacity: 0; pointer-events: none; transition: opacity 0.32s ease; z-index: 50; }
        .mobile-scrim.is-visible { opacity: 1; pointer-events: auto; }
        .mobile-panel { position: fixed; top: 0; right: 0; height: 100dvh; width: min(88vw, 420px); background: #fff; box-shadow: -24px 0 60px rgba(20, 18, 16, 0.16); transform: translateX(100%); transition: transform 0.42s cubic-bezier(0.16, 1, 0.3, 1); z-index: 55; display: flex; flex-direction: column; }
        .mobile-panel.is-open { transform: translateX(0); }
        .mobile-panel-scroll { height: 100%; overflow-y: auto; padding: 88px 24px 28px; display: flex; flex-direction: column; gap: 28px; }

        /* Mobile Accordion & Links */
        .mobile-links { display: flex; flex-direction: column; }
        .mobile-accordion { border-bottom: 1px solid rgba(30, 30, 30, 0.08); }
        .mobile-accordion-trigger, .mobile-plain-link { display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 16px 2px; background: none; border: none; font-size: 16.5px; font-weight: 560; color: rgba(20, 18, 16, 0.92); text-align: left; text-decoration: none; cursor: pointer; opacity: 0; transform: translateY(8px); }
        .mobile-panel.is-open .mobile-accordion-trigger, .mobile-panel.is-open .mobile-plain-link { animation: mobileRowIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; animation-delay: calc(var(--stagger, 0) * 55ms + 60ms); }
        @keyframes mobileRowIn { to { opacity: 1; transform: translateY(0); } }
        .mobile-plain-link { border-bottom: 1px solid rgba(30, 30, 30, 0.08); }
        .mobile-accordion-trigger .chev { transition: transform 0.32s ease; color: rgba(30, 30, 30, 0.55); width: 10px; height: 6px; }
        .mobile-accordion-trigger.is-open .chev { transform: rotate(180deg); }
        .mobile-accordion-panel { overflow: hidden; transition: max-height 0.42s cubic-bezier(0.65, 0, 0.35, 1); }
        .mobile-accordion-inner { padding: 2px 2px 20px; display: flex; flex-direction: column; gap: 18px; }
        .mobile-eyebrow { font-size: 12.5px; color: rgba(30, 30, 30, 0.55); margin: 0; }
        .mobile-group-h { font-size: 12.5px; font-weight: 650; letter-spacing: 0.02em; text-transform: uppercase; color: rgba(30, 30, 30, 0.45); margin-bottom: 8px; }
        .mobile-group-sub { font-size: 13.5px; color: rgba(30, 30, 30, 0.62); margin: -4px 0 10px; }
        .mobile-link { display: flex; align-items: center; gap: 10px; padding: 9px 0; font-size: 14.5px; color: rgba(30, 30, 30, 0.82); text-decoration: none; }
        
        /* Sticky Mobile CTAs */
        .mobile-cta { margin-top: auto; padding-top: 20px; border-top: 1px solid rgba(30, 30, 30, 0.08); display: flex; flex-direction: column; gap: 12px; }
        .mobile-signin, .mobile-get-started { width: 100%; justify-content: center; text-align: center; }

        /* Media Queries */
        @media (max-width: 900px) {
          .navlinks, .navcta { display: none !important; }
          .hamburger { display: inline-flex !important; }
        }
        @media (min-width: 901px) {
          .mobile-scrim, .mobile-panel { display: none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hamburger-line, .mobile-scrim, .mobile-panel, .mobile-accordion-panel, .mobile-accordion-trigger .chev { transition-duration: 0.01ms !important; }
          .mobile-panel.is-open .mobile-accordion-trigger, .mobile-panel.is-open .mobile-plain-link { animation: none; opacity: 1; transform: none; }
        }
      `}</style>

      <div className="wrap nav">
        <a href="#" className="logo">
          <svg className="mark" style={{ width: 18, height: 18, marginRight: 8, verticalAlign: "middle" }}>
            <use href="#emblem" />
          </svg>
          Sandwich
        </a>

        <nav className="navlinks">
          {/* Products Dropdown */}
          <div className="navitem">
            <a href="#" tabIndex={0}>
              Products{" "}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: 4, verticalAlign: "middle" }}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
            <div className="mega mega-products">
              <div className="mega-eyebrow">15+ modules, one real-time ledger — all live in production</div>
              <div className="mega-cols">
                <div>
                  <div className="mega-col-h">Operations</div>
                  <a href="#" className="mega-link"><span className="dot"></span>Procurement &amp; Purchase Orders</a>
                  <a href="#" className="mega-link"><span className="dot"></span>Inventory &amp; Stock Control</a>
                  <a href="#" className="mega-link"><span className="dot"></span>Supplier Management</a>
                  <a href="#" className="mega-link"><span className="dot"></span>Recipe Management &amp; AI Yield Calc</a>
                  <a href="#" className="mega-link"><span className="dot"></span>Kitchen, Central Production &amp; KDS</a>
                  <a href="#" className="mega-link"><span className="dot"></span>Inter-Branch Transfers &amp; Logistics</a>
                </div>
                <div>
                  <div className="mega-col-h">Money &amp; Growth</div>
                  <a href="#" className="mega-link"><span className="dot"></span>Accounting &amp; Finance</a>
                  <a href="#" className="mega-link"><span className="dot"></span>Budgets &amp; Cost Analytics</a>
                  <a href="#" className="mega-link"><span className="dot"></span>AI Forecasting &amp; Predictive Ordering</a>
                  <a href="#" className="mega-link"><span className="dot"></span>Payments &amp; Wallets</a>
                  <a href="#" className="mega-link"><span className="dot"></span>Reports &amp; Business Intelligence</a>
                </div>
                <div>
                  <div className="mega-col-h">Front of House &amp; People</div>
                  <a href="#" className="mega-link"><span className="dot"></span>POS &amp; Table Management</a>
                  <a href="#" className="mega-link"><span className="dot"></span>Online Ordering &amp; Aggregators</a>
                  <a href="#" className="mega-link"><span className="dot"></span>CRM, Loyalty &amp; Gift Cards</a>
                  <a href="#" className="mega-link"><span className="dot"></span>Team Chat, RBAC &amp; Custom Roles</a>
                  <a href="#" className="mega-link"><span className="dot"></span>Branches &amp; Multi-Location</a>
                </div>
              </div>
              <div className="mega-foot">
                <span style={{ fontSize: "12.5px", color: "rgba(30,30,30,0.6)" }}>
                  One connected system — every module shares real-time data.
                </span>
                <a href="#" className="cta-link" style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                  See all modules →
                </a>
              </div>
            </div>
          </div>

          {/* Solutions Dropdown */}
          <div className="navitem">
            <a href="#" tabIndex={0}>
              Solutions{" "}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: 4, verticalAlign: "middle" }}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
            <div className="mega mega-solutions">
              <div className="mega-eyebrow">One platform, two experiences</div>
              <div className="mega-split">
                <div className="mega-split-col">
                  <div className="mega-split-h">
                    <span className="chip-ico" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="7" y="2" width="10" height="20" rx="2" />
                        <path d="M11 18h2" />
                      </svg>
                    </span>
                    Mobile App
                  </div>
                  <p className="mega-split-sub">Offline-first, for every staff role on the floor — every shift.</p>
                  <div className="mega-split-tags">
                    <span className="mega-tag">Procurement</span>
                    <span className="mega-tag">Inventory</span>
                    <span className="mega-tag">Kitchen &amp; Processing</span>
                    <span className="mega-tag">Customer Service</span>
                    <span className="mega-tag">Custom Roles</span>
                  </div>
                </div>
                <div className="mega-split-col">
                  <div className="mega-split-h">
                    <span className="chip-ico dark" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="13" rx="2" />
                        <path d="M8 21h8M12 17v4" />
                      </svg>
                    </span>
                    Web Dashboard
                  </div>
                  <p className="mega-split-sub">Full-screen oversight, from any browser, any device.</p>
                  <div className="mega-split-tags">
                    <span className="mega-tag">Super Admin</span>
                    <span className="mega-tag">Branch Manager</span>
                    <span className="mega-tag">Finance Officer</span>
                    <span className="mega-tag">HR</span>
                  </div>
                </div>
              </div>
              <div className="mega-foot">
                <span style={{ fontSize: "12.5px", color: "rgba(30,30,30,0.6)" }}>
                  Same ledger, right-sized for how each role actually works.
                </span>
                <a href="#access" className="cta-link">See how it splits →</a>
              </div>
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="navitem">
            <a href="#" tabIndex={0}>
              Resources{" "}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: 4, verticalAlign: "middle" }}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
            <div className="mega mega-resources">
              <div className="mega-eyebrow">Learn Sandwich, your way</div>
              <div className="mega-grid cols-3">
                <div className="mega-row" style={{ flexDirection: "column" }}>
                  <div className="mega-icon" style={{ display: "inline-flex", width: 20, height: 20 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M10 9l5 3-5 3z" />
                    </svg>
                  </div>
                  <p className="mega-title" style={{ marginTop: "12px" }}>Video Tutorials</p>
                  <p className="mega-desc">Walkthroughs of every module.</p>
                </div>
                <div className="mega-row" style={{ flexDirection: "column" }}>
                  <div className="mega-icon" style={{ display: "inline-flex", width: 20, height: 20 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 3h9l5 5v13a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" />
                      <path d="M9 13h6M9 17h6" />
                    </svg>
                  </div>
                  <p className="mega-title" style={{ marginTop: "12px" }}>Setup Guides</p>
                  <p className="mega-desc">Onboard your team in a day.</p>
                </div>
                <div className="mega-row" style={{ flexDirection: "column" }}>
                  <div className="mega-icon" style={{ display: "inline-flex", width: 20, height: 20 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M9.5 9a2.5 2.5 0 015 .5c0 1.7-2.3 1.8-2.5 3.5M12 17h.01" />
                    </svg>
                  </div>
                  <p className="mega-title" style={{ marginTop: "12px" }}>Help Center</p>
                  <p className="mega-desc">Setup, billing &amp; integrations.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="navitem"><a href="#pricing">Pricing</a></div>
          <div className="navitem"><a href="#">Company</a></div>
        </nav>

        <div className="navcta">
          <a href="#" className="signin">Sign in</a>
          <a href="#" className="btn btn-accent" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            Get Started{" "}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger toggle */}
        <button
          ref={toggleRef}
          type="button"
          className={`hamburger${menuOpen ? " is-open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="hamburger-box">
            <span className="hamburger-line line-top"></span>
            <span className="hamburger-line line-mid"></span>
            <span className="hamburger-line line-bottom"></span>
          </span>
        </button>
      </div>

      {/* Mobile drawer + scrim */}
      <div
        className={`mobile-scrim${menuOpen ? " is-visible" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <div
        id="mobile-menu"
        ref={panelRef}
        className={`mobile-panel${menuOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div className="mobile-panel-scroll">
          <div className="mobile-links">
            {NAV_DATA.map((section, i) => (
              <div className="mobile-accordion" key={section.key}>
                <button
                  type="button"
                  className={`mobile-accordion-trigger${openAccordion === section.key ? " is-open" : ""}`}
                  onClick={() => toggleAccordion(section.key)}
                  aria-expanded={openAccordion === section.key}
                  aria-controls={`panel-${section.key}`}
                  style={{ "--stagger": i }}
                >
                  {section.label}
                  <svg className="chev" width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <div
                  id={`panel-${section.key}`}
                  className="mobile-accordion-panel"
                  style={{
                    maxHeight: openAccordion === section.key ? "1200px" : "0px",
                  }}
                >
                  <div className="mobile-accordion-inner">
                    <p className="mobile-eyebrow">{section.eyebrow}</p>
                    {section.groups.map((group) => (
                      <div className="mobile-group" key={group.heading}>
                        <div className="mobile-group-h">{group.heading}</div>
                        {group.sub && <p className="mobile-group-sub">{group.sub}</p>}
                        {group.links.map((link) => (
                          <a href="#" className="mobile-link" key={link}>
                            <span className="dot"></span>{link}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <a
              href="#pricing"
              className="mobile-plain-link"
              style={{ "--stagger": NAV_DATA.length }}
            >
              Pricing
            </a>
            <a
              href="#"
              className="mobile-plain-link"
              style={{ "--stagger": NAV_DATA.length + 1 }}
            >
              Company
            </a>
          </div>

          <div className="mobile-cta">
            <a href="#" className="signin mobile-signin">Sign in</a>
            <a href="#" className="btn btn-accent mobile-get-started" style={{ display: "inline-flex", alignItems: "center", gap: 6, justifyContent: "center" }}>
              Get Started{" "}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;











