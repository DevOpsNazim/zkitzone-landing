import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-transparent py-3">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">
          ZK IT Zone
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarCollapse"
        >
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
