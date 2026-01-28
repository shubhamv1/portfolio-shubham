import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
        SDE 1 specializing in Mobile App Development, Website Development, and AI/ML Chatbot Integration
      </p>
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a dedicated <strong>SDE 1</strong> with over 
              <strong> 2 years of professional experience</strong> in building scalable and 
              high-performance applications. My specialization includes <strong>Mobile App Development</strong> 
              using React Native, <strong>Website Development</strong> using React.js, and 
              <strong> AI/ML Chatbot Integration</strong>. I also work with <strong>Node.js</strong> for robust backend solutions.
            </p>
            <p>
              I am currently working on the <strong>"PRAAPTI" project</strong> for the 
              <strong> Ministry of Defence, Government of India</strong>, where I'm developing both 
              the mobile application and website. This project includes cutting-edge features like 
              <strong> AI/ML-powered chatbot integration</strong>, demonstrating my ability to work 
              with modern technologies. Previously, I worked as <strong>SDE 1 at QuadB</strong> from 
              2023 to 2025, where I gained valuable experience in full-stack mobile development.
            </p>
            <p>
              I am committed to writing clean, maintainable code and following best practices. 
              I thrive in challenging environments and am always eager to take on new projects 
              that push the boundaries of mobile technology.
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-number">2+</div>
              <div className="highlight-label">Years Experience</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">10+</div>
              <div className="highlight-label">Projects Completed</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">100%</div>
              <div className="highlight-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

