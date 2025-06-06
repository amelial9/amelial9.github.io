import { useState } from 'react';
import './Projects.css';
import { developmentProjects, prototypeProjects } from './ProjectData';

import githubIcon from '../../assets/githublink.svg';
import linkIcon from '../../assets/link.svg';

function ProjectLinks({ project }) {
  return (
    <div className="project-links">
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
          <img src={githubIcon} alt="GitHub" />
        </a>
      )}
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
          <img src={linkIcon} alt="Live Demo" />
        </a>
      )}
      {project.presentation && (
        <a href={project.presentation} target="_blank" rel="noopener noreferrer" className="project-link">
          <span>Presentation</span>
        </a>
      )}
    </div>
  );
}

function ProjectCarousel({ projects, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="project-carousel-section">
      <h2>{title}</h2>
      <div className="projects-carousel">
        <button className="nav-button prev" onClick={prevProject}>
          ←
        </button>
        <div className="project-card">
          <img src={projects[currentIndex].image} alt={projects[currentIndex].title} />
          <h3>{projects[currentIndex].title}</h3>
          <p>{projects[currentIndex].description}</p>
          <ProjectLinks project={projects[currentIndex]} />
        </div>
        <button className="nav-button next" onClick={nextProject}>
          →
        </button>
      </div>
      <div className="project-dots">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects-section">
      <ProjectCarousel 
        projects={developmentProjects} 
        title="💻 Development Projects" 
      />
      <div className="section-divider"></div>
      <ProjectCarousel 
        projects={prototypeProjects} 
        title="🖌️ Prototypes in the Wild" 
      />
    </div>
  );
}

export default Projects; 