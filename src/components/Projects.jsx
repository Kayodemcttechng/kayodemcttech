import React from 'react';

const projects = [
  {
    title: "School Website",
    description:
      "A fully responsive website for a school with Nursery, Primary, and Secondary arms. Focused on a clean, modern interface to clearly communicate the school’s mission, values, and academic structure.",
    image: "./src/assets/ffc.png",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "E-commerce Store",
    description:
      "An online store built with React and Tailwind CSS featuring product listings, shopping cart, and checkout functionality. Designed to be responsive and user-friendly across all devices.",
    image: "./src/assets/ffc.png",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my skills, projects, and experience. Fully responsive with smooth navigation and clean design.",
    image: "./src/assets/ffc.png",
    demoLink: "#",
    codeLink: "#",
  },
];

const Projects = () => {
  return (
    <div className="bg-black py-20">
      <h2 className="text-4xl font-bold text-white text-center">
        My Recent <span className="text-red-500">Projects</span>
      </h2>

      <div className="mt-16 space-y-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            } items-center gap-10 w-[85%] mx-auto`}
          >
            {/* Image */}
            <div className="lg:flex-1 flex justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </div>

            {/* Text */}
            <div className="lg:flex-1 space-y-4 text-center lg:text-left">
              <h3 className="text-red-500 font-bold text-2xl">
                {project.title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-5 py-3 rounded-md font-semibold shadow hover:bg-gray-200 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 text-white px-5 py-3 rounded-md font-semibold shadow hover:bg-red-600 transition"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
