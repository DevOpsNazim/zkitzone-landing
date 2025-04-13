// export default App;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import Header from "./components/Header";
import Hero from "./components/Hero";
import Values from "./components/Values";
import Stats from "./components/Stats";
// import Header from "./components/Header";
// import Features from "./components/Features";
import About from "./components/About";
// import Testimonials from "./components/Testimonials";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main class="main">
        <Header />
        <Hero />
        {/* <Features /> */}
        <About />
        <Values />
        <Stats />
        {/* <Testimonials /> */}
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default App;
