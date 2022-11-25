import './LoginStyles.css'
import React from 'react'

const Login = () => {
  return (
    <div className='log'>
      <div className='disc' >
        <h1>LOGIN</h1>
        <form >
            <label>Username</label>
            <input type='text' placeholder="enter your username" />
            <label>Password</label>
            <input type='password' placeholder="enter your password" />
            <div className='bts'>
            <button className='bt1'>Login</button>
            <button className='bt2'>Signup</button>
            </div>
        </form>
        </div>
        </div>
  )
}

export default Login