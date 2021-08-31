import React from 'react'

import {
  Icon,
  Modal,
  Button,
} from 'semantic-ui-react'

export default function CaseStudy(props) {
  return (
    <Modal
      className='casestudy-modal'
      basic
      scrolling
      closeIcon
      centered={false}
      trigger={
        <Button
          title='View Case Study'
          color='teal'
          className='smooth'
          icon={{
            name: 'search',
            size: 'large',
            className: 'ui-button-icon',
          }}
        />}
    >
      <Modal.Header
        icon='search' content={props.project.name}
      />

      <Modal.Description
        className="card-meta">
        <p> <span className='pseudo-link smooth'>{props.project.category}</span> via <span className='pseudo-link smooth'>{props.project.meta}</span></p>
      </Modal.Description>

      <Modal.Content
        className="modal-icons">
        {props.project.wordpress &&
          <span>
            <Icon
              size='big'
              name='wordpress'
              className="pseudo-link smooth" />
          </span>
        }
        {props.project.html &&
          <span>
            <Icon
              size='big'
              name='html5'
              className="pseudo-link smooth" />
          </span>
        }
        {props.project.css &&
          <span>
            <Icon
              size='big'
              name='css3'
              className="pseudo-link smooth" />
          </span>
        }
        {props.project.php &&
          <span>
            <Icon
              size='big'
              name='php'
              className="pseudo-link smooth" />
          </span>
        }
        {props.project.javascript &&
          <span>
            <Icon
              size='big'
              name='js square'
              className="pseudo-link smooth" />
          </span>
        }
        {props.project.expressjs &&
          <span>
            <Icon
              size='big'
              name=''
              className="pseudo-link smooth" />
          </span>
        }
        {props.project.reactjs &&
          <span>
            <Icon
              size='big'
              name='react'
              className="pseudo-link smooth" />
          </span>
        }
        {props.project.mysql &&
          <span>
            <Icon
              size='big'
              name='server'
              className="pseudo-link smooth" />
          </span>
        }
        {props.project.postgresql &&
          <span>
            <Icon
              size='big'
              name='server'
              className="pseudo-link smooth" />
          </span>
        }
        {props.project.ruby &&
          <span>
            <Icon
              size='big'
              name='gem'
              className="pseudo-link smooth" />
          </span>
        }
        {props.project.rails &&
          <span>
            <Icon
              size='big'
              name='subway'
              className="pseudo-link smooth" />
          </span>
        }
        {props.project.auth &&
          <span>
            <Icon
              size='big'
              name='key'
              className="pseudo-link smooth" />
          </span>
        }
        {props.project.responsive &&
          <span>
            <Icon
              size='big'
              name='mobile alt'
              className="pseudo-link smooth" />
          </span>
        }
        {props.project.accessible &&
          <span>
            <Icon
              size='big'
              name='universal access'
              className="pseudo-link smooth" />
          </span>
        }
      </Modal.Content>


      <Modal.Content>
        <img src={props.project.url_to_img} alt="Case Study Landing" />
        {props.project.cs_img_1 &&
          <img src={props.project.cs_img_1} alt="Case Study Landing" />}
        {props.project.cs_intro &&
          <p>{props.project.cs_intro}</p>}
        {props.project.cs_img_2 &&
          <p>{props.project.cs_img_2}</p>}
        {props.project.cs_description &&
          <p>{props.project.cs_description}</p>}
        {props.project.cs_conclusion &&
          <p>{props.project.cs_conclusion}</p>}
      </Modal.Content>


      <Modal.Actions
        className="modal-buttons">
        {props.project.url_to_demo &&
          <Button
            content='View Live Site'
            as='a'
            href={props.project.url_to_demo}
            target='_blank'
            rel='noopener'
            color='teal'
            className='smooth'
            icon={{
              name: 'globe',
              size: 'large',
              className: 'ui-button-icon',
            }}
          />}
        {props.project.url_to_github &&
          <Button
            content='View GitHub Repo'
            as='a'
            href={props.project.url_to_github}
            target='_blank'
            rel='noopener'
            color='teal'
            className='smooth'
            icon={{
              name: 'github',
              size: 'large',
              className: 'ui-button-icon',
            }}
          />}
      </Modal.Actions>
    </Modal >
  )
}
