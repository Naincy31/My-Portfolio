import Experience from "./components/Experience";
import Overview from "./components/Overview";
import Projects from "./components/Projects";
import { useRef, useState, useEffect } from "react";
import githubIcon from '../src/assets/github.png';
import lnIcon from "../src/assets/linkedin.png"
import mediumIcon from "../src/assets/medium.png"

function App() {
  const [activeSection, setActiveSection] = useState('about')

  //refs for each section
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);


  // Function to scroll to the Experience section
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Intersection Observer to track active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5, // Trigger when 50% of section is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set active section based on which section is in view
        }
      });
    }, observerOptions);

    // Observe each section
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => {
      // Clean up observers on unmount
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-900 text-white pt-20 px-14">
      
      {/* Left Section */}
      <div className="left-section fixed w-1/2 h-full flex flex-col gap-7 z-10 px-44">
        <div className="gen-info">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Naincy Rathore</h1>
          <h4 className="text-xl font-semibold text-slate-200 text-opacity-75">Software Developer, Quantiphi</h4>
          <p className="text-base mt-5 text-slate-200 text-opacity-45 w-80">Building seamless front-end and back-end solutions with a focus on efficiency and continuous learning.</p>
        </div>

        {/* Navigation Links */}
        <div className="sections mt-8 space-y-4">

          {/* About */}
          <div className={`
            flex items-center gap-2 text-slate-200 text-opacity-45 cursor-pointer transition-all duration-200 ease-in-out group 
            ${activeSection !== 'about' && 'hover:text-white '}
            `} 
            onClick={() => scrollToSection(aboutRef)}
          >
            <div className={`border-t-2 transition-all duration-200 ease-in-out ${activeSection === 'about' ? 'w-[7%] border-white' : 'border-gray-500 w-[5%] group-hover:border-white group-hover:w-[7%]'}`}></div>
            <h6 className={`text-sm uppercase ${activeSection === 'about' && 'text-white'}`}>About</h6>
          </div>

          {/* Experience */}
          <div className={`
            flex items-center gap-2 text-slate-200 text-opacity-45 cursor-pointer transition-all duration-200 ease-in-out group 
            ${activeSection !== 'experience' && 'hover:text-white '}
            `} 
            onClick={() => scrollToSection(experienceRef)}
          >
            <div className={`border-t-2 transition-all duration-200 ease-in-out ${activeSection === 'experience' ? 'w-[7%] border-white' : 'border-gray-500 w-[5%] group-hover:border-white group-hover:w-[7%]'}`}></div>
            <h6 className={`text-sm uppercase ${activeSection === 'experience' && 'text-white'}`}>Experience</h6>
          </div>

          {/* Projects */}
          <div className={`
            flex items-center gap-2 text-slate-200 text-opacity-45 cursor-pointer transition-all duration-200 ease-in-out group 
            ${activeSection !== 'projects' && 'hover:text-white '}
            `} 
            onClick={() => scrollToSection(projectsRef)}
          >
            <div className={`border-t-2 transition-all duration-200 ease-in-out ${activeSection === 'projects' ? 'w-[7%] border-white' : 'border-gray-500 w-[5%] group-hover:border-white group-hover:w-[7%]'}`}></div>
            <h6 className={`text-sm uppercase ${activeSection === 'projects' && 'text-white'}`}>Projects</h6>
          </div>
        </div>
        <div className="icons flex gap-4 mt-8">
          <a href="https://www.linkedin.com/in/iamnaincyrathore/" target="_blank" rel="noopener noreferrer"><img src={lnIcon} alt="ln icon" className="filter invert"/></a>
          <a href="https://github.com/Naincy31" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="github icon" className="filter invert"/></a>
          <a href="https://naincyrathore543.medium.com/" target="_blank" rel="noopener noreferrer"><img src={mediumIcon} alt="medium icon" className="filter invert"/></a>
        </div>
      </div>

      {/* Right Section with content */}
      <div className="right-section w-1/2 overflow-y-auto h-full ml-[50%] px-10">
        <div ref={aboutRef} id="about">
          <Overview />
        </div>
        <div ref={experienceRef} id="experience">
          <Experience />
        </div>
        <div ref={projectsRef} id="projects">
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
