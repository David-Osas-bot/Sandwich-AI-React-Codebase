import React from 'react';

const PricingSection = () => {
  return (
    <section className="reveal">
      <div className="parallax-field">
        <div
          className="pl"
          data-speed="0.13"
          style={{
            top: '-60px',
            right: '-100px',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,13,1,0.12), rgba(255,13,1,0) 70%)',
          }}
        />
        <div
          className="pl emblem-ghost"
          data-speed="0.28"
          style={{
            bottom: '20px',
            left: '5%',
            width: '70px',
            height: '70px',
            color: '#961D14',
          }}
        >
          <svg>
            <use href="#emblem-mono" />
          </svg>
        </div>
      </div>

      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Pricing
          </span>
          <h2>Plans that scale with your kitchen</h2>
          <p className="lede">Start with one branch, grow to fifty. No credit card required to try it.</p>
        </div>

        <div className="price-grid">
          {/* Starter Plan */}
          <div className="price-card sweep-on-hover">
            <div className="tier">Starter</div>
            <div className="amt">
              ₦85,000<span style={{ fontSize: '15px', fontWeight: 500 }}>/mo</span>
            </div>
            <div className="per">Billed monthly · 1 branch</div>
            <ul>
              <li>
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Kitchen & inventory modules
              </li>
              <li>
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Basic cost analytics
              </li>
              <li>
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Mobile app access
              </li>
            </ul>
            <a href="#" className="btn btn-ghost">Start free trial</a>
          </div>

          {/* Growth Plan */}
          <div className="price-card feat sweep-on-hover dark-sweep">
            <span className="most-pop">Most popular</span>
            <div className="tier">Growth</div>
            <div className="amt">
              ₦220,000<span style={{ fontSize: '15px', fontWeight: 500 }}>/mo</span>
            </div>
            <div className="per">Billed monthly · up to 5 branches</div>
            <ul>
              <li>
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Everything in Starter
              </li>
              <li>
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Full finance & AI analytics
              </li>
              <li>
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                AI sales forecasting add-on
              </li>
              <li>
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Priority support
              </li>
            </ul>
            <a href="#" className="btn btn-accent">Start free trial</a>
          </div>

          {/* Enterprise Plan */}
          <div className="price-card sweep-on-hover">
            <div className="tier">Enterprise</div>
            <div className="amt">Custom</div>
            <div className="per">Unlimited branches</div>
            <ul>
              <li>
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Everything in Growth
              </li>
              <li>
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Super Admin multi-branch console
              </li>
              <li>
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3.5 3.5L13 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Custom integrations & open API
              </li>
            </ul>
            <a href="#" className="btn btn-ghost">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;