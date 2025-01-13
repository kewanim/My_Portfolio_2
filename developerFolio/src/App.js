import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import Achievement from "./containers/achievement/Achievement";
import Certification from "./containers/achievement/Certification"; // Import Certifications
import TechnicalSkills from "./containers/skills/TechnicalSkills"; // Import TechnicalSkills
import Languages from "./containers/skills/Languages"; // Import Languages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // Adding basename for GitHub Pages deployment
    <Router basename="/My_Portfolio_2">
      <Routes>
        {/* Main Page */}
        <Route path="/" element={<Main />} />

        {/* Achievements Page */}
        <Route path="/achievements" element={<Achievement />} />

        {/* Certifications Page */}
        <Route path="/certifications" element={<Certification />} />

        {/* Technical Skills Page */}
        <Route path="/skills" element={<TechnicalSkills />} />

        {/* Languages Page */}
        <Route path="/languages" element={<Languages />} />
      </Routes>
    </Router>
  );
}

export default App;