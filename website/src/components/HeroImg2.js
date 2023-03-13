import "./HeroImg2Styles.css"

import React from 'react'

import ProjectImg from "../assets/project-background.jpg";

const HeroImg2 = () => {
  return <div className="hero">
  
       <div className="hero-img">
                <img className="project-image" 
                    src={ProjectImg} alt="ProjectImg"/>
            </div>
            <div className="content">
            <div className="heading">
                <h1>PROJECTS</h1>
                <p>Some of my most recent projects</p>
            </div>    
        </div>
      </div>
}

export default HeroImg2;