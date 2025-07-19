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
                <h4 className="education-subtitle">{item.subtitle}</h4>
                {/* <span className="education-date">{item.date}</span> */}
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