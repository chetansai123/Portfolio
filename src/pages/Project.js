import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Back2 from '../components/Back2'
import Work from '../components/Work'
import WorkMain from '../components/WorkMain'

const Project = () => {
    return (
        <div>
            <NavBar />
            <Back2 heading="PROJECTS" text="Some of my recent works here" />
            <WorkMain />
            <Footer />
        </div>
    )
}

export default Project;