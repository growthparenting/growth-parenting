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

  const navItems = ["Home", "About Me", "Coaching", "Contact"];

  const Section = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ marginBottom: "100px" }}
    >
      {children}
    </motion.div>
  );

  const Button = ({ children, onClick }) => (
    <button
      onClick={onClick}
      style={{
        background: "#d97745",
        padding: "16px 32px",
        borderRadius: "40px",
        border: "none",
        color: "white",
        cursor: "pointer",
        fontSize: "16px",
        marginTop: "20px",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
    >
      {children}
    </button>
  );

  const Card = ({ children }) => (
    <div
      style={{
        background: "rgba(255,255,255,0.08)",
        padding: "30px",
        borderRadius: "20px",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
      }}
    >
      {children}
    </div>
  );

  const renderPage = () => {
    if (page === "Home") {
      return (
        <>
          <Section>
            <p style={{ textTransform: "uppercase", opacity: 0.6 }}>
              Parent Coaching for Deeper Connection & Lasting Change
            </p>
            <h1 style={{ fontFamily: "Playfair Display", fontSize: "56px", lineHeight: 1.2 }}>
              You don’t have to figure parenting out alone.
            </h1>
            <p style={{ maxWidth: "650px", lineHeight: 1.7, opacity: 0.85 }}>
              If you’re feeling overwhelmed, reactive, or unsure how to respond to your child, you’re not alone. Parenting is complex—and most of us were never given the tools we actually need.
            </p>
            <p style={{ maxWidth: "650px", lineHeight: 1.7, opacity: 0.85 }}>
              Together, we’ll help you build the skills to stay calm, understand your child more deeply, and create a more connected, peaceful relationship.
            </p>
            <Button onClick={() => setPage("Coaching")}>
              Book Your Free Intro Session
            </Button>
          </Section>

          <Section>
            <h2 style={{ fontFamily: "Playfair Display" }}>How I Help</h2>
            <div style={{ display: "grid", gap: "30px", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" }}>
              <Card>
                <h3>Stay Calm</h3>
                <p>Learn how to respond instead of react, even in hard moments.</p>
              </Card>
              <Card>
                <h3>Understand Behavior</h3>
                <p>See what’s underneath your child’s actions and emotions.</p>
              </Card>
              <Card>
                <h3>Build Connection</h3>
                <p>Create a relationship rooted in trust, safety, and respect.</p>
              </Card>
            </div>
          </Section>

          <Section>
            <h2 style={{ fontFamily: "Playfair Display" }}>What Parents Experience</h2>
            <div style={{ display: "grid", gap: "30px", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" }}>
              {["I feel calmer and more confident.", "Our home feels more peaceful.", "I understand my child so much better."].map((t, i) => (
                <Card key={i}>
                  <p>“{t}”</p>
                </Card>
              ))}
            </div>
          </Section>

          <Section>
            <h2 style={{ fontFamily: "Playfair Display" }}>Start Here</h2>
            <p style={{ maxWidth: "600px", opacity: 0.85 }}>
              Your first step is a free introductory session. We’ll talk about what’s going on in your family and how I can support you.
            </p>
            <Button onClick={() => setPage("Coaching")}>
              Schedule Your Session
            </Button>
          </Section>
        </>
      );
    }

    if (page === "About") {
      return (
        <Section>
          <h1 style={{ fontFamily: "Playfair Display" }}>About</h1>
          <p style={{ maxWidth: "700px", lineHeight: 1.7 }}>
            I am a certified parenting coach helping families move from overwhelm to clarity, connection, and confidence. My work began as a teacher, where I saw how much parents care—and how little support they receive.
          </p>
          <p style={{ maxWidth: "700px", lineHeight: 1.7 }}>
            I believe you already have what you need within you. My role is to help you access it, strengthen it, and apply it in a way that works for your unique child and family.
          </p>
        </Section>
      );
    }

    if (page === "Coaching") {
      return (
        <Section>
          <h1 style={{ fontFamily: "Playfair Display" }}>Book a Session</h1>
          <iframe
            src="https://calendly.com/staceymcschrader/30min"
            style={{ width: "100%", height: "700px", border: "none", borderRadius: "20px" }}
          />
        </Section>
      );
    }

    if (page === "Contact") {
      return (
        <Section>
          <h1 style={{ fontFamily: "Playfair Display" }}>Contact</h1>
          <p>Email: growthparentinginfo@gmail.com</p>
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
