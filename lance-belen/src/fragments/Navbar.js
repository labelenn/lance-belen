import '../App.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className = "navbar">
      <ul>
        <li><NavLink to = "/lance-belen/projects" style = {{textDecoration: "none", fontSize: 18}}>Projects</NavLink></li>
        <li><NavLink to = "/lance-belen/experience" style = {{textDecoration: "none", fontSize: 18}}>Experience</NavLink></li>
        <li><NavLink to = "/lance-belen/resume" style = {{textDecoration: "none", fontSize: 18}}>Resume</NavLink></li>
        <li><NavLink to = "/lance-belen/photography" style = {{textDecoration: "none", fontSize: 18}}>Photography</NavLink></li>
      </ul>
    </div>
  );
}

export default Navbar;