import React from "react";
import headshotIcon from "./img/headshot-512.png";
import githubIcon from "./img/githubIcon.svg"
import linkedinIcon from "./img/linkedinIcon.svg";
import "./PersonalLinks.css";

const PersonalLinks = () => {
  return (
    <div className="PersonalLinks">
      <ul>
        <li>
          <a
            title="Marshall Strong's Portfolio"
            href="https://marshallstrong.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={headshotIcon}
              alt="Development Portfolio for Marshall Strong"
            />
          </a>
        </li>
        <li>
          <a
            title="GitHub repository"
            href="https://github.com/marshall-strong"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={githubIcon}
              alt="GitHub repository"
            />
          </a>
        </li>
        <li>
          <a
            title="Marshall Strong's LinkedIn profile"
            href="https://www.linkedin.com/in/marshall-strong/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn Profile for Marshall Strong"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PersonalLinks;
