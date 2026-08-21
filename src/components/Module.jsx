// // src/components/Module.jsx

// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { MODULES, CATS } from "../data/modules";

// /* ---------------------------------------------------------------------
//    Small shared icon set
// --------------------------------------------------------------------- */
// const ICON_PATHS = {
//     box: '<path d="M3 9l9-6 9 6v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path d="M9 21V12h6v9"/>',
//     truck: '<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17.5" cy="18" r="1.6"/>',
//     users: '<circle cx="9" cy="7" r="3.2"/><path d="M2 21c0-4 3-6.5 7-6.5S16 17 16 21"/><path d="M17 8.5c1.6.3 2.8 1.5 2.8 3.2M22 21c0-2.8-1.7-4.8-4-5.6"/>',
//     chef: '<path d="M6 3v7a3 3 0 006 0V3M9 10v11M18 3c-2 2-2 5 0 7v8"/>',
//     transfer: '<path d="M7 7h11M14 3l4 4-4 4M17 17H6M10 21l-4-4 4-4"/>',
//     coin: '<circle cx="12" cy="12" r="9"/><path d="M9 12h6M12 9v3M12 15v0"/>',
//     chart: '<path d="M4 4v16h16M8 15v3M12 10v8M16 6v12"/>',
//     forecast: '<path d="M4 19h16M7 15l3-4 3 2 4-6"/><circle cx="17" cy="7" r="1.4"/>',
//     wallet: '<path d="M3 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/><path d="M16 12h3"/>',
//     reports: '<path d="M4 4h16v4H4zM4 12h10v8H4zM17 12h3v8h-3z"/>',
//     pos: '<rect x="4" y="3" width="16" height="12" rx="2"/><path d="M8 21h8M12 15v6"/>',
//     globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18"/>',
//     gift: '<rect x="3" y="8" width="18" height="13" rx="1"/><path d="M12 8v13M3 8h18M12 8c-1.2-2.6-3-4-4.5-4C5.8 4 5 5 5 6.2 5 7.6 6.5 8 12 8zM12 8c1.2-2.6 3-4 4.5-4C18.2 4 19 5 19 6.2 19 7.6 17.5 8 12 8z"/>',
//     chat: '<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>',
//     map: '<path d="M9 20l-6-2V4l6 2 6-2 6 2v14l-6-2-6 2z"/><path d="M9 6v14M15 4v14"/>',
//     check: '<path d="M3 8l3.5 3.5L13 5"/>',
//     arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
// };

// function Icon({ name, size = 20 }) {
//     return (
//         <svg
//             width={size}
//             height={size}
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="1.7"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             dangerouslySetInnerHTML={{ __html: ICON_PATHS[name] || "" }}
//         />
//     );
// }

// /* ---------------------------------------------------------------------
//    Per-module image routing
//    Real files live at /public/images/modules/<slug>/<field>.png, e.g.:
//      images/modules/procurement/overview.png
//      images/modules/procurement/workflow.png
//      images/modules/accounting/overview.png
//    `field` is one of the keys under a module's `images` object in
//    modules.js: overview, workflow, purchaseOrder, goodsReceived,
//    budgetControl, analytics, supplierPerformance, experiences, dataFlow.
// --------------------------------------------------------------------- */
// const buildImgSrc = (slug, field) => `/images/modules/${slug}/${field}.png`;

// // Renders the image for a given module/field pair. If modules.js has no
// // entry for that field, or the file 404s (module has no image yet),
// // it renders nothing instead of a broken-image icon.
// function ModuleImage({ slug, field, alt, wrapperClassName = "mod-image-card", wrapperStyle, imgClassName = "mod-img-preview" }) {
//     // null src = not confirmed yet; checked = we've finished testing
//     const [src, setSrc] = useState(null);
//     const [checked, setChecked] = useState(false);
//     const meta = MODULES[slug]?.images?.[field];

//     useEffect(() => {
//         setSrc(null);
//         setChecked(false);

//         if (!meta) {
//             setChecked(true);
//             return;
//         }

//         const candidate = buildImgSrc(slug, field);
//         const probe = new Image();
//         probe.onload = () => { setSrc(candidate); setChecked(true); };
//         probe.onerror = () => { setSrc(null); setChecked(true); };
//         probe.src = candidate;
//     }, [slug, field, meta]);

//     // Nothing to show yet, or confirmed missing — render nothing at all,
//     // including the wrapper card, so no empty space is left behind.
//     if (!checked || !src) return null;

//     return (
//         <div className={wrapperClassName} style={wrapperStyle}>
//             <img src={src} alt={meta.alt || alt} className={imgClassName} />
//         </div>
//     );
// }

// const Module = () => {
//     const { slug } = useParams();
//     const [openFaq, setOpenFaq] = useState(null);

//     useEffect(() => {
//         setOpenFaq(null);
//         window.scrollTo({ top: 0, behavior: "instant" });
//     }, [slug]);

//     const m = MODULES[slug] || MODULES.procurement;

//     return (
//         <main className="module-page">
//             <style>{`
//         .module-page { background: #FBF3E3; padding-bottom: 40px; }
//         .mod-section { padding: 56px 0; }
//         .mod-breadcrumb { font-size: 13.5px; color: rgba(30,30,30,0.55); display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
//         .mod-breadcrumb a { color: inherit; text-decoration: none; }
//         .mod-breadcrumb .current { color: rgba(20,18,16,0.9); font-weight: 600; }
//         .mod-breadcrumb .sep { opacity: 0.5; }

//         .mod-icon-box { width: 44px; height: 44px; border-radius: 12px; background: #FF0D01; color: #fff; display: inline-flex; align-items: center; justify-content: center; margin-right: 12px; }
//         .mod-badge { display: inline-block; font-size: 11.5px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; padding: 6px 12px; border-radius: 999px; background: #FEC60F; color: #391B13; }
//         .mod-top-row { display: flex; align-items: center; gap: 12px; margin: 24px 0 20px; }

