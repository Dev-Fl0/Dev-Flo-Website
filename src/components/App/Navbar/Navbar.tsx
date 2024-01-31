import { useEffect, useRef, useState } from 'react';

import './Navbar.scss';

import { FiAlignJustify } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';
import { FaArrowUp } from 'react-icons/fa';
import logo from '../../../assets/images/Dev-Fl0-logo.ico';

export default function Navbar() {
  const [buttonIsClicked, setButtonIsClicked] = useState(false);
  const [linkIsClicked, setLinkIsClicked] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    setButtonIsClicked(!buttonIsClicked);
    setLinkIsClicked(false);
  };

  const handleLinkClick = () => {
    setButtonIsClicked(!buttonIsClicked);
    setLinkIsClicked(!linkIsClicked);
  };

  const handleArrowClick = () => {};

  useEffect(() => {
    if (navbarRef.current == null) {
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setShowArrow(false);
      }
      if (!entries[0].isIntersecting) {
        setShowArrow(true);
      }
    });

    observer.observe(navbarRef.current);
  }, [showArrow]);

  return (
    <div
      id="navbar"
      className={buttonIsClicked ? 'navbar navbar--clicked' : 'navbar'}
      ref={navbarRef}
    >
      <img src={logo} alt="Dev-Fl0-logo" className="navbar-image" />
      <div className="navbar-menu">
        <button type="button" className="navbar-button" onClick={handleClick}>
          {buttonIsClicked ? (
            <RxCross1 className="navbar-button__logo text-primary-50 " />
          ) : (
            <FiAlignJustify className="navbar-button__logo text-primary-50 " />
          )}
        </button>
        <ul className="navbar-list text-primary-50">
          <li className="navbar-list__item">
            <a
              href="/#skills"
              className=" navbar-list__item-link"
              onClick={handleLinkClick}
            >
              Skills
            </a>
          </li>
          <li className="navbar-list__item">
            <a
              href="/#projects"
              className=" navbar-list__item-link"
              onClick={handleLinkClick}
            >
              Projects
            </a>
          </li>
          <li className="navbar-list__item">
            <a
              href="/#course"
              className=" navbar-list__item-link"
              onClick={handleLinkClick}
            >
              Course
            </a>
          </li>
          <li className="navbar-list__item">
            <a
              href="/#contact"
              className=" navbar-list__item-link"
              onClick={handleLinkClick}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      {showArrow && (
        <a
          href="/#navbar"
          className=" navbar-list__item-link"
          onClick={handleArrowClick}
        >
          <FaArrowUp className="arrow-logo text-primary-50" />
        </a>
      )}
    </div>
  );
}
