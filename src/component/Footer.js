import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
         
          <img src="" alt="Your Logo" />
        </div>  
        <div className="footer-links">
          
          <ul>
            <li>
              <a href="/conferences">Conferences</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            
          </ul>
        </div>
        <div className="footer-social">
          
          <a
            href="https://twitter.com/your-twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/path/to/twitter-icon.png" alt="Twitter" />
          </a>
          <a
            href="https://facebook.com/your-facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/path/to/facebook-icon.png" alt="Facebook" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Your Website Name. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
