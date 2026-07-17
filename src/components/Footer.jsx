import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="wrap">
                <div className="foot-top">
                    <div className="foot-brand">
                        <a href="#" className="logo">
                            <svg className="mark">
                                <use href="#emblem" />
                            </svg>
                            Sandwich
                        </a>
                        <p>The restaurant operations platform that connects every department into one real-time system.</p>
                    </div>

                    <div className="foot-col">
                        <h4>Product</h4>
                        <a href="#">Procurement & Purchase Orders</a>
                        <a href="#">Inventory & Stock Control</a>
                        <a href="#">Kitchen & Central Production</a>
                        <a href="#">Accounting & Finance</a>
                        <a href="#">POS & Table Management</a>
                        <a href="#">CRM & Loyalty</a>
                    </div>

                    <div className="foot-col">
                        <h4>Solutions</h4>
                        <a href="#access">Mobile App</a>
                        <a href="#access">Web Dashboard</a>
                        <a href="#solutions">Super Admin</a>
                        <a href="#solutions">Branch Manager</a>
                        <a href="#solutions">Finance Officer</a>
                        <a href="#solutions">Supplier Portal</a>
                    </div>

                    <div className="foot-col">
                        <h4>Resources</h4>
                        <a href="#resources">Video Tutorials</a>
                        <a href="#resources">Setup Guides</a>
                        <a href="#resources">Help Center</a>
                    </div>

                    <div className="foot-col">
                        <h4>Company</h4>
                        <a href="#">About</a>
                        <a href="#pricing">Pricing</a>
                        <a href="#">Contact</a>
                        <a href="#">Careers</a>
                    </div>
                </div>

                <div className="foot-bottom">
                    <span>© 2026 Sandwich. All rights reserved.</span>
                    <div className="socials">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Security</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;