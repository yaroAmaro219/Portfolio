import React, { Component } from 'react';

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
      tagline: "My career sits at the intersection of analytics leadership, marketing, and product building.",
      postimage: null,
      description: "Currently an Analytics Manager, leading measurement and performance thinking across complex marketing programs. I am also the founder of Momentum Analytics, a simpler intelligence workspace designed to turn fragmented marketing data into confident decisions.",
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
          <p>I believe analytics is most valuable when it makes the next decision clearer. My work focuses on translating complex performance signals into shared understanding, practical priorities, and tools that teams can use without needing to become analysts themselves.</p>
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
