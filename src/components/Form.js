import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import emailjs from 'emailjs-com'
import './FormStyle.css'

const Form = () => {
    const form = useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_4oul6sz', 'template_8sxm5tj', form.current, 'TIXD1_NiK4pE6yNxu')
            .then((result) => {
                toast.success("Form submitted successfully!");
            }, (error) => {
                console.log(error.message);
                toast.error("Form submission failed. Please try again.");
            });
        e.target.reset();
    };
    return (
        <div className='form'>
            <form onSubmit={submitHandler} ref={form} autoComplete="off">
                <label>Name</label>
                <input type="text" name="name" placeholder='enter your name here'></input>
                <label>Email</label>
                <input type="email" name="email" placeholder='enter your email here'></input>
                <label>Mobie Number</label>
                <input type="text" name="phoneNo" placeholder='enter your mobile num here'></input>
                <label>Subject</label>
                <input type="text" name="subject" placeholder='enter your subject here'></input>
                <label>Message</label>
                <textarea rows="6" name="message" placeholder="enter your message here"></textarea>
                <button type='submit' name="submit" className='btn-light'>SUBMIT</button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Form