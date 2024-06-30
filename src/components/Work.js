import './workstyle.css'
import React from 'react'
// import Pro from '../images/pro.webp'
import './WorkData'
import { NavLink } from 'react-router-dom'
import { click } from '@testing-library/user-event/dist/click'
const Work = (props) => {
  return (
    <div className='project-card'>
      <div className='image'><img src={props.imgurl} alt='img' className='work-image'></img></div>

      <h2 className='project-title' style={{ color: 'white' }}>{props.title}</h2>
      <p className='project-details'>{props.text}</p>
      <div className='btn btn-light'>
        <a href={props.view} target="_blank" rel="noopener noreferrer">
          view
        </a>
      </div>
    </div>
  )
}

export default Work