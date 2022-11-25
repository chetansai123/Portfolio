import React from 'react'
import AboutPic from '../images/about.avif'
import { Link } from 'react-router-dom'
import './AboutContentStyle.css'
const AboutContent = () => {
    return (
    <div className='about-container'>
        <div className='left'>
            <h1> Who Am I?</h1>
            <p>I am an undergraduate computer science student persuing my B.Tech Final year. 
                Involved in Front-end Development. I am Learning React and DSA currently.
                For more info, please reach out to me...
            </p>
        </div>
        <div className='right'>
                <img className='pic' src={AboutPic} alt='image' />
                <Link to='/contact' >
                    <button className='btn-light'>
                        CONTACT
                    </button>
                </Link>
            </div>
            
    </div>
    )
}

export default AboutContent