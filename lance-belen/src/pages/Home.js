import '../App.css';
import me from '../images/profile-photo.jpg';

function Home() {
  return (
    <div className = "home">
      <img src = {me} alt = "my profile"></img>
      <div className = "home-intro">
        <h4>Hi! I'm Lance.</h4>
        <h4>Welcome to my personal website.</h4>
        <h4>Feel free to explore the different tabs above.</h4>
        <h4>This website is still in the works. I apologize for any missing information.</h4>
      </div>
    </div>
  );
}

export default Home;
