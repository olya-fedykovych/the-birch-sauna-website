import { useInView } from 'react-intersection-observer';
import sauna from '../../assets/sauna.png';
import pavilion from '../../assets/pavilion.png';
import './Info.css';
import Button from './Button';

const Info = () => {
    const {ref: saunaRef, inView: isSaunaInView} = useInView();
    const {ref: pavilionRef, inView: isPavilionInView} = useInView();
    return (
    <section className="info">
        <div className='sauna-container'>
            <div className={isSaunaInView ? "sauna-description sauna-description-animate" : "sauna-description"}>
                <h6 className="text-bold">ambient</h6>
                <h2 className="info-title">hot sauna</h2>
                <p className="info-description-sauna">
                    Discover pure relaxation in our cozy sauna – a warm retreat that melts away stress and revitalizes your senses. 
                    Step into a haven of wellness as the finely crafted cedar walls release a gentle heat, promoting circulation, 
                    relieving stress, and rejuvenating both body and mind.
                </p>
            </div>
            <img src={sauna} className={isSaunaInView ? "sauna-img sauna-img-animate" : "sauna-img" } alt="sauna image" id='sauna' ref={saunaRef}/>
        </div>
        <div className="pavilion-container" >
            <div className={isPavilionInView ? "pavilion-description pavilion-description-animate" : "pavilion-description"}>
                <h6 className="text-bold">light</h6>
                <h2 className="info-title">cozy pavilions</h2>
                <p className="info-description-pavilion">
                A sophisticated space designed to elevate your outdoor experience. 
                Whether hosting gatherings or enjoying solitary moments, our pavilion offers a perfect combination of style and functionality. 
                With its sleek design and versatile features, this outdoor sanctuary creates an inviting atmosphere for relaxation and socializing.
                </p>
            </div>
            <img src={pavilion} className={isPavilionInView ? "pavilion-img pavilion-img-animate" : "pavilion-img" } alt="pavilion image" id='pavilions' ref={pavilionRef}/>
        </div>
    </section>
    )
}

export default Info;