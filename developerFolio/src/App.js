import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import Achievement from "./containers/achievement/Achievement";
import Certification from "./containers/achievement/Certification"; // Import Certifications
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TechnicalSkills from "./containers/skills/TechnicalSkills"; // Import

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Page */}
        <Route path="/" element={<Main />} />

        {/* Achievements Page */}
        <Route path="/achievements" element={<Achievement />} />

        {/* Certifications Page */}
        <Route path="/certifications" element={<Certification />} />
    
        {/* Technical Skills Page */}
        <Route path="/skills" component={TechnicalSkills} />
      </Routes>
    </Router>
  );
}

export default App;