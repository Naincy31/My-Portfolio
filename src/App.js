import Experience from "./components/Experience";
import Overview from "./components/Overview";
import Projects from "./components/Projects";
import { useRef, useState, useEffect } from "react";
import githubIcon from '../src/assets/github.png';
import lnIcon from "../src/assets/linkedin.png"
import mediumIcon from "../src/assets/medium.png"
import Achievements from "./components/Achievements";

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  //refs for each section
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const achievementsRef = useRef(null);


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
    if (achievementsRef.current) observer.observe(achievementsRef.current);

    return () => {
      // Clean up observers on unmount
      observer.disconnect();
    };
  }, []);

  // Mouse movement handler
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white pt-20 md:px-14 lg:flex lg:flex-row flex-col min-w-screen">
      {/* Radial gradient overlay that follows mouse */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      ></div>
      {/* Left Section */}
      <div className="left-section w-full lg:fixed lg:w-1/2 h-auto flex flex-col gap-7 z-10 lg:px-36 lg:mb-0 px-10 mb-9">
        <div className="gen-info">
          <h1 className="text-5xl font-bold mb-3">Naincy Rathore</h1>
          <h4 className="text-xl font-semibold text-slate-200 text-opacity-75">Software Developer, Quantiphi</h4>
          <p className="text-lg mt-5 text-grayCustom w-80">Building seamless front-end and back-end solutions with a focus on efficiency and continuous learning.</p>
        </div>

        {/* Navigation Links */}
        <div className="sections mt-8 space-y-4 hidden lg:block">

          {/* About */}
          <div className={`
            flex items-center gap-2 text-grayCustom mb-5 cursor-pointer transition-all duration-200 ease-in-out group 
            ${activeSection !== 'about' && 'hover:text-white '}
            `} 
            onClick={() => scrollToSection(aboutRef)}
          >
            <div className={`border-t-2 transition-all duration-200 ease-in-out ${activeSection === 'about' ? 'w-[10%] border-white' : 'border-gray-500 w-[5%] group-hover:border-white group-hover:w-[10%]'}`}></div>
            <h6 className={`text-xs font-bold tracking-widest uppercase ${activeSection === 'about' && 'text-white'}`}>About</h6>
          </div>

          {/* Experience */}
          <div className={`
            flex items-center gap-2 text-grayCustom mb-5 cursor-pointer transition-all duration-200 ease-in-out group 
            ${activeSection !== 'experience' && 'hover:text-white '}
            `} 
            onClick={() => scrollToSection(experienceRef)}
          >
            <div className={`border-t-2 transition-all duration-200 ease-in-out ${activeSection === 'experience' ? 'w-[10%] border-white' : 'border-gray-500 w-[5%] group-hover:border-white group-hover:w-[10%]'}`}></div>
            <h6 className={`text-xs font-bold tracking-widest uppercase ${activeSection === 'experience' && 'text-white'}`}>Experience</h6>
          </div>

          {/* Projects */}
          <div className={`
            flex items-center gap-2 text-grayCustom mb-5 cursor-pointer transition-all duration-200 ease-in-out group 
            ${activeSection !== 'projects' && 'hover:text-white '}
            `} 
            onClick={() => scrollToSection(projectsRef)}
          >
            <div className={`border-t-2 transition-all duration-200 ease-in-out ${activeSection === 'projects' ? 'w-[10%] border-white' : 'border-gray-500 w-[5%] group-hover:border-white group-hover:w-[10%]'}`}></div>
            <h6 className={`text-xs font-bold tracking-widest uppercase ${activeSection === 'projects' && 'text-white'}`}>Projects</h6>
          </div>

          {/* Achievements */}
          <div className={`
            flex items-center gap-2 text-grayCustom mb-5 cursor-pointer transition-all duration-200 ease-in-out group 
            ${activeSection !== 'achievements' && 'hover:text-white '}
            `} 
            onClick={() => scrollToSection(achievementsRef)}
          >
            <div className={`border-t-2 transition-all duration-200 ease-in-out ${activeSection === 'achievements' ? 'w-[10%] border-white' : 'border-gray-500 w-[5%] group-hover:border-white group-hover:w-[10%]'}`}></div>
            <h6 className={`text-xs font-bold tracking-widest uppercase ${activeSection === 'achievements' && 'text-white'}`}>Achievements</h6>
          </div>

        </div>
        <div className="icons flex gap-4 mt-2 mb-16 lg:mt-20">
          <a href="https://www.linkedin.com/in/iamnaincyrathore/" target="_blank" rel="noopener noreferrer"><img src={lnIcon} alt="ln icon" className="filter invert w-7 h-7 md:w-9 md:h-9"/></a>
          <a href="https://github.com/Naincy31" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="github icon" className="filter invert w-8 h-8 md:w-10 md:h-10"/></a>
          <a href="https://naincyrathore543.medium.com/" target="_blank" rel="noopener noreferrer"><img src={mediumIcon} alt="medium icon" className="filter invert w-8 h-8 md:w-10 md:h-10"/></a>
        </div>
      </div>

      {/* Right Section with content */}
      <div className="right-section w-full lg:w-1/2 overflow-y-auto h-full lg:ml-[50%] px-10 min-h-screen">
        <div ref={aboutRef} id="about">
          <Overview />
        </div>
        <div ref={experienceRef} id="experience">
          <Experience />
        </div>
        <div ref={projectsRef} id="projects">
          <Projects />
        </div>
        <div ref={achievementsRef} id="achievements">
          <Achievements />
        </div>
      </div>
    </div>
  );
}

export default App;
