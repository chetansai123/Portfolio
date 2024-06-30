import React from 'react'
import AboutPic from '../images/about.avif'
import { Link } from 'react-router-dom'
import './AboutContentStyle.css'
const AboutContent = () => {

    const text = `I am a Full Stack Developer with 4 months of internship experience and 1 year of professional
     experience as a Software Engineer specializing in the MERN stack (MongoDB, Express.js, React, Node.js).
      My expertise lies in developing responsive and interactive front-end interfaces using the React
      framework, as well as creating and integrating robust back-end APIs. I have substantial experience
      in building server-side applications and writing RESTful APIs, ensuring seamless integration between
       front-end and back-end systems. I am currently deepening my understanding of Data Structures and
       Algorithms (DSA) using Java. For more information or details, please feel free to reach out to me.
`;

    return (
        <div className='about-container'>
            <div className='left'>
                <h1> Who Am I?</h1>
                <p>  {text}
                </p>
            </div>
            <div className='right'>
                <img className='pic' src={AboutPic} alt='image' />
                <Link to='/contact' >
                    <button className='btn-light'>
                        CONTACT ME
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default AboutContent