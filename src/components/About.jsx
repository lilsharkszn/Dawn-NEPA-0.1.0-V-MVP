import React from "react";
import imagge from "../assets/community.jpg";
import "./About.css"

function About() {
  return (
    <article className="about-card about-page">
      <header className="about-header">
        <div className="about-header-content">
          <div>
            <h1>About Dawn NEPA</h1>
            <p className="lead">
              Dawn NEPA is Nigeria’s first real-time, community-powered
              electricity tracker, designed to put the power of knowledge back
              in your hands. We give Nigerians instant, reliable information
              about electricity availability in their neighborhoods so you can
              make smarter decisions for your home, business, or property
              search.
            </p>

            <div className="callout" aria-hidden>
              <strong>Community-powered</strong>
              <span className="dot">·</span>
              <span>Real-time</span>
              <span className="dot">·</span>
              <span>Local</span>
            </div>
          </div>
          <img className="CommunityImg" src={imagge} alt="Community" />
        </div>
      </header>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Electricity is essential, yet unpredictable in many parts of Nigeria.
          Our mission is simple: turn years of collective frustration into
          actionable insights. By connecting communities and sharing real-time
          reports, we empower people to see clearly in the darkness.
        </p>
      </section>

      <section className="about-section">
        <h2>How It Works</h2>
        <ul className="how-list">
          <li>
            <strong>Select Your Area:</strong> Open the app and pick your city,
            neighborhood, and street.
          </li>
          <li>
            <strong>Check Real-Time Status:</strong> Instantly see if
            electricity is available or experiencing outages.
          </li>
          <li>
            <strong>Community-Powered Reports:</strong> Information comes from
            real people on the same transformer, ensuring accuracy and
            relevance.
          </li>
          <li>
            <strong>Power Score:</strong> Soon, every street will have a Power
            Score (0 - 100), summarizing electricity reliability over the past
            30 - 90 days.
          </li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Who It’s For</h2>
        <ul className="who-list">
          <li>
            <strong>House Hunters:</strong> Avoid paying hefty fees only to move
            into a home with unreliable power.
          </li>
          <li>
            <strong>Tenants and Buyers:</strong> Make informed decisions based
            on real, historical data.
          </li>
          <li>
            <strong>Businesses:</strong> From bars to tech hubs, choose the
            right location for your operations with confidence.
          </li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          We aim to map 5,000 active streets by March 2026, creating Nigeria’s
          first open Electricity Reliability Index. With Dawn NEPA, everyone can
          make data-driven decisions, reduce uncertainty, and take control of
          their energy situation.
        </p>
      </section>

      <section className="about-section">
        <h2>Join the Community</h2>
        <p>
          Electricity will not fix itself, but with Dawn NEPA, you can see
          clearly in the darkness. Sign up for the waitlist, report your street,
          and help us build the most accurate, community-driven electricity map
          in Nigeria.
        </p>
      </section>
    </article>
  );
}

export default About;
