import React from 'react';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Back2 from '../components/Back2';
import CertMain from '../components/CertMain'
import AboutContent from '../components/AboutContent';
const About = () => {
    const text = `I am a Full Stack Developer`
    return (
        <>
            <NavBar />
            <Back2 heading="ABOUT" text={text} />
            <AboutContent />
            <CertMain />
            <Footer />
        </>
    )
}

export default About