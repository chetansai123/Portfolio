import React from 'react';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Back2 from '../components/Back2';
import CertMain from '../components/CertMain'
import AboutContent from '../components/AboutContent';
const About = () => {
    return (
        <>
        <NavBar />
        <Back2 heading="ABOUT" text="I am a Front-end Developer"/>
        <AboutContent />
        <CertMain />
        <Footer />
        </>
    )
}

export default About