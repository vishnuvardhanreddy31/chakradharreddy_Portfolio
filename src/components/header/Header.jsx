import React from 'react';
import './header.css';
import CTA from './CTA';
import Avathar from '../../assets/avathar1.png';
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm </h5>
        <h1>Goli Chakradhar Reddy</h1>
        <h5 className="text-light">Java Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Avathar} alt="" />
        </div>
        <a href="#conatct" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
