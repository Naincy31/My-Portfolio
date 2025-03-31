import Experience from "./components/Experience";
import Overview from "./components/Overview";
import Projects from "./components/Projects";
import { useRef, useState, useEffect } from "react";

import Achievements from "./components/Achievements";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  //refs for each section
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const achievementsRef = useRef(null);


  //Function to scroll to the diff sections
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Mouse movement handler
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    };
  }, [])

  return (
    <div className="App bg-gray-900 overflow-hidden">
      <Header
        scrollToSection={scrollToSection}
        refs={{
          about: aboutRef,
          experience: experienceRef,
          projects: projectsRef,
          achievements: achievementsRef,
        }}
      />
      <div className="relative min-h-screen flex flex-col min-w-screen">
        {/* Radial gradient overlay that follows mouse */}
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80 %)`,
          }}
        ></div>
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
      <Footer />
    </div>
  );
}

export default App;
