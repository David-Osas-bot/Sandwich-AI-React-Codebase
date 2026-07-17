import React, { useEffect, useRef } from 'react';

const HowItWorksSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('active');
          observer.unobserve(section); 
        }
      },
      {
        rootMargin: '0px 0px -150px 0px', 
        threshold: 0,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="reveal">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>From procurement to plate, one validated ledger</h2>
          <p className="lede">
            Every handoff between departments requires formal acceptance before the stock ledger updates — nothing moves silently.
          </p>
        </div>
        <div className="steps">
          
          <div className="step">
            <span className="num">01</span>
            <h3>Procurement</h3>
            <p>Purchase orders, approvals, and supplier GRNs.</p>
          </div>

          <div className="step">
            <span className="num">02</span>
            <h3>Stock Control</h3>
            <p>Validates deliveries, manages counts &amp; expiry.</p>
          </div>

          <div className="step">
            <span className="num">03</span>
            <h3>Processing</h3>
            <p>AI yield calc turns raw stock into prepped items.</p>
          </div>

          <div className="step">
            <span className="num">04</span>
            <h3>Kitchen</h3>
            <p>KDS routes orders; 3D view shows live status.</p>
          </div>

          <div className="step">
            <span className="num">05</span>
            <h3>POS &amp; Finance</h3>
            <p>Sale depletes stock and posts to the ledger instantly.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;