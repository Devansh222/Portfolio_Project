import "./HeroImg2Styles.css"

import React from 'react'

import ProjectImg from "../assets/project-background.jpg";

const HeroImg4 = () => {
  return <div className="hero">
  
       <div className="hero-img">
                <img className="project-image" 
                    src={ProjectImg} alt="ProjectImg"/>
            </div>
            <div className="content">
            <div className="heading">
                <h1>CONTACT</h1>
                <p>Lets have a chat</p>
            </div>    
        </div>
      </div>
}

export default HeroImg4;