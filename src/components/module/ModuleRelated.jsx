import { Link } from 'react-router-dom';
import Icon from '../Icon';
import useReveal from '../../hooks/useReveal';
import { MODULES, CATS } from '../../data/modules';

export default function ModuleRelated({ module: m }) {
    const { ref, revealed } = useReveal();
    const related = m.related.map((slug) => [slug, MODULES[slug]]).filter(([, rm]) => rm);

    if (related.length === 0) return null;

    return (
        <section ref={ref} className={`alt reveal ${revealed ? 'in' : ''}`}>
            <div className="wrap">
                <div className="section-head center">
                    <span className="eyebrow" style={{ justifyContent: 'center' }}>Keep exploring</span>
                    <h2>Related modules</h2>
                </div>
                <div className="related-grid">
                    {related.map(([slug, rm]) => (
                        <Link className="related-card sweep-on-hover" to={`/module/${slug}`} key={slug}>
                            <span className="cat">{CATS[rm.cat]}</span>
                            <h4>{rm.title}</h4>
                            <p>{rm.tagline}</p>
                            <span className="go">Explore module <Icon name="arrow" /></span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}