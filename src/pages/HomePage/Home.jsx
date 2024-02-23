import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Info from "../../components/Info/Info";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
    <div className='home'>
        <Header />
        <Hero />
        <About />
        <Info />
        <Contact />
        <Footer />
    </div>
    )
}

export default Home;