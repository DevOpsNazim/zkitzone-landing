import "./App.css";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Footer } from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Footer/>
    </>
  );
}

export default App;
