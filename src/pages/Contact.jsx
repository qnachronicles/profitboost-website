import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="hero-section">
          <h1>Contact ProfitBoost LLC</h1>
          <p className="hero-subtitle">Ready to Build Better and Empower Your Legacy?</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>
              Whether you're looking for business consulting, real estate investment guidance, 
              or faith-based resources, we're here to help you build sustainable success.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <h3>📧 Email</h3>
                <p>info@profitboostllc.com</p>
              </div>
              <div className="contact-method">
                <h3>📱 Social Media</h3>
                <p>Follow us on our various platforms for updates and insights</p>
              </div>
              <div className="contact-method">
                <h3>🕐 Response Time</h3>
                <p>We typically respond within 24-48 hours</p>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interest</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service...</option>
                  <option value="new-thing-hustle">New Thing Hustle - Business Consulting</option>
                  <option value="profitboost-consulting">ProfitBoost Consulting - Real Estate & Investment</option>
                  <option value="media-brand">Media & Brand Division</option>
                  <option value="legacy-outreach">Legacy + Outreach</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your goals and how we can help..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="departments-contact">
          <h2>Contact Our Departments Directly</h2>
          <div className="departments-grid">
            <div className="department-contact">
              <h3>New Thing Hustle</h3>
              <p>Business Consulting & Digital Strategy</p>
              <a href="mailto:hustle@profitboostllc.com">hustle@profitboostllc.com</a>
            </div>
            <div className="department-contact">
              <h3>ProfitBoost Consulting</h3>
              <p>Real Estate & Investment Advisory</p>
              <a href="mailto:consulting@profitboostllc.com">consulting@profitboostllc.com</a>
            </div>
            <div className="department-contact">
              <h3>Media & Brand Division</h3>
              <p>Content Creation & Faith-Based Resources</p>
              <a href="mailto:media@profitboostllc.com">media@profitboostllc.com</a>
            </div>
            <div className="department-contact">
              <h3>Legacy + Outreach</h3>
              <p>Community Empowerment & Advocacy</p>
              <a href="mailto:legacy@profitboostllc.com">legacy@profitboostllc.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

