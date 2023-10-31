import React from 'react';
import { BiLogoInstagram } from 'react-icons/bi';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { BiLogoTwitter } from 'react-icons/bi';
import './footer.css';
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Goli Chakradhar reddy
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <BiLogoFacebookCircle />
        </a>
        <a href="https://instagram.com">
          <BiLogoInstagram />
        </a>
        <a href="https://twitter.com">
          <BiLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Goli Chakradhar Reddy. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
