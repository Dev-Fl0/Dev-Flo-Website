import React from 'react';

import './Navbar.scss';
import logo from '../../../assets/images/Dev-Fl0-logo.ico';

export default function Navbar() {
  return (
    <div className="navbar items-center md:flex py-4 px-4">
      <ul className="navbar-list text-primary-50 flex items-baseline gap-6">
        <img src={logo} alt="Dev-Fl0-logo" className=" w-6 h-6 mr-auto" />
        <li className="navbar-list__item hidden sm:block">
          <a href="/#skills" className="text-base">
            Skills
          </a>
        </li>
        <li className="navbar-list__item hidden sm:block">
          <a href="/#projects" className="text-base">
            Projects
          </a>
        </li>
        <li className="navbar-list__item hidden sm:block">
          <a href="/#course" className="text-base">
            Course
          </a>
        </li>
        <li className="navbar-list__item hidden sm:block">
          <a href="/#contact" className="text-base">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
