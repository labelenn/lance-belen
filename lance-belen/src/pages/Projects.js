import '../App.css';
import FWD from '../videos/FWD_Project_Demo.mp4'
import SEPT from '../videos/SEPT_Project_Demo.mp4'
import PS1 from '../videos/PS1_Project_Demo.mp4'

function Projects() {
  return (
    <div className = "projects">

      <h1>My Projects</h1>
      <div className = "project-info">
        <div className = "project-details">
          <h3>Cinema Website Application</h3>
          <h4>A full stack web application that I developed for a university project.</h4>
          <h4>Technology Stack used: React, HTML, CSS, NodeJS, Express, Sequelize, MySQL, GraphQL</h4>
        </div>
        <video className = "project-video" autoPlay muted loop >
          <source src = {FWD} type = "video/mp4"></source>
        </video>
      </div>

      <hr></hr>

      <div className = "project-info">
        <video className = "project-video" autoPlay muted loop height = "300px">
          <source src = {SEPT} type = "video/mp4"></source>
        </video>
        <div className = "project-details">
          <h3>Supermarket Website Application</h3>
          <h4>A full stack web application for tracking the cheapest items across different available retailers to give customers the best options.</h4>
          <h4>
          Developed in a team of 5 for a university project.<br></br>
          I was in charge of the backend; the user service and the delivery service of the application.
          </h4>
          <h4>Technology Stack used: React, HTML, CSS, MySQL, Java, Spring Boot.</h4> 
        </div>
      </div>

      <hr></hr>

      <div className = "project-info">  
        <div className = "project-details">
          <h3>Closing The Gap Website</h3>
          <h4>
          A website application that displays information about the progress towards the agreed targets of
          the National Agreement of Closing the Gap for the Indigenous people of Australia.<br></br>
          This is intended for the general public, government, and Indigenous people.<br></br>
          </h4>
          <h4>Technology Stack used: Java, HTML, CSS, SQLite</h4>
        </div>
        <video className = "project-video" autoPlay muted loop height = "300px">
          <source src = {PS1} type = "video/mp4"></source>
        </video>
      </div>
    </div>
  );
}

export default Projects;
