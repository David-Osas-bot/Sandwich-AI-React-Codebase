import useReveal from '../../hooks/useReveal';

export default function ModuleWorkflow({ module: m }) {
    const { ref, revealed } = useReveal();

    return (
        <section ref={ref} className={`alt reveal ${revealed ? 'in' : ''}`}>
            <div className="wrap">
                <div className="section-head">
                    <span className="eyebrow">How it works</span>
                    <h2>Step by step</h2>
                </div>
                <div className="steps">
                    {m.steps.map(([title, desc], i) => (
                        <div className="step" key={title}>
                            <span className="num">{String(i + 1).padStart(2, '0')}</span>
                            <h3>{title}</h3>
                            <p>{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}