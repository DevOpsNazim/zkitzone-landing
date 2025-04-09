import "./App.css";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
