import './HomeResearch.css';
import researchPdf from '../assets/Undergrad Research Symposium 2025.pdf';

const HomeResearch = () => {
  return (
    <div className="research-section">
      <h2 className="section-title">Research</h2>
      <div className="research-content">
        <div className="research-focus">
          <p className="research-focus-text">
            I'm currently a Research Assistant at{' '}
            <a href="https://goldenneurolab.com/" target="_blank" rel="noopener noreferrer" className="research-focus-link">
              Golden Lab
            </a>
            , where I work on applying machine learning to classify behavior from physiological time-series data. My work focuses on how we can learn behavioral patterns from noisy real-world biological signals.
          </p>
        </div>
        <div className="research-pdf-container">
          <a 
            href={researchPdf} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="pdf-subheader"
          >
            Presentation: 2025 Undergraduate Research Symposium
          </a>
          <div className="pdf-wrapper">
            <div className="pdf-decorative-frame">
              <iframe
                src={researchPdf}
                className="research-pdf"
                title="Undergrad Research Symposium 2025"
              />
            </div>
          </div>
          <p className="research-more-text">More research stuff coming once published :D</p>
        </div>
      </div>
    </div>
  );
};

export default HomeResearch;
