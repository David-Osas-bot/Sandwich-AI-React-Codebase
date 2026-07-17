import React from 'react';

const FinalCtaSection = () => {
  return (
    <section style={{ paddingTop: '0' }}>
      <div className="wrap">
        <div className="cta-final reveal">
          <div className="parallax-field">
            <div
              className="pl"
              data-speed="0.18"
              style={{
                top: '-200px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '700px',
                height: '700px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,13,1,0.4), rgba(255,13,1,0) 68%)',
              }}
            />
          </div>
          
          <span className="eyebrow">Ready when you are</span>
          <h2>Stop managing your restaurant in the dark</h2>
          <p>
            Book a 30-minute live demo. We'll show you Sandwich running on a restaurant like yours, with your real use cases.
          </p>
          
          <div className="hero-ctas">
            <a href="#" className="btn btn-accent">
              Book your free demo{' '}
              <svg viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#"
              className="btn btn-ghost"
              style={{ borderColor: '#5A4A40', color: '#fff' }}
            >
              Chat with us
            </a>
          </div>
          
          <div className="trust">
            No credit card required · 22-week deployment guarantee · Full onboarding included
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;