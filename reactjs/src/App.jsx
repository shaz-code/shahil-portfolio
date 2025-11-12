import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LenisScroll from './components/LenisScroll';

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Header />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </>
    );
}