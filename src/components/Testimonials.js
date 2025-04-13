function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Clients Say</h2>
      <div className="testimonial-card fade-in" data-aos="fade-up">
        <p>"Excellent service and support. Truly game-changing!"</p>
        <span>— Alex, CTO</span>
      </div>
      <div
        className="testimonial-card fade-in"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <p>"Seamless integration and amazing speed."</p>
        <span>— Maria, Startup Founder</span>
      </div>
    </section>
  );
}
export default Testimonials;
