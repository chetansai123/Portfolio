import './workstyle.css'
import React from 'react'
import workData from './WorkData'
import Work from './Work'
const WorkMain = () => {
    return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            {workData.map((val,ind)=>{
                return(
                    <Work 
                    key={ind}
                    imgurl={val.imgurl}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    />
                );
            })}
            </div>
            </div>
        );
}

export default WorkMain