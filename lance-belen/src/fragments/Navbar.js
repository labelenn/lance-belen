import '../App.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className = "navbar">
      <ul>
        <li><NavLink to = "/projects" style = {{textDecoration: "none", fontSize: 18}}>Projects</NavLink></li>
        <li><NavLink to = "/experience" style = {{textDecoration: "none", fontSize: 18}}>Experience</NavLink></li>
        <li><NavLink to = "/resume" style = {{textDecoration: "none", fontSize: 18}}>Resume</NavLink></li>
        <li><NavLink to = "/photography" style = {{textDecoration: "none", fontSize: 18}}>Photography</NavLink></li>
      </ul>
    </div>
  );
}

export default Navbar;