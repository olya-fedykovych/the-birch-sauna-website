import { useInView } from 'react-intersection-observer';
import flowerLeft from '../../assets/flower-left.png';
import flowerRight from '../../assets/flower-right.png'
import './About.css';

const About = () => {
    const {ref: aboutRef, inView: isAboutInView} = useInView();
    return (
    <section  className="about" id='about'>
        <div ref={aboutRef}  className="aboutContainer">
            <img src={flowerLeft} className="flowerLeft" alt="flower-outline" />
            <img src={flowerRight} className="flowerRight" alt="flower-outline" />
            <h3 className={isAboutInView ? "slogan slogan-animate" : "slogan"}>Relax and unwind among hot steam and acerose scents in our <span className="textHighlighted">sauna</span>.
                Gather with your loved ones among nature in our <span className="textHighlighted">pavilions</span>.
            </h3>
        </div>
    </section>
    )
}

export default About