import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import './FormStyle.css'
const Form = () => {
    // const [data,setData]=useState({
    //     name:'',
    //     email:'',
    //     PhoneNo:'',
    //     subject:'',
    //     message:'',
    // });
    // const {name,email,phoneNo,subject,message}=data;
    // const changeHandler=(e)=>{
    //     setData({...data,[e.target.name]:e.target.value})
    // }
    const forms=useRef();
    const submitHandler=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_4oul6sz', 'template_8sxm5tj', e.target, 'TIXD1_NiK4pE6yNxu')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
    return (
        <div className='form'>
            <form onSubmit={submitHandler} ref={forms} autoComplete="off">
            <label>Name</label>
            <input type="text" name="name"  placeholder='enter your name here'></input>
            <label>Email</label>
            <input type="email" name="email"  placeholder='enter your email here'></input>
            <label>Mobie Number</label>
            <input type="text" name="phoneNo"  placeholder='enter your mobile num here'></input>
            <label>Subject</label>
            <input type="text" name="subject"    placeholder='enter your subject here'></input>
            <label>Message</label>
            <textarea rows="6" name="message"  placeholder="enter your message here"></textarea>
            <button type='submit' name="submit" className='btn-light'>SUBMIT</button>
            </form>
        </div>
    )
}

export default Form