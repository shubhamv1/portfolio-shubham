import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTimes, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    // Initialize EmailJS with public key
    emailjs.init('suQmWAPtNlK9L0QAC');
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS configuration
    const serviceId = 'service_vuy35tq';
    const templateId = 'template_45t5n7k';
    const publicKey = 'suQmWAPtNlK9L0QAC';

    // Template parameters - match exactly with your EmailJS template variables
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email
    };

    try {
      console.log('=== EmailJS Send Attempt ===');
      console.log('Service ID:', serviceId);
      console.log('Template ID:', templateId);
      console.log('Template Params:', templateParams);
      
      // EmailJS v4 - public key already initialized, don't pass it again
      const response = await emailjs.send(serviceId, templateId, templateParams);
      
      console.log('=== EmailJS Success Response ===');
      console.log('Full Response:', response);
      console.log('Status:', response.status);
      console.log('Text:', response.text);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('=== EmailJS Error Details ===');
      console.error('Error Object:', error);
      console.error('Error Type:', error?.constructor?.name);
      console.error('Error Message:', error?.message);
      console.error('Error Code:', error?.code);
      console.error('Error Text:', error?.text);
      console.error('Error Status:', error?.status);
      console.error('Error Response:', error?.response);
      
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        I'm available for freelance projects and open to discussing new opportunities
      </p>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-icon">
              <FaGithub />
            </div>
            <h3>GitHub</h3>
            <p>shubhamv1</p>
            <a href="https://github.com/shubhamv1" target="_blank" rel="noopener noreferrer">View Profile</a>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <FaLinkedin />
            </div>
            <h3>LinkedIn</h3>
            <p>Connect with me</p>
            <a href="https://www.linkedin.com/in/shubham-verma-096756213/" target="_blank" rel="noopener noreferrer">View Profile</a>
          </div>
        </div>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
      
      {/* Popup Modal */}
      {submitStatus && (
        <div className="modal-overlay" onClick={() => setSubmitStatus(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSubmitStatus(null)}>
              <FaTimes />
            </button>
            {submitStatus === 'success' && (
              <div className="modal-success">
                <div className="modal-icon success-icon">
                  <FaCheckCircle />
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out! We will connect with you within 24 hours.</p>
                <button className="btn btn-primary" onClick={() => setSubmitStatus(null)}>
                  Close
                </button>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="modal-error">
                <div className="modal-icon error-icon">
                  <FaExclamationCircle />
                </div>
                <h3>Error Sending Message</h3>
                <p>Sorry, there was an error sending your message. Please try again or email me directly at shubhamv22199@gmail.com</p>
                <button className="btn btn-primary" onClick={() => setSubmitStatus(null)}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="contact-cta">
        <h3>Ready to Start Your Project?</h3>
        <p>I'm available for immediate start and committed to delivering high-quality work on time.</p>
        <div className="cta-highlights">
          <div className="cta-item">
            <strong>Expected Charges:</strong> ₹1,00,000 (One Lakh) for complete project
          </div>
          <div className="cta-item">
            <strong>Commitment:</strong> On-time delivery and strict adherence to deadlines
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

