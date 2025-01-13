import React,{useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
    const [isMenuopen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuopen);
    const closeMobileMenu = () => setIsMenuOpen(false);


    return (
        <div>
            <div className="navber-container">
                <div className="navbar-logo-cont">
                    <Link to="/" className="navbar-logo">
                        <img src="" alt="" />
                    </Link>
                </div>

                <div className="nav-links">
                    <ul>
                        <li>
                            <Link to="/" className={`nav-link ${isMenuopen ? "open" : " "}`} onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className={`nav-link ${isMenuopen ? "open" : " "}`} onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className={`nav-link ${isMenuopen ? "open" : " "}`} onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className={`nav-link ${isMenuopen ? "open" : " "}`} onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>





                <div className={`menu-icon ${isMenuopen ? "open" : " "}`}  onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                
            </div>
        </div>
    );
}

export default Navbar;