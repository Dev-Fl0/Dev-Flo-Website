import React from 'react';

import photo from '../../../assets/images/profil.jpg';

import './Header.scss';
import ContactLink from '../Contact/ContactLink';

export default function Header() {
  return (
    <div>
      <div className="header max-w-6x1 m-auto sm:justify-between  items-center gap-44 flex flex-raw min-h-96">
        <div className="header-div flex flex-col gap-2 w-full items-start justify-self-end">
          <p className="header-hey font-bold">Hey there! I&apos;m -</p>
          <h1 className="header-title font-bold text-5xl">Florian WAUTHIER</h1>
          <p className=" text-secondary-50">Web & mobile web developer</p>
          <ContactLink />
        </div>
        <img
          src={photo}
          alt="Face of Florian"
          loading="lazy"
          className="rounded-full max-h-40 max-w-40 min-h-40 min-w-40 "
        />
      </div>
    </div>
  );
}
