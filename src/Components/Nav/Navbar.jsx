import  {useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '../../asset/logo.png'
import Logo2 from '../../asset/logo2.png'


function Navbar() {
    const [isMenuopen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuopen);
    const closeMobileMenu = () => setIsMenuOpen(false);


    return (
        <div className='container navbar-container'>
            <div className="navbar ">
                <div className="navbar-logo-container">
                    <Link to="/" className="navbar-logo">
                        <img src={Logo} alt="" /><span className='navbar-logo-long'><img src={Logo2} alt="" /></span>
                    </Link>
                </div>

                <div className={`nav-menu ${isMenuopen ? "open" : " "}`}>
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