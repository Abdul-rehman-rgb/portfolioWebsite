import About from "./assets/components/About";
import Projects from "./assets/components/cards/Projects";
import Skills from "./assets/components/cards/Skills";
import ContactMe from "./assets/components/ContactMe";
import Footer from "./assets/components/Footer";
import Navbar from "./assets/components/header/Navbar";
import MainHeading from "./assets/components/heading/MainHeading";
import Hero from "./assets/components/Hero";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
