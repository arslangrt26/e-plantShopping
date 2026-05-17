import React, { useState } from "react";

export default function App() {
  const [showProducts, setShowProducts] = useState(false);

  const products = [
    "Snake Plant",
    "Peace Lily",
    "Aloe Vera",
    "Spider Plant",
  ];

  return (
    <div style={styles.page}>
      <header style={styles.navbar}>
        <h1 style={styles.logo}>Welcome to Paradise Nursery</h1>
      </header>

      <main style={styles.heroSection}>
        <div style={styles.content}>
          <h2 style={styles.heading}>
            Bring Nature Into Your Home
          </h2>

          <p style={styles.description}>
            Paradise Nursery offers beautiful, healthy indoor plants to help
            you create a greener, fresher, and more peaceful living space.
            Discover plants that fit your lifestyle and environment.
          </p>

          <button
            style={styles.button}
            onClick={() => setShowProducts(true)}
          >
            Get Started
          </button>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Why Choose Us?</h3>

          <ul style={styles.list}>
            <li>✔ Fresh & Healthy Plants</li>
            <li>✔ Easy Home Delivery</li>
            <li>✔ Care Guidance Included</li>
            <li>✔ Affordable Pricing</li>
          </ul>

          {showProducts && (
            <div style={{ marginTop: "20px" }}>
              <h4>Our Products:</h4>
              <ul style={styles.list}>
                {products.map((item, index) => (
                  <li key={index}>🌿 {item}</li>
                ))}
              </ul>
            </div>
          )}
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
    color: "#22c55e",
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
    backgroundColor: "#22c55e",
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
