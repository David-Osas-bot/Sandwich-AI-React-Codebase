import { Link } from 'react-router-dom';
import { getMegaMenuColumns } from '../data/modules';

/**
 * Drop this inside your existing Header.jsx's ".mega.mega-products" wrapper,
 * in place of the old hard-coded links / the old `#megaProductsCols` div.
 * It reads straight from modules.js, so adding a module there is the only
 * thing you ever need to do to keep the nav and the detail pages in sync.
 *
 * activeSlug is optional — pass the current module's slug (e.g. from
 * useParams() on ModulePage) to highlight it in the menu.
 */
export default function ProductsMegaMenu({ activeSlug }) {
    const columns = getMegaMenuColumns();

    return (
        <>
            <div className="mega-eyebrow">15+ modules, one real-time ledger — all live in production</div>
            <div className="mega-cols">
                {columns.map((col) => (
                    <div key={col.key}>
                        <div className="mega-col-h">{col.label}</div>
                        {col.items.map((item) => (
                            <Link
                                key={item.slug}
                                to={`/module/${item.slug}`}
                                className={`mega-link ${item.slug === activeSlug ? 'active' : ''}`}
                            >
                                <span className="dot" />
                                {item.title}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
            <div className="mega-foot">
                <span style={{ fontSize: 12.5, color: 'rgba(30,30,30,0.6)' }}>
                    One connected system — every module shares real-time data.
                </span>
                <Link to="/#features" className="cta-link">See all modules →</Link>
            </div>
        </>
    );
}