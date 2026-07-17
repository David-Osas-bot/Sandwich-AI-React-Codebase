import React, { useEffect, useRef, useState } from 'react';

const TeamSection = () => {
    const sectionRef = useRef(null);
    const [isIn, setIsIn] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIn(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.15 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <section className={"logos-section reveal"}>
            <div className="wrap">
                <div className="logos-label">Trusted by teams at</div>
            </div>

            <div className="marquee">
                <div className="marquee-track" id="marqueeTrack">
                    <span className="lg">TheFork Group</span>
                    <span className="lg">Chop Now</span>
                    <span className="lg">Kitchen Republic</span>
                    <span className="lg">GrillHouse Lagos</span>
                    <span className="lg">SilkRoute</span>
                    <span className="lg featured">Rubels &amp; Angels</span>
                    <span className="lg">TheFork Group</span>
                    <span className="lg">Chop Now</span>
                    <span className="lg">Kitchen Republic</span>
                    <span className="lg">GrillHouse Lagos</span>
                    <span className="lg">SilkRoute</span>
                    <span className="lg featured">Rubels &amp; Angels</span>
                </div>
            </div>

            <div className="wrap" style={{ marginTop: '36px' }}>
                <div className="logos-label">Works with the tools you already use</div>
            </div>

            <div className="marquee marquee-2">
                <div className="marquee-track">
                    <span className="int-pill">Paystack</span>
                    <span className="int-pill">QuickBooks</span>
                    <span className="int-pill">Xero</span>
                    <span className="int-pill">WhatsApp Business</span>
                    <span className="int-pill">Glovo</span>
                    <span className="int-pill">Chowdeck</span>
                    <span className="int-pill">Uber Eats</span>
                    <span className="int-pill">Bolt Food</span>
                    <span className="int-pill">Twilio</span>
                    <span className="int-pill">SendGrid</span>

                    <span className="int-pill">Paystack</span>
                    <span className="int-pill">QuickBooks</span>
                    <span className="int-pill">Xero</span>
                    <span className="int-pill">WhatsApp Business</span>
                    <span className="int-pill">Glovo</span>
                    <span className="int-pill">Chowdeck</span>
                    <span className="int-pill">Uber Eats</span>
                    <span className="int-pill">Bolt Food</span>
                    <span className="int-pill">Twilio</span>
                    <span className="int-pill">SendGrid</span>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;