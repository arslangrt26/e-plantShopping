import React from "react";

const AboutUs = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        maxWidth: "1000px",
        margin: "0 auto",
        lineHeight: "1.8",
        color: "#333",
      }}
    >
      {/* Hero Section */}
      <section style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "42px", color: "#0f172a" }}>About Us</h1>
        <p style={{ fontSize: "18px", color: "#555" }}>
          Building innovative digital solutions for businesses worldwide.
        </p>
      </section>

      {/* Company Overview */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#1e293b" }}>Who We Are</h2>
        <p>
          TechNova Solutions is a leading software development company focused
          on delivering modern web applications, mobile apps, and cloud-based
          solutions. Since our founding in 2018, we have helped startups and
          enterprises transform their ideas into scalable digital products.
        </p>
      </section>

      {/* Mission */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#1e293b" }}>Our Mission</h2>
        <p>
          Our mission is to empower businesses with technology that drives
          growth, improves efficiency, and creates exceptional user experiences.
        </p>
      </section>

      {/* Services */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#1e293b" }}>What We Do</h2>
        <ul>
          <li>Custom Web Application Development</li>
          <li>Mobile App Development</li>
          <li>UI/UX Design</li>
          <li>Cloud & DevOps Solutions</li>
          <li>E-commerce Development</li>
          <li>Digital Product Consulting</li>
        </ul>
      </section>

      {/* Stats */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginBottom: "50px",
        }}
      >
        <div
          style={{
            background: "#f1f5f9",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>150+</h3>
          <p>Projects Completed</p>
        </div>

        <div
          style={{
            background: "#f1f5f9",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>80+</h3>
          <p>Happy Clients</p>
        </div>

        <div
          style={{
            background: "#f1f5f9",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>25+</h3>
          <p>Team Members</p>
        </div>
      </section>

      {/* Team */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#1e293b" }}>Our Team</h2>
        <p>
          Our talented team consists of developers, designers, project managers,
          and technology consultants dedicated to creating impactful digital
          experiences.
        </p>
      </section>

      {/* Contact */}
      <section
        style={{
          background: "#0f172a",
          color: "#fff",
          padding: "30px",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <h2>Get In Touch</h2>
        <p>Email: contact@technova.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Location: New York, USA</p>
      </section>
    </div>
  );
};

export default AboutUs;