import React from 'react'
import { Link } from 'react-router-dom'

export default function Developer() {
  return (
    <main className="portfolio-home">
      <nav className="portfolio-nav" aria-label="Primary navigation">
        <Link to="/" className="portfolio-wordmark">Artemie Amari</Link>
        <div className="portfolio-nav-links">
          <Link to="/engineering">Work</Link>
          <Link to="/about">About</Link>
          <a href="/Artemie-Amari-Resume.pdf" target="_blank" rel="noopener noreferrer">Résumé</a>
          <Link to="/contact" className="portfolio-nav-cta">Contact</Link>
        </div>
      </nav>

      <section className="portfolio-hero">
        <div className="portfolio-eyebrow">Analytics Manager · Product Builder · Founder</div>
        <h1>I turn complex marketing data into decisions teams can act on.</h1>
        <p className="portfolio-intro">
          I’m Artemie, an analytics leader building measurement systems, clear reporting,
          and practical products that help teams understand performance and move faster.
        </p>
        <div className="portfolio-actions">
          <a href="https://www.momentumanalytic.com/" target="_blank" rel="noopener noreferrer" className="portfolio-primary">
            Explore Momentum Analytics <span aria-hidden="true">↗</span>
          </a>
          <Link to="/engineering" className="portfolio-secondary">View selected work</Link>
        </div>
      </section>

      <section className="portfolio-proof" aria-label="Areas of expertise">
        <div>
          <span>01</span>
          <h2>Analytics leadership</h2>
          <p>Turning cross-channel performance into a clear narrative, priorities, and measurable action.</p>
        </div>
        <div>
          <span>02</span>
          <h2>Measurement strategy</h2>
          <p>Designing reporting, experimentation, and decision systems around the questions that matter.</p>
        </div>
        <div>
          <span>03</span>
          <h2>Product building</h2>
          <p>Creating accessible tools that make sophisticated analytics useful to everyday operators.</p>
        </div>
      </section>

      <section className="momentum-feature">
        <div className="momentum-copy">
          <span className="portfolio-eyebrow">Featured venture</span>
          <h2>Momentum Analytics</h2>
          <p>
            A simpler marketing intelligence workspace that brings website, advertising,
            search, and CRM signals together—then turns them into automated insights and a
            decision-ready Monday Brief.
          </p>
          <div className="momentum-links">
            <a href="https://www.momentumanalytic.com/dashboard" target="_blank" rel="noopener noreferrer">Explore the demo dashboard ↗</a>
            <a href="https://app.momentumanalytic.com/" target="_blank" rel="noopener noreferrer">Open the app ↗</a>
          </div>
        </div>
        <div className="momentum-panel" aria-label="Momentum Analytics product summary">
          <div className="momentum-panel-top"><span>M</span> Momentum Analytics</div>
          <strong>One view of marketing performance.</strong>
          <ul>
            <li>Connected performance data</li>
            <li>Automated weekly reporting</li>
            <li>Decision-ready insights</li>
          </ul>
        </div>
      </section>

      <section className="portfolio-results" aria-labelledby="results-title">
        <div className="portfolio-results-heading">
          <span className="portfolio-eyebrow">Selected impact</span>
          <h2 id="results-title">Work measured by what changed.</h2>
          <Link to="/engineering">See the stories behind the numbers →</Link>
        </div>
        <div className="portfolio-results-grid">
          <div><strong>35%</strong><span>fewer data errors through automated QA</span></div>
          <div><strong>17%</strong><span>increase in quality leads after attribution improvements</span></div>
          <div><strong>21%</strong><span>lift in first-time users from creative experimentation</span></div>
        </div>
      </section>

      <section className="portfolio-contact-strip portfolio-contact-strip-home">
        <div>
          <span className="portfolio-eyebrow">Let’s work together</span>
          <h2>Need clearer measurement—or a product that makes it useful?</h2>
        </div>
        <div className="portfolio-actions">
          <a className="portfolio-primary" href="mailto:yaroamari@gmail.com">Email me</a>
          <a className="portfolio-secondary" href="/Artemie-Amari-Resume.pdf" target="_blank" rel="noopener noreferrer">View résumé</a>
        </div>
      </section>

      <footer className="portfolio-home-footer">
        <p>Based in New York · Building at the intersection of analytics, marketing, and product.</p>
        <Link to="/contact">Let’s talk →</Link>
      </footer>
    </main>
  )
}
