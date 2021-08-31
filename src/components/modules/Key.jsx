// React
import React from 'react'

// React Semantic
import {
  Header,
  Grid,
  Icon,
  Button,
  Modal
} from 'semantic-ui-react'

const Key = () => (
  <Modal trigger={
    <Button
      basic
      inverted
      icon
      className='smooth' >
      <Icon name='key' />
    </Button>}
    closeIcon >
    <Modal.Content
      scrolling >
      <Grid stackable centered columns={4} divided >
        <Grid.Column>
          <Header>Development</Header>
          <p><Icon name='html5' /> HTML</p>
          <p><Icon name='css3' /> CSS</p>
          <p><Icon name='js square' /> JavaScript</p>
          <p><Icon name='code' /> jQuery</p>
          <p><Icon name='node js' /> NodeJS</p>
          <p><Icon name='code' /> ExpressJS</p>
          <p><Icon name='react' /> ReactJS</p>
          <p><Icon name='server' /> MySQL</p>
          <p><Icon name='server' /> PostgreSQL</p>
          <p><Icon name='gem' /> Ruby</p>
          <p><Icon name='subway' /> Rails</p>
          <p><Icon name='key' /> Authentication</p>
          <p><Icon name='mobile alt' /> Responsiveness</p>
          <p><Icon name='universal access' /> Accessibility</p>
        </Grid.Column>
        <Grid.Column>
          <Header>Design</Header>
          <p><Icon name='adobe' /> Adobe Photoshop</p>
          <p><Icon name='adobe' /> Adobe Illustrator</p>
          <p><Icon name='file pdf' /> Adobe InDesign</p>
          <p><Icon name='images' /> Digital Deliverables</p>
          <p><Icon name='address card' /> Print Deliverables</p>
          <p><Icon name='user' /> User Flow & Journeys</p>
          <p><Icon name='handshake' /> Design Handoffs</p>

        </Grid.Column>
        <Grid.Column>
          <Header>Deploy</Header>
          <p><Icon name='search' /> View Case Study</p>
          <p><Icon name='globe' /> View Live Site</p>
          <p><Icon name='github' /> View Github Repo</p>
          <p><Icon name='apple' /> macOS</p>
          <p><Icon name='google' /> Google Admin & Apps</p>
          <p><Icon name='github' /> Github</p>
          <p><Icon name='codepen' /> CodePen</p>
          <p><Icon name='netlify' /> Netlify</p>
          <p><Icon name='stack overflow' /> StackOverflow</p>
          <p><Icon name='slack' /> Slack</p>
        </Grid.Column>
      </Grid>
    </Modal.Content>
  </Modal>
)

export default Key
