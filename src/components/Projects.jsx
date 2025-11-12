import { motion } from "framer-motion";
import projectGif from "../assets/projects/project-1.gif"; // Emotion Detection (GIF)
import project2 from "../assets/projects/project-2.jpg"; 
import project3 from "../assets/projects/project-3.jpg";  
import project4 from "../assets/projects/project-4.png"  // WorkNear (JPG)

const PROJECTS = [
  {
    title: "Emotion Detection Using Audio and Text",
    image: projectGif,
    description:
      "Developed a multimodal emotion recognition system integrating audio and text analysis to achieve 87% accuracy. Combined NLP with audio feature extraction, reducing classification errors by 28% and enabling real-time emotion detection with sub-second response time.",
    technologies: ["Python", "TensorFlow", "NLTK", "librosa", "scikit-learn"],
  },
  {
    title: "WorkNear – Local Service Marketplace(Internship Project)",
    image: project2,
    description:
      "Built a cross-platform Flutter app connecting 100+ local service providers with customers. Implemented JWT-secured authentication, optimized image uploads (65% smaller, 3× faster), and achieved 99.8% API uptime using Node.js and Supabase backend.",
    technologies: ["Flutter", "Dart", "Supabase", "Node.js", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Photography Website",
    image: project3,
    description:
      "Designed a responsive photography portfolio using React and Tailwind CSS to showcase event albums. Integrated Calendly for seamless booking, improving client conversions by 41% and boosting mobile load speed by 53%.",
    technologies: ["React", "Tailwind CSS", "Calendly"],
  },
  {
    title: "Three-Phase Transmission Line Fault Detection (IoT)",
    image: project4,
    description:
      "Developed an IoT-based system for real-time detection of faults in three-phase transmission lines using GSM to send fault location via SMS. The system enhances power system reliability and can be upgraded for 5G/6G networks for faster, low-latency alerts.",
    technologies: ["IoT", "GSM", "Sensors", "Arduino", "Embedded C"],
  },
];

const Projects = () => {
  return (
    <div className="pb-4">
      {/* Section Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Projects
      </motion.h2>

      {/* Project List */}
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
            {/* Project Image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex justify-center"
            >
              <img
                src={project.image}
                width={400}
                height={250}
                alt={project.title}
                className="mb-6 rounded-lg shadow-md border border-stone-800 hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            {/* Project Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 px-4"
            >
              <h3 className="mb-2 font-semibold text-2xl text-white">
                {project.title}
              </h3>
              <p className="mb-4 text-stone-400 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded bg-stone-900 px-3 py-1 text-sm font-medium text-stone-300 border border-stone-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
