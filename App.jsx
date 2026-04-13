import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [page, setPage] = useState("Home");

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Inter:wght@300;400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const navItems = ["Home", "About", "Individual Coaching", "Contact"];

  const Section = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ marginBottom: "80px" }}
    >
      {children}
    </motion.div>
  );

  const cardStyle = {
    background: "rgba(255,255,255,0.08)",
    padding: "30px",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
  };

  const hover = (e, on) => {
    e.currentTarget.style.transform = on ? "translateY(-8px)" : "none";
    e.currentTarget.style.boxShadow = on
      ? "0 10px 30px rgba(0,0,0,0.2)"
      : "none";
  };

  const Button = ({ children, onClick }) => (
    <button
      onClick={onClick}
      style={{
        background: "#d97745",
        padding: "14px 28px",
        borderRadius: "30px",
        border: "none",
        color: "white",
        cursor: "pointer",
        fontSize: "16px",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
    >
      {children}
    </button>
  );

  const renderPage = () => {
    if (page === "Home") {
      return (
        <>
          <Section>
            <p style={{ textTransform: "uppercase", opacity: 0.6 }}>
              Parent Coaching for Deeper Connection & Lasting Change
            </p>
            <h1 style={{ fontFamily: "Playfair Display", fontSize: "52px" }}>
              Calm, Confident Parenting Starts Here
            </h1>
            <p style={{ maxWidth: "600px", lineHeight: 1.6, opacity: 0.85 }}>
              Parenting can feel overwhelming—but with the right support, you can
              build connection, confidence, and a calmer relationship with your
              child.
            </p>
            <Button onClick={() => setPage("Individual Coaching")}>
              Book a Free Intro Session
            </Button>
          </Section>

          <Section>
            <div style={{ display: "grid", gap: "30px", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" }}>
              {["Connect", "Understand", "Guide"].map((item) => (
                <div
                  key={item}
                  style={cardStyle}
                  onMouseEnter={(e) => hover(e, true)}
                  onMouseLeave={(e) => hover(e, false)}
                >
                  <h3 style={{ fontFamily: "Playfair Display" }}>{item}</h3>
                </div>
              ))}
            </div>
          </Section>

          <Section>
            <h2 style={{ fontFamily: "Playfair Display" }}>Testimonials</h2>
            <div style={{ display: "grid", gap: "30px", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" }}>
              {["This coaching changed everything.", "I feel more confident.", "So helpful!"].map((t, i) => (
                <div
                  key={i}
                  style={cardStyle}
                  onMouseEnter={(e) => hover(e, true)}
                  onMouseLeave={(e) => hover(e, false)}
                >
                  <p>“{t}”</p>
                </div>
              ))}
            </div>
          </Section>
        </>
      );
    }

    if (page === "About") {
      return (
        <Section>
          <h1 style={{ fontFamily: "Playfair Display" }}>About</h1>
          <p style={{ maxWidth: "700px", lineHeight: 1.7 }}>
            I am a certified parenting coach helping families build connection,
            confidence, and clarity.
          </p>
        </Section>
      );
    }

    if (page === "Individual Coaching") {
      return (
        <Section>
          <h1 style={{ fontFamily: "Playfair Display" }}>Coaching</h1>
          <iframe
            src="https://calendly.com/your-link"
            style={{ width: "100%", height: "700px", border: "none", borderRadius: "20px" }}
          />
        </Section>
      );
    }

    if (page === "Contact") {
      return (
        <Section>
          <h1 style={{ fontFamily: "Playfair Display" }}>Contact</h1>
          <p>Email: your@email.com</p>
        </Section>
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#2f5d62,#5c4a72)",
        color: "white",
        fontFamily: "Inter",
        padding: "40px",
      }}
    >
      <nav style={{ display: "flex", justifyContent: "space-between", marginBottom: "60px" }}>
        <h2 style={{ fontFamily: "Playfair Display" }}>Growth Parenting</h2>
        <div>
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setPage(item)}
              style={{ marginLeft: "20px", background: "none", border: "none", color: "white", cursor: "pointer" }}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {renderPage()}
    </div>
  );
}
