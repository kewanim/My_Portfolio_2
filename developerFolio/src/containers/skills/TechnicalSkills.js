import React from "react";
import {
  FaJsSquare,
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDatabase,
  FaDocker,
} from "react-icons/fa";
import { SiMysql, SiPostman, SiSelenium } from "react-icons/si";
import "./TechnicalSkills.scss";
import { PiFileCSharpBold } from "react-icons/pi";

const technicalSkillsData = [
  {
    category: "Programming Languages",
    icon: <FaJsSquare size={24} />,
    skills: [
      { name: "JavaScript", icon: <FaJsSquare size={20} /> },
      { name: "Python", icon: <FaPython size={20} /> },
      { name: "Java", icon: <FaJava size={20} /> },
      { name: "C#", icon: <PiFileCSharpBold size={20} /> },
    ],
  },
  {
    category: "Frontend Frameworks",
    icon: <FaReact size={24} />,
    skills: [
      { name: "React", icon: <FaReact size={20} /> },
    ],
  },
  {
    category: "Backend Frameworks",
    icon: <FaNodeJs size={24} />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={20} /> },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: <FaAws size={24} />,
    skills: [
      { name: "AWS", icon: <FaAws size={20} /> },
      { name: "Docker", icon: <FaDocker size={20} /> },
    ],
  },
  {
    category: "Databases",
    icon: <FaDatabase size={24} />,
    skills: [
      { name: "MySQL", icon: <SiMysql size={20} /> },
    ],
  },
  {
    category: "Testing Tools",
    icon: <SiSelenium size={24} />,
    skills: [
      { name: "Selenium", icon: <SiSelenium size={20} /> },
      { name: "Postman", icon: <SiPostman size={20} /> },
    ],
  },
];

const TechnicalSkills = () => {
  return (
    <div className="technical-skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {technicalSkillsData.map((block, index) => (
          <div key={index} className="skills-category-box">
            <h3 className="category-title">
              {block.icon}
              {block.category}
            </h3>
            <ul className="skills-list">
              {block.skills.map((skill, idx) => (
                <li key={idx} className="skill-item">
                  {skill.icon} {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;