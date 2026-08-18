import React from 'react'
import { Link } from 'react-router-dom'

const work = [
  {
    label: 'Product · Founder',
    title: 'Momentum Analytics',
    description: 'A marketing intelligence workspace that connects performance data, surfaces decision-ready insights, and delivers an automated Monday Brief.',
    metrics: ['Connected reporting', 'Automated insights', 'Built end to end'],
    href: 'https://www.momentumanalytic.com/',
    action: 'Explore Momentum Analytics'
  },
  {
    label: 'Analytics systems · VaynerMedia',
    title: 'Faster, more reliable reporting',
    description: 'Built automated QA workflows and brand-level performance views across complex media datasets so teams could spend less time checking data and more time acting on it.',
    metrics: ['35% fewer data errors', '40% fewer manual checks', 'SQL · Snowflake · Tableau']
  },
  {
    label: 'Growth measurement · Grain Group',
    title: 'Better signals, better leads',
    description: 'Helped implement third-party data and attribution tools, then translated campaign and audience performance into a clearer optimization strategy.',
    metrics: ['17% increase in quality leads', '7 cross-industry clients', 'Paid social · Attribution']
  },
  {
    label: 'Experimentation · Uber / Postmates',
    title: 'Creative testing at scale',
    description: 'Designed and analyzed a TikTok creative test that gave the team a clear signal about which execution drove stronger first-time customer response.',
    metrics: ['21% lift in first-time users', '$500K monthly budget', '6 activation platforms']
  }
]

export default function Development() {
  return (
    <main className="portfolio-home portfolio-work-page">
      <nav className="portfolio-nav" aria-label="Primary navigation">
        <Link to="/" className="portfolio-wordmark">Artemie Amari</Link>
        <div className="portfolio-nav-links">
          <Link to="/engineering" aria-current="page">Work</Link>
          <Link to="/about">About</Link>
          <a href="/Artemie-Amari-Resume.pdf" target="_blank" rel="noopener noreferrer">Résumé</a>
          <Link to="/contact" className="portfolio-nav-cta">Contact</Link>
        </div>
      </nav>

      <header className="work-hero">
        <span className="portfolio-eyebrow">Selected work</span>
        <h1>Systems, experiments, and products built to move teams forward.</h1>
        <p>My work sits between marketing, analytics, and product—turning messy signals into reliable measurement and clear action.</p>
      </header>

      <section className="work-grid" aria-label="Featured work">
        {work.map((item, index) => (
          <article className={`work-card work-card-${index + 1}`} key={item.title}>
            <span className="work-label">{item.label}</span>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <ul>
              {item.metrics.map(metric => <li key={metric}>{metric}</li>)}
            </ul>
            {item.href && <a href={item.href} target="_blank" rel="noopener noreferrer">{item.action} ↗</a>}
          </article>
        ))}
      </section>

      <section className="portfolio-contact-strip">
        <div>
          <span className="portfolio-eyebrow">Have a challenge worth solving?</span>
          <h2>Let’s turn the data into a decision.</h2>
        </div>
        <div className="portfolio-actions">
          <a className="portfolio-primary" href="mailto:yaroamari@gmail.com">Email me</a>
          <Link className="portfolio-secondary" to="/contact">More ways to connect</Link>
        </div>
      </section>

      <footer className="portfolio-home-footer">
        <p>Analytics leadership · Measurement strategy · Product building</p>
        <a href="/Artemie-Amari-Resume.pdf" target="_blank" rel="noopener noreferrer">View résumé →</a>
      </footer>
    </main>
  )
}
