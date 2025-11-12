import { motion } from "framer-motion";

const Internship = () => {
  return (
    <div className="pb-24">
      {/* Section Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Internship
      </motion.h2>

      {/* Internship Info */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl rounded-2xl border border-stone-800 bg-stone-900/30 p-8 shadow-md backdrop-blur-lg text-center"
      >
        <h3 className="text-2xl font-semibold text-white">
          Pranayuv Technologies
        </h3>
        <p className="text-stone-400 mt-1 text-sm">May 2025 – July 2025 | Hybrid</p>

        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {[
            "Next.js",
            "Tailwind CSS",
            "Framer Motion",
            "Flutter",
            "Supabase",
            "Node.js",
          ].map((tech, i) => (
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
  );
};

export default Internship;
