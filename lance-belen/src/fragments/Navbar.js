import '../App.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
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
        <li><NavLink to = "/lance-belen/projects" style = {{fontSize: 18}}>Projects</NavLink></li>
        <li><NavLink to = "/lance-belen/about-me" style = {{fontSize: 18}}>About Me</NavLink></li>
        <li><NavLink to = "/lance-belen/resume" style = {{fontSize: 18}}>Resume</NavLink></li>
        <li><NavLink to = "/lance-belen/photography" style = {{fontSize: 18}}>Photography</NavLink></li>
      </ul>
    </div>
  );
}

export default Navbar;