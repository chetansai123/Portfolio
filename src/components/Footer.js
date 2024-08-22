import React from 'react'
import './FooterStyle.css'
import { FaHome, FaPhone, FaMailBulk, FaGithub, FaCode, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location' >
                        <FaHome size={20} style={{ color: 'white' }} className='icon' />
                        <p>Hyderabad,India</p>
                    </div>
                    <div className='phone'>
                        <FaPhone size={20} style={{ color: 'white' }} className='icon' />
                        <p>+919381827307</p>
                    </div>
                    <div className='email'>
                        <FaMailBulk size={20} style={{ color: 'white' }} className='icon' />
                        <p>chetansai.official@gmail.com</p>
                    </div>
                </div>
                <div className='right'>
                    <h4>About Me</h4>
                    <p className='personal'>I enjoy exploring new technologies, listening to music 🎸.
                        I also enjoy spending time in peaceful environments and natural landscapes.
                        I'm passionate about deepening my knowledge in data structures and algorithms (DSA).
                    </p>
                    <div className='socials'>
                        <a href='https://github.com/chetansai123' target='_blank' rel='noopener noreferrer'>
                            <FaGithub size={20} style={{ color: 'white' }} />
                        </a>

                        <a href='https://www.geeksforgeeks.org/user/chetansaissmb123/' target='_blank' rel='noopener noreferrer'>
                            <FaCode size={20} style={{ color: 'white' }} />
                        </a>
                        <a href="https://www.linkedin.com/in/chetan-sai-96445a227/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={20} style={{ color: 'white' }} />
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer