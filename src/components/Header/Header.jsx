import logo from './Logo.svg';
import logoSmall from './LogoSmall.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [changeMenuIcon, setChangeMenuIcon] = useState(false);

    const handleMenu = () => {
        setShowMenu((show) => !show);
        setChangeMenuIcon((change) => !change);
    }

    return (
    <div>
        <header onResize={handleMenu}>
            <ul className={`headerList${showMenu ? 'Show' : ''}`}> 
                <li className='homeLink'>
                    <Link to='/home'>home</Link>
                </li>
                <li>
                    <a href="#about">about</a>
                </li>
                <li>
                    {window.innerWidth ?  (<a href="#pavilions">pavilions</a>) : <a href='#sauna'>services</a>}
                </li>
                <li className='logo'>
                    <Link to='/home'>
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
                    <Link to='/booking' className='bookNow'>book now</Link>
                </li>
            </ul>
            {showMenu ? (<FontAwesomeIcon icon={ faXmark } size="lg" className='menuIcon' onClick={handleMenu} />) : 
            (<FontAwesomeIcon icon={ faBars } size="lg" className='menuIcon' onClick={handleMenu} />)}
            <Link to='/home' className={`logo logo-mobile ${showMenu ? 'logo-show' : ''}`}>
                <img src={logo} alt="logo" />
            </Link>
            <Link to='/home' className={`logo logo-small-mobile ${showMenu ? 'logo-small-show' : ''}`}>
                <img src={logoSmall} alt="logo" />
            </Link>
        </header>
    </div>
    )
}

export default Header


