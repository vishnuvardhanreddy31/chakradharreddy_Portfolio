import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://in.linkedin.com/in/chakradhar-reddy-goli-19a157227"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
