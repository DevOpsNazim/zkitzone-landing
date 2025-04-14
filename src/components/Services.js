import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      icon: "bi-code-slash",
      title: "Web Development & App Design",
      desc: "We craft high-performance websites and mobile apps tailored to your brand and goals. From UI/UX design to backend development, our solutions are fast, secure, and scalable. Whether you're launching a startup or modernizing an enterprise app, we bring your vision to life.",
      style: "item-cyan",
      delay: 100,
    },
    {
      icon: "bi-cloud-check",
      title: "Cloud Solutions (AWS, Azure, GCP)",
      desc: "We design, deploy, and manage cloud infrastructure tailored to your business needs. From migrations to optimization, we ensure scalability, security, and cost-efficiency. Our certified experts work across AWS, Azure, and Google Cloud platforms.",
      style: "item-orange",
      delay: 200,
    },
    {
      icon: "bi-shield-lock",
      title: "Cybersecurity & Data Protection",
      desc: "We safeguard your digital assets with proactive threat detection and advanced encryption. From firewalls to compliance audits, we secure every layer of your IT environment. Stay protected against breaches, data loss, and evolving cyber threats.",
      style: "item-teal",
      delay: 300,
    },
    {
      icon: "bi-diagram-3",
      title: "Network Setup & Remote Support",
      desc: "We build fast, secure, and scalable networks tailored to your office or remote teams. From router configuration to VPNs, we ensure seamless connectivity and uptime. Our 24/7 remote support resolves issues quickly to keep your operations running smoothly.",
      style: "item-red",
      delay: 400,
    },
    {
      icon: "bi-gear-wide-connected",
      title: "DevOps & CI/CD Automation",
      desc: "We streamline your development lifecycle with automated builds, testing, and deployments. Our DevOps practices boost release speed, reliability, and collaboration across teams. From GitHub Actions to Docker and Kubernetes, we optimize your entire pipeline.",
      style: "item-indigo",
      delay: 500,
    },
    {
      icon: "bi-database-check",
      title: "Database Migration",
      desc: "We specialize in end-to-end database migration solutions—from MySQL, PostgreSQL, and MariaDB to cloud-native databases. Our experts ensure zero downtime, full data integrity, and optimized performance during every transition.",
      style: "item-pink",
      delay: 600,
    },
    {
      icon: "bi-hdd-stack",
      title: "Backup & Restore",
      desc: "Protect your critical data with robust backup and recovery strategies. We automate backups, implement secure storage, and offer disaster recovery to ensure your data is safe and always recoverable.",
      style: "item-cyan",
      delay: 700,
    },
    {
      icon: "bi-camera-video",
      title: "CCTV Installation",
      desc: "Professional CCTV setup for security and peace of mind. We install high-resolution surveillance with remote monitoring to keep your property safe and under watch 24/7.",
      style: "item-orange",
      delay: 800,
    },
    {
      icon: "bi-server",
      title: "On-Site Data Center Deployment",
      desc: "Complete setup of on-prem data centers from server installation to networking, giving your business robust infrastructure control, security, and performance.",
      style: "item-teal",
      delay: 900,
    },
  ];

  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>What We Do</h2>
        <p>
          Discover our full suite of IT services designed to empower your
          business.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div
                className={`service-item ${service.style} position-relative`}
              >
                <i className={`bi ${service.icon} icon`}></i>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
