import { Button, Card } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';

import projects from '../../../data/projects';

import './Projects.scss';

export default function Projects() {
  const [isActive, setIsActive] = useState(false);

  const cardRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
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
      className={isActive ? 'project-link-active' : 'project-link'}
      ref={cardRef}
    >
      <Card
        className="max-w-xs bg-secondary-800 project-card"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={projet.image}
      >
        <h5 className="text-2xl font-bold tracking-tight text-primary-50 dark:text-white">
          {projet.nom}
        </h5>
        <p className="font-normal text-lg text-primary-50">
          {projet.description}
        </p>
        <div className="button flex flex-wrap  justify-start gap-4">
          {projet.languages?.map((language) => (
            <Button
              key={language}
              className="button-element bg-secondary-300 max-w-20"
            >
              {language}
            </Button>
          ))}
        </div>
      </Card>
    </a>
  ));

  return (
    <div className="w-full projects">
      <h2
        id="projects"
        className="text-primary-50 mb-8 sm:mb-20 text-4xl text-center font-extrabold"
      >
        Projects
      </h2>
      <div className="lg:flex-col sm:flex-raw flex flex-wrap justify-center gap-8">
        {items}
      </div>
    </div>
  );
}
