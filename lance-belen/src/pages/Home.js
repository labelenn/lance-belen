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
        <h4>Feel free to explore the different tabs above.</h4>
        <h4>This website is still in the works. I apologize for any missing information.</h4>
      </div>
    </div>

    <div className = "about-me">
        <div className = "background">
          <img id = "about-me-logo" src = {user} alt = "user"></img>
          <h4 id = "about-me-text">
          At such a young age, I have been blessed with the opportunity to live and study in three countries already.
          I was born and raised in the Philippines, lived and studied for two years in Qatar, and now, here in Australia.
          I am currently studying a Bachelor of Software Engineering degree at RMIT Australia which I intend to complete by the end of 2025.
          </h4>
        </div>

        <div className = "other-experiences">  
          <h4 id = "about-me-text">
          Although not listed on my resume, I have had other work experiences before in different areas of the industry.
          I used to work at a retail store, a local fish and chips shop, a food delivery service.
          I wanted to have as much exposure as I can earlier on as I felt that practical experiences contribute heavily to one's growth.
          </h4>
          <img id = "about-me-logo" src = {team} alt = "team"></img>
        </div>

        <div className = "hobbies-and-interests">
          <img id = "about-me-logo" src = {hobbies} alt = "hobbies"></img>
          <h4 id = "about-me-text">
          I love playing basketball and going to the gym. During my spare time, I like to watch movies, series, or documentaries, or play video games.
          Photography is also a hobby that I developed a few years ago. At a young age, I also developed my love for music, having been able to play the guitar since the age of 9.
          My particular topics of interest involves travelling, business, investments, technology, and physics.
          </h4>
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
