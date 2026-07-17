import React from 'react';

const ResourcesSection = () => {
  return (
    <section className="alt reveal">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Resources
          </span>
          <h2>Learn Sandwich, your way</h2>
          <p className="lede">
            Tutorials, guides, and playbooks to help every department get the most out of the platform.
          </p>
        </div>

        <div className="resource-grid">
          {/* Card 1: Video Tutorials */}
          <div className="resource-card">
            <div className="resource-icon" style={{ background: '#FDE4E2' }}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF0D01"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M10 9l5 3-5 3z" />
              </svg>
            </div>
            <h3>Video Tutorials</h3>
            <p>Step-by-step walkthroughs of every module, from procurement to POS, on our YouTube channel.</p>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="resource-link">
              Watch on YouTube{' '}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M8 7h9v9" />
              </svg>
            </a>
          </div>

          {/* Card 2: Setup Guides */}
          <div className="resource-card">
            <div className="resource-icon" style={{ background: '#FDF0CC' }}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C8912E"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 3h9l5 5v13a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" />
                <path d="M9 13h6M9 17h6" />
              </svg>
            </div>
            <h3>Setup Guides</h3>
            <p>Written guides that get each department fully onboarded in a day.</p>
            <a href="#" className="resource-link">
              Browse guides{' '}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M8 7h9v9" />
              </svg>
            </a>
          </div>

          {/* Card 3: Help Center */}
          <div className="resource-card">
            <div className="resource-icon" style={{ background: '#E4F2E6' }}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#208537"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M9.5 9a2.5 2.5 0 015 .5c0 1.7-2.3 1.8-2.5 3.5M12 17h.01" />
              </svg>
            </div>
            <h3>Help Center</h3>
            <p>Answers to common setup, billing, and integration questions.</p>
            <a href="#" className="resource-link">
              Visit Help Center{' '}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M8 7h9v9" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;