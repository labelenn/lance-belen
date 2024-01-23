import '../App.css';
import ResumePic from '../images/Resume.png';

function Resume() {
  return (
    <div className = "resume">
        <h1>Resume</h1>
        <img src = {ResumePic} alt = "resume"></img>
    </div>
  );
}

export default Resume;
