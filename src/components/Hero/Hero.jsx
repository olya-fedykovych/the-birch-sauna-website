import styles from './Hero.module.css';

const Hero = () => {
    return (
    <section className={styles.hero} id='home'>
        <div className={styles.heroText}>
            <h1 className={styles.mainTitle}>saunas. pavilions. nature.</h1>
            <a href="#sauna" className={styles.heroBtn}>discover more</a>
        </div>
    </section>
    )
}

export default Hero;