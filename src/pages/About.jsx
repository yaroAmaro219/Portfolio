import React from 'react'
import { Link } from 'react-router-dom'
import Artemie from '../assets/images/download.png'
import Tennis from '../assets/images/MTenn.JPG'

const principles = [
  {
    number: '01',
    title: 'Clarity over complexity',
    copy: 'The best analysis does not end with a dashboard. It gives a team a shared understanding of what happened and what to do next.'
  },
  {
    number: '02',
    title: 'Measurement that changes decisions',
    copy: 'I build reporting and experimentation around real business questions—not vanity metrics or data for its own sake.'
  },
  {
    number: '03',
    title: 'Build for adoption',
    copy: 'A sophisticated system only matters if people trust it and use it. Simplicity, reliability, and thoughtful design are part of the work.'
  }
]

const experience = [
  {
    period: '2024 — Present',
    role: 'Analytics Manager',
    company: 'VaynerMedia',
    detail: 'Leading measurement and performance thinking across complex marketing programs while improving the reliability and usefulness of reporting.'
  },
  {
    period: '2023 — 2024',
    role: 'Senior Digital Analyst',
    company: 'Grain Group',
    detail: 'Connected attribution, audience, and campaign signals across a seven-client portfolio to sharpen growth decisions.'
  },
  {
    period: 'Earlier',
    role: 'Paid Social Analyst',
    company: 'EssenceMediacom',
    detail: 'Managed and measured paid social performance for Uber and Postmates across six activation platforms.'
  },
  {
    period: 'Building now',
    role: 'Founder',
    company: 'Momentum Analytics',
    detail: 'Creating a simpler intelligence workspace that turns fragmented marketing data into decision-ready reporting and insights.'
  }
]

export default function About() {
  return (
    <main className="portfolio-home portfolio-about-page">
      <nav className="portfolio-nav" aria-label="Primary navigation">
        <Link to="/" className="portfolio-wordmark">Artemie Amari</Link>
        <div className="portfolio-nav-links">
          <Link to="/engineering">Work</Link>
          <Link to="/about" aria-current="page">About</Link>
          <a href="/Artemie-Amari-Resume.pdf" target="_blank" rel="noopener noreferrer">Résumé</a>
          <Link to="/contact" className="portfolio-nav-cta">Contact</Link>
        </div>
      </nav>

      <header className="about-hero-modern">
        <div className="about-hero-copy">
          <span className="portfolio-eyebrow">About me</span>
          <h1>I make complex marketing data feel clear, useful, and human.</h1>
          <p>
            I’m Artemie—an analytics leader, product builder, and founder based in New York.
            My work sits at the intersection of measurement, marketing, and technology.
          </p>
          <p>
            I help teams move from scattered signals to shared understanding, then build the
            systems that make better decisions repeatable.
          </p>
          <div className="portfolio-actions">
            <Link className="portfolio-primary" to="/engineering">See my work</Link>
            <a className="portfolio-secondary" href="/Artemie-Amari-Resume.pdf" target="_blank" rel="noopener noreferrer">View résumé</a>
          </div>
        </div>
        <figure className="about-portrait">
          <img src={Artemie} alt="Artemie Amari" />
          <figcaption>Analytics Manager · Founder of Momentum Analytics</figcaption>
        </figure>
      </header>

      <section className="about-belief">
        <span className="portfolio-eyebrow">What I believe</span>
        <blockquote>“Analytics is most valuable when it makes the next decision clearer.”</blockquote>
        <p>
          That idea shapes how I lead, analyze, and build—from executive reporting and
          experimentation to the product experience behind Momentum Analytics.
        </p>
      </section>

      <section className="about-principles" aria-label="How I work">
        {principles.map(principle => (
          <article key={principle.number}>
            <span>{principle.number}</span>
            <h2>{principle.title}</h2>
            <p>{principle.copy}</p>
          </article>
        ))}
      </section>

      <section className="about-experience" aria-labelledby="experience-title">
        <div className="about-section-heading">
          <span className="portfolio-eyebrow">The path so far</span>
          <h2 id="experience-title">Experience built across analytics, media, and product.</h2>
        </div>
        <div className="about-timeline">
          {experience.map(item => (
            <article key={`${item.company}-${item.role}`}>
              <span>{item.period}</span>
              <div>
                <h3>{item.role}</h3>
                <strong>{item.company}</strong>
              </div>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-personal">
        <div className="about-personal-image">
          <img src={Tennis} alt="Artemie playing tennis" />
        </div>
        <div>
          <span className="portfolio-eyebrow">Beyond the dashboard</span>
          <h2>Curiosity is the throughline.</h2>
          <p>
            Outside of work, you’ll usually find me playing tennis, exploring a new idea,
            or building something that started as a question. I care about craft, momentum,
            and leaving systems better than I found them.
          </p>
        </div>
      </section>

      <section className="portfolio-contact-strip">
        <div>
          <span className="portfolio-eyebrow">Let’s connect</span>
          <h2>Have a measurement challenge or an ambitious idea?</h2>
        </div>
        <div className="portfolio-actions">
          <a className="portfolio-primary" href="mailto:yaroamari@gmail.com">Email me</a>
          <Link className="portfolio-secondary" to="/contact">More ways to connect</Link>
        </div>
      </section>

      <footer className="portfolio-home-footer">
        <p>Based in New York · Analytics, marketing, and product.</p>
        <Link to="/engineering">View selected work →</Link>
      </footer>
    </main>
  )
}
