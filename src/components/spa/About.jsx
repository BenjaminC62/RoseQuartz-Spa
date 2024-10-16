import React from "react";
import { motion } from "framer-motion";
import "./../../styles/About.css";

function About() {
  return (
    <section className="about-section">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About RoseQuartz Spa</h1>
        <p>
          At RoseQuartz Spa, we believe in providing a tranquil and rejuvenating
          experience for both your body and mind. Nestled in a serene
          environment, our spa offers a range of luxurious treatments that will
          leave you feeling refreshed and revitalized.
        </p>
        <p>
          From therapeutic massages to skin-enhancing facials, each service is
          delivered with the utmost care by our professional therapists.
          Whether you're seeking relaxation or skin care, RoseQuartz Spa is your
          destination for ultimate pampering.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
