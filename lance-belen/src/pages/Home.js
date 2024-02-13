import '../App.css';
import me from '../images/profile-photo4.jpg';

function Home() {
  return (
    <>
    <div className = "home">
      <img src = {me} alt = "my profile"></img>
      <div className = "home-intro">
        <h4>Hi! I'm Lance Belen. Welcome to my personal website.</h4>
        <h4>I am an aspiring Software Engineer currently studying at RMIT University Australia.</h4>
        <h4>Explore the tabs above to get to know me more.</h4>
      </div>
    </div>
  </>
  );
}

export default Home;
