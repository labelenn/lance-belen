import '../App.css';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      var nav = document.querySelector(".navbar ul");
      setWindowWidth(window.innerWidth);
      if (windowWidth <= 600) {
        nav.style.display = "block";
      }
      else {
        nav.style.display = "flex";
      }   
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  function displayLinks() {
    var nav = document.querySelector(".navbar ul");
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } 
    else {
      nav.style.display = "block";
    }
  }

  return (
    <div className = "navbar">
      <div onClick = {displayLinks} className = "burger-nav"></div>
      <ul>
        <li><NavLink to = "/lance-belen/projects" style = {{textDecoration: "none", fontSize: 18}}>Projects</NavLink></li>
        <li><NavLink to = "/lance-belen/about-me" style = {{textDecoration: "none", fontSize: 18}}>About Me</NavLink></li>
        <li><NavLink to = "/lance-belen/resume" style = {{textDecoration: "none", fontSize: 18}}>Resume</NavLink></li>
        <li><NavLink to = "/lance-belen/photography" style = {{textDecoration: "none", fontSize: 18}}>Photography</NavLink></li>
      </ul>
    </div>
  );
}

export default Navbar;