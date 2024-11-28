import React from 'react'


import {Link} from 'react-router-dom'

import {
    Button,
} from 'semantic-ui-react'


export default function Developer() {
    return (
        <div className="landing-developer">
            <div className="landing-titles">
                <h5>Data Analyst</h5>
                <span className="hide-on-mobile"><h5>|</h5></span>
                <h5>Jr Full Stack Engineer</h5>
                <span className="hide-on-mobile"><h5>|</h5></span>
                <h5>Dog Dad</h5>
            </div>
            <div className="landing-welcome smooth">
                <h1 className="smooth">Welcome.</h1>
            </div>
           
                <div className="landing-tagline shaded-text">
                    <h2>My name's <span className="landing-name">Artemie Amari</span>, welcome to my online <span className="landing-name">portfolio.</span> I'm currently a Senior Data Analyst at VaynerMedia where I collect, clean, and interpret data to uncover insights and support informed decision-making on the Mondelez across the U.S. and Canada.</h2>
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
