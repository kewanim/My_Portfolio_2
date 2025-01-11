import React, { useContext } from "react";
import "./TechnicalSkills.scss";
import { Fade } from "react-reveal";
import { skillsLanguageSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function TechnicalSkills() {
  const { isDark } = useContext(StyleContext);

  if (!skillsLanguageSection.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="skillsLanguage">
        <div className="skills-main-div">
          <div className="skills-header">
            <h1 className={isDark ? "dark-mode heading" : "heading"}>
              {skillsLanguageSection.title}
            </h1>
            <p className={isDark ? "dark-mode subTitle" : "subTitle"}>
              {skillsLanguageSection.subtitle}
            </p>
          </div>

          {/* Technical Skills Section */}
          <div className="cards-div">
            {skillsLanguageSection.technicalSkills.map((skill, index) => (
              <div key={index} className="card">
                <h2 className="card-title">{skill.category}</h2>
                <ul className="card-list">
                  {skill.skills.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Language Proficiencies Section */}
          <div className="language-section">
            <h2>Language Proficiencies</h2>
            <div className="cards-div">
              {skillsLanguageSection.languageProficiencies.map(
                (lang, index) => (
                  <div key={index} className="card">
                    <img
                      src={require(`../../assets/images/${lang.flag}`)}
                      alt={`${lang.language} Flag`}
                      className="language-flag"
                    />
                    <h2>{lang.language}</h2>
                    <p>{lang.level}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}