import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

const projects = [
  {
    name: "TeachTrack AI",
    description: "AI-powered EdTech platform built with Flask and React. Automatically identifies student learning gaps and generates real-time dashboards for teachers.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Flask", color: "green-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
    ],
    image: "/src/assets/carrent.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "AI Resume Analyzer",
    description: "A tool using OpenAI + Flask + React to generate ATS-optimized feedback on student resumes. Highlights formatting issues, keyword gaps, and degree relevance.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Flask", color: "green-text-gradient" },
      { name: "OpenAI API", color: "pink-text-gradient" },
    ],
    image: "/src/assets/jobit.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "Visual Job Tracker",
    description: "A job tracker web app with filtering and real-time visual updates. Helps students manage roles, companies, and interview progress.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
    ],
    image: "/src/assets/tripguide.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "Interactive Job Market Dashboard",
    description: "Real-time dashboard with public job data visualizations (salary trends, roles, locations). Built with Chart.js and React.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Chart.js", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
    ],
    image: "/src/assets/tripguide.png",
    source_code_link: "https://github.com/",
  },
];

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
            onError={(e) => {
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239CA3AF' font-family='Arial, sans-serif' font-size='16'%3EProject Image%3C/text%3E%3C/svg%3E";
            }}
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <svg
                className="w-1/2 h-1/2 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const ProjectCards = () => (
  <div className="mt-20 flex flex-wrap gap-7">
    {projects.map((project, index) => (
      <ProjectCard key={`project-${index}`} index={index} {...project} />
    ))}
  </div>
);

export default ProjectCards; 