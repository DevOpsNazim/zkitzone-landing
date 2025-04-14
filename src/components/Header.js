import React, { useEffect, useRef } from "react";
import logo from "../assets/img/logo.png";
import * as bootstrap from "bootstrap";

const Header = () => {
  const collapseRef = useRef(null);

  useEffect(() => {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    const handleClick = () => {
      if (
        window.innerWidth < 992 &&
        collapseRef.current?.classList.contains("show")
      ) {
        const collapseInstance = bootstrap.Collapse.getInstance(
          collapseRef.current
        );
        if (collapseInstance) {
          collapseInstance.hide();
        }
      }
    };

    navLinks.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleClick)
      );
    };
  }, []);

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
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            ref={collapseRef}
          >
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
