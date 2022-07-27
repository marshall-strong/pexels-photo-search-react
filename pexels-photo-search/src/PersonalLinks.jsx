import React from "react";
import emailIcon from "./img/emailIcon.svg"
import githubIcon from "./img/githubIcon.svg"
import linkedinIcon from "./img/linkedinIcon.svg";
import "./PersonalLinks.css";

const PersonalLinks = () => {
  return (
    <div className="PersonalLinks">
      {/* <div className="col-sm-5 social"> */}
        <ul>
          <li>
            <a
              title="marshallstrong.com"
              className="btn-rounded-white"
              href="https://marshallstrong.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={linkedinIcon}
                className="linkedinIcon"
                alt="LinkedIn profile"
              />
            </a>
          </li>
          <li>
            <a
              title="LinkedIn"
              className="btn-rounded-white"
              href="https://www.linkedin.com/in/marshall-strong/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={linkedinIcon}
                className="linkedinIcon"
                alt="LinkedIn profile"
              />
            </a>
          </li>
          <li>
            <a
              title="GitHub"
              className="btn-rounded-white"
              href="https://github.com/marshall-strong"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={githubIcon}
                className="githubIcon"
                alt="GitHub repository"
              />
            </a>
          </li>
          <li>
            <a
              title="resume"
              className="btn-rounded-white"
              href="https://drive.google.com/file/d/1OhmDMX02cyVx8ph7CV4-rnyVGrw1Y8dk/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={githubIcon}
                className="resumeIcon"
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
