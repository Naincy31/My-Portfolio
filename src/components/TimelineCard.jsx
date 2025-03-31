import { useRef, useState, useEffect } from "react";

const TimelineCard = ({ experience, isTop }) => {
  const [showFade, setShowFade] = useState(false);
  const cardRef = useRef(null);

  const handleScroll = () => {
    const el = cardRef.current;
    if (!el) return;

    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 5;
    setShowFade(!atBottom);
  };

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    setShowFade(el.scrollHeight > el.clientHeight);

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative bg-white rounded-lg p-6 w-[250px] h-[300px] mx-4 z-10 
        hover:scale-105 transition-transform duration-300 
        overflow-y-auto scrollbar-hide
        ${isTop ? "self-start mt-0" : "self-end mt-10"}`}
    >
      {/* Duration */}
      <p className="text-xs text-gray-500 font-bold mb-2">{experience.duration}</p>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-800">{experience.title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-2">{experience.description}</p>

      {/* Tech Stack */}
      <div className="tech-stack flex flex-wrap gap-2 mt-4">
        {experience.techStack.map((tech, index) => (
          <span
            key={index}
            className="border border-teal-500 text-teal-500 rounded-lg px-2 py-1 text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Bottom gradient */}
      {showFade && (
        <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      )}

    </div>
  );
};

export default TimelineCard;
