import logo from '../../assets/Logo.svg';
import logoSmall from '../../assets/LogoSmall.svg';
import { useMediaQuery } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const isMobileScreens = useMediaQuery("(max-width: 768px)");

    return (
        <header>
            {!isMobileScreens ? (
                <ul className="headerList"> 
                    <li className='homeLink'>
                        <a href="#home">home</a>
                    </li>
                    <li>
                        <a href="#about">about</a>
                    </li>
                    <li className='link-medium'>
                        <a href='#sauna'>services</a>
                    </li>
                    <li className='link-big'>
                        <a href="#pavilions">pavilions</a>
                    </li>
                    <li className='logo'>
                        <Link to='/'>
                            <img src={logo} alt="logo" />
                        </Link>
                    </li>
                    <li className='saunaLink'>
                        <a href="#sauna">sauna</a>
                    </li>
                    <li>
                        <a href="#contact">contact</a>
                    </li>
                    <li>
                        <Link to='/booking' className='bookNowHeader'>book now</Link>
                    </li>
                </ul>
            ) : (
                <div className='nav-moblie'>
                    <Link to='/' className='logo-mobile'>
                        <img src={logoSmall} alt="logo" />
                    </Link>
                    <FontAwesomeIcon icon={ faBars } size="lg" className='menuIcon' onClick={() => setShowMenu(!showMenu)} />
                </div>
            ) 
            }


            {isMobileScreens && showMenu && (
                <div>
                    <FontAwesomeIcon icon={ faXmark } size="xl" className='closeBtn' onClick={() => setShowMenu(!showMenu)} />
                    <ul className='headerListShow'>
                        <li className='logo-show'>
                            <Link to='/'>
                                <img src={logoSmall} alt="logo" />
                            </Link>
                        </li>
                        <li className='homeLink'>
                            <Link to='/'>home</Link>
                        </li>
                        <li>
                            <a href="#about">about</a>
                        </li>
                        <li>
                            <a href="#sauna">services</a>
                        </li>
                        <li>
                            <a href="#contact">contact</a>
                        </li>
                        <li>
                            <Link to='/booking' className='bookNowHeader'>book now</Link>
                        </li>
                    </ul>
                </div>
                ) }
        </header>
    )
}

export default Header;


