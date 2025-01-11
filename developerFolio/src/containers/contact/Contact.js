import React, { useContext } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

// Removed: import { contactInfo } from "../../portfolio";  <-- Highlighted Fix

export default function Contact() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading contact-title"
                  : "heading contact-title"
              }
            >
              Contact Me
            </h1> {/* Updated to static text instead of using contactInfo.title */}

            <p
              className={
                isDark
                  ? "dark-mode subTitle contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              Let's connect! Feel free to reach out anytime for opportunities,
              collaborations, or questions. {/* Updated to static text */}
            </p>
          </div>

          <div className="contact-text-div">
            <a className="contact-detail" href="mailto:kewanim40@gmail.com">
              📧 kewanim40@gmail.com {/* Updated to static email */}
            </a>
            <br />
            <a className="contact-detail" href="tel:+12406885656">
              📞 +1-240-688-5656{/* Updated to static number */}
            </a>
            <br />
            <a
              className="contact-detail"
              href="https://www.linkedin.com/in/kewani-mulugeta-11a091179/"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 LinkedIn
            </a> {/* Added static LinkedIn link */}
          </div>

          <div className="contact-detail">
            <SocialMedia /> {/* Retained social media section */}
          </div>
        </div>
      </div>
    </Fade>
  );
}