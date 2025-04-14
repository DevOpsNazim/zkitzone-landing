import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Pricing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const pricingPlans = [
    {
      name: "Starter",
      price: 99,
      color: "#20c997",
      icon: "bi-box",
      features: [
        "Basic Website (5 Pages)",
        "Free Domain & Hosting (1 Year)",
        "SSL Security",
        { text: "Cloud Integration", unavailable: true },
        { text: "Ongoing Support", unavailable: true },
      ],
      delay: 100,
    },
    {
      name: "Pro Business",
      price: 249,
      color: "#0dcaf0",
      icon: "bi-laptop",
      features: [
        "Custom Web Design + Mobile Optimization",
        "Domain, Hosting & SSL (1 Year)",
        "Basic SEO Setup",
        "1 Cloud Account Setup (AWS/Azure)",
        { text: "24/7 Support", unavailable: true },
      ],
      featured: true,
      delay: 200,
    },
    {
      name: "Enterprise",
      price: 499,
      color: "#fd7e14",
      icon: "bi-building",
      features: [
        "Advanced Web App / Portal",
        "Cloud Infra (AWS/Azure/GCP)",
        "SEO, Speed & Security Optimization",
        "Database Integration & Backup",
        "Priority Support",
      ],
      delay: 300,
    },
    {
      name: "Ultimate IT Partner",
      price: 899,
      color: "#0d6efd",
      icon: "bi-rocket",
      features: [
        "All-in-One IT Package",
        "Web + Mobile App Development",
        "Cloud Infrastructure Management",
        "Cybersecurity Setup & Monitoring",
        "DevOps + CI/CD Pipeline",
      ],
      delay: 400,
    },
  ];

  return (
    <section id="pricing" className="pricing section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Pricing</h2>
        <p>
          Choose the plan that fits your business goals. Transparent,
          affordable, and scalable.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {pricingPlans.map((plan, index) => (
            <div
              className="col-lg-3 col-md-6"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={plan.delay}
            >
              <div className="pricing-tem">
                {plan.featured && <span className="featured">Featured</span>}
                <h3 style={{ color: plan.color }}>{plan.name}</h3>
                <div className="price">
                  <sup>$</sup>
                  {plan.price}
                  <span> / mo</span>
                </div>
                <div className="icon">
                  <i
                    className={`bi ${plan.icon}`}
                    style={{ color: plan.color }}
                  ></i>
                </div>
                <ul>
                  {plan.features.map((item, i) =>
                    typeof item === "string" ? (
                      <li key={i}>{item}</li>
                    ) : (
                      <li key={i} className={item.unavailable ? "na" : ""}>
                        {item.text}
                      </li>
                    )
                  )}
                </ul>
                <a href="#contact" className="btn-buy">
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
