import { motion } from "framer-motion";
import profilePic from "../assets/PHOTO.png";

const HERO_CONTENT = `I’m a passionate software developer and computer science student at VR Siddhartha Engineering College. 
I specialize in building modern, responsive, and high-performance applications using React, Next.js, Flutter, and Node.js. 
With hands-on experience in full-stack development, cloud integration, and UI design, I love crafting elegant digital experiences that blend creativity and functionality.`;

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        {/* Profile Image */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Dhanush Rajulapati"
              className="border border-stone-900 rounded-3xl"
              width={450}
              height={450}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
            >
              Dhanush Rajulapati
            </motion.h2>

            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Student | Software Developer
            </motion.span>

            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={childVariants}
              className="flex gap-4 mt-4 mb-10"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full px-6 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-200 transition"
              >
                Download Resume
              </a>
              <a
                href="https://linkedin.com/in/dhanush-rajulapati-7985a4254"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-stone-400 rounded-full px-6 py-3 text-sm font-semibold hover:bg-stone-800 hover:text-white transition"
              >
                LinkedIn
              </a>
                
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
