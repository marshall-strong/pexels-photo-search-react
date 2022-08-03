import React from "react";
import headshotIcon from "./img/headshot-512.png";
import githubIcon from "./img/githubIcon.svg"
import linkedinIcon from "./img/linkedinIcon.svg";
import resumeIcon from "./img/resumeIcon.svg"
// import emailIcon from "./img/emailIcon.svg"
import "./PersonalLinks.css";

const PersonalLinks = () => {
  return (
    <div className="PersonalLinks">
      {/* <div className="col-sm-5 social"> */}
      <ul>
        <li>
          <a
            title="Marshall Strong's Portfolio"
            className="btn-rounded-white"
            href="https://marshallstrong.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={headshotIcon}
              className="portfolioIcon socialIcon"
              alt="Development Portfolio for Marshall Strong"
            />
          </a>
        </li>
        <li>
          <a
            title="Marshall Strong's LinkedIn profile"
            className="btn-rounded-white"
            href="https://www.linkedin.com/in/marshall-strong/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={linkedinIcon}
              className="linkedinIcon socialIcon"
              alt="LinkedIn Profile for Marshall Strong"
            />
          </a>
        </li>
        <li>
          <a
            title="GitHub repository"
            className="btn-rounded-white"
            href="https://github.com/marshall-strong"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={githubIcon}
              className="githubIcon socialIcon"
              alt="GitHub repository"
            />
          </a>
        </li>
        <li>
          <a
            title="Marshall Strong's Resume"
            className="btn-rounded-white"
            href="https://drive.google.com/file/d/1OhmDMX02cyVx8ph7CV4-rnyVGrw1Y8dk/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={resumeIcon}
              className="resumeIcon socialIcon"
              alt="Resume for Marshall Strong"
            />
          </a>
        </li>
      </ul>
      {/* </div> */}
    </div>
  );
};

export default PersonalLinks;
