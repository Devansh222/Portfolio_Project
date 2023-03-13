import "./FooterStyles.css"

// import React from 'react'   
import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaVoicemail } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-continer">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Delhi</p>
                        <p>India</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        63979-22424
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        devansh4400@gmail.com
                    </h4>
                </div>
            </div>  
            <div className="right">
                <h4>About me</h4>
                <p>
                    This is me Devansh Sharma. I enjoy discussing new projects 
                    and challenges.
                </p>
                <div className="social">
                    <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer


