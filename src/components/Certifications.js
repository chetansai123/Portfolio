import './CertificationStyle.css'
import React from 'react'
import './CertData'
const Certifications = (props) => {
    return (
        <div className='cert-container'>
        <div className='cert-card'>
            <img src={props.imgurl} alt="JP morgan Certification" />
            <h4 className='cert-title'> {props.title}</h4>
            <p className='cert-text'>{props.text}</p>
            <div className='btn-light'>
                <a href={props.view} target='_blank'>view</a>
            </div>
        </div>
    </div>
    )
}

export default Certifications