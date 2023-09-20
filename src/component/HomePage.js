import React from 'react';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-content">
        
        {/* <h1>Welcome</h1>
        <p>
          Thank you for visiting my website. Here, you'll find a world of
          possibilities waiting for you. Whether you're looking for
          inspiration, information, or just a bit of fun, you're in the right
          place.
        </p>
        <p>
          Explore our diverse collection of articles, stunning visuals,
          interactive experiences, and much more. Let your curiosity guide you,
          and who knows what you might discover!
        </p> */}
       
      </div>
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
    </div>
  );
};

export default HomePage;
