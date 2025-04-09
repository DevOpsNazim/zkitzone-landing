// import React from "react";
// import "../css/About.css";

// export const About = () => {
//   return (
//     <section id="about" className="about-section py-5 px-4 bg-light">
//       <div className="container">
//         <h2 className="text-center fw-semibold mb-4">Why ZK IT Zone?</h2>
//         <div className="mx-auto" style={{ maxWidth: "800px" }}>
//           <p>
//             At ZK IT Zone, we’re passionate about empowering businesses through
//             smart, scalable, and secure technology solutions. From cutting-edge
//             web and app development to robust cloud infrastructure, DevOps
//             automation, and enterprise-grade cybersecurity, we deliver IT
//             services designed to elevate your operations.
//           </p>
//           <p>
//             Our team of certified experts works closely with you to understand
//             your unique needs and craft solutions that drive real results. With
//             24/7 support, transparent communication, and a commitment to
//             excellence, your satisfaction is not just our goal—it’s our
//             guarantee. At ZK IT Zone, your success is our mission.
//           </p>
//           <ul className="mt-4">
//             <li>✅ Certified in AWS, Azure, Docker, Linux</li>
//             <li>✅ Trusted by startups, SMBs, and global brands</li>
//             <li>✅ 100% committed to performance, security, and support</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };
import React from "react";
import "../css/About.css";

export const About = () => {
  return (
    <section id="about" className="about-section py-5 px-4 bg-light">
      <div className="container">
        <h2 className="text-center fw-semibold mb-4 animate__animated animate__fadeIn">
          Why ZK IT Zone?
        </h2>
        <div className="mx-auto" style={{ maxWidth: "800px" }}>
          <p className="animate__animated animate__fadeIn animate__delay-1s">
            At ZK IT Zone, we’re passionate about empowering businesses through
            smart, scalable, and secure technology solutions. From cutting-edge
            web and app development to robust cloud infrastructure, DevOps
            automation, and enterprise-grade cybersecurity, we deliver IT
            services designed to elevate your operations.
          </p>
          <p className="animate__animated animate__fadeIn animate__delay-2s">
            Our team of certified experts works closely with you to understand
            your unique needs and craft solutions that drive real results. With
            24/7 support, transparent communication, and a commitment to
            excellence, your satisfaction is not just our goal—it’s our
            guarantee. At ZK IT Zone, your success is our mission.
          </p>
          <ul className="mt-4 animate__animated animate__fadeIn animate__delay-3s">
            <li>✅ Certified in AWS, Azure, Docker, Linux</li>
            <li>✅ Trusted by startups, SMBs, and global brands</li>
            <li>✅ 100% committed to performance, security, and support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
