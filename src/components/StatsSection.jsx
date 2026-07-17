import React, { useEffect, useRef, useState } from 'react';

const StatsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
            }
        );
        
        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        
        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    // Inline professional CSS animation values to bypass broken global CSS
    const animStyle = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(30px)',
        transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, opacity' // Tells the browser to use GPU acceleration
    };

    return (
        <section style={{ padding: '100px 0 0' }}>
            <div className="wrap">
                <div 
                    ref={domRef} 
                    className="stats-band"
                    style={animStyle}
                >
                    <div className="parallax-field">
                        <div
                            className="pl"
                            data-speed="0.15"
                            style={{
                                top: '-160px',
                                left: '-100px',
                                width: '480px',
                                height: '480px',
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(255,13,1,0.4), rgba(255,13,1,0) 68%)'
                            }}
                        >
                        </div>
                        <div
                            className="pl"
                            data-speed="0.22"
                            style={{
                                bottom: '-140px',
                                right: '-80px',
                                width: '380px',
                                height: '380px',
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(254,198,15,0.22), rgba(254,198,15,0) 68%)'
                            }}
                        >
                        </div>
                    </div>
                    <div className="stats-grid">
                        <div className="stat">
                            <div className="num">80<span className="accent">%</span></div>
                            <div className="lbl">Reduction in stock discrepancies within 60 days</div>
                        </div>
                        <div className="stat">
                            <div className="num">30<span className="accent">%</span></div>
                            <div className="lbl">Faster order-to-service time with kitchen coordination</div>
                        </div>
                        <div className="stat">
                            <div className="num">95<span className="accent">%+</span></div>
                            <div className="lbl">Accuracy on daily automated P&amp;L generation</div>
                        </div>
                        <div className="stat">
                            <div className="num">99.9<span className="accent">%</span></div>
                            <div className="lbl">Platform uptime during operating hours</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;