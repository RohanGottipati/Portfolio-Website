import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

// Custom CSS to override default styles
const customStyles = `
  .vertical-timeline-element-icon {
    background: transparent !important;
    box-shadow: none !important;
    border-radius: 50% !important;
    overflow: hidden !important;
  }
  
  .vertical-timeline-element-icon img {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain !important;
    border-radius: 0 !important;
  }
  
  .logo-container {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
  }
  
  .logo-container.teachtrack {
    background: white;
  }
`;

const experiences = [
  {
    title: "Co-Founder, Software Development Lead",
    company_name: "TeachTrack AI",
    icon: "/logos/teachtrack-ai.png",
    iconBg: "#ffffff",
    date: "Jan 2025 – Present",
    points: [
      "Built an AI platform with Flask and React to automate student learning gap analysis",
      "Created real-time dashboards and data pipelines that save teachers 12+ hours/week",
      "Improved AI accuracy by 30% using iterative educator feedback",
    ],
  },
  {
    title: "Math and Coding Tutor",
    company_name: "Varsity Tutors",
    icon: "/logos/varsity-tutors.png",
    iconBg: "#ffffff",
    date: "Nov 2024 – Present",
    points: [
      "Tutored students in Python, Java, and algorithm problem solving",
      "Designed custom programming projects to build real-world skills",
      "Advised students on AI and software development career paths",
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      dateClassName="text-white font-semibold text-sm sm:text-base"
      iconStyle={{ 
        background: "transparent",
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      icon={
        <div className={`logo-container ${experience.company_name === 'TeachTrack AI' ? 'teachtrack' : ''}`}>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-full h-full object-contain'
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div 
            className='w-full h-full flex items-center justify-center text-gray-600 font-bold text-xs hidden'
            style={{ display: 'none' }}
          >
            {experience.company_name}
          </div>
        </div>
      }
    >
      <div className="space-y-2">
        <h3 className='text-white text-[20px] sm:text-[24px] font-bold leading-tight'>
          {experience.title}
        </h3>
        <p className='text-secondary text-[14px] sm:text-[16px] font-semibold leading-tight'>
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[13px] sm:text-[14px] pl-1 tracking-wider leading-relaxed'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 flex flex-col items-center"
    >
      {/* Inject custom styles */}
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      
      <motion.div className="text-center mb-12">
        <p className="text-secondary text-sm uppercase tracking-wider mb-2">
          What I have done so far
        </p>
        <h2 className="text-white text-3xl sm:text-4xl font-bold">
          Work Experience.
        </h2>
      </motion.div>

      <div className='w-full max-w-6xl mx-auto'>
        <VerticalTimeline lineColor="#232631">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </motion.div>
  );
};

export default Experience;
