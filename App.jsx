import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function App() {
  // SEO NOTES:
  // Add to your index.html <head> when deploying:
  // <title>Parent Coaching | Growth Parenting</title>
  // <meta name="description" content="Growth Parenting offers parent coaching to help families build connection, reduce conflict, and raise confident, resilient children." />
  // <meta name="keywords" content="parent coaching, parenting support, positive parenting, family coaching, parenting help" />
  // <meta property="og:title" content="Growth Parenting" />
  // <meta property="og:description" content="Parent coaching for connection, confidence, and growth." />
  // <meta property="og:type" content="website" />

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
      className="space-y-16"
    >
      {children}
    </motion.div>
  );

  const HoverCard = ({ children }) => (
    <div className="bg-white/5 p-8 rounded-2xl backdrop-blur transition transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl duration-300">
      {children}
    </div>
  );

  const CalendlyEmbed = () => (
    <div className="w-full h-[700px] rounded-2xl overflow-hidden shadow-lg">
      <iframe src="https://calendly.com/your-link" width="100%" height="100%" frameBorder="0"></iframe>
    </div>
  );

  const Testimonials = () => (
    <div className="grid md:grid-cols-3 gap-12">
      {["This coaching changed our family dynamic!", "I feel so much more confident as a parent.", "Practical tools that actually work."].map((quote, i) => (
        <HoverCard key={i}>
          <p className="italic text-lg">“{quote}”</p>
          <p className="mt-6 text-sm text-gray-300">— Happy Parent</p>
        </HoverCard>
      ))}
    </div>
  );

  const Approach = () => (
    <div className="grid md:grid-cols-3 gap-12">
      {[
        { title: "Connect", desc: "Build strong emotional bonds with your child." },
        { title: "Understand", desc: "Learn what drives behavior and emotions." },
        { title: "Guide", desc: "Use calm, effective strategies that work." },
      ].map((item) => (
        <HoverCard key={item.title}>
          <h3 className="text-2xl font-semibold font-[Playfair Display]">{item.title}</h3>
          <p className="text-base text-gray-300 mt-3">{item.desc}</p>
        </HoverCard>
      ))}
    </div>
  );

  const ContactForm = () => (
    <form className="grid gap-6 max-w-xl">
      <input placeholder="Name" className="p-4 rounded-xl text-black" />
      <input placeholder="Email" className="p-4 rounded-xl text-black" />
      <textarea placeholder="Message" className="p-4 rounded-xl text-black" />
      <button className="bg-orange-500 px-6 py-3 rounded-xl transition transform hover:scale-105 hover:bg-orange-400">
        Send Message
      </button>
    </form>
  );

  const ImageBlock = () => (
    // TODO: Replace with real image and include descriptive alt text for SEO

    <div className="h-96 rounded-2xl overflow-hidden">
      <div className="w-full h-full bg-purple-400/40 transform transition duration-500 hover:scale-110 flex items-center justify-center">
        Image
      </div>
    </div>
  );

  const renderPage = () => {
    switch (page) {
      case "Home":
        return (
          <Section>
            <section className="grid md:grid-cols-2 gap-20 items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-widest text-orange-300 font-[Inter]">Parent Coaching for Deeper Connection & Lasting Change</p>
                <h1 className="text-5xl font-[Playfair Display] leading-tight">
                  Calm, Confident Parenting Starts Here
                </h1>
                <p className="text-lg text-gray-300 font-[Inter]">
                  Parenting can feel overwhelming. Between the demands of daily life and the constant challenges children bring, it’s easy to feel stretched thin, reactive, or unsure.
                </p>
                <p className="text-lg text-gray-300 font-[Inter]">
                  But parenting is not about perfection—it’s a journey of growth. With the right support, you can build the skills to stay present, understand your child deeply, and create a more connected, grounded relationship.
                </p>
                <p className="text-lg text-gray-300 font-[Inter]">
                  I’m here to walk alongside you—helping you strengthen your capacity, navigate challenges with intention, and find more moments of connection, clarity, and confidence along the way.
                </p>
                <button
                  onClick={() => setPage("Individual Coaching")}
                  className="bg-orange-500 px-8 py-4 rounded-2xl shadow transition transform hover:scale-105 hover:bg-orange-400"
                >
                  Book a Free Intro Session
                </button>
              </div>
              <ImageBlock />
            </section>

            <section aria-label="Parenting approach">
              <Approach />
            </section>

            <section className="space-y-6" aria-label="Testimonials">
              <h2 className="text-3xl font-bold font-[Playfair Display]">What Parents Are Saying</h2>
              <Testimonials />
            </div>
          </Section>
        );

      case "About":
        return (
          <Section>
            <h1 className="text-4xl font-[Playfair Display]">About</h1>
            <p className="text-lg text-gray-300 max-w-3xl font-[Inter]">
              I am a certified parenting coach through the Jai Institute for Transformational Parenting. My work began during my decade as a high school teacher, where I saw how deeply parents wanted to support their children—but often felt unprepared and overwhelmed.
            </p>
            <p className="text-lg text-gray-300 max-w-3xl font-[Inter]">
              When I became a parent myself, I experienced that same feeling. Parenting can be bewildering, and many of us are left to figure it out on our own, despite how important the role is.
            </p>
            <p className="text-lg text-gray-300 max-w-3xl font-[Inter]">
              I believe every parent has the capacity to raise their child with connection, understanding, and intention. Together, we’ll uncover what may be getting in the way, strengthen your confidence, and help you create a family environment rooted in safety, trust, and growth.
            </p>
            <p className="text-lg text-gray-300 max-w-3xl font-[Inter]">
              Our work may include exploring attachment, nervous system science, communication, emotional regulation, and the deeper patterns that shape your parenting.
            </p>
            <Approach />
          </Section>
        );

      case "Individual Coaching":
        return (
          <Section>
            <h1 className="text-4xl font-[Playfair Display]">Individual Coaching</h1>
            <p className="text-gray-300 font-[Inter]">Personalized support for your family.</p>
            <CalendlyEmbed />
          </Section>
        );

      case "Group Classes":
        return (
          <Section>
            <h1 className="text-4xl font-[Playfair Display]">Group Classes</h1>
            <p className="text-gray-300 font-[Inter]">Learn and grow with other parents.</p>
          </Section>
        );

      case "Blog":
        return (
          <Section>
            <h1 className="text-4xl font-[Playfair Display]">Blog</h1>
            <p>Coming soon.</p>
          </Section>
        );

      case "Contact":
        return (
          <Section>
            <h1 className="text-4xl font-[Playfair Display]">Contact</h1>
            <ContactForm />
            <CalendlyEmbed />
          </Section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-800 via-purple-800 to-teal-700 text-white font-[Inter] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl"></div>

      <nav className="flex justify-between items-center px-8 py-6 backdrop-blur bg-white/5 sticky top-0 z-50">
        <div className="font-bold text-2xl font-[Playfair Display]">Growth Parenting</div>

        <div className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <button key={item} onClick={() => setPage(item)} className="relative group">
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-300 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-black/70 p-6 space-y-4">
          {navItems.map((item) => (
            <div key={item} onClick={() => { setPage(item); setMenuOpen(false); }} className="hover:text-orange-300">
              {item}
            </div>
          ))}
        </div>
      )}

      <main className="px-8 py-16 max-w-7xl mx-auto relative z-10">{renderPage()}</main>

      <footer className="p-8 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Growth Parenting · All Rights Reserved
      </footer>
    </div>
  );
}
