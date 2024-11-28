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
import Timeline from '../components/modules/Timeline'
import Footer from '../components/modules/Footer'
import Artemie from '../assets/images/download.png'
import Tennis from '../assets/images/MTenn.JPG'

class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      preimage: `${Artemie}`,
      title: "Hey there, I'm Artemie.",
      tagline: "As you've probably noticed, I've developed in many roles in my career.",
      postimage: null,
      description: "Currently a Senior Data Analyst at VaynerMedia, driving insights and strategy for the Mondelez account across the U.S. and Canada. Previously at GroupM, specialized in social media buying for Uber Eats and Postmates, optimizing campaigns with data-driven solutions.",
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
          <p>As a young adult, my own experiences with people and society became the foundation of my career, motivating, inspiring, and grounding my passionate pursuit of inspiring and impacting society through software development. Since then, the thread of my career has been to bring principles of simplicity, usability, and interactive practices to the software engineering field.</p>
        </div>
        <div className="about-journey smooth">
          <img src={Tennis} alt="Artemie Amari Software Engineer" className="shaded-box" />
          <h3>My Journey To Data Analytics</h3>
          <p>Want to learn more about how and why I came to the path of data analytics?</p>
          <p>Feel free to dive deep and explore my journey below</p>
        </div>
        <Timeline />
        <Footer/>
      </div>
    );
  }
}

export default About;