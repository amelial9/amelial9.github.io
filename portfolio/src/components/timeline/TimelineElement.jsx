import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import WorkIcon from '@mui/icons-material/Work';

const TimelineElement = ({ 
  date,
  title,
  subtitle,
  description,
  skills = [],
  timeInfo
}) => {
  const iconStyle = {
    background: 'lightgray',
    color: '#473C35'
  };
  const contentStyle = {
    background: 'lightgray',
    color: '#473C35'
  };
  const contentArrowStyle = {
    borderRight: '7px solid lightgray'
  };

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={contentStyle}
      contentArrowStyle={contentArrowStyle}
      date={date}
      iconStyle={iconStyle}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <br></br>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      <p>{description}</p>
      {skills.length > 0 && (
        <div className="skills">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      )}
    </VerticalTimelineElement>
  );
};

export default TimelineElement; 