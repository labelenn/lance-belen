import '../App.css';
import FWD from '../videos/FWD_Project_Demo.mp4'
import SEPT from '../videos/SEPT_Project_Demo.mp4'
import PS1 from '../videos/PS1_Project_Demo.mp4'
import SalaryPredictions from '../videos/Salary-Predictions.mp4'

function Projects() {
  return (
    <div className = "projects">

      <h1>My Projects</h1>
      <div className = "project-info">
        <div className = "project-details">
          <h3>Cinema Website Application</h3>
          <h4>A full stack web application that I developed for a university project.</h4>
          <h4>Technology Stack used: React, HTML, CSS, NodeJS, Express, Sequelize, MySQL, GraphQL</h4>
          <h4><a id = "project-link" href = "https://labelenn.github.io/Cinema-Website-Project/">Check it out</a></h4>
        </div>
        <video className = "project-video" autoPlay muted loop >
          <source src = {FWD} type = "video/mp4"></source>
        </video>
      </div>

      <hr></hr>

      <div className = "project-info">
        <div className = "project-details">
          <h3>Supermarket Website Application</h3>
          <h4>A full stack web application for tracking the cheapest items across different available retailers to give customers the best options.</h4>
          <h4>
          Developed in a team of 5 for a university project.<br></br>
          I was in charge of the backend; the user service and the delivery service of the application.
          </h4>
          <h4>Technology Stack used: React, HTML, CSS, MySQL, Java, Spring Boot.</h4> 
        </div>
        <video className = "project-video" autoPlay muted loop height = "300px">
          <source src = {SEPT} type = "video/mp4"></source>
        </video>
      </div>

      <hr></hr>

      <div className = "project-info">
        <div className = "project-details">
          <h3>Data Analysis and Modeling</h3> 
          <h4>A data analysis and modeling project for predicting salaries of different Data Science jobs.</h4>
          <h4>This project focuses on applying statistical modeling techniques by presenting our chosen problem, 
              providing a detailed analysis of the data, and a proper application of model selection strategies.
          </h4>
          <h4>For this end-to-end project, my team and I went through data preparation, data exploration, data visualisation, and statistical modeling.</h4>
          <h4>Technology Stack used: Tableau, Python, NumPy, Pandas, SQL, Excel, Jupyter Notebook</h4>
          <h4>Check it out: <a id = "project-link" href = "https://github.com/labelenn/Salary-Prediction">Github Repo</a> / 
              <a id = "project-link" href = "https://public.tableau.com/app/profile/lance.belen/viz/DataScienceSalary_17059935206390/Dashboard1?publish=yes">Tableau Public</a>
          </h4>
        </div>
        <video className = "project-video" autoPlay muted loop height = "300px">
          <source src = {SalaryPredictions} type = "video/mp4"></source>
        </video>
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
