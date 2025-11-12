import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-semibold"
      >
        Get in Touch
      </motion.h2>

      {/* Contact Details */}
      <div className="text-center tracking-tight space-y-4">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-lg text-stone-300"
        >
          {CONTACT.address}
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="text-lg text-stone-300"
        >
          {CONTACT.phoneNo}
        </motion.p>

        <motion.a
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          href={`mailto:${CONTACT.email}`}
          className="block text-lg text-stone-300 border-b border-stone-600 inline-block hover:text-white hover:border-white transition"
        >
          {CONTACT.email}
        </motion.a>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          <motion.a
            href="https://linkedin.com/in/dhanush-rajulapati-7985a4254"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-stone-400 hover:text-white transition text-lg font-medium"
          >
            LinkedIn
          </motion.a>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
