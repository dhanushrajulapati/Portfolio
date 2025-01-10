import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a Enthusiastic and detail-oriented Software Engineering student with a strong foundation in programming and web technologies. Experienced in solving complex problems and implementing creative solutions through projects like transmission line detection and interactive game development. Passionate about software development, with proficiency in languages like C, Java, Python, and JavaScript. Eager to contribute to impactful projects while continuously learning new technologies.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Interactive Sudoku Game",
    image: project1,
    description:
      "Designed and developed a fully functional Sudoku game using Java, featuring a graphical user interface for user engagement. Created algorithms to generate, validate, and solve puzzles, showcasing problem-solving and programming skills.",
    technologies: ["HTML", "CSS", "React", "Node.js", "WebRTC","Python"],
  },
  {
    title: "Three Phase tranmission line-fault detection",
    image: project2,
    description:
      "The IoT-based Three-Phase Line Fault Detection** project aims to monitor and detect faults in a three-phase power system using IoT sensors that measure current and voltage. The data is processed in real-time using machine learning algorithms to classify fault types and trigger immediate alerts. The system enables efficient fault detection, faster response times, and improved grid reliability by leveraging cloud computing and edge devices.",
    technologies: ["Arduino", "GSM Module", "C++", "IOT","FFT"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "2-145, Main Road , Gurazada ",
  phoneNo: "+91 9491544342 ",
  email: "dhanushrajulapati246@gmail.com",
};
