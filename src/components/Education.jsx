import { educationData } from './experiences/ExperiencesData';
import './Education.css';

const Education = () => {
  return (
    <div className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-content">
        {educationData.map((item, index) => (
          <div key={index} className="education-card">
            <div className="education-header">
              <h3 className="education-title">{item.title}</h3>
              <div className="education-subtitle-container">
                <i><span className="education-subtitle">{item.subtitle}</span></i>
                <i><span className="education-date">{item.date}</span></i>
              </div>
            </div>
            <div className="education-details">
              <p className="education-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education; 