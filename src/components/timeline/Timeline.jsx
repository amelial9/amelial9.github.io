import { timelineData } from './TimelineData';
import './Timeline.css';

const Timeline = () => {
  return (
    <div className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-grid">
        {timelineData.map((item, index) => (
          <div key={index} className="experience-card">
            <div className="experience-date">{item.date}</div>
            <h3 className="experience-title">{item.title}</h3>
            <h4 className="experience-subtitle">{item.subtitle}</h4>
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

export default Timeline; 