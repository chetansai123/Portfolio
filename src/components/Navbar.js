import {Link} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
import "./Nav.css"
import React, { useState } from 'react'

const Navbar=()=>{
    const [click,setClick]= useState(false);
    const [color,setColor]=useState(false);
    const changeHandler=()=>{
        if(window.scrollY>100){
            setColor(true);
        }else setColor(false);
    }
    const clickHandler=()=>{
        setClick(!click);
    };
    window.addEventListener("scroll",changeHandler);
    return(
        <div className={color?"header header-bg":"header"}>
            <Link to="/"><h1>Portfolio</h1></Link>
            <u className={click?"menu active":"menu"}>
                <li >
                    <Link to="/">Home</Link>
                </li>
                <li >
                    <Link to="/projects">Project</Link>
                </li>
                <li >
                    <Link to="/about">About</Link>
                </li>
                <li >
                    <Link to="/contact">Contact</Link>
                </li>
            </u>
            <div className='hamburger' onClick={clickHandler}>
                {click? (<FaTimes  size={20} style={{color:'white'}}/>):(<FaBars  size={20} style={{color:'white'}}/>)};
            </div>
        </div>
    );
}

export default Navbar;
