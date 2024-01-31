import { BsBriefcaseFill } from 'react-icons/bs';
import { MdSchool } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './Courses.scss';

export default function Course() {
  return (
    <div className="course" id="course">
      <h2 className="course-title text-primary-50">Course</h2>
      <div className="course-content">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderRadius: '1rem',
              background: 'linear-gradient(to right, #1b2e98, #594de0)',
              color: '#e9f5fb',
            }}
            contentArrowStyle={{ borderRight: '10px solid  #89d1eb' }}
            date="September 2023"
            iconStyle={{ background: '#2c1fb2', color: '#e9f5fb' }}
            icon={<BsBriefcaseFill />}
          >
            <h3 className="vertical-timeline-element-title timeline-title">
              LEAD DEV BACK-END
            </h3>
            <h4 className="vertical-timeline-element-subtitle timeline-subtitle">
              Online work
            </h4>
            <p className="timeline-description">
              Immo&rsquo;Pros - Property management application real estate
              prospecting.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderRadius: '1rem',
              background: 'linear-gradient(to right, #1b2e98, #594de0)',
              color: '#e9f5fb',
            }}
            contentArrowStyle={{ borderRight: '10px solid  #89d1eb' }}
            date="May 2023"
            iconStyle={{ background: '#2c1fb2', color: '#e9f5fb' }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title timeline-title">
              web & mobile web developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle timeline-subtitle">
              Online school
            </h4>
            <p className="timeline-description">
              O&rsquo;Clock School Intensive training 798 hours. Title RNCP lvl
              5 (bac + 2).
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{
              background: 'linear-gradient(to right, #89d1eb, #594de0)',
              color: '#fff',
            }}
            icon={<FaStar />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}
