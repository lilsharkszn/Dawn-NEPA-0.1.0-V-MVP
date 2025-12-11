import React from 'react';
import './contact.css';

function Contact() {
  return (
    <main className="contact-card contact-page">
      <h2>Contact</h2>
      <p className="muted">For inquiries, partnerships, or support, reach out to us at the email below. We'll aim to reply within 48 hours.</p>

      <div className="contact-card">
        <div className="contact-row">
          <strong>Email</strong>
          <a href="mailto:lilsharkszn@techie.com">lilsharkszn@techie.com</a>
        </div>

        <div className="contact-row">
          <strong>Response time</strong>
          <span>Typically within 48 hours</span>
        </div>
      </div>
    </main>
  );
}

export default Contact;
