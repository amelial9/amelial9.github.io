import { experiencesData } from './ExperiencesData';
import './Experiences.css';

const Experiences = () => {
  return (
    <div className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-grid">
        {experiencesData.map((item, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div className="experience-logo">
                <img src={item.logo} alt={`${item.subtitle} logo`} />
              </div>
              <div className="experience-info">
                <div className="experience-date">{item.date}</div>
                <h3 className="experience-title">{item.title}</h3>
                <h4 className="experience-subtitle">{item.subtitle}</h4>
              </div>
            </div>
            <p className="experience-description">{item.description}</p>
            {item.skills.length > 0 && (
              <div className="skills">
                {item.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences; 