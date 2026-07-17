import React from "react";

const Header = () => {
    return (
        <header className="site">
            <div className="wrap nav">
                <a href="#" className="logo">
                    <svg className="mark"><use href="#emblem" /></svg>
                    Sandwich
                </a>

                <nav className="navlinks">
                    {/* Products Dropdown */}
                    <div className="navitem">
                        <a href="#" tabIndex={0}>
                            Products{" "}
                            <svg viewBox="0 0 10 6" fill="none">
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
                                <span style={{ fontSize: "12.5px", color: "rgba(30,30,30,0.6)" }}>One connected system — every module shares real-time data.</span>
                                <a href="#" className="cta-link">See all modules →</a>
                            </div>
                        </div>
                    </div>

                    {/* Solutions Dropdown */}
                    <div className="navitem">
                        <a href="#" tabIndex={0}>
                            Solutions{" "}
                            <svg viewBox="0 0 10 6" fill="none">
                                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </a>
                        <div className="mega mega-solutions">
                            <div className="mega-eyebrow">One platform, two experiences</div>
                            <div className="mega-split">
                                <div className="mega-split-col">
                                    <div className="mega-split-h">
                                        <span className="chip-ico">
                                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
                                        <span className="chip-ico dark">
                                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
                                <span style={{ fontSize: "12.5px", color: "rgba(30,30,30,0.6)" }}>Same ledger, right-sized for how each role actually works.</span>
                                <a href="#access" className="cta-link">See how it splits →</a>
                            </div>
                        </div>
                    </div>

                    {/* Resources Dropdown */}
                    <div className="navitem">
                        <a href="#" tabIndex={0}>
                            Resources{" "}
                            <svg viewBox="0 0 10 6" fill="none">
                                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </a>
                        <div className="mega mega-resources">
                            <div className="mega-eyebrow">Learn Sandwich, your way</div>
                            <div className="mega-grid cols-3">
                                <div className="mega-row" style={{ flexDirection: "column" }}>
                                    <div className="mega-icon">
                                        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="5" width="18" height="14" rx="2" />
                                            <path d="M10 9l5 3-5 3z" />
                                        </svg>
                                    </div>
                                    <p className="mega-title" style={{ marginTop: "12px" }}>Video Tutorials</p>
                                    <p className="mega-desc">Walkthroughs of every module.</p>
                                </div>
                                <div className="mega-row" style={{ flexDirection: "column" }}>
                                    <div className="mega-icon">
                                        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M6 3h9l5 5v13a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" />
                                            <path d="M9 13h6M9 17h6" />
                                        </svg>
                                    </div>
                                    <p className="mega-title" style={{ marginTop: "12px" }}>Setup Guides</p>
                                    <p className="mega-desc">Onboard your team in a day.</p>
                                </div>
                                <div className="mega-row" style={{ flexDirection: "column" }}>
                                    <div className="mega-icon">
                                        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
                    <a href="#" className="btn btn-accent">
                        Get Started{" "}
                        <svg viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;