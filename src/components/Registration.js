import './RegistrationStyle.css'
import React from 'react'

const Registration = () => {
  return (
    <div className='Registration'>
      <form>
        <div className='forms'>
        <h1>REGISTRATION FORM</h1>
        <label>Firstname</label>
        <input type="text" placeholder="enter your first name" />
        <label>LastName</label>
        <input type="text" placeholder="enter your last name" />
        <label>UserID</label>
        <input type="number" placeholder="enter your UserID" />
        <label>Password</label>
        <input type="password" placeholder="enter your first password" />
        <div className='but'>
        <button type='submit' className='btn1'>Login</button>
        <button type='submit' className='btn2'>Already Registered? Login</button>
        </div>
        </div>
        </form>
    </div>
  )
}

export default Registration