//         .mod-h1 { font-size: clamp(32px, 5vw, 46px); font-weight: 800; color: #1E1B16; margin: 0 0 16px; line-height: 1.1; }
//         .mod-lede { font-size: 16.5px; color: rgba(30,30,30,0.65); max-width: 620px; line-height: 1.6; margin-bottom: 28px; }

//         .mod-ctas { display: flex; gap: 12px; margin-bottom: 40px; flex-wrap: wrap; }
//         .mod-btn-outline { display: inline-flex; align-items: center; gap: 6px; padding: 12px 22px; border-radius: 999px; border: 1px solid rgba(30,30,30,0.18); background: #fff; color: #1E1B16; font-weight: 600; font-size: 14.5px; text-decoration: none; }

//         .mod-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
//         .mod-stat-card { background: rgba(255,255,255,0.5); border: 1px solid rgba(30,30,30,0.06); border-radius: 14px; padding: 20px; }
//         .mod-stat-value { font-size: 26px; font-weight: 800; color: #FF0D01; margin-bottom: 6px; }
//         .mod-stat-label { font-size: 13.5px; color: rgba(30,30,30,0.6); }

//         .mod-image-card { background: #fff; padding: 10px; border-radius: 20px; border: 1px solid rgba(30,30,30,0.06); box-shadow: 0 8px 24px rgba(30,30,30,0.04); overflow: hidden; margin-top: 32px; }
//         .mod-img-preview { width: 100%; height: auto; display: block; border-radius: 12px; border: 1px solid rgba(30,30,30,0.06); object-fit: cover; }

//         .mod-eyebrow { font-size: 12.5px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: #FF0D01; display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
//         .mod-eyebrow::before { content: ""; width: 18px; height: 1px; background: #FF0D01; display: inline-block; }
//         .mod-h2 { font-size: clamp(26px, 4vw, 36px); font-weight: 800; color: #1E1B16; margin: 0 0 14px; }
//         .mod-section-lede { font-size: 15.5px; color: rgba(30,30,30,0.62); max-width: 640px; line-height: 1.6; margin-bottom: 36px; }

//         .mod-feature-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 16px; }
//         .mod-feature-card { background: linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2)); border: 1px solid rgba(30,30,30,0.06); border-radius: 16px; padding: 22px; }
//         .mod-feature-icon { color: #1E1B16; margin-bottom: 28px; }
//         .mod-feature-title { font-size: 15px; font-weight: 700; color: #1E1B16; margin: 0 0 8px; }
//         .mod-feature-desc { font-size: 13.5px; color: rgba(30,30,30,0.6); line-height: 1.5; margin: 0; }

//         .mod-wide-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; border: 1px solid rgba(30,30,30,0.08); border-radius: 14px; overflow: hidden; background: #fff; margin-top: 24px; }
//         .mod-wide-card { padding: 22px 26px; }
//         .mod-wide-title { font-size: 14.5px; font-weight: 700; color: #1E1B16; margin: 0 0 6px; }
//         .mod-wide-desc { font-size: 13.5px; color: rgba(30,30,30,0.6); margin: 0; }

//         .mod-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
//         .mod-step { border-top: 1px solid rgba(30,30,30,0.15); padding-top: 18px; }
//         .mod-step-n { font-size: 13px; font-weight: 800; color: #FF0D01; margin-bottom: 12px; }
//         .mod-step-title { font-size: 16px; font-weight: 700; color: #1E1B16; margin: 0 0 8px; }
//         .mod-step-desc { font-size: 13.5px; color: rgba(30,30,30,0.6); line-height: 1.5; margin: 0; }

//         .mod-centered { text-align: center; }
//         .mod-centered .mod-section-lede { margin-left: auto; margin-right: auto; }
//         .mod-centered .mod-eyebrow { justify-content: center; }
//         .mod-centered .mod-eyebrow::before { display: none; }

//         .mod-split { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 36px; }
//         .mod-split-card { background: #fff; border-radius: 18px; padding: 28px; text-align: left; }
//         .mod-tag { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 0.04em; padding: 6px 12px; border-radius: 999px; margin-bottom: 16px; }
//         .mod-tag.yellow { background: #FEC60F; color: #391B13; }
//         .mod-tag.dark { background: #1E1B16; color: #fff; }
//         .mod-split-h { font-size: 22px; font-weight: 800; color: #1E1B16; margin: 0 0 10px; }
//         .mod-split-desc { font-size: 14px; color: rgba(30,30,30,0.62); line-height: 1.5; margin-bottom: 18px; }
//         .mod-bullets { list-style: none; padding: 0; margin: 0; }
//         .mod-bullets li { display: flex; gap: 10px; font-size: 13.5px; color: rgba(30,30,30,0.75); padding: 8px 0; }
//         .mod-bullets .bdot { width: 6px; height: 6px; border-radius: 50%; background: #FF0D01; margin-top: 6px; flex-shrink: 0; }

//         .mod-faq-item { background: #fff; border-radius: 16px; padding: 4px 24px; box-shadow: 0 2px 8px rgba(30,30,30,0.04); border: 1px solid rgba(30,30,30,0.04); text-align: left; cursor: pointer; }
//         .mod-faq-q { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 20px 0; font-size: 15px; font-weight: 700; color: #1E1B16; }
//         .mod-faq-q svg { flex-shrink: 0; transition: transform .2s ease; }
//         .mod-faq-item.open .mod-faq-q svg { transform: rotate(45deg); }
//         .mod-faq-a { max-height: 0; overflow: hidden; transition: max-height .25s ease; }
//         .mod-faq-item.open .mod-faq-a { max-height: 200px; }
//         .mod-faq-a p { margin: 0; padding: 0 0 20px; font-size: 13.5px; color: rgba(30,30,30,0.62); line-height: 1.6; }

//         .mod-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 36px; text-align: left; }
//         .mod-related-card { background: linear-gradient(180deg, #FFFFFF 0%, #FFFDF5 100%); border: 1px solid rgba(255,255,255,0.8); border-radius: 20px; padding: 28px 24px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 8px 24px rgba(60,50,30,0.04); transition: transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s cubic-bezier(.16,1,.3,1), border-color .3s ease; cursor: pointer; text-decoration: none; }
//         .mod-related-card:hover { transform: translateY(-8px); box-shadow: 0 16px 36px rgba(60,50,30,0.12); border-color: rgba(255,13,1,0.2); }
//         .mod-related-cat { font-size: 11.5px; font-weight: 700; letter-spacing: 0.05em; color: #FF0D01; margin-bottom: 10px; }
//         .mod-related-title { font-size: 17.5px; font-weight: 800; color: #1E1B16; margin: 0 0 10px; line-height: 1.3; }
//         .mod-related-desc { font-size: 13.5px; color: rgba(30,30,30,0.62); line-height: 1.5; margin: 0 0 24px; }
//         .mod-related-link { font-size: 13.5px; font-weight: 700; color: #FF0D01; display: inline-flex; align-items: center; gap: 6px; }
//         .mod-related-arrow { transition: transform .2s ease; }
//         .mod-related-card:hover .mod-related-arrow { transform: translateX(4px); }

//         @media (max-width: 900px) {
//           .mod-stats, .mod-feature-grid, .mod-steps, .mod-split, .mod-related-grid { grid-template-columns: 1fr 1fr; }
//           .mod-wide-grid { grid-template-columns: 1fr; }
//         }
//         @media (max-width: 600px) {
//           .mod-stats, .mod-feature-grid, .mod-steps, .mod-split, .mod-related-grid { grid-template-columns: 1fr; }
//         }
//       `}</style>

//             {/* Hero / breadcrumb */}
//             <section className="mod-section">
//                 <div className="wrap">
//                     <div className="mod-breadcrumb">
//                         <Link to="/">Sandwich</Link>
//                         <span className="sep">/</span>
//                         <Link to="/">Products</Link>
//                         <span className="sep">/</span>
//                         <span>{CATS[m.cat]}</span>
//                         <span className="sep">/</span>
//                         <span className="current">{m.title}</span>
//                     </div>

//                     <div className="mod-top-row">
//                         <span className="mod-icon-box">
//                             <Icon name={m.icon} />
//                         </span>
//                         <span className="mod-badge">{CATS[m.cat]}</span>
//                     </div>

//                     <h1 className="mod-h1">{m.title}</h1>
//                     <p className="mod-lede">{m.tagline}</p>

//                     <div className="mod-ctas">
//                         <a href="#" className="btn btn-accent">
//                             See it running live{" "}
//                             <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
//                                 <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </a>
//                         <a href="#" className="mod-btn-outline">Talk to us</a>
//                     </div>

//                     <div className="mod-stats">
//                         {m.stats.map(([value, label]) => (
//                             <div className="mod-stat-card" key={label}>
//                                 <div className="mod-stat-value">{value}</div>
//                                 <div className="mod-stat-label">{label}</div>
//                             </div>
//                         ))}
//                     </div>


//                 </div>
//             </section>


//             {/* What it does */}
//             <section className="mod-section">
//                 <div className="wrap">
//                     <div className="mod-eyebrow">Overview</div>
//                     <h2 className="mod-h2">What {m.title.split("&")[0].trim()} does</h2>
//                     <p className="mod-section-lede">{m.desc}</p>

//                     {/* HERO OVERVIEW IMAGE */}
//                     <ModuleImage slug={slug} field="overview" alt={`${m.title} Overview Dashboard`} />
//                     <br /> <br />
//                     <div className="mod-feature-grid">
//                         {m.features.map(([icon, title, desc]) => (
//                             <div className="mod-feature-card" key={title}>
//                                 <div className="mod-feature-icon"><Icon name={icon} /></div>
//                                 <h3 className="mod-feature-title">{title}</h3>
//                                 <p className="mod-feature-desc">{desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Step by step */}
//             <section className="mod-section">
//                 <div className="wrap">
//                     <div className="mod-eyebrow">How it works</div>
//                     <h2 className="mod-h2">Step by step</h2>

//                     <div className="mod-steps" style={{ marginTop: 32 }}>
//                         {m.steps.map(([title, desc], i) => (
//                             <div className="mod-step" key={title}>
//                                 <div className="mod-step-n">{String(i + 1).padStart(2, "0")}</div>
//                                 <h3 className="mod-step-title">{title}</h3>
//                                 <p className="mod-step-desc">{desc}</p>
//                             </div>
//                         ))}
//                     </div>

//                     {/* WORKFLOW IMAGE */}
//                     <ModuleImage slug={slug} field="workflow" alt={`${m.title} Workflow`} />
//                 </div>
//             </section>



//             {/* Purchase Orders */}
//             <section className="mod-section">
//                 <div className="wrap">
//                     <div className="mod-eyebrow">PURCHASE ORDERS</div>
//                     <h2 className="mod-h2">Buy with control, not guesswork</h2>

//                     <div className="mod-steps" style={{ marginTop: 32 }}>
//                         {m.purchase.map(([title, desc], i) => (
//                             <div className="mod-step" key={title}>
//                                 <div className="mod-step-n">{String(i + 1).padStart(2, "0")}</div>
//                                 <h3 className="mod-step-title">{title}</h3>
//                                 <p className="mod-step-desc">{desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>



//             {/* Goods Received */}
//             <section className="mod-section">
//                 <div className="wrap">
//                     <div className="mod-eyebrow">Goods Received</div>
//                     <h2 className="mod-h2">What you ordered isn't always what you receive.</h2>
//                     <p className="mod-section-lede">{m.descGoodsReceived}</p>

