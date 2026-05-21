import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
// import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from "./components/Contact";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <Home />
          {/* <About /> */}
          <Skills />
          <Projects />
          <Experience />
          <Education />
           <Contact />
     
        </>} />
        <Route path="/education" element={<Education />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
