import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Shubham Verma</span>
            </h1>
            <h2 className="hero-subtitle">SDE 1</h2>
            <p className="hero-description">
              With <strong>2+ years</strong> of professional experience, I'm an <strong>SDE 1</strong> specializing 
              in <strong>Mobile App Development</strong>, <strong>Website Development</strong>, and 
              <strong> AI/ML Chatbot Integration</strong>. Currently working on the <strong>PRAAPTI project</strong> 
              for the <strong>Ministry of Defence, Government of India</strong>, developing mobile apps, websites, 
              and <strong>AI/ML-powered chatbots</strong>. Previously served as <strong>SDE 1 at QuadB</strong> (2023-2025).
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
              <button className="btn btn-outline" onClick={() => scrollToSection('projects')}>
                View My Work
              </button>
            </div>
            <div className="hero-social">
              <a href="https://github.com/shubhamv1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/shubham-verma-096756213/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:shubhamv22199@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
              <a href="tel:+917068980191" aria-label="Phone">
                <FaPhone />
              </a>
              <a href="https://wa.me/917068980191" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-avatar">
              <div className="hero-profile-wrapper">
                <img src="/image1.jpg" alt="Shubham Verma" className="hero-profile-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

