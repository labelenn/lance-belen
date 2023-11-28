import '../App.css';
import logo from '../images/logo.png';

function Header() {
  return (
    <div className = "header">
      <a href = "/lance-belen/about-me"><h1>Lance</h1></a>
      <a href = "/lance-belen/about-me"><img id = "header-logo" src = {logo} alt = "logo"></img></a>
      <a href = "/lance-belen/about-me"><h1>Belen</h1></a>
    </div>
  );
}

export default Header;
