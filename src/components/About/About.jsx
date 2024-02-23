import { useInView } from 'react-intersection-observer';
import flowerLeft from '../../assets/flower-left.png';
import flowerRight from '../../assets/flower-right.png'
import './About.css';

const About = () => {
    const {ref: aboutRef, inView: isAboutInView} = useInView();
    return (
    <section  className="about" id='about'>
        <div ref={aboutRef}  className="about-container">
            <img src={flowerLeft} className="flower-left" alt="flower-outline" />
            <img src={flowerRight} className="flower-right" alt="flower-outline" />
            <h3 className={isAboutInView ? "slogan slogan-animate" : "slogan"}>Relax and unwind among hot steam and acerose scents in our <span className="text-highlighted">sauna</span>.
                Gather with your loved ones among nature in our <span className="text-highlighted">pavilions</span>.
            </h3>
        </div>
    </section>
    )
}

export default About