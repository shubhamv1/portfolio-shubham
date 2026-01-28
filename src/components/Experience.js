import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Freelance Full-Stack Developer',
      company: 'Ministry of Defence, Government of India',
      project: 'PRAAPTI - Mobile App & Website Development',
      period: '2025 - Present',
      location: 'Remote',
      description: [
        'Currently developing PRAAPTI mobile application and website for the Ministry of Defence',
        'Working as a freelancer handling complete project lifecycle with strict quality and deadline requirements',
        'Developing cross-platform mobile solutions using React Native for iOS and Android',
        'Building responsive website using React.js for web platform',
        'Implementing chatbot with AI/ML integration for intelligent user interactions',
        'Building robust backend APIs using Node.js and managing database systems',
        'Ensuring on-time delivery and maintaining high code quality standards'
      ],
      technologies: ['React Native', 'React.js', 'Node.js', 'AI/ML', 'Chatbot Integration', 'REST APIs', 'Database Management', 'iOS', 'Android'],
      highlight: true
    },
    {
      title: 'Software Development Engineer 1 (SDE 1)',
      company: 'QuadB',
      period: '2023 - 2025',
      location: 'Remote',
      description: [
        'Developed and maintained multiple mobile applications using React Native',
        'Collaborated with cross-functional teams to deliver high-quality products',
        'Implemented RESTful APIs and integrated third-party services',
        'Optimized application performance and ensured smooth user experience',
        'Participated in code reviews and maintained coding standards',
        'Worked on full-stack development projects using React Native and Node.js'
      ],
      technologies: ['React Native', 'Node.js', 'JavaScript', 'REST APIs', 'Git'],
      highlight: false
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Professional Experience</h2>
      <p className="section-subtitle">
        Building innovative mobile solutions with a track record of successful project deliveries
      </p>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className={`experience-card ${exp.highlight ? 'highlighted' : ''}`}>
            {exp.highlight && (
              <div className="badge">Featured Project</div>
            )}
            <div className="experience-header">
              <div className="experience-icon">
                <FaBriefcase />
              </div>
              <div className="experience-title-section">
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-company">{exp.company}</div>
                {exp.project && (
                  <div className="experience-project">
                    <strong>Project:</strong> {exp.project}
                  </div>
                )}
              </div>
            </div>
            <div className="experience-meta">
              <div className="experience-meta-item">
                <FaCalendarAlt />
                <span>{exp.period}</span>
              </div>
              <div className="experience-meta-item">
                <FaMapMarkerAlt />
                <span>{exp.location}</span>
              </div>
            </div>
            <div className="experience-description">
              <ul>
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="experience-technologies">
              {exp.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

