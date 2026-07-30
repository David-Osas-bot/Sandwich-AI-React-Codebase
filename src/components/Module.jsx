// import React from "react";

// const Icon = ({ path, size = 20 }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
//         {path}
//     </svg>
// );

// const STATS = [
//     { value: "3", label: "approval stages, fully configurable" },
//     { value: "100%", label: "POs auto-linked to GRNs on delivery" },
//     { value: "0", label: "orders placed without a budget check" },
// ];

// const FEATURES = [
//     {
//         title: "Draft & approve POs",
//         desc: "Multi-stage approval routing based on branch, category, or spend threshold.",
//         icon: <path d="M20 6L9 17l-5-5" />,
//     },
//     {
//         title: "Supplier catalogs & pricing",
//         desc: "Standing price lists per supplier, with historical price tracking built in.",
//         icon: <path d="M3 7h3l2 12h9l3-9H6" />,
//     },
//     {
//         title: "GRN matching",
//         desc: "Goods received are matched against the PO automatically, flagging shortfalls.",
//         icon: <path d="M3 9l9-6 9 6v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />,
//     },
//     {
//         title: "AI invoice OCR",
//         desc: "Scans supplier invoices and pre-fills the GRN for a human to confirm.",
//         icon: <><rect x="3" y="4" width="14" height="17" rx="2" /><path d="M8 9h5M8 13h5" /></>,
//     },
// ];

// const WIDE_CARDS = [
//     {
//         title: "AI Invoice OCR",
//         desc: "Auto-fills GRN fields from a photographed or emailed supplier invoice.",
//     },
//     {
//         title: "Price Variance Alerts",
//         desc: "Flags a line item priced outside its normal range before it's approved.",
//     },
// ];

// const STEPS = [
//     { n: "01", title: "Request", desc: "Any approved role raises a purchase request against a category or recipe." },
//     { n: "02", title: "Approve", desc: "Routes to the right approver based on branch and spend threshold." },
//     { n: "03", title: "Send to supplier", desc: "Approved POs go out with your standing pricing attached." },
//     { n: "04", title: "Receive & match", desc: "GRN is checked against the PO; discrepancies are flagged, not hidden." },
// ];

// const SPLIT = [
//     {
//         tag: "MOBILE APP",
//         tagVariant: "yellow",
//         heading: "On the floor",
//         desc: "Offline-first — actions queue on the device and sync automatically the moment connectivity returns.",
//         bullets: [
//             { role: "Procurement staff", text: "raise purchase requests, scan GRNs on delivery" },
//             { role: "Branch teams", text: "flag damaged or short deliveries with photo proof" },
//             { role: "Any custom role", text: "request stock without needing dashboard access" },
//         ],
//     },
//     {
//         tag: "WEB DASHBOARD",
//         tagVariant: "dark",
//         heading: "Running the business",
//         desc: "Full-screen analytics, approvals, and configuration from any browser.",
//         bullets: [
//             { role: "Branch Manager", text: "approves requests within their threshold" },
//             { role: "Super Admin", text: "sets approval rules and views spend by supplier" },
//             { role: "Finance Officer", text: "reconciles POs against budget in real time" },
//         ],
//     },
// ];

// const Module = () => {
//     return (
//         <main className="module-page">
//             <style>{`
//         .module-page { background: #FBF3E3; padding-bottom: 40px; }
//         .mod-section { padding: 56px 0; }
//         .mod-breadcrumb { font-size: 13.5px; color: rgba(30,30,30,0.55); display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
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

//         .mod-eyebrow { font-size: 12.5px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: #FF0D01; display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
//         .mod-eyebrow::before { content: ""; width: 18px; height: 1px; background: #FF0D01; display: inline-block; }
//         .mod-h2 { font-size: clamp(26px, 4vw, 36px); font-weight: 800; color: #1E1B16; margin: 0 0 14px; }
//         .mod-section-lede { font-size: 15.5px; color: rgba(30,30,30,0.62); max-width: 640px; line-height: 1.6; margin-bottom: 36px; }

