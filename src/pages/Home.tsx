import Resume from "../sections/Resume";
import Navbar from "../sections/Navbar";
import Skills from "../sections/Skills";
import Technologies from "../sections/Technologies";
import Hero from "../sections/NewHero";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Projects from "../sections/Projects";
import { usePageAnimations } from "../hooks/usePageAnimations";
import NewHero from "../sections/NewHero";

export default function Home() {
  // Ralentir légèrement le scroll (0.85 = environ 15% plus lent)
  // useSmoothScroll(0.85);
  
  // Activer les animations de page
  usePageAnimations();

  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <NewHero />
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
