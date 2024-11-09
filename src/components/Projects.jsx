import expenseTracker from '../assets/expense-traker.png';
import projectManagement from '../assets/project-management.png';

const Projects = () => {
  return (
    <div className='mb-16'>
      <h2 className="text-sm font-bold uppercase mb-3">Projects</h2>
      <div className="projects-list flex flex-col gap-8">
        {/* 1st Project */}
        <a href="https://expense-tracker-f80d4.web.app/" target="_blank" rel="noopener noreferrer">
          <div className="project flex items-center gap-9 hover:bg-gray-700 hover:bg-opacity-30 rounded-lg transition ease-in-out duration-200 group p-3">
            <div className="project-image w-1/4 border-2 border-gray-700 rounded-sm group-hover:border-gray-400 transition-colors duration-200">
              <img src={expenseTracker} alt="expense-tracker" className='h-16'/>
            </div>
            <div className="project-info flex flex-col gap-4 w-3/4">
              <span className="project-title transition-colors duration-200 group-hover:text-teal-500">Expense Tracker
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
              </span>
              <p className="project-desc text-sm text-grayCustom">This application featuring user authentication for secure expense tracking. Safely stored
                data in Firebase with user-specific access rules, ensuring data integrity and privacy. Utilized advanced features such as Context
                API, React Hooks, and React Router to provide a seamless user experience, including smooth navigation between pages using
                React Router and responsive design through media queries.
              </p>
              <div className="tech-stack flex gap-3">
                <p className="border border-tealCustom rounded-lg p-2 text-xs">Javascript</p>
                <p className="border border-tealCustom rounded-lg p-2 text-xs">React</p>
                <p className="border border-tealCustom rounded-lg p-2 text-xs">Firebase</p>
              </div>
            </div>
          </div>
        </a>
        
        {/* 2nd Project */}
        <a href="https://projectmanagementsite-ca0dc.web.app/" target="_blank" rel="noopener noreferrer">
          <div className="project flex items-center gap-9 hover:bg-gray-700 hover:bg-opacity-30 rounded-lg transition ease-in-out duration-200 p-3 group">
            <div className="project-image w-1/4 border-2 border-gray-700 rounded-sm group-hover:border-gray-400 transition-colors duration-200">
              <img src={projectManagement} alt="project-manegement"/>
            </div>
            <div className="project-info flex flex-col gap-4 w-3/4">
              <span className="project-title transition-colors duration-200 group-hover:text-teal-500">Project Management Site
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
              </span>
              <p className="project-desc text-sm text-grayCustom">Created a project management website allowing users to sign up, log in, create projects, assign them, view online status, and
                add comments. Firebase manages data, including authentication and storage for avatars. React Router enables seamless page
                routing, while the Context API handles global state for logged-in users.
              </p>
              <div className="tech-stack flex gap-3 flex-wrap">
                <p className="border border-tealCustom rounded-lg p-2 text-xs">Javascript</p>
                <p className="border border-tealCustom rounded-lg p-2 text-xs">React</p>
                <p className="border border-tealCustom rounded-lg p-2 text-xs">Firebase</p>
                <p className="border border-tealCustom rounded-lg p-2 text-xs">Redux</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Projects