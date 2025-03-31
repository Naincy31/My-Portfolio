import React from 'react';
import githubIcon from '../assets/github.png';
import lnIcon from "../assets/linkedin.png";
import mediumIcon from "../assets/medium.png";

const Header = ({ scrollToSection, refs }) => {
  return (
    <div className="header px-5 py-7 text-white flex items-center shadow-md mb-16">
      <div className="logo text-2xl font-bold ml-36">My Portfolio</div>
      <nav className="ml-auto mr-24">
        <ul className="flex space-x-6 font-semibold text-lg lowercase">
          <li>
            <button
              className="text-white"
              onClick={() => scrollToSection(refs.about)}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="text-white"
              onClick={() => scrollToSection(refs.experience)}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              className="text-white"
              onClick={() => scrollToSection(refs.projects)}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className="text-white"
              onClick={() => scrollToSection(refs.achievements)}
            >
              Achievements
            </button>
          </li>
        </ul>
      </nav>
      <div className="icons flex gap-4 mr-20">
        <a
          href="https://www.linkedin.com/in/iamnaincyrathore/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={lnIcon}
            alt="ln icon"
            className="filter invert w-9 h-9"
          />
        </a>
        <a
          href="https://github.com/Naincy31"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={githubIcon}
            alt="github icon"
            className="filter invert w-10 h-10"
          />
        </a>
        <a
          href="https://naincyrathore543.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={mediumIcon}
            alt="medium icon"
            className="filter invert w-10 h-10"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;