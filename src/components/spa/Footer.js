import React from "react";

function Footer() {
  return (
    <footer className="footer-container">
      <div>
        <div className="news-letter-group">
          <span className="news-letter-text">Join Our NewsLetter</span>
          <br />
          <form className="news-letter-inscription">
            <input type="text" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
        <hr className="footer-separation" />
        <span>© 2024 - SPA CLUB</span>
      </div>
    </footer>
  );
}

export default Footer;
