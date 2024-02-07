import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
    const {ref: contactRef, inView: isContactInView} = useInView();
    return (
    <section className="contact" id='contact' ref={contactRef}>
            <div className={isContactInView ? "contact-container contact-container-animate" : "contact-container"}>
                <h3 className="contact-title">contact</h3>
                <div className="text-container">
                    <div className="section-left">
                        <div className="contact-text">
                            <FontAwesomeIcon icon={faPhone} />
                            <p>+48  588 066 344</p>
                        </div>
                        <div className="contact-text">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p>spn@email.com</p>
                        </div>
                    </div>
                    <div className="section-right">
                        <div className="contact-text">
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