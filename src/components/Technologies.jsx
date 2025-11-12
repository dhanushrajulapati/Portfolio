import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss, SiSupabase, SiFirebase, SiFlutter, SiJavascript } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate">
          <RiReactjsLine className="text-7xl text-cyan-400" title="React.js" />
        </motion.div>

        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="p-4">
          <TbBrandNextjs className="text-7xl text-white" title="Next.js" />
        </motion.div>

        <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className="p-4">
          <SiTailwindcss className="text-7xl text-sky-400" title="Tailwind CSS" />
        </motion.div>

        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="p-4">
          <FaNodeJs className="text-7xl text-green-500" title="Node.js" />
        </motion.div>

        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="p-4">
          <SiSupabase className="text-7xl text-emerald-400" title="Supabase" />
        </motion.div>

        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="p-4">
          <SiFirebase className="text-7xl text-amber-400" title="Firebase" />
        </motion.div>

        <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="p-4">
          <SiFlutter className="text-7xl text-sky-500" title="Flutter" />
        </motion.div>

        <motion.div variants={iconVariants(3.2)} initial="initial" animate="animate" className="p-4">
          <BiLogoPostgresql className="text-7xl text-blue-700" title="PostgreSQL" />
        </motion.div>

        <motion.div variants={iconVariants(2.7)} initial="initial" animate="animate" className="p-4">
          <SiJavascript className="text-7xl text-yellow-400" title="JavaScript" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
