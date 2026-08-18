import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <main className="portfolio-home portfolio-contact-page">
      <nav className="portfolio-nav" aria-label="Primary navigation">
        <Link to="/" className="portfolio-wordmark">Artemie Amari</Link>
        <div className="portfolio-nav-links">
          <Link to="/engineering">Work</Link>
          <Link to="/about">About</Link>
          <a href="/Artemie-Amari-Resume.pdf" target="_blank" rel="noopener noreferrer">Résumé</a>
          <Link to="/contact" className="portfolio-nav-cta" aria-current="page">Contact</Link>
        </div>
      </nav>

      <section className="contact-shell">
        <div className="contact-intro">
          <span className="portfolio-eyebrow">Get in touch</span>
          <h1>Let’s build something clear, useful, and measurable.</h1>
          <p>I’m always open to thoughtful conversations about analytics leadership, measurement strategy, product building, and ambitious teams.</p>
        </div>
        <div className="contact-options">
          <a href="mailto:yaroamari@gmail.com" className="contact-option">
            <span>Email</span>
            <strong>yaroamari@gmail.com</strong>
            <i aria-hidden="true">↗</i>
          </a>
          <a href="https://www.linkedin.com/in/artemieamari/" target="_blank" rel="noopener noreferrer" className="contact-option">
            <span>LinkedIn</span>
            <strong>Connect professionally</strong>
            <i aria-hidden="true">↗</i>
          </a>
          <a href="/Artemie-Amari-Resume.pdf" target="_blank" rel="noopener noreferrer" className="contact-option">
            <span>Résumé</span>
            <strong>View experience and skills</strong>
            <i aria-hidden="true">↗</i>
          </a>
        </div>
      </section>

      <footer className="portfolio-home-footer">
        <p>Based in New York · Usually replies within two business days.</p>
        <Link to="/engineering">View selected work →</Link>
      </footer>
    </main>
  )
}
