import { useState } from 'react';
import Icon from '../Icon';
import useReveal from '../../hooks/useReveal';

export default function ModuleFaq({ module: m }) {
    const { ref, revealed } = useReveal();
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section ref={ref} className={`reveal ${revealed ? 'in' : ''}`}>
            <div className="wrap">
                <div className="section-head center">
                    <span className="eyebrow" style={{ justifyContent: 'center' }}>Common questions</span>
                    <h2>Before you talk to us</h2>
                </div>
                <div className="faq-list">
                    {m.faqs.map(([q, a], i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div className={`faq-item ${isOpen ? 'open' : ''}`} key={q}>
                                <div className="faq-q" onClick={() => setOpenIndex(isOpen ? null : i)}>
                                    {q}
                                    <Icon name="arrow" />
                                </div>
                                <div className="faq-a"><p>{a}</p></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}