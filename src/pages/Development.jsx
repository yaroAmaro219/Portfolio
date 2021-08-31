// React
import React, {Component} from 'react'

// React Router
import {
    withRouter
  } from 'react-router-dom'

  // React Semantic UI
import {
    Divider,
  } from 'semantic-ui-react'

// Index
import DevelopmentIndex from '../components/indices/DevelopmentIndex'

// Data 
import { Websites } from '../data/WebsiteProjects'

import Header from '../components/modules/Header'
import Hero from '../components/modules/Hero'
import Key from '../components/modules/Key'
import Footer from '../components/modules/Footer'

class Development extends Component {
    constructor(props){
        super(props)

        this.state = {
            preimage: null,
            title: "Featured Engineering",
            tagline: "Beautiful and easy to use websites.",
            postimage: null,
            description: "For over 3 years, I've been developing websites that inspire me and others. Initially, my passion for development came about in high school when I was first introduced to Python. Since then I have actively improved my abilities and broadend my skillset",
            websites: Websites,
          }
    }
    render(){
        return (
            <div className="page dynamic-page development-page">
                <Header/>
                <Hero
                    className="development-hero"
                    preimage={this.state.preimage}
                    title={this.state.title}
                    postimage={this.state.postimage}
                    tagline={this.state.tagline}
                    description={this.state.description}
                    helper={this.state.helper}
                />
                <Divider />
        <div className="body development-body">
          <div className="index development-index">
            <DevelopmentIndex
              projects={this.state.websites} />
          </div>
         
                <div className='key-modal'>
                  <Key />
                </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withRouter(Development)