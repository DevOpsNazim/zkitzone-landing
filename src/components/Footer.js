import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        <div className="row mb-4">
          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold footer-heading">ZK IT Zone</h5>
            <p className="footer-text">
              We provide innovative IT solutions to businesses—from web and app
              development to cloud services and cybersecurity. Your success is
              our mission.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold footer-heading">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#about" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="footer-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="footer-link">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold footer-heading">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" className="footer-social">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" className="footer-social">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" className="footer-social">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://instagram.com" className="footer-social">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="row mb-4">
          <div className="col-md-6">
            <h6 className="fw-semibold footer-heading">Our Address</h6>
            <p className="footer-text">
              H # 15, STR # 32 Canal Park Gulberg 2, Lahore.
            </p>
          </div>
          <div className="col-md-6">
            <h6 className="fw-semibold footer-heading">Contact Us</h6>
            <p className="footer-text">
              <strong>Phone 📞:</strong>{" "}
              <a href="tel:+923069113060" className="footer-link">
                +92 (306) 911-3060
              </a>
            </p>
            <p className="footer-text">
              <strong>Phone 📞:</strong>{" "}
              <a href="tel:+923049887779" className="footer-link">
                +92 (304) 988-7779
              </a>
            </p>
            <p className="footer-text">
              <strong>Email 📧:</strong>{" "}
              <a href="#contact" className="footer-link">
                contact@zkitzone.com
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-3 border-top border-secondary">
          <small>&copy; 2025 ZK IT Zone. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
};
