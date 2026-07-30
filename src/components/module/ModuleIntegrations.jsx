import useReveal from '../../hooks/useReveal';

export default function ModuleIntegrations({ module: m }) {
    const { ref, revealed } = useReveal();

    return (
        <section ref={ref} className={`alt reveal ${revealed ? 'in' : ''}`}>
            <div className="wrap">
                <div className="section-head center">
                    <span className="eyebrow" style={{ justifyContent: 'center' }}>Connected</span>
                    <h2>Works with the tools you already use</h2>
                    <p className="lede">This module syncs data in and out through Sandwich's native integrations.</p>
                </div>
                <div className="integration-row" style={{ justifyContent: 'center' }}>
                    {m.integrations.map((name) => (
                        <span className="int-pill" key={name}>{name}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}