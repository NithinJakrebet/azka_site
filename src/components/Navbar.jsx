import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../styling/navbar.css";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="nav">
            <Link to="/" className="site-title">Arizona Konkani Association</Link>
            <div className="hamburger-menu" onClick={toggleMenu}>☰</div>
            <ul className={`dropdown ${isMenuOpen ? "active" : ""}`}>
                <CustomLink to="/" onClick={toggleMenu}>Home</CustomLink>
                <CustomLink to="/about" onClick={toggleMenu}>About Us</CustomLink>
                <CustomLink to="/newsletter" onClick={toggleMenu}>Newsletter</CustomLink>
                <CustomLink to="/contact" onClick={toggleMenu}>Contact</CustomLink>
            </ul>
            <ul className="desktop">
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About Us</CustomLink>
                <CustomLink to="/newsletter">Newsletter</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}
