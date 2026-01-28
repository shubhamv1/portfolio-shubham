import React from 'react';
import { FaMobile, FaServer, FaDatabase, FaCode, FaCloud, FaRobot } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: <FaMobile />,
      skills: [
        { name: 'React Native', level: 95 },
        { name: 'iOS Development', level: 85 },
        { name: 'Android Development', level: 85 },
        { name: 'Cross-Platform', level: 90 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <FaServer />,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'API Integration', level: 88 }
      ]
    },
    {
      title: 'Database & Storage',
      icon: <FaDatabase />,
      skills: [
        { name: 'Database Management', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'SQL', level: 75 },
        { name: 'Data Modeling', level: 80 }
      ]
    },
    {
      title: 'Web Development',
      icon: <FaCode />,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 92 },
        { name: 'TypeScript', level: 80 },
        { name: 'Responsive Design', level: 88 }
      ]
    },
    {
      title: 'AI/ML & Integration',
      icon: <FaRobot />,
      skills: [
        { name: 'Chatbot Development', level: 85 },
        { name: 'AI/ML Integration', level: 80 },
        { name: 'API Integration', level: 88 },
        { name: 'Third-party Services', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">
        A comprehensive skill set in mobile and full-stack development
      </p>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <div className="skill-category-header">
              <div className="skill-category-icon">
                {category.icon}
              </div>
              <h3 className="skill-category-title">{category.title}</h3>
            </div>
            <div className="skill-list">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="skills-summary">
        <div className="summary-card">
          <h3>Core Expertise</h3>
          <p>React Native • React.js • Node.js • AI/ML • Chatbot Integration</p>
        </div>
        <div className="summary-card">
          <h3>Experience</h3>
          <p>2+ Years Professional Experience • SDE 1 at QuadB • Current: PRAAPTI Project</p>
        </div>
        <div className="summary-card">
          <h3>Commitment</h3>
          <p>On-Time Delivery • Quality Code • Client Satisfaction</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

