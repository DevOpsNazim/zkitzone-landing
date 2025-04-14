// import React, { useState } from "react";
// import logo from "../assets/img/logo.png";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header id="header" className="header d-flex align-items-center fixed-top">
//       <div className="container-fluid container-xl position-relative d-flex align-items-center">
//         <a href="/" className="logo d-flex align-items-center me-auto">
//           <img src={logo} alt="Logo" />
//           <h1 className="sitename">ZkItZone</h1>
//         </a>

//         {/* Toggle button for mobile */}
//         <i
//           className="mobile-nav-toggle d-xl-none bi bi-list"
//           onClick={toggleMenu}
//           style={{ cursor: "pointer", fontSize: "1.5rem" }}
//         ></i>

//         <nav
//           id="navmenu"
//           className={`navmenu ${menuOpen ? "d-block" : "d-none"} d-xl-block`}
//         >
//           <ul>
//             <li>
//               <a href="#hero" className="active">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#about">About</a>
//             </li>
//             <li>
//               <a href="#services">Services</a>
//             </li>
//             <li>
//               <a href="#features">Features</a>
//             </li>
//             <li>
//               <a href="#testimonials">Testimonials</a>
//             </li>
//             <li>
//               <a href="#faq">Faq</a>
//             </li>
//             <li>
//               <a href="#pricing">Pricing</a>
//             </li>
//             <li>
//               <a href="#contact">Contact</a>
//             </li>
//           </ul>
//         </nav>

//         <a className="btn-getstarted flex-md-shrink-0" href="#contact">
//           Get Started
//         </a>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React from "react";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <header id="header" className="header fixed-top bg-white shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid container-xl">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <img src={logo} alt="Logo" height="40" className="me-2" />
            <span className="fw-bold">ZkItZone</span>
          </a>

          {/* Mobile Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {[
                ["Home", "#hero"],
                ["About", "#about"],
                ["Services", "#services"],
                ["Features", "#features"],
                ["Testimonials", "#testimonials"],
                ["Faq", "#faq"],
                ["Pricing", "#pricing"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label} className="nav-item">
                  <a href={href} className="nav-link">
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn btn-primary ms-lg-3">
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
