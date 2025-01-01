import React, { useContext } from "react";
import "./Achievement.scss"; // Reuse the same CSS for simplicity
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { certificationSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Certification() {
  const { isDark } = useContext(StyleContext);

  // Render only if display is true
  if (!certificationSection.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="certifications">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1 className={isDark ? "dark-mode heading" : "heading"}>
              {certificationSection.title}
            </h1>
            <p className={isDark ? "dark-mode subTitle" : "subTitle"}>
              {certificationSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {certificationSection.certificationsCards.map((card, index) => (
              <AchievementCard
                key={index}
                isDark={isDark}
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  footer: card.footerLink,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}