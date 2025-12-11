import React, { useState } from 'react';
import './FeedbackNContact.css';

function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setStatus({ type: 'error', text: 'Please enter a message.' });
      return;
    }
    setSubmitting(true);
    setStatus(null);

    // Placeholder: where to send data will be decided later.
    // For now we capture the payload and show a success message.
    const payload = { name: name.trim(), email: email.trim(), message: message.trim(), time: new Date().toISOString() };
    try {
      // TODO: send `payload` to an API endpoint or email service.
      // Example: await fetch('/api/feedback', { method: 'POST', body: JSON.stringify(payload) });
      console.log('Feedback payload:', payload);
      setStatus({ type: 'success', text: 'Thanks — your feedback has been recorded.' });
      setName(''); setEmail(''); setMessage('');
    } catch (err) {
      setStatus({ type: 'error', text: 'Failed to send feedback. Please try again later.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="feedback-card feedback-page">
      <h2>Send Feedback</h2>
      <p className="muted">We appreciate your thoughts. Leave your name, email, and a short message - we'll review it and follow up quikly.</p>

      <form className="feedback-form" onSubmit={handleSubmit}>
        <label className="form-group">
          <span className="label">Name (optional)</span>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
        </label>

        <label className="form-group">
          <span className="label">Email (optional)</span>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" type="email" />
        </label>

        <label className="form-group">
          <span className="label">Message</span>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} placeholder="Tell us what's on your mind" />
        </label>

        <div className="form-actions">
          <button type="submit" className="primary-btn" disabled={submitting}>{submitting ? 'Sending…' : 'Send Feedback'}</button>
        </div>

        {status && (
          <div className={`form-status ${status.type}`} role="status" aria-live="polite">{status.text}</div>
        )}
      </form>
    </main>
  );
}

export default Feedback;
