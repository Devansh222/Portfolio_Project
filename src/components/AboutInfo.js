import "./AboutInfoStyles.css"

import React from 'react'
import { Link } from "react-router-dom";
import leetcode from "../assets/leetcode.png"
import hackerrank from "../assets/hackerrank.png"


const AboutInfo = () => {
  return <div className="about">
            <div className="left">
                <h1> Who Am I? </h1>
                <p> I have good knowledge of Data structures and Algorithms. I also have coding on platforms like leetcode and hacker rank. I have deep knowledge of OOPs and DBMS as well. I have participated in Flipkart Grid 4.0 , 2022
                </p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-container-top">
                        <img src={leetcode} className="img" alt="true"/>
                    </div>
                    <div className="img-container-bottom">
                        <img src={hackerrank} className="img" alt="true"/>
                    </div> 
                </div>
            </div>
        </div>
}

export default AboutInfo;