//                     {/* HERO OVERVIEW IMAGE */}
//                     <ModuleImage slug={slug} field="overview" alt={`${m.title} Overview Dashboard`} />
//                     <br /> <br />
//                     <div className="mod-feature-grid">
//                         {m.goods.map(([icon, title, desc]) => (
//                             <div className="mod-feature-card" key={title}>
//                                 <div className="mod-feature-icon"><Icon name={icon} /></div>
//                                 <h3 className="mod-feature-title">{title}</h3>
//                                 <p className="mod-feature-desc">{desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>


//             {/* Budget Control */}
//             <section className="mod-section">
//                 <div className="wrap">
//                     <div className="mod-eyebrow">Budget Control</div>
//                     <h2 className="mod-h2">Know the budget before the spend becomes a problem.</h2>
//                     <p className="mod-section-lede">{m.descBudgetControl}</p>

//                     {/* HERO OVERVIEW IMAGE */}
//                     <ModuleImage slug={slug} field="overview" alt={`${m.title} Overview Dashboard`} />
//                     <br /> <br />
//                     <div className="mod-feature-grid">
//                         {m.budget.map(([icon, title, desc]) => (
//                             <div className="mod-feature-card" key={title}>
//                                 <div className="mod-feature-icon"><Icon name={icon} /></div>
//                                 <h3 className="mod-feature-title">{title}</h3>
//                                 <p className="mod-feature-desc">{desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Procurement Intelligence*/}
//             <section className="mod-section">
//                 <div className="wrap">
//                     <div className="mod-eyebrow">Procurement Intelligence</div>
//                     <h2 className="mod-h2">See where the money is going.</h2>
//                     <p className="mod-section-lede">{m.descprocurementIntelligence}</p>


//                     {/* WORKFLOW IMAGE */}
//                     <ModuleImage slug={slug} field="workflow" alt={`${m.title} Workflow`} />

//                     <div className="mod-steps" style={{ marginTop: 32 }}>
//                         {m.intelligence.map(([title, desc], i) => (
//                             <div className="mod-step" key={title}>
//                                 <div className="mod-step-n">{String(i + 1).padStart(2, "0")}</div>
//                                 <h3 className="mod-step-title">{title}</h3>
//                                 <p className="mod-step-desc">{desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>


//             {/* Supplier Performance */}
//             <section className="mod-section">
//                 <div className="wrap">
//                     <div className="mod-eyebrow">Supplier Performance</div>
//                     <h2 className="mod-h2">Don't judge suppliers by price alone.</h2>
//                     <p className="mod-section-lede">{m.descSupplierPerformance}</p>

//                     {/* HERO OVERVIEW IMAGE */}
//                     <ModuleImage slug={slug} field="overview" alt={`${m.title} Overview Dashboard`} />
//                     <br /> <br />
//                     <div className="mod-feature-grid">
//                         {m.suppliers.map(([icon, title, desc]) => (
//                             <div className="mod-feature-card" key={title}>
//                                 <div className="mod-feature-icon"><Icon name={icon} /></div>
//                                 <h3 className="mod-feature-title">{title}</h3>
//                                 <p className="mod-feature-desc">{desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Who touches this */}
//             <section className="mod-section mod-centered">
//                 <div className="wrap">
//                     <div className="mod-eyebrow">One system, two experiences</div>
//                     <h2 className="mod-h2">Procurement wherever the work happens.</h2>
//                     <p className="mod-section-lede">
//                         The procurement workflow shouldn't stop at the dashboard. Give
//                         operational teams a way to capture activity where it happens, while
//                         managers get the broader visibility they need to control purchasing.
//                     </p>

//                     <div className="mod-split">
//                         <div className="mod-split-card">
//                             <span className="mod-tag yellow">MOBILE APP</span>
//                             <h3 className="mod-split-h">On the move</h3>
//                             <p className="mod-split-desc">
//                                 Keep procurement activity close to the operation.
//                             </p>
//                             <ul className="mod-bullets">
//                                 {m.accessMobile.map(([role, text]) => (
//                                     <li key={role}>
//                                         <span className="bdot" />
//                                         <span><strong>{role}</strong> — {text}</span>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         <div className="mod-split-card">
//                             <span className="mod-tag dark">WEB DASHBOARD</span>
//                             <h3 className="mod-split-h">Running the business</h3>
//                             <p className="mod-split-desc">
//                                 Full-screen analytics, approvals, and configuration from any browser.
//                             </p>
//                             <ul className="mod-bullets">
//                                 {m.accessWeb.map(([role, text]) => (
//                                     <li key={role}>
//                                         <span className="bdot" />
//                                         <span><strong>{role}</strong> — {text}</span>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Connected tools */}
//             <section className="mod-section mod-centered">
//                 <div className="wrap">
//                     <div className="mod-eyebrow">Connected</div>
//                     <h2 className="mod-h2">Procurement doesn't work in isolation.</h2>
//                     <p className="mod-section-lede" style={{ marginBottom: 32 }}>
//                         Every purchase creates information that can support the next
//                         decision.

//                         <br /> <br />

//                         A procurement request becomes a purchase order. A purchase order
//                         becomes a delivery. A delivery becomes a goods received record. That
//                         activity feeds your budget, spend, delivery, and
//                         supplier-performance visibility.
//                     </p>

//                     <div className="mod-feature-grid">
//                         {m.connected.map(([icon, title, desc]) => (
//                             <div className="mod-feature-card" key={title}>
//                                 <div className="mod-feature-icon"><Icon name={icon} /></div>
//                                 <h3 className="mod-feature-title">{title}</h3>
//                                 <p className="mod-feature-desc">{desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* FAQs */}
//             <section className="mod-section mod-centered">
//                 <div className="wrap">
//                     <div className="mod-eyebrow">Common questions</div>
//                     <h2 className="mod-h2">Before you talk to us</h2>

