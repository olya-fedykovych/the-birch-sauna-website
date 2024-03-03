import { Link } from 'react-router-dom';
import './Confirmation.css';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';


const Confirmation = () => {
    return (
        <>
        <Header />
        <div className="confirmation">
        -t
            <div className="overlay">
                <h1 className="confirmation-title">Thank you, your booking has been confirmed!</h1>
                <h3 className="confirmation-text">Booking number: {Math.floor((Math.random() * 9) + 743488926)}</h3>
                <h3 className="confirmation-text">PIN: {Math.floor((Math.random() * 4) + 8264)}</h3>
                <Link className="hero-btn" to='/'>Back Home</Link>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default Confirmation;