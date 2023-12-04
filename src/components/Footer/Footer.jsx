import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from '../Header/Logo.svg';
import styles from './Footer.module.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <footer>
        <Link to="/home">
            <img src={logo} className={styles.logo} alt="logo" />
        </Link>
        <h4 className={styles.footerTitle}>Follow us:</h4>
        <ul className={styles.icons}>
            <li>
                <a href="https://www.instagram.com" className={styles.icon} >
                    <FontAwesomeIcon icon={faInstagram} size='lg'/>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com" className={styles.icon} >
                    <FontAwesomeIcon icon={faFacebook} size='lg'/>
                </a>
            </li>
            <li>
                <a href="https://www.whatsapp.com" className={styles.icon}>
                    <FontAwesomeIcon icon={faWhatsapp} size='lg'  id='social'/>
                </a>
            </li>
            <li>
                <a href="https://twitter.com" className={styles.icon} >
                    <FontAwesomeIcon icon={faTwitter} size='lg'/>
                </a>
            </li>
        </ul>
    </footer>
    )
}

export default Footer