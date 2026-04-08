import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <div className="logo">
                <h1>Wye Newsagency</h1>
            </div>

            {/* Hamburger button */}

            <div
                className={`hamburger ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Navigation */}
            <nav className={isOpen ? "open" : ""}>
                <ul className="nav-links">
                    <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
                    <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header; 