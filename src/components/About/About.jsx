import flowerLeft from './flower-left.png';
import flowerRight from './flower-right.png'
import styles from './About.module.css';

const About = () => {
    return (
    <section className={styles.about} id='about'>
        <div className={styles.aboutContainer}>
            <img src={flowerLeft} className={styles.flowerLeft} alt="flower outline" />
            <img src={flowerRight} className={styles.flowerRight} alt="flower outline" />
            <h3 className={styles.slogan}>Relax and unwind among hot steam and acerose scents in our <span className={styles.textHighlighted}>sauna</span>.
                Gather with your loved ones among nature in our <span className={styles.textHighlighted}>pavilions</span>.
            </h3>
        </div>
    </section>
    )
}

export default About