import React, { useState } from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import { projects } from "../constants";
import CTA from '../components/CTA';

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null); 

  const handleMouseMove = (e, index) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setHoveredCard({ index, position: `${x}% ${y}%` });
  };

  const handleMouseLeave = () => {
    setHoveredCard(null); 
  };

  return (
    <section className="max-container">
      <h1 className="head-text">
        Work{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Portfolio
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-400">
        <p className="text-slate-400 leading-relaxed">
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. Many of them are open-source, so if
          you come across something that piques your interest, feel free to
          explore the codebase and contribute your ideas for further enhancements.
          Your collaboration is highly valued!
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="lg:w-[400px] w-full relative rounded-lg p-8 overflow-hidden"
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundColor: "#27272a",
              backgroundImage:
                hoveredCard && hoveredCard.index === index
                  ? `radial-gradient(circle at ${hoveredCard.position}, rgba(99, 102, 241, 0.4), transparent 50%)`
                  : "none",
            }}
          >
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold btn flex items-center gap-2"
                >
                  Live Link
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain filter invert"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;
