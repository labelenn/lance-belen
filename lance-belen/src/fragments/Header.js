import '../App.css';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className = "header">
      <NavLink to = "/lance-belen"><h1>Lance</h1></NavLink>
      <NavLink to = "/lance-belen"><img id = "header-logo" src = {logo} alt = "logo"></img></NavLink>
      <NavLink to = "/lance-belen"><h1>Belen</h1></NavLink>
    </div>
  );
}

export default Header;
