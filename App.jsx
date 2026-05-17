// App.jsx
import React from "react";

export default function App() {
  return (
    <div style={styles.page}>
      <header style={styles.navbar}>
        <h1 style={styles.logo}>NovaTech Solutions</h1>
      </header>

      <main style={styles.heroSection}>
        <div style={styles.content}>
          <h2 style={styles.heading}>
            Build Smarter Digital Experiences
          </h2>

          <p style={styles.description}>
            NovaTech Solutions helps businesses grow with modern web
            applications, cloud solutions, and user-focused digital products.
            We create scalable technology that drives innovation and delivers
            real business results.
          </p>

          <button style={styles.button}>
            Get Started
          </button>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Why Choose Us?</h3>

          <ul style={styles.list}>
            <li>✔ Modern & Responsive Design</li>
            <li>✔ Fast and Secure Applications</li>
            <li>✔ Scalable Cloud Solutions</li>
            <li>✔ 24/7 Technical Support</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #0f172a, #1e293b)",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
  },

  navbar: {
    padding: "20px 60px",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },

  logo: {
    margin: 0,
    fontSize: "28px",
    fontWeight: "bold",
    color: "#38bdf8",
  },

  heroSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "80px 60px",
    gap: "40px",
    flexWrap: "wrap",
  },

  content: {
    flex: 1,
    minWidth: "300px",
  },

  heading: {
    fontSize: "52px",
    marginBottom: "20px",
    lineHeight: "1.2",
  },

  description: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#cbd5e1",
    maxWidth: "600px",
    marginBottom: "30px",
  },

  button: {
    backgroundColor: "#38bdf8",
    color: "#0f172a",
    border: "none",
    padding: "14px 28px",
    fontSize: "18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.08)",
    padding: "30px",
    borderRadius: "16px",
    minWidth: "300px",
    backdropFilter: "blur(10px)",
  },

  cardTitle: {
    marginBottom: "20px",
    fontSize: "24px",
  },

  list: {
    listStyle: "none",
    padding: 0,
    lineHeight: "2",
    color: "#e2e8f0",
  },
};