import React from 'react'


import {Link} from 'react-router-dom'

import {
    Button,
} from 'semantic-ui-react'

export default function Developer() {
    return (
        <div className="landing-developer">
            <div className="landing-titles">
                <h5>Software Engineer</h5>
                <span className="hide-on-mobile"><h5>|</h5></span>
                <h5>Jr Full Stack Engineer</h5>
                <span className="hide-on-mobile"><h5>|</h5></span>
                <h5>Athlete</h5>
            </div>
            <div className="landing-welcome smooth">
                <h1 className="smooth">Welcome.</h1>
            </div>
           
                <div className="landing-tagline shaded-text">
                    <h2>My name's <span className="landing-name">Artemie Amari</span>, but you can call me <span className="landing-name">Tem.</span> I am a Software Engineer that develops beautiful website for individuals and small businesses.</h2>
                    <p>Enter my portfolio by clicking on the button below.</p>
                    </div>
                    <div className="ctas">
                <div className="left-cta">
            </div>
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
