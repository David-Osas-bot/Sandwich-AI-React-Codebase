import Icon from '../Icon';
import useReveal from '../../hooks/useReveal';

export default function ModuleOverview({ module: m }) {
    const { ref, revealed } = useReveal();
    const overviewTitle = `What ${m.title.split('&')[0].trim()} does`;

    return (
        <section ref={ref} className={`reveal ${revealed ? 'in' : ''}`}>
            <div className="wrap">
                <div className="section-head">
                    <span className="eyebrow">Overview</span>
                    <h2>{overviewTitle}</h2>
                    <p className="lede">{m.desc}</p>
                </div>

                <div className="feat-grid">
                    {m.features.map(([icon, title, desc]) => (
                        <div className="feat-card" key={title}>
                            <div className="feat-icon"><Icon name={icon} /></div>
                            <h3>{title}</h3>
                            <p>{desc}</p>
                        </div>
                    ))}
                </div>

                {m.ai && m.ai.length > 0 && (
                    <div
                        className="ai-strip"
                        style={{ display: 'grid', gridTemplateColumns: `repeat(${m.ai.length},1fr)` }}
                    >
                        {m.ai.map(([title, desc]) => (
                            <div className="ai-item" key={title}>
                                <div className="t">{title}</div>
                                <div className="d">{desc}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}