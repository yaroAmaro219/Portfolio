// React 
import React from 'react'

// React Semantic
import {
  Label,
  Grid,
  Card,
  Icon,
  Image,
  Button,
} from 'semantic-ui-react'

import DevelopmentModal from '../case-studies/DevelopmentModal'

export default function DevelopmentIndex(props) {
  return (
    <>
      <Grid stackable centered >
        {props.projects.map(project =>
          <div key={project.id} className='project-cards'>
            <Grid.Column>
              <Card
                attached
                color='gold'
                className='dcursor smooth'
              >
                <Label
                  as='a'
                  color='gold'
                  ribbon='right'
                  className='dcursor smooth'>
                  {project.date}
                </Label>
                {project.featured &&
                  <Image
                    src={project.url_to_img}
                    alt='MacBook Pro with Project Landing'
                    label={{
                      corner: 'left',
                      icon: 'star'
                    }}
                    wrapped ui={true}
                    className='overlay'
                  />}
                {!project.featured &&
                  <Image
                    src={project.url_to_img}
                    alt='MacBook Pro with Project Landing'
                    wrapped ui={true}
                    className='overlay'
                  />}
                <Card.Content>
                  <Card.Header
                    className='card-header'>
                    {project.name}
                  </Card.Header>
                  <Card.Meta
                    className='card-meta'>
                    <Icon
                      name='tags'
                      className='pseudo-link smooth' />
                    <p><span className='pseudo-link smooth'>{project.category}</span>via <span className='pseudo-link smooth'>{project.meta}</span></p>
                  </Card.Meta>
                  <Card.Description
                    className='card-description'>
                    {project.tagline}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  {/* <p>At a glance:</p> */}
                  {project.wordpress &&
                    <span>
                      <Icon
                        size='large'
                        name='wordpress'
                        className='pseudo-link smooth' />
                    </span>
                  }
                  {project.html &&
                    <span>
                      <Icon
                        size='large'
                        name='html5'
                        className='pseudo-link smooth' />
                    </span>
                  }
                  {project.css &&
                    <span>
                      <Icon
                        size='large'
                        name='css3'
                        className='pseudo-link smooth' />
                    </span>
                  }
                  {project.php &&
                    <span>
                      <Icon
                        size='large'
                        name='php'
                        className='pseudo-link smooth' />
                    </span>
                  }
                  {project.javascript &&
                    <span>
                      <Icon
                        size='large'
                        name='js square'
                        className='pseudo-link smooth' />
                    </span>
                  }
                  {project.expressjs &&
                    <span>
                      <Icon
                        size='large'
                        name=''
                        className='pseudo-link smooth' />
                    </span>
                  }
                  {project.reactjs &&
                    <span>
                      <Icon
                        size='large'
                        name='react'
                        className='pseudo-link smooth' />
                    </span>
                  }
                  {project.mysql &&
                    <span>
                      <Icon
                        size='large'
                        name='server'
                        className='pseudo-link smooth' />
                    </span>
                  }
                  {project.postgresql &&
                    <span>
                      <Icon
                        size='large'
                        name='server'
                        className='pseudo-link smooth' />
                    </span>
                  }
                  {project.ruby &&
                    <span>
                      <Icon
                        size='large'
                        name='gem'
                        className='pseudo-link smooth' />
                    </span>
                  }
                  {project.rails &&
                    <span>
                      <Icon
                        size='large'
                        name='subway'
                        className='pseudo-link smooth' />
                    </span>
                  }
                  {project.auth &&
                    <span>
                      <Icon
                        size='large'
                        name='key'
                        className='pseudo-link smooth' />
                    </span>
                  }
                  {project.responsive &&
                    <span>
                      <Icon
                        size='large'
                        name='mobile alt'
                        className='pseudo-link smooth' />
                    </span>
                  }
                  {project.accessible &&
                    <span>
                      <Icon
                        size='large'
                        name='universal access'
                        className='pseudo-link smooth' />
                    </span>
                  }
                </Card.Content>
              </Card>
              <Button.Group
                className='card-buttons'
                attached='bottom'>
                {project.case_study &&
                  <DevelopmentModal
                    project={project}
                  />}
                {project.url_to_demo &&
                  <Button
                    as='a'
                    title='View Demo'
                    href={project.url_to_demo}
                    target='_blank'
                    rel='noopener'
                    color='gold'
                    className='smooth'
                    icon={{
                      name: 'globe',
                      size: 'large',
                      className: 'ui-button-icon',
                    }}
                  />}
              </Button.Group>
            </Grid.Column>
          </div>
        )}
      </Grid >
    </>
  )
}
