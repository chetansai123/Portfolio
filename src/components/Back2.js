import './Back2styles.css'
import React from 'react'
import key from '../images/key.jpg'
const Back2 = (props) => {
    return (
        <div className='container'>
            
            <div className='heading'>
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
                </div>
        </div>
    )
}

export default Back2