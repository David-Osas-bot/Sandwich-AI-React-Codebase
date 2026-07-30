import { useEffect, useRef } from 'react';
import useReveal from '../../hooks/useReveal';

export default function ModuleCta({ module: m }) {
    const { ref, revealed } = useReveal();
    const blobRef = useRef(null);

    useEffect(() => {
        const speed = 0.18;
        let ticking = false;
        const onScroll = () => {
            const el = blobRef.current;
            if (!el) return;
            const sectionTop = el.closest('section')?.offsetTop || 0;
            const y = window.scrollY;
            el.style.transform = `translateX(-50%) translateY(${(y - sectionTop) * -speed + y * speed}px)`;
            ticking = false;
        };
        const handler = () => {
            if (!ticking) {
                requestAnimationFrame(onScroll);
                ticking = true;
            }
        };
        window.addEventListener('scroll', handler);
        onScroll();
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <section style={{ paddingTop: 0 }}>
            <div className="wrap">
                <div ref={ref} className={`cta-final reveal ${revealed ? 'in' : ''}`}>
                    <div className="parallax-field">
                        <div
                            ref={blobRef}
                            className="pl"
                            style={{
                                top: -200, left: '50%', width: 700, height: 700, borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(255,13,1,0.4), rgba(255,13,1,0) 68%)',
                            }}
                        />
                    </div>
                    <span className="eyebrow">Ready when you are</span>
                    <h2>See {m.title} running on a restaurant like yours</h2>
                    <p>Book a 30-minute live demo with your real use cases — no credit card required.</p>
                    <div className="hero-ctas">
                        <a href="#demo" className="btn btn-accent">
                            Book your free demo
                            <svg viewBox="0 0 16 16" fill="none">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#chat" className="btn btn-ghost" style={{ borderColor: '#5A4A40', color: '#fff' }}>
                            Chat with us
                        </a>
                    </div>
                    <div className="trust">No credit card required · 22-week deployment guarantee · Full onboarding included</div>
                </div>
            </div>
        </section>
    );
}