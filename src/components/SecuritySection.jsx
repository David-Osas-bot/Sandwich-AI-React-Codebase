import React from 'react';

const SecuritySection = () => {
  return (
    <section className="reveal">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Security & reliability
          </span>
          <h2>Enterprise controls, from day one</h2>
          <p className="lede">
            Every action across every department is logged, permissioned, and encrypted — because a system
            that touches procurement, payroll, and payments has to be trusted with all three.
          </p>
        </div>

        <div className="sec-grid">
          {/* Card 1: Encryption */}
          <div className="sec-card">
            <div className="feat-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="11" width="14" height="9" rx="2" />
                <path d="M8 11V7a4 4 0 018 0v4" />
              </svg>
            </div>
            <h4>Encryption in transit & at rest</h4>
            <p>TLS in transit and AES-256 at rest, with two-factor authentication required for high-risk actions.</p>
          </div>

          {/* Card 2: Granular RBAC */}
          <div className="sec-card">
            <div className="feat-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
              </svg>
            </div>
            <h4>Granular RBAC</h4>
            <p>Role-based access down to the feature level — a cashier never sees payroll, a supplier never sees your P&L.</p>
          </div>

          {/* Card 3: Full Audit Trail */}
          <div className="sec-card">
            <div className="feat-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16v4H4zM4 12h10v8H4zM17 12h3v8h-3z" />
              </svg>
            </div>
            <h4>Full audit trail</h4>
            <p>Every stock movement, approval, and financial entry is timestamped and traceable across departments.</p>
          </div>

          {/* Card 4: Payments */}
          <div className="sec-card">
            <div className="feat-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 17l5-5 4 4 8-8M20 8v8h-8" />
              </svg>
            </div>
            <h4>Payments you can trust</h4>
            <p>Processed through Paystack with reconciled wallets, receipts, and refund approval logs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;