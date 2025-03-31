import TimelineCard from "./TimelineCard";

const experiences = [
  {
    duration: "JUl 2024 - PRESENT",
    title: "Software Developer, Quantiphi - AT&T",
    description:
      "Leading the development of a multi-turn InfoBot playbook that improved the containment rate by 20% and achieved 95% context retention. Developed a Colab-based testing suite integrated with Google Cloud Functions to automate chatbot performance evaluation and optimization. Focused on enhancing user experience through scalable, context-aware conversational flows.",
    techStack: ["Dialogflow CX", "Cloud Functions", "Python", "Colab"],
  },
  {
    duration: "SEP 2023 - JUN 2024",
    title: "Software Developer, Quantiphi - Google Fiber",
    description:
      "Collaborated with a team to create and implement bot solutions for Google Fiber, enhancing customer experience for a top U.S. Internet Service Provider. Leveraged Dialogflow CX to drive a 95% deflection rate.",
    techStack: ["Dialogflow CX", "Google Cloud Platform"],
  },
  {
    duration: "JUL - SEP 2023",
    title: "Software Developer, Quantiphi - Baioniq",
    description:
      "Contributed as a Full Stack Developer for Baioniq, an enterprise-grade generative AI platform that enables quick deployment of AI capabilities for domain-specific tasks.",
    techStack: [
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "ElasticSearch",
      "E2E Testing",
    ],
  },
  {
    duration: "JAN - JUL 2023",
    title: "Software Developer, Quantiphi - Qollective.CX",
    description:
      "Developed and maintained the full stack of a custom experience management platform, empowering organizations to build, integrate, automate, and unify virtual agent experiences.",
    techStack: [
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "Firebase",
      "RTL",
      "Google Cloud Platform",
    ],
  },
  {
    duration: "AUG - DEC 2022",
    title: "Chatbot Engineer Intern, Quantiphi - MobileBooker Buddy",
    description:
      "Spearheaded the creation of a user-friendly mobile booking chatbot named MobileBooker Buddy. Developed APIs to manage mobile data and facilitate seamless data retrieval, enhancing the overall user experience.",
    techStack: ["JavaScript", "Node.js", "Express.js"],
  },
  {
    duration: "APR - JUN 2021",
    title: "React Developer Intern, Persistent - Expense Tracker",
    description:
      "Developed a robust expense tracker application featuring user authentication for secure expense tracking.",
    techStack: ["JavaScript", "React", "Firebase"],
  },
];


const Experience = () => {
  return (
    <div className="px-10 py-16 bg-gray-900">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">Experience</h2>
      <div className="relative flex items-center timeline overflow-x-auto pb-12">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-700 z-0" />

        {experiences.map((exp, index) => (
          <TimelineCard key={index} experience={exp} isTop={index % 2 === 0} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
