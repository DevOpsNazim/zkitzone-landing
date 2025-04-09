import React from "react";
import "../css/Services.css";

export const Services=()=> {
  const services = [
    {
      title: "Web Development & App Design",
      desc: "We craft high-performance websites and mobile apps tailored to your brand and goals. From UI/UX design to backend development, our solutions are fast, secure, and scalable. Whether you're launching a startup or modernizing an enterprise app, we bring your vision to life.",
    },
    {
      title: "Cloud Solutions (AWS, Azure, GCP)",
      desc: "We design, deploy, and manage cloud infrastructure tailored to your business needs. From migrations to optimization, we ensure scalability, security, and cost-efficiency. Our certified experts work across AWS, Azure, and Google Cloud platforms.",
    },
    {
      title: "Cybersecurity & Data Protection",
      desc: "We safeguard your digital assets with proactive threat detection and advanced encryption. From firewalls to compliance audits, we secure every layer of your IT environment. Stay protected against breaches, data loss, and evolving cyber threats.",
    },
    {
      title: "Network Setup & Remote Support",
      desc: "We build fast, secure, and scalable networks tailored to your office or remote teams. From router configuration to VPNs, we ensure seamless connectivity and uptime. Our 24/7 remote support resolves issues quickly to keep your operations running smoothly.",
    },
    {
      title: "DevOps & CI/CD Automation",
      desc: "We streamline your development lifecycle with automated builds, testing, and deployments. Our DevOps practices boost release speed, reliability, and collaboration across teams. From GitHub Actions to Docker and Kubernetes, we optimize your entire pipeline.",
    },
    {
      title: "Database Migration",
      desc: "We specialize in end-to-end database migration solutions—from MySQL, PostgreSQL, and MariaDB to cloud-native databases. Our experts ensure zero downtime, full data integrity, and optimized performance during every transition.",
    },
    {
      title: "Backup & Restore",
      desc: "Protect your critical data with robust backup and recovery strategies. We automate backups, implement secure storage, and offer disaster recovery to ensure your data is safe and always recoverable.",
    },
    {
      title: "CCTV Installation",
      desc: "Professional CCTV setup for security and peace of mind. We install high-resolution surveillance with remote monitoring to keep your property safe and under watch 24/7.",
    },
    {
      title: "On-Site Data Center Deployment",
      desc: "Complete setup of on-prem data centers from server installation to networking, giving your business robust infrastructure control, security, and performance.",
    },
  ];

  return (
    <section id="services" className="services-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">What We Do</h2>
        <div className="row">
          {services.map((service, idx) => (
            <div key={idx} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm service-card">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold text-primary">
                    {service.title}
                  </h5>
                  <p className="card-text text-secondary mt-2">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


