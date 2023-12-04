import Hero from "../Hero/Hero";
import About from "../About/About";
import Info from "../Info/Info";
import Contact from "../Contact/Contact";
import Button from "../Info/Button";

const Home = () => {
    return (
    <div className='home'>
        <Hero />
        <About />
        <Info />
        <Button />
        <Contact />
    </div>
    )
}

export default Home;