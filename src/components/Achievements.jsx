import professionalCertificate from "../assets/ProfessionalCloudArchitect20241109-25-1qgjno_page-0001.jpg";
import associateCertificate from "../assets/Associate Certificate_page-0001.jpg";
import thinkTank from "../assets/Think Tank Award.jpg";
import jsCertificate from "../assets/javascript_basic certificate_page-0001.jpg";
import reactCertificate from "../assets/react_basic certificate_page-0001.jpg";

const achievements = [
  {
    title: "Associate Cloud Architect",
    organization: "Google Cloud",
    image: associateCertificate,
  },
  {
    title: "React (Basic)",
    organization: "HackerRank",
    image: reactCertificate,
  },
  {
    title: "Think Tank Award",
    organization: "Quantiphi",
    image: thinkTank,
  },
  {
    title: "Professional Cloud Architect",
    organization: "Google Cloud",
    image: professionalCertificate,
  },
  {
    title: "JavaScript (Basic)",
    organization: "HackerRank",
    image: jsCertificate,
  },
];

const Achievements = () => {
  return (
    <div className="achievements-section flex flex-col items-center bg-gray-900">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">Achievements</h2>
      <div className="achievements-list flex gap-8">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="achievement-card relative group w-[250px] h-[350px] flex-shrink-0 bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <img
              src={achievement.image}
              alt={achievement.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-teal-600 bg-opacity-0 group-hover:bg-opacity-80 flex flex-col items-center justify-center transition-all duration-300">
              <h3 className="text-lg font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {achievement.title}
              </h3>
              <p className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {achievement.organization}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
