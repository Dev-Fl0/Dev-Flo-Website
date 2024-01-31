import ContactLink from '../Contact/ContactLink';
import photo from '../../../assets/images/profil.jpg';

import './Header.scss';

export default function Header() {
  return (
    <div id="header" className="header">
      <div className="header-div">
        <div className="header-div__content">
          <p className="header-hey font-bold ">Hey there! I&apos;m -</p>
          <h1 className="header-title font-bold">Florian WAUTHIER</h1>
          <p className="header-description text-secondary-50">
            Web & mobile web developer
          </p>
          <div className="header-div__content__link">
            <ContactLink />
          </div>
        </div>
        <img
          src={photo}
          alt="Face of Florian"
          loading="lazy"
          className="header-div-image"
        />
      </div>
    </div>
  );
}
