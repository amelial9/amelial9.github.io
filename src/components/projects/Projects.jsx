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
  return (
    <div className='project-carousel-sec'>
      <div className="section-title-wrapper">
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="projects-scroll-container">
        {projects.map((project, projectIndex) => (
          <div key={projectIndex} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 style={{ height: '6rem' }}>
              {project.title}
              </h3>
            {project.tech && project.tech.length > 0 && (
              <div className="tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={`${projectIndex}-${techIndex}`} className="tech-tag">{tech}</span>
                ))}
              </div>
            )}
            <p>{project.description}</p>
            <ProjectLinks project={project} />
          </div>
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
        title="Development Projects"
      />
      <div className="section-divider">
        <div className="divider-line-wavy"></div>
      </div>
      <ProjectCarousel 
        projects={prototypeProjects} 
        title="Prototypes in the Wild"
      />
    </div>
  );
}

export default Projects; 