//         .mod-feature-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 16px; }
//         .mod-feature-card { background: linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2)); border: 1px solid rgba(30,30,30,0.06); border-radius: 16px; padding: 22px; }
//         .mod-feature-icon { color: #1E1B16; margin-bottom: 28px; }
//         .mod-feature-title { font-size: 15px; font-weight: 700; color: #1E1B16; margin: 0 0 8px; }
//         .mod-feature-desc { font-size: 13.5px; color: rgba(30,30,30,0.6); line-height: 1.5; margin: 0; }

//         .mod-wide-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; border: 1px solid rgba(30,30,30,0.08); border-radius: 14px; overflow: hidden; background: #fff; }
//         .mod-wide-card { padding: 22px 26px; }
//         .mod-wide-card:first-child { border-right: 1px solid rgba(30,30,30,0.08); }
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
//         .mod-split-card { background: #fff; border-radius: 18px; padding: 28px; }
//         .mod-tag { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 0.04em; padding: 6px 12px; border-radius: 999px; margin-bottom: 16px; }
//         .mod-tag.yellow { background: #FEC60F; color: #391B13; }
//         .mod-tag.dark { background: #1E1B16; color: #fff; }
//         .mod-split-h { font-size: 22px; font-weight: 800; color: #1E1B16; margin: 0 0 10px; }
//         .mod-split-desc { font-size: 14px; color: rgba(30,30,30,0.62); line-height: 1.5; margin-bottom: 18px; }
//         .mod-bullets { list-style: none; padding: 0; margin: 0; }
//         .mod-bullets li { display: flex; gap: 10px; font-size: 13.5px; color: rgba(30,30,30,0.75); padding: 8px 0; }
//         .mod-bullets .bdot { width: 6px; height: 6px; border-radius: 50%; background: #FF0D01; margin-top: 6px; flex-shrink: 0; }

//         @media (max-width: 900px) {
//           .mod-stats, .mod-feature-grid, .mod-steps, .mod-split { grid-template-columns: 1fr 1fr; }
//           .mod-wide-grid { grid-template-columns: 1fr; }
//           .mod-wide-card:first-child { border-right: none; border-bottom: 1px solid rgba(30,30,30,0.08); }
//         }
//         @media (max-width: 600px) {
//           .mod-stats, .mod-feature-grid, .mod-steps, .mod-split { grid-template-columns: 1fr; }
//         }
//       `}</style>

//             {/* Hero / breadcrumb */}
//             <section className="mod-section">
//                 <div className="wrap">
//                     <div className="mod-breadcrumb">
//                         <span>Sandwich</span>
//                         <span className="sep">/</span>
//                         <span>Products</span>
//                         <span className="sep">/</span>
//                         <span>Operations</span>
//                         <span className="sep">/</span>
//                         <span className="current">Procurement & Purchase Orders</span>
//                     </div>

//                     <div className="mod-top-row">
//                         <span className="mod-icon-box">
//                             <Icon path={<path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1V9.5z" />} />
//                         </span>
//                         <span className="mod-badge">Operations</span>
//                     </div>

//                     <h1 className="mod-h1">Procurement & Purchase Orders</h1>
//                     <p className="mod-lede">
//                         Every order routes through approval and lands as a matched GRN — nothing
//                         gets bought on a hunch.
//                     </p>

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
//                         {STATS.map((s) => (
//                             <div className="mod-stat-card" key={s.label}>
//                                 <div className="mod-stat-value">{s.value}</div>
//                                 <div className="mod-stat-label">{s.label}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* What it does */}
//             <section className="mod-section">
//                 <div className="wrap">
//                     <div className="mod-eyebrow">Overview</div>
//                     <h2 className="mod-h2">What Procurement does</h2>
//                     <p className="mod-section-lede">
//                         Procurement is where discipline starts. Staff raise purchase requests
//                         against live stock levels, managers approve against budget, and every
//                         delivery is matched line-by-line before it touches the ledger.
//                     </p>

