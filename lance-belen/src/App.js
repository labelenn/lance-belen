import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './fragments/Header';
import NavBar from './fragments/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Resume from './pages/Resume';
import Photography from './pages/Photography';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route exact path = "/lance-belen" element = {<Home />}></Route>
        <Route path = "/lance-belen/projects" element = {<Projects />}></Route>
        <Route path = "/lance-belen/experience" element = {<Experience />}></Route>
        <Route path = "/lance-belen/resume" element = {<Resume />}></Route>
        <Route path = "/lance-belen/photography" element = {<Photography />}></Route>
      </Routes>
    </div>
  );
}

export default App;
