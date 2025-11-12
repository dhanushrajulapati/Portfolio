
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; 


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
   <a
  href="/"
  aria-label="Home"
  className="block text-center w-full text-2xl font-semibold tracking-tight 
             bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 
             bg-clip-text text-transparent 
             hover:from-gray-400 hover:via-gray-300 hover:to-gray-400 
             transition-all duration-500"
    >
      Welcome to My Portfolio
    </a>



      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/dhanush-rajulapati-7985a4254/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.github.com/dhanushrajulapati"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/dhanushxrajulapati/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
