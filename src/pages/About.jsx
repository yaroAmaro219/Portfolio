import React, { Component } from 'react';

// React Router
import {
  Link,
  withRouter
} from 'react-router-dom'

// React Semantic UI
import {
  Divider
} from 'semantic-ui-react'

// Components
import Header from '../components/modules/Header'
import Hero from '../components/modules/Hero'
// import Timeline from '../components/modules/Timeline'
import Footer from '../components/modules/Footer'

import Artemie from '../assets/images/download.png'
import Tennis from '../assets/images/MTenn.JPG'

class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      preimage: `${Artemie}`,
      title: "Hey there, I'm Tem.",
      tagline: "As you've probably noticed, I've developed in many roles in my career.",
      postimage: null,
      description: "First and foremost, I'm a dedicated software engineer looking to contribute and inspire others through my various roles and projects. I have over three years of experience developing proactively to engage different kinds of audiences; in that time, I've published several websites for different businesses and portfolios.",
      helper: "",
    }
  }
  render() {
    return (
      <div className="page static-page about-page">
          <Header />
        <Hero
          className="about-hero"
          preimage={this.state.preimage}
          title={this.state.title}
          tagline={this.state.tagline}
          postimage={this.state.postimage}
          description={this.state.description}
          helper={this.state.helper}
        />
        <Divider />
        <div className="about-why">
          <h3>My "Why"</h3>
          <p>As a young adult, my own experiences with people and society became the foundation of my career, motivating, inspiring, and grounding my passionate pursuit of acting and modeling in plays. Since then, the thread of my career has been to bring principles of realism, emotion, and nurturing practices to the acting field.</p>
        </div>
        <div className="about-journey smooth">
          <img src={Tennis} alt="Artemie Amari Software Engineer" className="shaded-box" />
          <h3>My Journey To Software Engineering</h3>
          <p>Want to learn more about how and why I came to the path of software engineering?</p>
          <p>Understandable.</p>
        </div>
      </div>
    );
  }
}

export default About;