//                     <div style={{ maxWidth: 680, margin: "32px auto 0", display: "flex", flexDirection: "column", gap: 12 }}>
//                         {m.faqs.map(([question, answer], i) => {
//                             const isOpen = openFaq === i;
//                             return (
//                                 <div
//                                     key={question}
//                                     className={`mod-faq-item${isOpen ? " open" : ""}`}
//                                     onClick={() => setOpenFaq(isOpen ? null : i)}
//                                 >
//                                     <div className="mod-faq-q">
//                                         <span>{question}</span>
//                                         <Icon name="arrow" size={16} />
//                                     </div>
//                                     <div className="mod-faq-a">
//                                         <p>{answer}</p>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* Related modules */}
//             <section className="mod-section mod-centered">
//                 <div className="wrap">
//                     <div className="mod-eyebrow">Keep exploring</div>
//                     <h2 className="mod-h2">Related modules</h2>

//                     <div className="mod-related-grid">
//                         {m.related.map((relatedSlug) => {
//                             const rm = MODULES[relatedSlug];
//                             if (!rm) return null;
//                             return (
//                                 <Link key={relatedSlug} to={`/module/${relatedSlug}`} className="mod-related-card">
//                                     <div>
//                                         <div className="mod-related-cat">{CATS[rm.cat].toUpperCase()}</div>
//                                         <h3 className="mod-related-title">{rm.title}</h3>
//                                         <p className="mod-related-desc">{rm.tagline}</p>
//                                     </div>
//                                     <span className="mod-related-link">
//                                         Explore module
//                                         <Icon name="arrow" size={14} className="mod-related-arrow" />
//                                     </span>
//                                 </Link>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// };

// export default Module;
















// src/components/Module.jsx

