import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logoSmall from '../../assets/Logo.svg';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <footer>
        <Link to="/">
            <img src={logoSmall} className="logo" alt="logo" />
        </Link>
        <h4 className="footerTitle">Follow us:</h4>
        <ul className="icons">
            <li>
                <a href="https://www.instagram.com" className="icon" >
                    <FontAwesomeIcon icon={faInstagram} size='lg'/>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com" className="icon" >
                    <FontAwesomeIcon icon={faFacebook} size='lg'/>
                </a>
            </li>
            <li>
                <a href="https://www.whatsapp.com" className="icon">
                    <FontAwesomeIcon icon={faWhatsapp} size='lg'  id='social'/>
                </a>
            </li>
            <li>
                <a href="https://twitter.com" className="icon" >
                    <FontAwesomeIcon icon={faTwitter} size='lg'/>
                </a>
            </li>
        </ul>
    </footer>
    )
}

export default Footer