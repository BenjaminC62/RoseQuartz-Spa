import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="news-letter-group">
        <span className="news-letter-text">Join Our NewsLetter</span>
        <br />
        <form className="news-letter-inscription">
          <input
            type="text"
            className="footer-email-text"
            placeholder="Enter your email"
          />
          <motion.input
            whileHover={{ scale: 1.1 }}
            type="submit"
            value="Subscribe"
            className="footer-email-button"
          />
        </form>
      </div>
      <hr className="footer-separation" />
      <span className="spa-club-copyright">© 2024 - SPA CLUB</span>
    </footer>
  );
}

export default Footer;
