// React
import React from 'react'

// React Router
import {
  Link
} from 'react-router-dom'

// React Semantic
import {
  Divider,
} from 'semantic-ui-react'

export default function Footer() {
  return (
    <div className="footer">
      <Divider />
      <div className="footer-nav">
        <Link to="/" className="smooth">Home</Link>
        <Link to="/engineering" className="smooth">Development</Link>
        <Link to="/design" className="smooth">Design</Link>
        <Link to="/about" className="smooth">About</Link>
        <Link to="/contact" className="smooth">Contact</Link>
      </div>
      <div className="footer-info">
        <p>This portfolio was conceived, designed, and developed by Artemie Amari using React, React Router, React Transition Group, React Vertical Timeline, and Semantic UI.</p>
      </div>
      <div className="footer-socials">

      </div>
    </div>
  )
}
