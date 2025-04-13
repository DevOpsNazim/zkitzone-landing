// export default App;
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import Header from "./components/Header";
import Hero from "./components/Hero";
import Values from "./components/Values";
import Stats from "./components/Stats";
import Features from "./components/Features";
import AltFeatures from "./components/AltFeatures";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
// import Header from "./components/Header";
// import Features from "./components/Features";
import About from "./components/About";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"

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
        <Services />
        <Features />
        <AltFeatures />
        <Pricing />
        <Faq />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
