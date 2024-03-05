import '../App.css';
import logo from '../images/personal-logo-black.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
    <div className = "header">
      <NavLink to = "/lance-belen"><img id = "header-logo" src = {logo} alt = "logo"></img></NavLink>
    </div>
    </>
  );
}

export default Header;
