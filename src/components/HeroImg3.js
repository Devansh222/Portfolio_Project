import "./HeroImg2Styles.css"

import React from 'react'

import ProjectImg from "../assets/project-background.jpg";

const HeroImg3 = () => {
  return <div className="hero">
  
       <div className="hero-img">
                <img className="project-image" 
                    src={ProjectImg} alt="ProjectImg"/>
            </div>
            <div className="content">
            <div className="heading">
                <h1>ABOUT</h1>
                <p>I am a friendly Web Developer</p>
            </div>    
        </div>
      </div>
}

export default HeroImg3;