import { useEffect, useRef, useState } from 'react';
import skills from '../../../data/skills';

import './Skills.scss';

export default function Skills() {
  const [isActive, setIsActive] = useState(false);

  const skillRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (skillRef.current == null) {
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsActive(true);
      }
      if (!entries[0].isIntersecting) {
        setIsActive(false);
      }
    });

    observer.observe(skillRef.current);
  }, [isActive]);

  const itemsFront = skills.techno.techno_front.map((item) => (
    <ul key={item.nom} className="skills-list">
      <span className="">
        <li className="skill-items">
          <span>
            <img src={item.url} alt="logo" className="skill-logo" />
          </span>
          <span className="skill-name">{item.nom}</span>
        </li>
      </span>
    </ul>
  ));

  const itemsBack = skills.techno.techno_back.map((item) => (
    <ul key={item.nom} className="skills-list">
      <span className="">
        <li className="skill-items">
          <span>
            <img src={item.url} alt="logo" className="skill-logo" />
          </span>
          <span className="skill-name">{item.nom}</span>
        </li>
      </span>
    </ul>
  ));

  const itemsOther = skills.techno.other.map((item) => (
    <ul key={item.nom} className="skills-list">
      <span className="">
        <li className="skill-items">
          <span>
            <img src={item.url} alt="logo" className="skill-logo" />
          </span>
          <span className="skill-name">{item.nom}</span>
        </li>
      </span>
    </ul>
  ));

  return (
    <div id="skills" className="skills">
      <h2 className="skills-title text-primary-50">Skills</h2>
      <div
        className={
          isActive
            ? 'skills-conteneur skills-conteneur--active'
            : 'skills-conteneur'
        }
        ref={skillRef}
      >
        <div className="skill-conteneur">
          <h3 className="skills-subtitle text-primary-50">Front-end</h3>
          {itemsFront}
        </div>
        <div className="skill-conteneur">
          <h3 className="skills-subtitle text-primary-50">Back-end</h3>
          {itemsBack}
        </div>
        <div className="skill-conteneur">
          <h3
            className="skills-subtitle
           text-primary-50"
          >
            Other
          </h3>
          {itemsOther}
        </div>
      </div>
    </div>
  );
}
