import "./App.css";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import Download from "./components/Download";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";

import { benefits, testimonials, partners } from '../src/assets/data';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Products />
      <Benefits benefits={benefits} />
      <Download />
      <Testimonials testimonials={testimonials} />
      <Partners partners={partners} />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
