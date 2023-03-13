import "./NavbarStyles.css"

import React , {useSta, useState}from 'react'   //
import { Link } from "react-router-dom";

import { FaBars,FaTimes } from "react-icons/fa";  // icon name is bar and category name is fa  

export const Navbar = () => {

  const [click,setClick]= useState(false);
  const handleClick= () => setClick(!click);

  const [color,setColor]=useState(false);
  const changeColor= () => {
    if(window.scrollY >=100)
    {
      setColor(true);
    }
    else
    {
      setColor(false);
    }
  };

  window.addEventListener("scroll",changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>Portfolio</h1>    
        </Link> 
        <ul className={click ? "nav-style active" : "nav-style"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}> 
        {click ? (<FaTimes size={20} style={ {color: "#fff"}} />)
        :(<FaBars size={20} style={ {color: "#fff"}} />)
        }
           
           
           
  
        </div>
    </div>
  );
}
