// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">Real Estate</div>
            <ul className={`nav-links ${isMobileMenuOpen ? 'mobile' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/properties">Properties</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? 'Close' : 'Menu'}
            </div>
        </nav>
    );
};

export default Navbar;
