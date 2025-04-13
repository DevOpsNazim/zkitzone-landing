import { useEffect } from "react";

function Features() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="features">
      <h2>Our Features</h2>
      <div className="feature-grid">
        <div className="feature-card fade-in" data-aos="fade-up">
          <i className="fas fa-bolt"></i>
          <h3>Fast & Secure</h3>
          <p>Blazing-fast performance with top-tier encryption.</p>
        </div>
        <div
          className="feature-card fade-in"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <i className="fas fa-cloud"></i>
          <h3>Cloud-Based</h3>
          <p>All services accessible anytime, anywhere.</p>
        </div>
        <div
          className="feature-card fade-in"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <i className="fas fa-headset"></i>
          <h3>24/7 Support</h3>
          <p>Friendly and fast support available round-the-clock.</p>
        </div>
      </div>
    </section>
  );
}
export default Features;
