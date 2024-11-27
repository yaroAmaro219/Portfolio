import React, { Component } from 'react'

import Header from '../components/modules/Header'
import Footer from '../components/modules/Footer'
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
          <a href="mailto:yaroamari@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" stroke="white" height="135" width="135" viewBox="0 0 24 24"><path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"></path></svg></a>
          
          <a
            href="https://www.linkedin.com/in/artemieamari/"
            target="_blank"
                      rel="noopener noreferrer"
                     
          >
            <svg xmlns="http://www.w3.org/2000/svg"  class='social-nav'>
              <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
          </a>
          </div>
         <Footer />
      </div>
    )
  }
}

export default withRouter(Contact)