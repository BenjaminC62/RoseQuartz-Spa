import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-container">
      <div>
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
        <div className="footer-last-paragraph">
          <hr className="footer-separation" />
          <div className="footer-category-bloc">
            <div className="footer-first-category">
              <h2>SPA CLUB</h2>
              <span>lorem ispum </span>
            </div>
            <div className="footer-second-category">
              <h2>Important Links</h2>
              <Link to="/book" id="footer-space-links">Book an Appointment</Link>
              <Link to="/services" id="footer-space-links">Our Services</Link>
              <Link to="/about" id="footer-space-links">About Us</Link>
              <Link to="/contact" id="footer-space-links">Contact</Link>
            </div>
            <div className="footer-third-category">
              <h2>Contact Us</h2>
              <span>Phone: +33 6 12 34 56 78</span>
              <br />
              <span>Email: spa-club@gmail.com</span>
              <br />
              <span>Address: 123 Spa Street, Paris, France</span>
            </div>
            <div className="footer-fourth-category">
              <h2>Openin Hours</h2>
              <table className="footer-fourth-category-agenda">
                <tr>
                  <td>Monday</td>
                  <td>9:00 - 18:00</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>closed</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>10:00 - 19:00</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>14:00 - 21:00</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>9:00 - 18:00</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>closed</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>closed</td>
                </tr>
              </table>
            </div>
          </div>
          <hr className="footer-separation" />
          <span className="spa-club-copyright">© 2024 - SPA CLUB. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
