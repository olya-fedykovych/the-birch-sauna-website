import { useInView } from 'react-intersection-observer';
import './Hero.css';

const Hero = () => {
    const {ref: heroRef, inView: isHeroInView} = useInView();
    return (
    <section className="hero" id='home' ref={heroRef}>
        <div className={isHeroInView ? "hero-text hero-text-animate" : "hero-text"}>
            <h1 className="main-title">saunas. pavilions. nature.</h1>
            <a href="#sauna" className="hero-btn">discover more</a>
        </div>
    </section>
    )
}

export default Hero;