import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaMobile, FaServer } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'PRAAPTI - Mobile App & Website',
      client: 'Ministry of Defence, Government of India',
      description: 'A comprehensive mobile application and website currently under development for the Ministry of Defence. Features include cross-platform mobile app, responsive website, and intelligent chatbot with AI/ML integration for enhanced user experience.',
      technologies: ['React Native', 'React.js', 'Node.js', 'AI/ML', 'Chatbot Integration', 'REST APIs', 'Database Management', 'iOS', 'Android'],
      features: [
        'Cross-platform mobile application (iOS & Android)',
        'Responsive website development using React.js',
        'AI/ML powered chatbot integration',
        'Secure authentication and authorization',
        'Real-time data synchronization',
        'Offline functionality',
        'Government-grade security compliance'
      ],
      icon: <FaMobile />,
      highlight: true
    },
    {
      title: 'E-Commerce Mobile App',
      description: 'A full-featured e-commerce mobile application with user authentication, product catalog, shopping cart, and payment integration.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe API'],
      features: [
        'User authentication and profiles',
        'Product catalog with search',
        'Shopping cart functionality',
        'Payment gateway integration',
        'Order tracking system'
      ],
      icon: <FaMobile />,
      highlight: false
    },
    {
      title: 'Social Media Dashboard',
      description: 'A backend API system for managing social media content with analytics and scheduling features.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
      features: [
        'RESTful API development',
        'Database design and optimization',
        'Authentication middleware',
        'Analytics and reporting',
        'Content scheduling system'
      ],
      icon: <FaServer />,
      highlight: false
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
        Showcasing my best work in mobile and full-stack development
      </p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${project.highlight ? 'highlighted' : ''}`}>
            {project.highlight && (
              <div className="project-badge">Featured</div>
            )}
            <div className="project-icon">
              {project.icon}
            </div>
            <h3 className="project-title">{project.title}</h3>
            {project.client && (
              <div className="project-client">{project.client}</div>
            )}
            <p className="project-description">{project.description}</p>
            <div className="project-features">
              <h4>Key Features:</h4>
              <ul>
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href="https://github.com/shubhamv1" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub /> View Code
              </a>
              {project.highlight && (
                <button className="project-link" onClick={(e) => e.preventDefault()}>
                  <FaExternalLinkAlt /> Case Study
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

