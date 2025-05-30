import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from './TimelineElement';
import { timelineData } from './TimelineData';

const Timeline = () => {
  return (
    <VerticalTimeline>
      {timelineData.map((item, index) => (
        <TimelineElement
          key={index}
          date={item.date}
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
          skills={item.skills}
        />
      ))}

    </VerticalTimeline>
  );
};

export default Timeline; 