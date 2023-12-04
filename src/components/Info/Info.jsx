import sauna from './sauna.png';
import pavilion from './pavilion.png';
import styles from './Info.module.css';
import { Link } from 'react-router-dom';

const Info = () => {
    return (
    <section className={styles.info}>
        <div className={styles.saunaContainer}>
            <div className={styles.saunaDescription}>
                <h6 className={styles.textBold}>ambient</h6>
                <h2 className={styles.infoTitle}>hot sauna</h2>
                <p className={styles.infoDescriptionSauna}>Lorem ipsum dolor sit amet consectetur. 
                    Turpis quis ac tristique mi id mauris amet. 
                    Bibendum vitae lobortis massa a cursus aliquet nisi a at.
                </p>
            </div>
            <img src={sauna} className={styles.saunaImg} alt="sauna" id='sauna'/>
        </div>
        <div className={styles.pavilionContainer}>
            <div className={styles.pavilionDescription}>
                <h6 className={styles.textBold}>light</h6>
                <h2 className={styles.infoTitle}>cozy pavilions</h2>
                <p className={styles.infoDescriptionPav}>Lorem ipsum dolor sit amet consectetur. 
                    Turpis quis ac tristique mi id mauris amet. 
                    Bibendum vitae lobortis massa a cursus aliquet nisi a at.
                </p>
            </div>
            <img src={pavilion} className={styles.pavilionImg} alt="pavilion" id='pavilions'/>
        </div>
    </section>
    )
}

export default Info;