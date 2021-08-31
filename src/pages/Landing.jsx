import React from 'react'

import {Link} from 'react-router-dom'

import {Button} from 'semantic-ui-react'


export default function Landing() {
    return (
        <div>
            
            <div className="landing-tagline shaded-text">
        <h2>My name's <span className="landing-name">Artemie Amari</span>, but you can call me <span className="landing-name">Tem.</span> I am a Software Engineer that develops beautiful website for individuals and small businesses.</h2>
        <p>Enter my portfolio by clicking on the button below, or swipe left for my other roles.</p>
        <div className="enter-cta">
          <Link to="/engineering" className="smooth">
            <Button
              basic
              inverted
              content='View Website Portfolio'
              labelPosition='right'
              className='smooth'
              icon={{
                name: 'chevron down',
              }}
            />
          </Link>
        </div>
      </div>
        </div>
    )
}
