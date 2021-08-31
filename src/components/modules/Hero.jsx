// React
import React from 'react'

export default function Hero(props) {
  return (
    <div className="hero">
      <h1>{props.title}</h1>
      {props.preimage &&
        <img src={props.preimage} alt='Page Hero Mockup' />}
      <h3>{props.tagline}</h3>
      <p>{props.description}</p>
      {props.postimage &&
        <img src={props.postimage} alt='Page Hero Mockup' />}
      <p className="helper-text"><em>{props.helper}</em></p>
    </div>
  )
}