import '../App.css';
import me from '../images/profile-photo1.jpg';
import java from '../images/skills/java.png';
import python from '../images/skills/python.png';
import cpp from '../images/skills/c++.png';
import sql from '../images/skills/sql-server.png';
import html from '../images/skills/html-5.png';
import css from '../images/skills/css-3.png';
import nodejs from '../images/skills/nodejs.png';
import npm from '../images/skills/npm.png';
import react from '../images/skills/react.png';
import graphQL from '../images/skills/graphQL.png';
import git from '../images/skills/git.png';
import lightroom from '../images/skills/lightroom.png';
import photoshop from '../images/skills/photoshop.png';
import user from '../images/user.png';
import team from '../images/team.png';
import hobbies from '../images/hobbies.png';


function Home() {
  return (
    <>
    <div className = "home">
      <img src = {me} alt = "my profile"></img>
      <div className = "home-intro">
        <h4>Hi! I'm Lance.</h4>
        <h4>Welcome to my personal website.</h4>
        <h4>Feel free to explore the different tabs above to get to know more about myself.</h4>
      </div>
    </div>
  </>
  );
}

export default Home;
