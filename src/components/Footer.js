import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      {/* Newsletter */}
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <p>
                Subscribe to our newsletter and receive the latest news about
                our products and services!
              </p>
              <form
                className="php-email-form"
                action="https://formspree.io/f/xyzebyvj"
                method="POST"
              >
                <div className="newsletter-form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <input type="submit" value="Subscribe" />
                </div>
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your subscription request has been sent. Thank you!
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Top */}
      <div className="container footer-top">
        <div className="row gy-4">
          {/* About */}
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="/" className="d-flex align-items-center">
              <span className="sitename">ZkItZone</span>
            </a>
            <div className="footer-contact pt-3">
              <p>H-15, STR-32 Canal Park Gulberg-2</p>
              <p>Lahore, Pakistan</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+92 (306) 911-3060</span>
              </p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+92 (304) 988-7779</span>
              </p>
              <p>
                <strong>Email:</strong> <span>contact@zkitzone.com</span>
              </p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i> <a href="/">Home</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <a href="about">About us</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <a href="services">Services</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <a href="#">Terms of service</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <a href="#">Web Design</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <a href="#">Web Development</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <a href="#">Product Management</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <a href="#">Marketing</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-lg-4 col-md-12">
            <h4>Follow Us</h4>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <div className="social-links d-flex">
              <a href="#">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">ZkItZone</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by <a href="https://zkitzone.com/">Zk IT Zone</a>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
