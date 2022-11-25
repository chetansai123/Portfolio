import './CertificationStyle.css'
import React from 'react'
import CertData from './CertData'
import Certifications from './Certifications'
const CertMain = () => {
  return (
    <div className='space'>
        <h1 className='heading'>Certifications</h1>
        <p className='head-text'>Some of my recent certifications here</p>
        <div className='cert-container'>
        {CertData.map((val,ind)=>(
            <Certifications 
            key={ind}
            imgurl={val.imgurl}
            title={val.title}
            text={val.text}
            view={val.view}
            />
        ))}
        </div>
        </div>
  )
}

export default CertMain