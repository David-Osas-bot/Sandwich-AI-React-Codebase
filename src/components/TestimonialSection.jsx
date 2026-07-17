import React, { useEffect, useRef } from 'react';

const TestimonialSection = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

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

  const handleScroll = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector('.testi-card');
    const cardWidth = firstCard ? firstCard.offsetWidth : 350;
    const gap = 24; 
    const scrollAmount = cardWidth + gap;

    if (direction === 'next') {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="alt reveal">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Client reviews
          </span>
          <h2>What changes when the whole restaurant is connected</h2>
        </div>

        <div className="testi-carousel-wrap">
          <div className="testi-track" id="testiTrack" ref={trackRef}>
            
            {/* Card 1 */}
            <div className="testi-card sweep-on-hover">
              <div className="band"></div>
              <p className="quote">
                "Before Sandwich, my procurement team ordered on gut feel. Now we forecast demand before placing a single order."
              </p>
              <div className="testi-person">
                <div className="av" style={{ background: '#FF0D01' }}>SA</div>
                <div>
                  <div className="nm">Saad Ajala</div>
                  <div className="rl">Operational Director, R&amp;B</div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="testi-card sweep-on-hover">
              <div className="band"></div>
              <p className="quote">
                "Our finance officer used to rebuild last week's P&amp;L from five sources. Now it's in her inbox by 7am, automatically."
              </p>
              <div className="testi-person">
                <div className="av" style={{ background: '#391B13' }}>TM</div>
                <div>
                  <div className="nm">Taiwo Musa</div>
                  <div className="rl">Restaurant Owner, Blend</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="testi-card sweep-on-hover">
              <div className="band"></div>
              <p className="quote">
                "The menu matrix made our GM stop guessing. We cut three underperforming items and margin improved within two weeks."
              </p>
              <div className="testi-person">
                <div className="av" style={{ background: '#208537' }}>HC</div>
                <div>
                  <div className="nm">Haley Cher</div>
                  <div className="rl">Finance Manager, Silk Route</div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="testi-card sweep-on-hover">
              <div className="band"></div>
              <p className="quote">
                "Rubels &amp; Angels runs four branches on Sandwich now. Onboarding a new site takes a day instead of a month."
              </p>
              <div className="testi-person">
                <div className="av" style={{ background: '#961D14' }}>RA</div>
                <div>
                  <div className="nm">Ronke Adisa</div>
                  <div className="rl">Ops Lead, Rubels &amp; Angels</div>
                </div>
              </div>
            </div>

          </div>

          {/* Navigation Controls */}
          <div className="carousel-nav">
            <button 
              id="testiPrev" 
              aria-label="Previous" 
              onClick={() => handleScroll('prev')}
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M15 6l-6 6 6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button 
              id="testiNext" 
              aria-label="Next" 
              onClick={() => handleScroll('next')}
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;