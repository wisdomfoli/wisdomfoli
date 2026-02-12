import Resume from "../sections/Resume";
import Navbar from "../sections/Navbar";
import Skills from "../sections/Skills";
import Technologies from "../sections/Technologies";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Projects from "../sections/Projects";
import { usePageAnimations } from "../hooks/usePageAnimations";

export default function Home() {
  // Ralentir légèrement le scroll (0.85 = environ 15% plus lent)
  // useSmoothScroll(0.85);
  
  // Activer les animations de page
  usePageAnimations();

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Technologies />
      <Resume />
      
      <Projects />
      
      <Contact />
      <Footer />
    </>
  );
}