//                     <div className="mod-feature-grid">
//                         {FEATURES.map((f) => (
//                             <div className="mod-feature-card" key={f.title}>
//                                 <div className="mod-feature-icon"><Icon path={f.icon} /></div>
//                                 <h3 className="mod-feature-title">{f.title}</h3>
//                                 <p className="mod-feature-desc">{f.desc}</p>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="mod-wide-grid">
//                         {WIDE_CARDS.map((c) => (
//                             <div className="mod-wide-card" key={c.title}>
//                                 <h4 className="mod-wide-title">{c.title}</h4>
//                                 <p className="mod-wide-desc">{c.desc}</p>
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
//                         {STEPS.map((s) => (
//                             <div className="mod-step" key={s.n}>
//                                 <div className="mod-step-n">{s.n}</div>
//                                 <h3 className="mod-step-title">{s.title}</h3>
//                                 <p className="mod-step-desc">{s.desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Who touches this */}
//             <section className="mod-section mod-centered">
//                 <div className="wrap">
//                     <div className="mod-eyebrow">One system, two experiences</div>
//                     <h2 className="mod-h2">Who touches this on your team</h2>
//                     <p className="mod-section-lede">
//                         Frontline staff run it from the mobile app. Owners, managers, and finance
//                         run it from the web dashboard — both reading and writing the same
//                         real-time ledger.
//                     </p>

//                     <div className="mod-split">
//                         {SPLIT.map((col) => (
//                             <div className="mod-split-card" key={col.heading} style={{ textAlign: "left" }}>
//                                 <span className={`mod-tag ${col.tagVariant}`}>{col.tag}</span>
//                                 <h3 className="mod-split-h">{col.heading}</h3>
//                                 <p className="mod-split-desc">{col.desc}</p>
//                                 <ul className="mod-bullets">
//                                     {col.bullets.map((b) => (
//                                         <li key={b.role}>
//                                             <span className="bdot" />
//                                             <span><strong>{b.role}</strong> — {b.text}</span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <section className="mod-section" style={{ textAlign: "center" }}>

//             </section>
//         </main>
//     );
// };

// export default Module;









import React from "react";

