const Experience = () => {
  return (
    <div className="mb-9 mt-9">
      <h2 className="text-sm font-bold uppercase md:mb-3 mb-8 tracking-widest">Experience</h2>
      <div className="exp-list flex flex-col gap-8">
        {/* 1st Exp */}
        <div className="exp flex items-center gap-9 hover:bg-gray-700 hover:bg-opacity-30 rounded-lg transition ease-in-out duration-200 p-3">
          <div className="project-duration w-1/4">
            <p className="text-xs text-grayCustom font-bold">SEP 2023 - PRESENT</p>
          </div>
          <div className="project-info flex flex-col gap-4 w-3/4">
            <h1 className="project-title">Software Developer, Quantiphi - Google Fiber</h1>
            <p className="project-desc text-sm text-grayCustom">Collaborated with a team to create and implement bot solutions for Google Fiber, enhancing customer experience for a top U.S.
              Internet Service Provider. Leveraged Dialogflow CX to drive a 95% deflection rate.</p>
            <div className="tech-stack flex gap-3">
              <p className="border border-tealCustom rounded-lg p-2 text-xs">Dialogflow CX</p>
              <p className="border border-tealCustom rounded-lg p-2 text-xs">Google Cloud Platform</p>
            </div>
          </div>
        </div>
        {/* 2nd Exp */}
        <div className="exp flex items-center gap-9 hover:bg-gray-700 hover:bg-opacity-30 rounded-lg transition ease-in-out duration-200 p-3">
          <div className="project-duration w-1/4">
            <p className="text-xs text-grayCustom font-bold">JUL - SEP 2023</p>
          </div>
          <div className="project-info flex flex-col gap-4 w-3/4">
            <h1 className="project-title">Software Developer, Quantiphi - Baioniq</h1>
            <p className="project-desc text-sm text-grayCustom">Contributed as a Full Stack Developer for Baioniq, an enterprise-grade generative AI platform that enables quick deployment of
              AI capabilities for domain-specific tasks.</p>
            <div className="tech-stack flex gap-3 flex-wrap">
              <p className="border border-tealCustom rounded-lg p-2 text-xs">JavaScript</p>
              <p className="border border-tealCustom rounded-lg p-2 text-xs">React</p>
              <p className="border border-tealCustom rounded-lg p-2 text-xs">Node.js</p>
              <p className="border border-tealCustom rounded-lg p-2 text-xs">Express.js</p>
              <p className="border border-tealCustom rounded-lg p-2 text-xs">ElasticSearch</p>
              <p className="border border-tealCustom rounded-lg p-2 text-xs">E2E Testing</p>
            </div>
          </div>
        </div>
        {/* 3rd Exp */}
        <div className="exp flex items-center gap-9 hover:bg-gray-700 hover:bg-opacity-30 rounded-lg transition ease-in-out duration-200 p-3">
          <div className="project-duration w-1/4">
            <p className="text-xs text-grayCustom font-bold">JAN - JUL 2023</p>
          </div>
          <div className="project-info flex flex-col gap-4 w-3/4">
            <h1 className="project-title">Software Developer, Quantiphi - Qollective.CX</h1>
            <p className="project-desc text-sm text-grayCustom">Developed and maintained the full stack of a custom experience management platform, empowering
              organizations to build, integrate, automate, and unify virtual agent experiences.</p>
            <div className="tech-stack flex gap-3 flex-wrap">
              <p className="border border-tealCustom rounded-lg p-2 text-xs">JavaScript</p>
              <p className="border border-tealCustom rounded-lg p-2 text-xs">React</p>
              <p className="border border-tealCustom rounded-lg p-2 text-xs">Node.js</p>
              <p className="border border-tealCustom rounded-lg p-2 text-xs">Express.js</p>
              <p className="border border-tealCustom rounded-lg p-2 text-xs">Firebase</p>
              <p className="border border-tealCustom rounded-lg p-2 text-xs">RTL</p>
              <p className="border border-tealCustom rounded-lg p-2 text-xs">Google Cloud Platform</p>
            </div>
          </div>
        </div>
        {/* 4th Exp */}
        <div className="exp flex items-center gap-9 hover:bg-gray-700 hover:bg-opacity-30 rounded-lg transition ease-in-out duration-200 p-3">
          <div className="project-duration w-1/4">
            <p className="text-xs text-grayCustom font-bold">AUG - DEC 2022</p>
          </div>
          <div className="project-info flex flex-col gap-4 w-3/4">
            <h1 className="project-title">Chatbot Engineer Intern, Quantiphi - MobileBooker Buddy</h1>
            <p className="project-desc text-sm text-grayCustom">Spearheaded the creation of a user-friendly mobile booking chatbot named MobileBooker Buddy. Developed APIs
              to manage mobile data and facilitate seamless data retrieval, enhancing the overall user experience</p>
            <div className="tech-stack flex gap-3 flex-wrap">
              <p className="border border-tealCustom rounded-lg p-2 text-xs">JavaScript</p>
              <p className="border border-tealCustom rounded-lg p-2 text-xs">Node.js</p>
              <p className="border border-tealCustom rounded-lg p-2 text-xs">Express.js</p>
            </div>
          </div>
        </div>
        {/* 5th Exp */}
        <div className="exp flex items-center gap-9 hover:bg-gray-700 hover:bg-opacity-30 rounded-lg transition ease-in-out duration-200 p-3">
          <div className="project-duration w-1/4">
            <p className="text-xs text-grayCustom font-bold">APR - JUN 2021</p>
          </div>
          <div className="project-info flex flex-col gap-4 w-3/4">
            <h1 className="project-title">React Developer Intern, Persistent - Expense Tracker</h1>
            <p className="project-desc text-sm text-grayCustom">Developed a robust expense tracker application featuring user authentication for secure expense tracking.</p>
            <div className="tech-stack flex flex-wrap gap-3">
              <p className="border border-tealCustom rounded-lg p-2 text-xs">JavaScript</p>
              <p className="border border-tealCustom rounded-lg p-2 text-xs">React</p>
              <p className="border border-tealCustom rounded-lg p-2 text-xs">Firebase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience