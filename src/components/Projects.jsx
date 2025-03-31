import expenseTracker from '../assets/expense-traker.png';
import projectManagement from '../assets/project-management.png';
import ticTacToe from '../assets/tic-tac-toe.png';

const projects = [
  {
    title: "Expense Tracker",
    image: expenseTracker,
    link: "https://expense-tracker-f80d4.web.app/",
    description:
      "User-authenticated expense tracking app with Firebase backend. Uses Context API, Hooks, and responsive UI for smooth navigation and secure data handling.",
    techStack: ["JavaScript", "React", "Firebase"],
  },
  {
    title: "A spicy spin on classic Tic Tac Toe!",
    image: ticTacToe,
    link: "https://tic-tac-toe-nory.vercel.app/",
    description:
      "Choose your grid size, toggle sound, and watch dynamic win patterns bring the chaos.",
    techStack: ["JavaScript", "React", "Redux"],
  },
  {
    title: "Project Management Site",
    image: projectManagement,
    link: "https://projectmanagementsite-ca0dc.web.app/",
    description:
      "Manage projects with real-time Firebase sync, user roles, status tracking, and comment threads. Built with React Router, Context API, and Redux.",
    techStack: ["JavaScript", "React", "Firebase", "Redux"],
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <div className="mb-10 mt-10 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center tracking-wide">Projects</h2>

      <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[320px] md:min-w-[400px] bg-white rounded-xl shadow-md p-6 snap-start transition-transform transform hover:scale-105 group"
          >
            <div className="relative border border-gray-200 rounded-md overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover group-hover:brightness-110 transition duration-300"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-teal-600 flex items-center">
              {project.title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </h3>

            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs px-2 py-1 border border-teal-500 text-teal-600 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;