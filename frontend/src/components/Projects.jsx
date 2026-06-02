import React from "react";
import { projects } from "../constants/portfolioData";

function Projects() {
  return (
    <section id="projects" className="py-20 px-[6%] bg-bg">
      <div className="projects-wrap max-w-[1200px] mx-auto">
        <div className="proj-header fade-up text-center mb-12">
          <div className="sec-title text-[clamp(1.8rem,4vw,2.6rem)] font-[800] mb-4">
            Projects
          </div>
          <p className="text-muted text-[.9rem] max-w-[560px] mx-auto leading-[1.7]">
            Full-stack builds and interface clones focused on practical MERN
            workflows, real-time communication, and clean React UI.
          </p>
          <div className="proj-divider mx-auto mt-5 w-[3px] h-10 bg-coral rounded"></div>
        </div>
        <div className="projects-list flex flex-col gap-16">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`proj-row fade-up grid lg:grid-cols-[.92fr_1.08fr] gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className="proj-info">
                <div>
                  <div className="text-[.72rem] uppercase tracking-[2px] text-coral font-[700] mb-2">
                    {project.subtitle}
                  </div>
                  <div className="proj-name text-[1.45rem] font-[800] mb-3">
                    {project.name}
                  </div>
                </div>
                <div className="proj-tags2 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="ptag bg-bg3 border border-[var(--border)] text-muted text-[.73rem] px-2 py-1 rounded-full transition-colors duration-300 hover:border-coral hover:text-coral"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="proj-desc text-muted text-[.9rem] leading-[1.8]">
                  {project.desc}
                </p>
                <div className="proj-btns flex items-center gap-6 mt-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-coral text-white px-6 py-2.5 rounded-[4px] text-[.85rem] font-[600] transition-all duration-300 hover:bg-coral2 hover:-translate-y-0.5 no-underline block"
                  >
                    View Github
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text hover:text-coral text-[.88rem] font-[600] transition-colors duration-200 flex items-center gap-1 border-b border-coral pb-0.5 no-underline"
                  >
                    View project <span className="text-[.95rem] leading-none">↗</span>
                  </a>
                </div>
              </div>
              <div
                className={`proj-screen rounded-[8px] overflow-hidden border border-[var(--border)] bg-card transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,.4)] hover:-translate-y-1 hover:shadow-heavy ${index % 2 === 1 ? "lg:order-first" : ""}`}
              >
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
