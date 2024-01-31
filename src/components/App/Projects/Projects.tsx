import { Button, Card, CustomFlowbiteTheme } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';

import projects from '../../../data/projects';

import './Projects.scss';

export default function Projects() {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const customTheme: CustomFlowbiteTheme['button'] = {
    size: {
      xs: 'text-xs px-2 py-1',
      sm: 'text-sm px-3 py-1.5',
      md: 'text-sm px-4 py-2',
      lg: 'text-base px-5 py-2.5',
      xl: 'text-base px-6 py-3',
    },
  };

  useEffect(() => {
    if (cardRef.current == null) {
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

    observer.observe(cardRef.current);
  }, [isActive]);

  const items = projects.projects.map((projet) => (
    <a
      href={projet.url}
      target="blank"
      key={projet.nom}
      className="project-link"
    >
      <Card
        className="project-card bg-secondary-800"
        imgAlt="Project card"
        imgSrc={projet.image}
      >
        <div className="project-card__content">
          <h5 className="project-card__title text-primary-50">{projet.nom}</h5>
          <p className="project-card__description text-primary-50">
            {projet.description}
          </p>
          <div className="project-card__buttons">
            {projet.languages?.map((language) => (
              <Button
                theme={customTheme}
                size="xl"
                key={language}
                className="button-element bg-secondary-300"
              >
                {language}
              </Button>
            ))}
          </div>
        </div>
      </Card>
    </a>
  ));

  return (
    <div className="projects" id="projects" ref={cardRef}>
      <h2 className="projects-title text-primary-50">Projects</h2>
      <div
        className={
          isActive
            ? 'projects-contener projects-contener--active'
            : 'projects-contener'
        }
      >
        {items}
      </div>
    </div>
  );
}
