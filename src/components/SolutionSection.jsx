import React from 'react';

const SolutionSection = () => {
    return (
        <section className="alt reveal">
            <div className="wrap">
                <div className="section-head center">
                    <span className="eyebrow" style={{ justifyContent: 'center' }}>
                        Built for every role
                    </span>
                    <h2>One platform, every power user</h2>
                    <p className="lede">
                        Every department gets a dashboard and permission set built for how they actually work.
                    </p>
                </div>

                <div className="role-grid">
                    {/* Card 1: Owner */}
                    <div className="role-card sweep-on-hover">
                        <span className="tag">Owner</span>
                        <h3>Super Admin</h3>
                        <ul>
                            <li>
                                <svg viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Cross-branch dashboard & benchmarking
                            </li>
                            <li>
                                <svg viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Approval workflows above threshold
                            </li>
                            <li>
                                <svg viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Full RBAC & audit trail
                            </li>
                        </ul>
                    </div>

                    {/* Card 2: Branch */}
                    <div className="role-card sweep-on-hover">
                        <span className="tag">Branch</span>
                        <h3>Branch Manager</h3>
                        <ul>
                            <li>
                                <svg viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Daily ops & task tracker with photo sign-off
                            </li>
                            <li>
                                <svg viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Staff performance & shift scheduling
                            </li>
                            <li>
                                <svg viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Branch-level KPI widgets
                            </li>
                        </ul>
                    </div>

                    {/* Card 3: Kitchen */}
                    <div className="role-card sweep-on-hover">
                        <span className="tag">Kitchen</span>
                        <h3>Kitchen & Processing</h3>
                        <ul>
                            <li>
                                <svg viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                AI yield calc & recipe cards
                            </li>
                            <li>
                                <svg viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Kitchen Display System
                            </li>
                            <li>
                                <svg viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Waste logging with one tap
                            </li>
                        </ul>
                    </div>

                    {/* Card 4: Finance */}
                    <div className="role-card sweep-on-hover">
                        <span className="tag">Finance</span>
                        <h3>Finance Officer</h3>
                        <ul>
                            <li>
                                <svg viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Automated daily P&L
                            </li>
                            <li>
                                <svg viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Budget vs actual tracking
                            </li>
                            <li>
                                <svg viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                QuickBooks / Xero export
                            </li>
                        </ul>
                    </div>

                    {/* Card 5: Front of House */}
                    <div className="role-card sweep-on-hover">
                        <span className="tag">Front of House</span>
                        <h3>POS & Table Service</h3>
                        <ul>
                            <li>
                                <svg viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Table & floor plan management
                            </li>
                            <li>
                                <svg viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Split bills & multiple payment methods
                            </li>
                            <li>
                                <svg viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Aggregator orders in one screen
                            </li>
                        </ul>
                    </div>

                    {/* Card 6: Custom */}
                    <div className="role-card sweep-on-hover">
                        <span className="tag">Custom</span>
                        <h3>Any Custom Role</h3>
                        <ul>
                            <li>
                                <svg viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Define departments unique to your operation
                            </li>
                            <li>
                                <svg viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Granular, feature-level permissions
                            </li>
                            <li>
                                <svg viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Customer service & supplier-facing views
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;