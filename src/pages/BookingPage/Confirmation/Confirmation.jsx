import { Link } from 'react-router-dom';
import './Confirmation.css';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';


const Confirmation = () => {
    return (
        <>
        <Header />
        <div className="confirmation">
            
            <div className="overlay">
                <h1 className="confirmationTitle">Thank you, your booking has been confirmed!</h1>
                <h3 className="confirmationText">Booking number: {Math.floor((Math.random() * 9) + 743488926)}</h3>
                <h3 className="confirmationText">PIN: {Math.floor((Math.random() * 4) + 8264)}</h3>
                <Link className="heroBtn" to='/'>Back Home</Link>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default Confirmation;