const Icon = ({ path, size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {path}
    </svg>
);

const STATS = [
    { value: "3", label: "approval stages, fully configurable" },
    { value: "100%", label: "POs auto-linked to GRNs on delivery" },
    { value: "0", label: "orders placed without a budget check" },
];

const FEATURES = [
    {
        title: "Draft & approve POs",
        desc: "Multi-stage approval routing based on branch, category, or spend threshold.",
        icon: <path d="M20 6L9 17l-5-5" />,
    },
    {
        title: "Supplier catalogs & pricing",
        desc: "Standing price lists per supplier, with historical price tracking built in.",
        icon: <path d="M3 7h3l2 12h9l3-9H6" />,
    },
    {
        title: "GRN matching",
        desc: "Goods received are matched against the PO automatically, flagging shortfalls.",
        icon: <path d="M3 9l9-6 9 6v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />,
    },
    {
        title: "AI invoice OCR",
        desc: "Scans supplier invoices and pre-fills the GRN for a human to confirm.",
        icon: <><rect x="3" y="4" width="14" height="17" rx="2" /><path d="M8 9h5M8 13h5" /></>,
    },
];

const WIDE_CARDS = [
    {
        title: "AI Invoice OCR",
        desc: "Auto-fills GRN fields from a photographed or emailed supplier invoice.",
    },
    {
        title: "Price Variance Alerts",
        desc: "Flags a line item priced outside its normal range before it's approved.",
    },
];

const STEPS = [
    { n: "01", title: "Request", desc: "Any approved role raises a purchase request against a category or recipe." },
    { n: "02", title: "Approve", desc: "Routes to the right approver based on branch and spend threshold." },
    { n: "03", title: "Send to supplier", desc: "Approved POs go out with your standing pricing attached." },
    { n: "04", title: "Receive & match", desc: "GRN is checked against the PO; discrepancies are flagged, not hidden." },
];

const SPLIT = [
    {
        tag: "MOBILE APP",
        tagVariant: "yellow",
        heading: "On the floor",
        desc: "Offline-first — actions queue on the device and sync automatically the moment connectivity returns.",
        bullets: [
            { role: "Procurement staff", text: "raise purchase requests, scan GRNs on delivery" },
            { role: "Branch teams", text: "flag damaged or short deliveries with photo proof" },
            { role: "Any custom role", text: "request stock without needing dashboard access" },
        ],
    },
    {
        tag: "WEB DASHBOARD",
        tagVariant: "dark",
        heading: "Running the business",
        desc: "Full-screen analytics, approvals, and configuration from any browser.",
        bullets: [
            { role: "Branch Manager", text: "approves requests within their threshold" },
            { role: "Super Admin", text: "sets approval rules and views spend by supplier" },
            { role: "Finance Officer", text: "reconciles POs against budget in real time" },
        ],
    },
];

const Module = () => {
    return (
        <main className="module-page">
            <style>{`
        .module-page { background: #FBF3E3; padding-bottom: 40px; }
        .mod-section { padding: 56px 0; }
        .mod-breadcrumb { font-size: 13.5px; color: rgba(30,30,30,0.55); display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
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

        .mod-eyebrow { font-size: 12.5px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: #FF0D01; display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
        .mod-eyebrow::before { content: ""; width: 18px; height: 1px; background: #FF0D01; display: inline-block; }
        .mod-h2 { font-size: clamp(26px, 4vw, 36px); font-weight: 800; color: #1E1B16; margin: 0 0 14px; }
        .mod-section-lede { font-size: 15.5px; color: rgba(30,30,30,0.62); max-width: 640px; line-height: 1.6; margin-bottom: 36px; }

        .mod-feature-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 16px; }
        .mod-feature-card { background: linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2)); border: 1px solid rgba(30,30,30,0.06); border-radius: 16px; padding: 22px; }
        .mod-feature-icon { color: #1E1B16; margin-bottom: 28px; }
        .mod-feature-title { font-size: 15px; font-weight: 700; color: #1E1B16; margin: 0 0 8px; }
        .mod-feature-desc { font-size: 13.5px; color: rgba(30,30,30,0.6); line-height: 1.5; margin: 0; }

        .mod-wide-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; border: 1px solid rgba(30,30,30,0.08); border-radius: 14px; overflow: hidden; background: #fff; }
        .mod-wide-card { padding: 22px 26px; }
        .mod-wide-card:first-child { border-right: 1px solid rgba(30,30,30,0.08); }
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
        .mod-split-card { background: #fff; border-radius: 18px; padding: 28px; }
        .mod-tag { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 0.04em; padding: 6px 12px; border-radius: 999px; margin-bottom: 16px; }
        .mod-tag.yellow { background: #FEC60F; color: #391B13; }
        .mod-tag.dark { background: #1E1B16; color: #fff; }
        .mod-split-h { font-size: 22px; font-weight: 800; color: #1E1B16; margin: 0 0 10px; }
        .mod-split-desc { font-size: 14px; color: rgba(30,30,30,0.62); line-height: 1.5; margin-bottom: 18px; }
        .mod-bullets { list-style: none; padding: 0; margin: 0; }
        .mod-bullets li { display: flex; gap: 10px; font-size: 13.5px; color: rgba(30,30,30,0.75); padding: 8px 0; }
        .mod-bullets .bdot { width: 6px; height: 6px; border-radius: 50%; background: #FF0D01; margin-top: 6px; flex-shrink: 0; }

        @media (max-width: 900px) {
          .mod-stats, .mod-feature-grid, .mod-steps, .mod-split { grid-template-columns: 1fr 1fr; }
          .mod-wide-grid { grid-template-columns: 1fr; }
          .mod-wide-card:first-child { border-right: none; border-bottom: 1px solid rgba(30,30,30,0.08); }
        }
        @media (max-width: 600px) {
          .mod-stats, .mod-feature-grid, .mod-steps, .mod-split { grid-template-columns: 1fr; }
        }
      `}</style>

            {/* Hero / breadcrumb */}
            <section className="mod-section">
                <div className="wrap">
                    <div className="mod-breadcrumb">
                        <span>Sandwich</span>
                        <span className="sep">/</span>
                        <span>Products</span>
                        <span className="sep">/</span>
                        <span>Operations</span>
                        <span className="sep">/</span>
                        <span className="current">Procurement & Purchase Orders</span>
                    </div>

                    <div className="mod-top-row">
                        <span className="mod-icon-box">
                            <Icon path={<path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1V9.5z" />} />
                        </span>
                        <span className="mod-badge">Operations</span>
                    </div>

                    <h1 className="mod-h1">Procurement & Purchase Orders</h1>
                    <p className="mod-lede">
                        Every order routes through approval and lands as a matched GRN — nothing
                        gets bought on a hunch.
                    </p>

                    <div className="mod-ctas">
                        <a href="#" className="btn btn-accent">
                            See it running live{" "}
                            <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#" className="mod-btn-outline">Talk to us</a>
                    </div>

                    <div className="mod-stats">
                        {STATS.map((s) => (
                            <div className="mod-stat-card" key={s.label}>
                                <div className="mod-stat-value">{s.value}</div>
                                <div className="mod-stat-label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What it does */}
            <section className="mod-section">
                <div className="wrap">
                    <div className="mod-eyebrow">Overview</div>
                    <h2 className="mod-h2">What Procurement does</h2>
                    <p className="mod-section-lede">
                        Procurement is where discipline starts. Staff raise purchase requests
                        against live stock levels, managers approve against budget, and every
                        delivery is matched line-by-line before it touches the ledger.
                    </p>

                    <div className="mod-feature-grid">
                        {FEATURES.map((f) => (
                            <div className="mod-feature-card" key={f.title}>
                                <div className="mod-feature-icon"><Icon path={f.icon} /></div>
                                <h3 className="mod-feature-title">{f.title}</h3>
                                <p className="mod-feature-desc">{f.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mod-wide-grid">
                        {WIDE_CARDS.map((c) => (
                            <div className="mod-wide-card" key={c.title}>
                                <h4 className="mod-wide-title">{c.title}</h4>
                                <p className="mod-wide-desc">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Step by step */}
            <section className="mod-section">
                <div className="wrap">
                    <div className="mod-eyebrow">How it works</div>
                    <h2 className="mod-h2">Step by step</h2>

                    <div className="mod-steps" style={{ marginTop: 32 }}>
                        {STEPS.map((s) => (
                            <div className="mod-step" key={s.n}>
                                <div className="mod-step-n">{s.n}</div>
                                <h3 className="mod-step-title">{s.title}</h3>
                                <p className="mod-step-desc">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who touches this */}
            <section className="mod-section mod-centered">
                <div className="wrap">
                    <div className="mod-eyebrow">One system, two experiences</div>
                    <h2 className="mod-h2">Who touches this on your team</h2>
                    <p className="mod-section-lede">
                        Frontline staff run it from the mobile app. Owners, managers, and finance
                        run it from the web dashboard — both reading and writing the same
                        real-time ledger.
                    </p>

                    <div className="mod-split">
                        {SPLIT.map((col) => (
                            <div className="mod-split-card" key={col.heading} style={{ textAlign: "left" }}>
                                <span className={`mod-tag ${col.tagVariant}`}>{col.tag}</span>
                                <h3 className="mod-split-h">{col.heading}</h3>
                                <p className="mod-split-desc">{col.desc}</p>
                                <ul className="mod-bullets">
                                    {col.bullets.map((b) => (
                                        <li key={b.role}>
                                            <span className="bdot" />
                                            <span><strong>{b.role}</strong> — {b.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Connected Tools */}
            <section className="mod-section mod-centered">
                <div className="wrap">
                    <div className="mod-eyebrow">— CONNECTED</div>
                    <h2 className="mod-h2">Works with the tools you already use</h2>
                    <p className="mod-section-lede" style={{ marginBottom: 32 }}>
                        This module syncs data in and out through Sandwich's native integrations.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
                        {["Paystack", "QuickBooks", "Xero", "WhatsApp Business"].map((tool) => (
                            <span
                                key={tool}
                                style={{
                                    background: "#FFFFFF",
                                    color: "#391B13",
                                    fontSize: "14.5px",
                                    fontWeight: 600,
                                    padding: "10px 22px",
                                    borderRadius: "9999px",
                                    boxShadow: "0 2px 6px rgba(0,0,0,0.04)"
                                }}
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Common Questions Section */}
            <section className="mod-section mod-centered">
                <div className="wrap">
                    <div className="mod-eyebrow">— COMMON QUESTIONS</div>
                    <h2 className="mod-h2">Before you talk to us</h2>

                    <div style={{ maxWidth: 680, margin: "32px auto 0", display: "flex", flexDirection: "column", gap: 12 }}>
                        {[
                            "Can I set different approval limits per branch?",
                            "What happens if a delivery doesn't match the PO?"
                        ].map((question, idx) => (
                            <div
                                key={idx}
                                style={{
                                    background: "#FFFFFF",
                                    borderRadius: "16px",
                                    padding: "20px 24px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: 16,
                                    boxShadow: "0 2px 8px rgba(30, 30, 30, 0.04)",
                                    border: "1px solid rgba(30, 30, 30, 0.04)",
                                    cursor: "pointer",
                                    textAlign: "left"
                                }}
                            >
                                <span style={{ fontSize: "15px", fontWeight: 700, color: "#1E1B16" }}>
                                    {question}
                                </span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E1B16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Modules Section */}
            <section className="mod-section mod-centered">
                <div className="wrap">
                    <div className="mod-eyebrow">— KEEP EXPLORING</div>
                    <h2 className="mod-h2">Related modules</h2>

                    <div className="mod-related-grid">
                        {[
                            {
                                category: "OPERATIONS",
                                title: "Inventory & Stock Control",
                                desc: "Real-time stock levels across every branch, with blind counts and expiry tracking that catch shrinkage early."
                            },
                            {
                                category: "OPERATIONS",
                                title: "Supplier Management",
                                desc: "Onboard, score, and negotiate with suppliers using the same data your procurement team already sees."
                            },
                            {
                                category: "MONEY & GROWTH",
                                title: "Budgets & Cost Analytics",
                                desc: "Set a budget per branch, per category, and see the variance the moment it starts to drift."
                            }
                        ].map((module, idx) => (
                            <div key={idx} className="mod-related-card">
                                <div>
                                    <div className="mod-related-cat">{module.category}</div>
                                    <h3 className="mod-related-title">{module.title}</h3>
                                    <p className="mod-related-desc">{module.desc}</p>
                                </div>
                                <a href="#" className="mod-related-link">
                                    Explore module
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mod-related-arrow">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>

                    <style>{`
                        .mod-related-grid {
                            display: grid;
                            grid-template-columns: repeat(3, 1fr);
                            gap: 20px;
                            margin-top: 36px;
                            text-align: left;
                        }
                        .mod-related-card {
                            background: linear-gradient(180deg, #FFFFFF 0%, #FFFDF5 100%);
                            border: 1px solid rgba(255, 255, 255, 0.8);
                            border-radius: 20px;
                            padding: 28px 24px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            box-shadow: 0 8px 24px rgba(60, 50, 30, 0.04);
                            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
                                        box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
                                        border-color 0.3s ease;
                            cursor: pointer;
                        }
                        .mod-related-card:hover {
                            transform: translateY(-8px);
                            box-shadow: 0 16px 36px rgba(60, 50, 30, 0.12);
                            border-color: rgba(255, 13, 1, 0.2);
                        }
                        .mod-related-cat {
                            font-size: 11.5px;
                            font-weight: 700;
                            letter-spacing: 0.05em;
                            color: #FF0D01;
                            margin-bottom: 10px;
                        }
                        .mod-related-title {
                            font-size: 17.5px;
                            font-weight: 800;
                            color: #1E1B16;
                            margin: 0 0 10px;
                            line-height: 1.3;
                        }
                        .mod-related-desc {
                            font-size: 13.5px;
                            color: rgba(30, 30, 30, 0.62);
                            line-height: 1.5;
                            margin: 0 0 24px;
                        }
                        .mod-related-link {
                            font-size: 13.5px;
                            font-weight: 700;
                            color: #FF0D01;
                            text-decoration: none;
                            display: inline-flex;
                            align-items: center;
                            gap: 6px;
                        }
                        .mod-related-arrow {
                            transition: transform 0.2s ease;
                        }
                        .mod-related-card:hover .mod-related-arrow {
                            transform: translateX(4px);
                        }
                        @media (max-width: 900px) {
                            .mod-related-grid {
                                grid-template-columns: 1fr;
                            }
                        }
                    `}</style>
                </div>
            </section>
        </main>
    );
};

export default Module;