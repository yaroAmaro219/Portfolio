import React, { Component } from 'react'

import Header from '../components/modules/Header'
import Hero from '../components/modules/Hero'

import Artemie from '../assets/images/download.png'
import { withRouter } from 'react-router'

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      preimage: `${Artemie}`,
      title: "Get In Touch",
      postimage: null,
      tagline: "Want to get in touch?",
      description: "I've disabled my contact form due to bot spam, so please email me directly or visit the links below!",
      helper: "",
    }
  }

  render() {
    return (
      <div className="page static-page contact-page">
        <Header />
        <Hero
          className="contact-hero"
          preimage={this.state.preimage}
          title={this.state.title}
          tagline={this.state.tagline}
          postimage={this.state.postimage}
          description={this.state.description}
          helper={this.state.helper}
        />
         <div className="body contact-body">
<h1>Hi</h1>
         </div>
      </div>
    )
  }
}

export default withRouter(Contact)