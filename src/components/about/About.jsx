import React from 'react';
import './about.css';
import Me from '../../assets/avathar.jpeg';
import { FaAward } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5 Years Working</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Company</h5>
              <small>Tata Consultancy Services</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
          </div>
          <p>
            Seeking a position as a Senior Software developer where I can play a
            key role in a Challenging and creative environment to build a
            long-term career in my profession with my 1.5 years of experience
            that provides me job satisfaction, self-development and helps me to
            achieve personal as well as the organization that focuses on
            customer satisfaction and customer experience
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk{' '}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
