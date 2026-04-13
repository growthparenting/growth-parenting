import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function App() {
  const [page, setPage] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Inter:wght@300;400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const navItems = [
    "Home",
    "About",
    "Individual Coaching",
    "Group Classes",
    "Blog",
    "Contact",
  ];

  const Section = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ display: "flex", flexDirection: "column", gap: "60px" }}
    >
      {children}
    </motion.div>
  );

  const cardStyle = {
    background: "rgba(255,255,255,0.06)",
    padding: "30px",
    borderRadius: "16px",
    transition: "all 0.3s ease",
  };

  const hoverCard = (e, enter) => {
    e.currentTarget.style.transform = enter ? "translateY(-6px) scale(1.02)" : "none";
  };

  const CalendlyEmbed = () => (
    <div style={{ width: "100%", height: "700px", borderRadius: "16px", overflow: "hidden" }}>
      <iframe src="https://calendly.com/your-link" width="100%" height="100%" frameBorder="0"></iframe>
    </div>
  );

  const Testimonials = () => (
    <div style={{ display: "grid", gap: "40px", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" }}>
      {["This coaching changed our family dynamic!", "I feel so much more confident as a parent.", "Practical tools that actually work."].map((quote, i) => (
        <div
          key={i}
          style={cardStyle}
          onMouseEnter={(e) => hoverCard(e, true)}
          onMouseLeave={(e) => hoverCard(e, false)}
        >
          <p style={{ fontStyle: "italic" }}>“{quote}”</p>
          <p style={{ marginTop: "20px", opacity: 0.7 }}>— Happy Parent</p>
        </div>
      ))}
    </div>
  );

  const Approach = () => (
    <div style={{ display: "grid", gap: "40px", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" }}>
      {["Connect", "Understand", "Guide"].map((item) => (
        <div
          key={item}
          style={cardStyle}
          onMouseEnter={(e) => hoverCard(e, true)}
          onMouseLeave={(e) => hoverCard(e, false)}
        >
          <h3 style={{ fontFamily: "Playfair Display", fontSize: "22px" }}>{item}</h3>
        </div>
      ))}
    </div>
  );

  const renderPage = () => {
    switch (page) {
      case "Home":
        return (
          <Section>
            <div style={{ display: "grid", gap: "60px" }}>
              <div>
                <p style={{ textTransform: "uppercase", fontSize: "12px", opacity: 0.7 }}>
                  Parent Coaching for Deeper Connection & Lasting Change
                </p>
                <h1 style={{ fontFamily: "Playfair Display", fontSize: "48px" }}>
                  Calm, Confident Parenting Starts Here
                </h1>
                <p style={{ marginTop: "20px", opacity: 0.8 }}>
                  Parenting can feel overwhelming—but with support, you can build connection and confidence.
                </p>
              </div>
            </div>

            <Approach />

            <div>
              <h2 style={{ fontFamily: "Playfair Display" }}>What Parents Are Saying</h2>
              <Testimonials />
            </div>
          </Section>
        );

      case "About":
        return (
          <Section>
            <h1 style={{ fontFamily: "Playfair Display" }}>About</h1>
            <p>
              I am a certified parenting coach helping families build connection, confidence, and clarity.
            </p>
          </Section>
        );

      case "Individual Coaching":
        return (
          <Section>
            <h1 style={{ fontFamily: "Playfair Display" }}>Individual Coaching</h1>
            <CalendlyEmbed />
          </Section>
        );

      case "Contact":
        return (
          <Section>
            <h1 style={{ fontFamily: "Playfair Display" }}>Contact</h1>
            <CalendlyEmbed />
          </Section>
        );

      default:
        return <Section><p>Coming soon</p></Section>;
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#2c5f5d,#4b3f72)", color: "white", fontFamily: "Inter" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
        <div style={{ fontFamily: "Playfair Display" }}>Growth Parenting</div>
        <div>
          {navItems.map((item) => (
            <button key={item} onClick={() => setPage(item)} style={{ marginLeft: "10px" }}>
              {item}
            </button>
          ))}
        </div>
      </nav>

      <main style={{ padding: "40px", maxWidth: "1000px", margin: "auto" }}>{renderPage()}</main>

      <footer style={{ textAlign: "center", padding: "20px", opacity: 0.6 }}>
        © {new Date().getFullYear()} Growth Parenting
      </footer>
    </div>
  );
}
