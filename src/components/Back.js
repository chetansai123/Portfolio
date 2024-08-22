import '../components/BackCss.css'
import Geeks from '../images/geeks.jpg'
import Beans from '../images/beans.jpeg'
import Lap from '../images/lap.webp'
import darkLap from '../images/darklap.jpeg'
import Feder from '../images/federsee.jpg'
import React from 'react'
import { Link } from 'react-router-dom'

const Back = () => {
  return (
    <div className='back'>
      <div className='mask'>
        <img className='geeks' src={darkLap} alt="background"></img>
      </div>
      <div className='context'>
        <p>MERN stack </p>
        <h1>Full Stack Developer</h1>
        <div className='btns' >
          <Link to='/projects' className='btn btn-light'>Projects</Link>
          <Link to='/contact' className='btn'>Contact Me</Link>
        </div>
      </div>
    </div>
  )
}

export default Back