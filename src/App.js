import "./App.css";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import {Contact} from "./components/Contact"


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
