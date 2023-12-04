import { Link } from 'react-router-dom';
import styles from './Confirmation.module.css';


const Confirmation = () => {
    return (
    <div className={styles.confirmation}>
        <div className={styles.overlay}>
            <h1 className={styles.confirmationTitle}>Thank you, your booking has been confirmed!</h1>
            <h3 className={styles.confirmationText}>Booking number: {Math.floor((Math.random() * 9) + 743488926)}</h3>
            <h3 className={styles.confirmationText}>PIN: {Math.floor((Math.random() * 4) + 8264)}</h3>
            <Link className={styles.heroBtn} to='/home'>Back Home</Link>
        </div>
    </div>
    )
}

export default Confirmation;