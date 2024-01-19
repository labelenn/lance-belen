import '../App.css';
import instagram from '../images/footer/instagram.png';
import linkedin from '../images/footer/linkedin.png';
import github from '../images/footer/github.png';

function Footer() {
  return (
    <>
    <div className = "footer">
      <a href = "https://www.instagram.com/lansdt/"><img src = {instagram} alt = "instagram"></img></a>
      <a href = "https://www.linkedin.com/in/lance-belen/"><img src = {linkedin} alt = "linkedin"></img></a>
      <a href = "https://github.com/labelenn"><img src = {github} alt = "github"></img></a>
      <p>© 2023 Lance Belen</p>
    </div>
    </>
  );
}

export default Footer;