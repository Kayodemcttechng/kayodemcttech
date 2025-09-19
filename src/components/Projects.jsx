import React from "react";

const projects = [
  {
    title: "Customized School Website",
    image: "./assets/ffc.png",
    description: "A fully customized school website designed for First Fruits Schools, featuring responsive layouts and easy-to-navigate pages.",
    demoLink: "https://firstfruitsschools.com/",
    codeLink: "#",
  },
  {
    title: "Online Invoice Generator",
    image: "./assets/smartinvoice.png",
    description: "A web-based tool for creating professional invoices quickly, built with React and fully responsive design.",
    demoLink: "https://smartinvoice-five.vercel.app/",
    codeLink: "#",
  },
  {
    title: "Portfolio Website",
    image: "./assets/ffc.png",
    description: "A modern, personal portfolio site showcasing my projects, skills, and contact information.",
    demoLink: "#",
    codeLink: "#",
  },
];

const Projects = () => {
  return (
    <section className="bg-[#d9c7b2] py-20">
      <h2 className="text-4xl font-bold text-white text-center">
        My Recent <span className="text-red-500">Projects</span>
      </h2>

      <div className="mt-16 grid gap-16 lg:gap-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`grid lg:grid-cols-2 items-center gap-8 max-w-5xl mx-auto px-4 ${
              index % 2 === 1 ? "lg:flex-row-reverse lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-2xl shadow-xl w-full max-w-md"
              />
            </div>

            {/* Text */}
            <div className="space-y-4 text-center lg:text-left">
              <h3 className="text-red-500 font-bold text-2xl">{project.title}</h3>
              <p className="text-gray-800 text-base leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-200 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-red-600 transition"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
