import professionalCertificate from "../assets/ProfessionalCloudArchitect20241109-25-1qgjno_page-0001.jpg"
import associateCertificate from "../assets/Associate Certificate_page-0001.jpg"
import thinkTank from "../assets/Think Tank Award.jpg"
import jsCertificate from "../assets/javascript_basic certificate_page-0001.jpg"
import reactCertificate from "../assets/react_basic certificate_page-0001.jpg"

const Achievements = () => {
  return (
    <div className="mb-16 mt-9">
      <h2 className="text-sm font-bold uppercase lg:mb-5 mb-10 tracking-widest">Achievements</h2>
      <div className="images flex flex-col lg:flex lg:flex-row lg:flex-wrap gap-5 w-full">
        <div className="relative group w-56 h-40">
          <img src={associateCertificate} alt="associate-certificate" className="w-full h-full"/>
          <div className="absolute inset-0 bg-[#0D8B7B] opacity-0 group-hover:opacity-80 flex flex-col items-center justify-center transition-opacity duration-300">
            <span className="text-white font-bold transform translate-x-8 group-hover:translate-x-0 transition-transform duration-300">Associate Cloud Architect</span>
            <span className="text-white font-bold transform translate-x-8 group-hover:translate-x-0 transition-transform duration-300">Google Cloud</span>
          </div>
        </div>
        <div className="relative group w-56 h-40">
          <img src={reactCertificate} alt="js-certification" className="w-full h-full"/>
          <div className="absolute inset-0 bg-[#0D8B7B] opacity-0 group-hover:opacity-80 flex flex-col items-center justify-center transition-opacity duration-300">
            <span className="text-white font-bold transform translate-x-8 group-hover:translate-x-0 transition-transform duration-300">React (Basic)</span>
            <span className="text-white font-bold transform translate-x-8 group-hover:translate-x-0 transition-transform duration-300">HackerRank</span>
          </div>
        </div>
        <div className="relative group w-44 h-64">
          <img src={thinkTank} alt="think-tank" className="w-full h-full"/>
          <div className="absolute inset-0 bg-[#0D8B7B] opacity-0 group-hover:opacity-80 flex flex-col items-center justify-center transition-opacity duration-300">
            <span className="text-white font-bold transform translate-x-8 group-hover:translate-x-0 transition-transform duration-300">Think Tank Award</span>
            <span className="text-white font-bold transform translate-x-8 group-hover:translate-x-0 transition-transform duration-300">Quantiphi</span>
          </div>
        </div>
        <div className="relative group w-56 h-40">
          <img src={professionalCertificate} alt="professional-architect-certification" className="w-full h-full"/>
          <div className="absolute inset-0 bg-[#0D8B7B] opacity-0 group-hover:opacity-80 flex flex-col items-center justify-center transition-opacity duration-300">
            <span className="text-white font-bold transform translate-x-8 group-hover:translate-x-0 transition-transform duration-300">Professional Cloud Architect</span>
            <span className="text-white font-bold transform translate-x-8 group-hover:translate-x-0 transition-transform duration-300">Google Cloud</span>
          </div>
        </div>
        <div className="relative group w-56 h-40">
          <img src={jsCertificate} alt="js-certification" className="w-full h-full"/>
          <div className="absolute inset-0 bg-[#0D8B7B] opacity-0 group-hover:opacity-80 flex flex-col items-center justify-center transition-opacity duration-300">
            <span className="text-white font-bold transform translate-x-8 group-hover:translate-x-0 transition-transform duration-300">JavaScript (Basic)</span>
            <span className="text-white font-bold transform translate-x-8 group-hover:translate-x-0 transition-transform duration-300">HackerRank</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements
