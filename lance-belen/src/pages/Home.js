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


function Home() {
  return (
    <>
    <div className = "home">
      <img src = {me} alt = "my profile"></img>
      <div className = "home-intro">
        <h4>Hi! I'm Lance.</h4>
        <h4>Welcome to my personal website.</h4>
        <h4>Feel free to explore the different tabs above.</h4>
        <h4>This website is still in the works. I apologize for any missing information.</h4>
      </div>
    </div>

    <hr style = {{"width":"80%"}}></hr>

    <div className = "skills">
      <h1>My skills</h1>
      <img id = "skill-logo" src = {java} alt = "java"></img>
      <img id = "skill-logo" src = {python} alt = "python"></img>
      <img id = "skill-logo" src = {cpp} alt = "c++"></img>
      <img id = "skill-logo" src = {sql} alt = "sql"></img>
      <img id = "skill-logo" src = {html} alt = "html"></img>
      <img id = "skill-logo" src = {css} alt = "css"></img>
      <img id = "skill-logo" src = {nodejs} alt = "nodejs"></img>
      <img id = "skill-logo" src = {npm} alt = "npm"></img>
      <img id = "skill-logo" src = {react} alt = "react"></img>
      <img id = "skill-logo" src = {graphQL} alt = "graphQL"></img>
      <img id = "skill-logo" src = {git} alt = "git"></img>
      <img id = "skill-logo" src = {lightroom} alt = "lightroom"></img>
      <img id = "skill-logo" src = {photoshop} alt = "photoshop"></img>
    </div>
  </>
  );
}

export default Home;
