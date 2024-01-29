import { useEffect, useRef, useState } from 'react';
import skills from '../../../data/skills';

import './Skills.scss';

export default function Skills() {
  const [isActive, setIsActive] = useState(false);

  const skillRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
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
    <ul key={item.nom} className="flex flex-col gap-2 mt-4" ref={skillRef}>
      <span className="">
        <li
          className={
            isActive
              ? 'flex items-center gap-2 text-lg skill-bg-active'
              : 'flex items-center gap-2 text-lg skill-bg'
          }
        >
          <span>
            <img
              src={item.url}
              alt="logo"
              width={25}
              height={25}
              className="skill-logo"
            />
          </span>
          <span className="font-bold skill-name">{item.nom}</span>
        </li>
      </span>
    </ul>
  ));

  const itemsBack = skills.techno.techno_back.map((item) => (
    <ul key={item.nom} className="flex flex-col gap-2 mt-4" ref={skillRef}>
      <span className="">
        <li
          className={
            isActive
              ? 'flex items-center gap-2 text-lg skill-bg-active'
              : 'flex items-center gap-2 text-lg skill-bg'
          }
        >
          <span>
            <img
              src={item.url}
              alt="logo"
              width={25}
              height={25}
              className="skill-logo"
            />
          </span>
          <span className="font-bold  skill-name">{item.nom}</span>
        </li>
      </span>
    </ul>
  ));

  const itemsOther = skills.techno.other.map((item) => (
    <ul key={item.nom} className="flex flex-col gap-2 mt-4" ref={skillRef}>
      <span className="">
        <li
          className={
            isActive
              ? 'flex items-center gap-2 text-lg skill-bg-active'
              : 'flex items-center gap-2 text-lg skill-bg'
          }
        >
          <span>
            <img
              src={item.url}
              alt="logo"
              width={25}
              height={25}
              className="skill-logo"
            />
          </span>
          <span className="font-bold skill-name">{item.nom}</span>
        </li>
      </span>
    </ul>
  ));

  return (
    <div className="w-full skills">
      <h2
        id="skills"
        className="text-primary-50 mb-8 sm:mb-20 text-4xl text-center font-extrabold"
      >
        Skills
      </h2>
      <div className="flex justify-between">
        <div>
          <h3 className="text-2xl font-bold text-primary-50">Front-end</h3>
          {itemsFront}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-primary-50">Back-end</h3>
          {itemsBack}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-primary-50">Other</h3>
          {itemsOther}
        </div>
      </div>
    </div>
  );
}
