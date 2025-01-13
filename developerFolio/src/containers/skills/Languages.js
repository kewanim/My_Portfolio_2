import React from "react";
import { FaFlagUsa, FaFlag, FaGlobeAfrica } from "react-icons/fa";
import "./Languages.scss";

const languageSkills = [
  { name: "English", level: "Fluent", icon: <FaFlagUsa size={30} /> },
  { name: "French", level: "Intermediate", icon: <FaFlag size={30} /> },
  { name: "Amharic", level: "Native", icon: <FaGlobeAfrica size={30} /> },
  { name: "Tigrinya", level: "Fluent", icon: <FaGlobeAfrica size={30} /> },
];

const Languages = () => {
  return (
    <div className="languages-section">
      <h2 className="section-title">Languages</h2>
      <div className="languages-container">
        {languageSkills.map((lang, index) => (
          <div key={index} className="language-box">
            <div className="language-flag">{lang.icon}</div>
            <div className="language-details">
              <h3 className="language-name">{lang.name}</h3>
              <p className="proficiency">{lang.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;