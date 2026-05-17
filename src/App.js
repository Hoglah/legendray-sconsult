import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Gallery from "./sections/Gallery";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Gallery url="http://localhost:4000" />
      <Contact />
      <Footer />
    </>
  );
}
