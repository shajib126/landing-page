import "./App.css";
import { motion, useScroll } from "framer-motion";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Slider from "./Pages/Slider/Slider";
import Navbar from "./components/Navbar/Navbar";
import Features from "./Pages/Features/Features";
import Benefits from "./Pages/Benefits/Benefits";
import Testimonials from "./Pages/Testimonials/Testimonials";
import GetStarted from "./Pages/GetStarted/GetStarted";
import Products from "./Pages/Products/Products";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <Slider />
      <About />
      <Services />
      <Features />
      <Benefits/>
      <Testimonials/>
      <GetStarted/>
      <Products/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
