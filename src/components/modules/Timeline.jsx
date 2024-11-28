// React
import React from 'react'

// React Timeline
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Timeline() {
  return (
    <VerticalTimeline
      className="vertical-timeline">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="may 2018"
        iconStyle={{ background: '#DDAF72' }}
      >
        <h3 className="vertical-timeline-element-title">College & The Spark Behind My Career</h3>
        <p>As a senior at Georgia Southern studying Finance; I wanted to expand my coding capabilities so I could apply them to financial models. I decided to do an independent study where I was introduced to web scrapping and different data visualization libraries for Python. </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="apr 2020"
        iconStyle={{ background: '#DDAF72' }}
      >
        <h3 className="vertical-timeline-element-title">Graduating General Assembly</h3>
        <p>I joined General Assembly's Software Engineering Immersive course where I developed several projects and really advanced my understanding and capabilities in web developoment. We primarily focused on bulding full stack application with Ruby on Rails on the backend using a Postgresql api and a React environment for the front end.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="sep 2020"
        iconStyle={{ background: '#DDAF72' }}
      >
        <h3 className="vertical-timeline-element-title">Starting Totally Tennis</h3>
        <p>Through Covid-19 it was difficult finding an entry level job, so using my background in tennis and web development I decided to start an outdoor tennis program for kids. </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="mar 2022"
        iconStyle={{ background: '#DDAF72' }}
      >
        <h3 className="vertical-timeline-element-title">Social Buying for Uber Eats at GroupM</h3>
        <p>Launched paid social activations across 6 platforms for UberEATS and Postmates with a 7 figure monthly budget.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="apr 2024"
        iconStyle={{ background: '#DDAF72' }}
      >
        <h3 className="vertical-timeline-element-title">Data Analytics at VaynerMedia</h3>
        <p>Today I dive into data on a daily basis, transforming raw numbers into meaningful insights that drive smart marketing decisions and help power the success of Mondelez.</p>
      </VerticalTimelineElement>

    </VerticalTimeline >
  )
}