import React, { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { MODULES, CATS } from "../data/modules";

/* ---------------------------------------------------------------------
   Small shared icon set
--------------------------------------------------------------------- */
const ICON_PATHS = {
    box: '<path d="M3 9l9-6 9 6v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path d="M9 21V12h6v9"/>',
    truck: '<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17.5" cy="18" r="1.6"/>',
    users: '<circle cx="9" cy="7" r="3.2"/><path d="M2 21c0-4 3-6.5 7-6.5S16 17 16 21"/><path d="M17 8.5c1.6.3 2.8 1.5 2.8 3.2M22 21c0-2.8-1.7-4.8-4-5.6"/>',
    chef: '<path d="M6 3v7a3 3 0 006 0V3M9 10v11M18 3c-2 2-2 5 0 7v8"/>',
    transfer: '<path d="M7 7h11M14 3l4 4-4 4M17 17H6M10 21l-4-4 4-4"/>',
    coin: '<circle cx="12" cy="12" r="9"/><path d="M9 12h6M12 9v3M12 15v0"/>',
    chart: '<path d="M4 4v16h16M8 15v3M12 10v8M16 6v12"/>',
    forecast: '<path d="M4 19h16M7 15l3-4 3 2 4-6"/><circle cx="17" cy="7" r="1.4"/>',
    wallet: '<path d="M3 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/><path d="M16 12h3"/>',
    reports: '<path d="M4 4h16v4H4zM4 12h10v8H4zM17 12h3v8h-3z"/>',
    pos: '<rect x="4" y="3" width="16" height="12" rx="2"/><path d="M8 21h8M12 15v6"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18"/>',
    gift: '<rect x="3" y="8" width="18" height="13" rx="1"/><path d="M12 8v13M3 8h18M12 8c-1.2-2.6-3-4-4.5-4C5.8 4 5 5 5 6.2 5 7.6 6.5 8 12 8zM12 8c1.2-2.6 3-4 4.5-4C18.2 4 19 5 19 6.2 19 7.6 17.5 8 12 8z"/>',
    chat: '<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>',
    map: '<path d="M9 20l-6-2V4l6 2 6-2 6 2v14l-6-2-6 2z"/><path d="M9 6v14M15 4v14"/>',
    check: '<path d="M3 8l3.5 3.5L13 5"/>',
    arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
};

function Icon({ name, size = 20 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            dangerouslySetInnerHTML={{ __html: ICON_PATHS[name] || "" }}
        />
    );
}

/* ---------------------------------------------------------------------
   Per-module image routing
   Real files live at /public/images/modules/<slug>/<field>.png, e.g.:
     images/modules/procurement/overview.png
     images/modules/procurement/workflow.png
     images/modules/accounting/overview.png
   `field` is one of the keys under a module's `images` object in
   modules.js: overview, workflow, purchaseOrder, goodsReceived,
   budgetControl, analytics, supplierPerformance, experiences, dataFlow.
--------------------------------------------------------------------- */
const buildImgSrc = (slug, field) => `/images/modules/${slug}/${field}.png`;

// Renders the image for a given module/field pair. If modules.js has no
// entry for that field, or the file 404s (module has no image yet),
// it renders nothing instead of a broken-image icon.
function ModuleImage({ slug, field, alt, wrapperClassName = "mod-image-card", wrapperStyle, imgClassName = "mod-img-preview" }) {
    // null src = not confirmed yet; checked = we've finished testing
    const [src, setSrc] = useState(null);
    const [checked, setChecked] = useState(false);
    const meta = MODULES[slug]?.images?.[field];

    useEffect(() => {
        let cancelled = false;
        setSrc(null);
        setChecked(false);

        if (!meta) {
            setChecked(true);
            return;
        }

        const candidate = buildImgSrc(slug, field);
        const probe = new Image();
        probe.onload = () => {
            if (!cancelled) { setSrc(candidate); setChecked(true); }
        };
        probe.onerror = () => {
            if (!cancelled) { setSrc(null); setChecked(true); }
        };
        probe.src = candidate;

        // Guard against a slow probe resolving after the slug/field has
        // already changed (fast module switching) and stomping state.
        return () => { cancelled = true; };
    }, [slug, field, meta]);

    // Nothing to show yet, or confirmed missing — render nothing at all,
    // including the wrapper card, so no empty space is left behind.
    if (!checked || !src) return null;

    return (
        <div className={wrapperClassName} style={wrapperStyle}>
            <img src={src} alt={meta.alt || alt} className={imgClassName} />
        </div>
    );
}

const Module = () => {
    const { slug } = useParams();
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        setOpenFaq(null);
        window.scrollTo(0, 0);
    }, [slug]);

    const m = MODULES[slug];

    // Unknown slug — don't silently fall back to another module's data,
    // send the visitor somewhere sane instead.
    if (!m) {
        return <Navigate to="/" replace />;
    }

    return (
        <main className="module-page">
            <style>{`
        .module-page { background: #FBF3E3; padding-bottom: 40px; }
        .mod-section { padding: 56px 0; }
        .mod-breadcrumb { font-size: 13.5px; color: rgba(30,30,30,0.55); display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
        .mod-breadcrumb a { color: inherit; text-decoration: none; }
        .mod-breadcrumb .current { color: rgba(20,18,16,0.9); font-weight: 600; }
        .mod-breadcrumb .sep { opacity: 0.5; }

        .mod-icon-box { width: 44px; height: 44px; border-radius: 12px; background: #FF0D01; color: #fff; display: inline-flex; align-items: center; justify-content: center; margin-right: 12px; }
        .mod-badge { display: inline-block; font-size: 11.5px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; padding: 6px 12px; border-radius: 999px; background: #FEC60F; color: #391B13; }
        .mod-top-row { display: flex; align-items: center; gap: 12px; margin: 24px 0 20px; }

        .mod-h1 { font-size: clamp(32px, 5vw, 46px); font-weight: 800; color: #1E1B16; margin: 0 0 16px; line-height: 1.1; }
        .mod-lede { font-size: 16.5px; color: rgba(30,30,30,0.65); max-width: 620px; line-height: 1.6; margin-bottom: 28px; }

        .mod-ctas { display: flex; gap: 12px; margin-bottom: 40px; flex-wrap: wrap; }
        .mod-btn-outline { display: inline-flex; align-items: center; gap: 6px; padding: 12px 22px; border-radius: 999px; border: 1px solid rgba(30,30,30,0.18); background: #fff; color: #1E1B16; font-weight: 600; font-size: 14.5px; text-decoration: none; }

        .mod-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .mod-stat-card { background: rgba(255,255,255,0.5); border: 1px solid rgba(30,30,30,0.06); border-radius: 14px; padding: 20px; }
        .mod-stat-value { font-size: 26px; font-weight: 800; color: #FF0D01; margin-bottom: 6px; }
        .mod-stat-label { font-size: 13.5px; color: rgba(30,30,30,0.6); }

        .mod-image-card { background: #fff; padding: 10px; border-radius: 20px; border: 1px solid rgba(30,30,30,0.06); box-shadow: 0 8px 24px rgba(30,30,30,0.04); overflow: hidden; margin-top: 32px; }
        .mod-img-preview { width: 100%; height: auto; display: block; border-radius: 12px; border: 1px solid rgba(30,30,30,0.06); object-fit: cover; }

        .mod-eyebrow { font-size: 12.5px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: #FF0D01; display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
        .mod-eyebrow::before { content: ""; width: 18px; height: 1px; background: #FF0D01; display: inline-block; }
        .mod-h2 { font-size: clamp(26px, 4vw, 36px); font-weight: 800; color: #1E1B16; margin: 0 0 14px; }
        .mod-section-lede { font-size: 15.5px; color: rgba(30,30,30,0.62); max-width: 640px; line-height: 1.6; margin-bottom: 36px; }

        .mod-feature-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 16px; }
        .mod-feature-card { background: linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2)); border: 1px solid rgba(30,30,30,0.06); border-radius: 16px; padding: 22px; }
        .mod-feature-icon { color: #1E1B16; margin-bottom: 28px; }
        .mod-feature-title { font-size: 15px; font-weight: 700; color: #1E1B16; margin: 0 0 8px; }
        .mod-feature-desc { font-size: 13.5px; color: rgba(30,30,30,0.6); line-height: 1.5; margin: 0; }

        .mod-wide-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; border: 1px solid rgba(30,30,30,0.08); border-radius: 14px; overflow: hidden; background: #fff; margin-top: 24px; }
        .mod-wide-card { padding: 22px 26px; }
        .mod-wide-title { font-size: 14.5px; font-weight: 700; color: #1E1B16; margin: 0 0 6px; }
        .mod-wide-desc { font-size: 13.5px; color: rgba(30,30,30,0.6); margin: 0; }

        .mod-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .mod-step { border-top: 1px solid rgba(30,30,30,0.15); padding-top: 18px; }
        .mod-step-n { font-size: 13px; font-weight: 800; color: #FF0D01; margin-bottom: 12px; }
        .mod-step-title { font-size: 16px; font-weight: 700; color: #1E1B16; margin: 0 0 8px; }
        .mod-step-desc { font-size: 13.5px; color: rgba(30,30,30,0.6); line-height: 1.5; margin: 0; }

        .mod-centered { text-align: center; }
        .mod-centered .mod-section-lede { margin-left: auto; margin-right: auto; }
        .mod-centered .mod-eyebrow { justify-content: center; }
        .mod-centered .mod-eyebrow::before { display: none; }

        .mod-split { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 36px; }
        .mod-split-card { background: #fff; border-radius: 18px; padding: 28px; text-align: left; }
        .mod-tag { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 0.04em; padding: 6px 12px; border-radius: 999px; margin-bottom: 16px; }
        .mod-tag.yellow { background: #FEC60F; color: #391B13; }
        .mod-tag.dark { background: #1E1B16; color: #fff; }
        .mod-split-h { font-size: 22px; font-weight: 800; color: #1E1B16; margin: 0 0 10px; }
        .mod-split-desc { font-size: 14px; color: rgba(30,30,30,0.62); line-height: 1.5; margin-bottom: 18px; }
        .mod-bullets { list-style: none; padding: 0; margin: 0; }
        .mod-bullets li { display: flex; gap: 10px; font-size: 13.5px; color: rgba(30,30,30,0.75); padding: 8px 0; }
        .mod-bullets .bdot { width: 6px; height: 6px; border-radius: 50%; background: #FF0D01; margin-top: 6px; flex-shrink: 0; }

        .mod-faq-item { background: #fff; border-radius: 16px; padding: 4px 24px; box-shadow: 0 2px 8px rgba(30,30,30,0.04); border: 1px solid rgba(30,30,30,0.04); text-align: left; cursor: pointer; }
        .mod-faq-q { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 20px 0; font-size: 15px; font-weight: 700; color: #1E1B16; }
        .mod-faq-q svg { flex-shrink: 0; transition: transform .2s ease; }
        .mod-faq-item.open .mod-faq-q svg { transform: rotate(45deg); }
        .mod-faq-a { max-height: 0; overflow: hidden; transition: max-height .25s ease; }
        .mod-faq-item.open .mod-faq-a { max-height: 200px; }
        .mod-faq-a p { margin: 0; padding: 0 0 20px; font-size: 13.5px; color: rgba(30,30,30,0.62); line-height: 1.6; }

        .mod-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 36px; text-align: left; }
        .mod-related-card { background: linear-gradient(180deg, #FFFFFF 0%, #FFFDF5 100%); border: 1px solid rgba(255,255,255,0.8); border-radius: 20px; padding: 28px 24px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 8px 24px rgba(60,50,30,0.04); transition: transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s cubic-bezier(.16,1,.3,1), border-color .3s ease; cursor: pointer; text-decoration: none; }
        .mod-related-card:hover { transform: translateY(-8px); box-shadow: 0 16px 36px rgba(60,50,30,0.12); border-color: rgba(255,13,1,0.2); }
        .mod-related-cat { font-size: 11.5px; font-weight: 700; letter-spacing: 0.05em; color: #FF0D01; margin-bottom: 10px; }
        .mod-related-title { font-size: 17.5px; font-weight: 800; color: #1E1B16; margin: 0 0 10px; line-height: 1.3; }
        .mod-related-desc { font-size: 13.5px; color: rgba(30,30,30,0.62); line-height: 1.5; margin: 0 0 24px; }
        .mod-related-link { font-size: 13.5px; font-weight: 700; color: #FF0D01; display: inline-flex; align-items: center; gap: 6px; }
        .mod-related-arrow { transition: transform .2s ease; }
        .mod-related-card:hover .mod-related-arrow { transform: translateX(4px); }

        @media (max-width: 900px) {
          .mod-stats, .mod-feature-grid, .mod-steps, .mod-split, .mod-related-grid { grid-template-columns: 1fr 1fr; }
          .mod-wide-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .mod-stats, .mod-feature-grid, .mod-steps, .mod-split, .mod-related-grid { grid-template-columns: 1fr; }
        }
      `}</style>

            {/* Hero / breadcrumb */}
            <section className="mod-section">
                <div className="wrap">
                    <div className="mod-breadcrumb">
                        <Link to="/">Sandwich</Link>
                        <span className="sep">/</span>
                        <Link to="/">Products</Link>
                        <span className="sep">/</span>
                        <span>{CATS[m.cat]}</span>
                        <span className="sep">/</span>
                        <span className="current">{m.title}</span>
                    </div>

                    <div className="mod-top-row">
                        <span className="mod-icon-box">
                            <Icon name={m.icon} />
                        </span>
                        <span className="mod-badge">{CATS[m.cat]}</span>
                    </div>

                    <h1 className="mod-h1">{m.title}</h1>
                    <p className="mod-lede">{m.tagline}</p>

                    <div className="mod-ctas">
                        <a href="#" className="btn btn-accent">
                            See it running live{" "}
                            <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#" className="mod-btn-outline">Talk to us</a>
                    </div>

                    {m.stats && (
                        <div className="mod-stats">
                            {m.stats.map(([value, label]) => (
                                <div className="mod-stat-card" key={label}>
                                    <div className="mod-stat-value">{value}</div>
                                    <div className="mod-stat-label">{label}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* What it does */}
            <section className="mod-section">
                <div className="wrap">
                    <div className="mod-eyebrow">Overview</div>
                    <h2 className="mod-h2">What {m.title.split("&")[0].trim()} does</h2>
                    <p className="mod-section-lede">{m.desc}</p>

                    {/* HERO OVERVIEW IMAGE */}
                    <ModuleImage slug={slug} field="overview" alt={`${m.title} Overview Dashboard`} />
                    <br /> <br />

                    {m.features && (
                        <div className="mod-feature-grid">
                            {m.features.map(([icon, title, desc]) => (
                                <div className="mod-feature-card" key={title}>
                                    <div className="mod-feature-icon"><Icon name={icon} /></div>
                                    <h3 className="mod-feature-title">{title}</h3>
                                    <p className="mod-feature-desc">{desc}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Step by step */}
            {m.steps && (
                <section className="mod-section">
                    <div className="wrap">
                        <div className="mod-eyebrow">How it works</div>
                        <h2 className="mod-h2">Step by step</h2>

                        <div className="mod-steps" style={{ marginTop: 32 }}>
                            {m.steps.map(([title, desc], i) => (
                                <div className="mod-step" key={title}>
                                    <div className="mod-step-n">{String(i + 1).padStart(2, "0")}</div>
                                    <h3 className="mod-step-title">{title}</h3>
                                    <p className="mod-step-desc">{desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* WORKFLOW IMAGE */}
                        <ModuleImage slug={slug} field="workflow" alt={`${m.title} Workflow`} />
                    </div>
                </section>
            )}

            {/*
              Deep-dive subsections (Purchase Orders, Goods Received, Budget
              Control, Procurement Intelligence, Supplier Performance, etc).
              Only `procurement` currently defines `m.deepDives` in modules.js,
              so this whole block is skipped for every other module instead
              of crashing on undefined fields like `m.purchase`, `m.goods`,
              `m.budget`, `m.intelligence`, `m.suppliers` used to.
              To give another module its own deep dives later, just add a
              `deepDives` array to it in modules.js — no changes needed here.
            */}
            {m.deepDives && m.deepDives.map((dive) => (
                <section className="mod-section" key={dive.field}>
                    <div className="wrap">
                        <div className="mod-eyebrow">{dive.eyebrow}</div>
                        <h2 className="mod-h2">{dive.title}</h2>
                        <p className="mod-section-lede">{dive.desc}</p>

                        <ModuleImage slug={slug} field={dive.field} alt={`${m.title} ${dive.eyebrow}`} />
                        <br /> <br />

                        {dive.features && (
                            <div className="mod-feature-grid">
                                {dive.features.map(([title, desc]) => (
                                    <div className="mod-feature-card" key={title}>
                                        <h3 className="mod-feature-title">{title}</h3>
                                        <p className="mod-feature-desc">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            ))}

            {/* Who touches this */}
            {(m.accessMobile || m.accessWeb) && (
                <section className="mod-section mod-centered">
                    <div className="wrap">
                        <div className="mod-eyebrow">One system, two experiences</div>
                        <h2 className="mod-h2">{m.title.split("&")[0].trim()} wherever the work happens.</h2>
                        <p className="mod-section-lede">
                            The workflow shouldn't stop at the dashboard. Give
                            operational teams a way to capture activity where it happens, while
                            managers get the broader visibility they need to stay in control.
                        </p>

                        <div className="mod-split">
                            {m.accessMobile && (
                                <div className="mod-split-card">
                                    <span className="mod-tag yellow">MOBILE APP</span>
                                    <h3 className="mod-split-h">On the move</h3>
                                    <p className="mod-split-desc">
                                        Keep activity close to the operation.
                                    </p>
                                    <ul className="mod-bullets">
                                        {m.accessMobile.map(([role, text]) => (
                                            <li key={role}>
                                                <span className="bdot" />
                                                <span><strong>{role}</strong> — {text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {m.accessWeb && (
                                <div className="mod-split-card">
                                    <span className="mod-tag dark">WEB DASHBOARD</span>
                                    <h3 className="mod-split-h">Running the business</h3>
                                    <p className="mod-split-desc">
                                        Full-screen analytics, approvals, and configuration from any browser.
                                    </p>
                                    <ul className="mod-bullets">
                                        {m.accessWeb.map(([role, text]) => (
                                            <li key={role}>
                                                <span className="bdot" />
                                                <span><strong>{role}</strong> — {text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* Connected tools — only procurement defines m.connected today */}
            {m.connected && (
                <section className="mod-section mod-centered">
                    <div className="wrap">
                        <div className="mod-eyebrow">Connected</div>
                        <h2 className="mod-h2">{m.title.split("&")[0].trim()} doesn't work in isolation.</h2>
                        <p className="mod-section-lede" style={{ marginBottom: 32 }}>
                            Every action here creates information that can support the next
                            decision, feeding budgets, spend, and performance visibility elsewhere
                            in the platform.
                        </p>

                        <div className="mod-feature-grid">
                            {m.connected.map(([icon, title, desc]) => (
                                <div className="mod-feature-card" key={title}>
                                    <div className="mod-feature-icon"><Icon name={icon} /></div>
                                    <h3 className="mod-feature-title">{title}</h3>
                                    <p className="mod-feature-desc">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQs */}
            {m.faqs && (
                <section className="mod-section mod-centered">
                    <div className="wrap">
                        <div className="mod-eyebrow">Common questions</div>
                        <h2 className="mod-h2">Before you talk to us</h2>

                        <div style={{ maxWidth: 680, margin: "32px auto 0", display: "flex", flexDirection: "column", gap: 12 }}>
                            {m.faqs.map(([question, answer], i) => {
                                const isOpen = openFaq === i;
                                return (
                                    <div
                                        key={question}
                                        className={`mod-faq-item${isOpen ? " open" : ""}`}
                                        onClick={() => setOpenFaq(isOpen ? null : i)}
                                    >
                                        <div className="mod-faq-q">
                                            <span>{question}</span>
                                            <Icon name="arrow" size={16} />
                                        </div>
                                        <div className="mod-faq-a">
                                            <p>{answer}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* Related modules */}
            {m.related && (
                <section className="mod-section mod-centered">
                    <div className="wrap">
                        <div className="mod-eyebrow">Keep exploring</div>
                        <h2 className="mod-h2">Related modules</h2>

                        <div className="mod-related-grid">
                            {m.related.map((relatedSlug) => {
                                const rm = MODULES[relatedSlug];
                                if (!rm) return null;
                                return (
                                    <Link key={relatedSlug} to={`/module/${relatedSlug}`} className="mod-related-card">
                                        <div>
                                            <div className="mod-related-cat">{CATS[rm.cat].toUpperCase()}</div>
                                            <h3 className="mod-related-title">{rm.title}</h3>
                                            <p className="mod-related-desc">{rm.tagline}</p>
                                        </div>
                                        <span className="mod-related-link">
                                            Explore module
                                            <Icon name="arrow" size={14} className="mod-related-arrow" />
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
};

export default Module;