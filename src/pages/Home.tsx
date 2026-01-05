import Resume from "../sections/Resume";
import Navbar from "../sections/Navbar";
import Skills from "../sections/Skills";
import Technologies from "../sections/Technologies";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import ContactModal from "../sections/ContactModal";
import Footer from "../sections/Footer";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
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
      <Resume />
      <Skills />
      <Technologies />
      <Projects />
      <Footer />
      <ContactModal />
    </>
  );
}
