// React
import React, { Component } from 'react'

// React Router
import {
  withRouter
} from 'react-router-dom'

// React Semantic UI
import {
  Divider
} from 'semantic-ui-react'

// Components
import Header from '../components/modules/Header'
import Hero from '../components/modules/Hero'
import Key from '../components/modules/Key'
import Footer from '../components/modules/Footer'

// Index
// import DesignIndex from '../components/indices/DesignIndex'

// Assets 
// import Designs from '../data/DesignProjects'

class Design extends Component {
  constructor(props) {
    super(props)

    this.state = {
      preimage: null,
      title: "Featured Designs",
      tagline: "Professional, sleek, UI/UX designs.",
      postimage: null,
      description: "With an eye for detail, a love of consistency across webages and platforms, and a passion for memorable, inspiring, accessible websites, I've spent many years perfecting the minutiae of my roles.",
      helper: "This portfolio is still under construction. Check back soon!",
      // projects: Designs,
    }
  }

  render() {
    return (
      <div className="page dynamic-page design-page">
        <Header />
        <Hero
          className="design-hero"
          preimage={this.state.preimage}
          title={this.state.title}
          tagline={this.state.tagline}
          postimage={this.state.postimage}
          description={this.state.description}
          helper={this.state.helper}
        />
        <Divider />
        <div className="body design-body">
          {/* <div className="index design-index">
            <DesignIndex
              projects={this.state.projects} />
          </div> */}
          <div className='key-modal'>
            <Key />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(Design)