import useReveal from '../../hooks/useReveal';

export default function ModuleAccess({ module: m }) {
    const { ref, revealed } = useReveal();

    return (
        <section ref={ref} className={`reveal ${revealed ? 'in' : ''}`}>
            <div className="wrap">
                <div className="section-head center">
                    <span className="eyebrow" style={{ justifyContent: 'center' }}>One system, two experiences</span>
                    <h2>Who touches this on your team</h2>
                    <p className="lede">
                        Frontline staff run it from the mobile app. Owners, managers, and finance run it from
                        the web dashboard — both reading and writing the same real-time ledger.
                    </p>
                </div>

                <div className="access-grid">
                    <div className="access-card glass sweep-on-hover">
                        <div className="parallax-field">
                            <div
                                className="pl"
                                data-speed="0.1"
                                style={{
                                    top: '-80px', right: '-80px', width: 260, height: 260, borderRadius: '50%',
                                    background: 'radial-gradient(circle, rgba(254,198,15,0.35), rgba(254,198,15,0) 70%)',
                                }}
                            />
                        </div>
                        <span className="access-badge">Mobile App</span>
                        <h3>On the floor</h3>
                        <p className="access-sub">
                            Offline-first — actions queue on the device and sync automatically the moment
                            connectivity returns.
                        </p>
                        <ul className="access-roles">
                            {m.accessMobile.map(([role, desc]) => (
                                <li key={role}><strong>{role}</strong> — {desc}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="access-card glass sweep-on-hover">
                        <div className="parallax-field">
                            <div
                                className="pl"
                                data-speed="0.14"
                                style={{
                                    bottom: '-90px', left: '-90px', width: 280, height: 280, borderRadius: '50%',
                                    background: 'radial-gradient(circle, rgba(255,13,1,0.22), rgba(255,13,1,0) 70%)',
                                }}
                            />
                        </div>
                        <span className="access-badge dark">Web Dashboard</span>
                        <h3>Running the business</h3>
                        <p className="access-sub">
                            Full-screen analytics, approvals, and configuration from any browser.
                        </p>
                        <ul className="access-roles">
                            {m.accessWeb.map(([role, desc]) => (
                                <li key={role}><strong>{role}</strong> — {desc}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}