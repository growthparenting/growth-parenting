import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [page, setPage] = useState("Home");

  useEffect(() => {
    // Fonts
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Inter:wght@300;400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Underline animation CSS
    const style = document.createElement("style");
    style.innerHTML = `
      .nav-item:hover .underline {
        width: 100%;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const navItems = ["Home", "About", "Coaching", "Contact"];

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

  const Image = ({ src, alt, width = "100%" }) => (
    <img
      src={src}
      alt={alt}
      style={{
        width,
        borderRadius: "20px",
        marginTop: "20px",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => (e.target.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
    />
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
              If you’re feeling overwhelmed, reactive, or unsure how to respond to your child, you’re not alone.
            </p>

            <Button onClick={() => setPage("Coaching")}>
              Book Your Free Intro Session
            </Button>

            <Image src="/hero.jpg" alt="Parent and child connecting" />
          </Section>

          <Section>
            <h2 style={{ fontFamily: "Playfair Display" }}>How I Help</h2>
            <div style={{ display: "grid", gap: "30px", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" }}>
              <Card>
                <h3>Stay Calm</h3>
                <p>Respond instead of react.</p>
              </Card>
              <Card>
                <h3>Understand Behavior</h3>
                <p>See what’s underneath actions.</p>
              </Card>
              <Card>
                <h3>Build Connection</h3>
                <p>Create trust and safety.</p>
              </Card>
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
            I am a certified parenting coach helping families move from overwhelm to connection and confidence.
          </p>

          <Image src="/you.jpg" alt="Parent coach portrait" width="300px" />
        </Section>
      );
    }

    if (page === "Coaching") {
      return (
        <Section>
          <h1 style={{ fontFamily: "Playfair Display" }}>Book a Session</h1>
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
            <div
              key={item}
              onClick={() => setPage(item)}
              className="nav-item"
              style={{
                marginLeft: "20px",
                cursor: "pointer",
                position: "relative",
                display: "inline-block"
              }}
            >
              {item}
              <span
                className="underline"
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: "-4px",
                  width: "0%",
                  height: "2px",
                  background: "#d97745",
                  transition: "width 0.3s ease"
                }}
              ></span>
            </div>
          ))}
        </div>
      </nav>

      {renderPage()}
    </div>
  );
}
