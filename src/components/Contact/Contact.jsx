import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styles from './Contact.module.css';

const Contact = () => {
    return (
    <section className={styles.contact} id='contact'>
            <div className={styles.contactContainer}>
                <h3 className={styles.contactTitle}>contact</h3>
                <div className={styles.textContainer}>
                    <div className={styles.sectionLeft}>
                        <div className={styles.contactText}>
                            <FontAwesomeIcon icon={faPhone} />
                            <p>+48  588 066 344</p>
                        </div>
                        <div className={styles.contactText}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p>spn@email.com</p>
                        </div>
                    </div>
                    <div className={styles.sectionRight}>
                        <div className={styles.contactText}>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <p>0485 Pine Avenue, Forestwood</p>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
}

export default Contact;