import '../App.css';
import profileheader from '../images/profile-header.jpg';
import sample1 from '../images/sample-1.jpg';
import sample2 from '../images/sample-2.jpg';
import sample3 from '../images/sample-3.jpg';
import sample4 from '../images/sample-4.jpg';
import ig from '../images/instagram.png';


function Photography() {
  return (
    <div className = "photography">
      <h1>Photography</h1>
      <div className = "photography-header">
        <h3 style = {{paddingTop: 50}}>Check out my photography account</h3>
        <h5>Click the instagram logo or username to redirect to my account</h5>
        <h5 style = {{paddingBottom: 20}}>Otherwise, enjoy some of my shots below</h5>
        <a href = "https://www.instagram.com/belnza/"><img id = "ig" src = {ig} alt = "ig"></img></a>
        <a href = "https://www.instagram.com/belnza/"><h3>belnza</h3></a>
      </div>
      <img id = "profile-header" src = {profileheader} alt = "profile-header"></img>
      <img id = "sample" src = {sample1} alt = "sample1"></img>
      <img id = "sample" src = {sample2} alt = "sample2"></img>
      <img id = "sample" src = {sample3} alt = "sample3"></img>
      <img id = "sample" src = {sample4} alt = "sample4"></img>
    </div>
  );
}

export default Photography;
