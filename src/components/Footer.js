import React from 'react'
import './FooterStyle.css'
import {FaHome,FaPhone,FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:'white'}}/>
                    <p>Hyderabad,India</p>
                </div>
                <div className='phone'><h4>
                <FaPhone size={20} style={{color:'white'}}/>
                +919381827307
                </h4>
                </div>
                <div className='location'>
                    <FaMailBulk size={20} style={{color:'white'}}/>
                    <p>chetansaissmb123@gmail.com</p>
                </div>
                </div>
                <div className='right'>
                    <h4>About Me</h4>
                    <p>This is me Chetan Sai,a Computer Science UnderGraduate persuing Final Year in BTECH.
                        I enjoy coding.
                    </p>
                    <div className='socials'>
                    <FaFacebook size={20} style={{color:'white'}}/>
                    <FaTwitter size={20} style={{color:'white'}}/>
                    <FaLinkedin size={20} style={{color:'white'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer